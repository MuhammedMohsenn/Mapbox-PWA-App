'use client'
import { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { fetchTreeData } from '@/lib/treeData'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

export default function TreeMap() {
  const mapContainer = useRef(null)
  const map = useRef(null)

  useEffect(() => {
    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v12',
      center: [4.911211, 52.371114],
      zoom: 17,
      pitch: 500,
    })

    // Load tree data after map initializes
    map.current.on('load', async () => {
      // Fetch tree data
      const bounds = map.current.getBounds()
      const bbox = `${bounds.getSouth()},${bounds.getWest()},${bounds.getNorth()},${bounds.getEast()}`
      const treeData = await fetchTreeData(bbox)

      // Add tree source
      map.current.addSource('trees', {
        type: 'geojson',
        data: treeData,
      })

      // 1. LOAD TREE ICON IMAGE
      map.current.loadImage('/tree-icon.png', (error, image) => {
        if (error) throw error

        // Add the image to the map style
        if (!map.current.hasImage('tree-icon')) {
          map.current.addImage('tree-icon', image)
        }

        // 2. ADD SYMBOL LAYER WITH TREE ICONS
        map.current.addLayer({
          id: 'tree-icons',
          type: 'symbol',
          source: 'trees',
          layout: {
            'icon-image': 'tree-icon',
            'icon-size': 0.1,
            'icon-allow-overlap': true,
          },
        })

        // 3. ADD CLICK INTERACTIONS FOR TREE ICONS
        map.current.on('click', 'tree-icons', (e) => {
          const tree = e.features[0]
          new mapboxgl.Popup()
            .setLngLat(tree.geometry.coordinates)
            .setHTML(
              `
              <div class="p-2 text-black">
                <h3 class="font-bold">Tree Information</h3>
                <p>Species: ${tree.properties.species}</p>
                <p>Height: ${tree.properties.height}</p>
                <p>ID: ${tree.properties.id}</p>
              </div>
            `
            )
            .addTo(map.current)
        })

        // 4. ADD HOVER EFFECTS
        map.current.on('mouseenter', 'tree-icons', () => {
          map.current.getCanvas().style.cursor = 'pointer'
        })
        map.current.on('mouseleave', 'tree-icons', () => {
          map.current.getCanvas().style.cursor = ''
        })
      })

      map.current.addLayer({
        id: 'tree-circles',
        type: 'circle',
        source: 'trees',
        paint: {
          'circle-radius': 6,
          'circle-color': '#4CAF50',
          'circle-stroke-width': 1,
          'circle-stroke-color': '#ffffff',
          'circle-opacity': 0.8,
        },
        // Make this layer invisible by default
        layout: {
          visibility: 'none',
        },
      })
    })

    return () => map.current?.remove()
  }, [])

  return <div ref={mapContainer} style={{ width: '100vw', height: '100vh' }} />
}
