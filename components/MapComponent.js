'use client'
import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useRouter } from 'next/navigation'
import useTreeStore from '@/stores/treeStore'
import LoadingOverlay from './LoadingOverlay'
import ErrorDisplay from './ErrorDisplay'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

export default function TreeMap() {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const router = useRouter()
  const { fetchTrees, isLoading, error } = useTreeStore()

  useEffect(() => {
    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [4.911211, 52.371114],
      zoom: 18,
      pitch: 700,
    })

    // Load tree data after map initializes
    map.current.on('load', async () => {
      const bounds = map.current.getBounds()
      const bbox = `${bounds.getSouth()},${bounds.getWest()},${bounds.getNorth()},${bounds.getEast()}`
      const treeData = await fetchTrees(bbox)

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

        // Tree click handling - Navigate to tree details page
        map.current.on('click', 'tree-icons', (e) => {
          const tree = e.features[0]
          router.push(`/tree/${tree.properties.id}`)
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
  }, [fetchTrees, router])

  const handleRetry = () => {
    const bounds = map.current.getBounds()
    const bbox = `${bounds.getSouth()},${bounds.getWest()},${bounds.getNorth()},${bounds.getEast()}`
    fetchTrees(bbox)
  }

  return (
    <div className="relative">
      <div ref={mapContainer} style={{ width: '100vw', height: '89vh' }} />

      {/* Show loading overlay when trees are loading */}
      {isLoading && <LoadingOverlay />}

      {/* Show error message if there's an error */}
      {error && <ErrorDisplay error={error} onRetry={handleRetry} />}
    </div>
  )
}
