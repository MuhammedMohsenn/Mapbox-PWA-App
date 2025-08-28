'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

// Tree Mock data
const mockTreeData = {
  id: 3173094750423,
  name: 'Oak Tree',
  species: 'Ulmus hollandica "Commelin"',
  dbh: '38.5 cm',
  height: '16.5 m',
  condition: 'fair',
  crownHeight: '11.92 m',
  coordinates: [4.911017426046063, 52.37129967550129],
  plantedDate: 'January 18, 2018',
  lastSurveyed: 'November 16, 2018',
  healthStatus: 'Excellent',
  notes: 'This tree is part of the Urban National Summit initiative.',
}

export default function TreeDetailPage() {
  //   const params = useParams()
  const router = useRouter()
  const mapContainer = useRef(null)
  const map = useRef(null)
  const popupRef = useRef(null)
  const [tree, setTree] = useState(mockTreeData)

  useEffect(() => {
    // For now, we're using mock data
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: tree.coordinates,
      zoom: 19,
      interactive: true,
    })

    // Wait for the map to load
    map.current.on('load', () => {
      // Add a marker for the tree
      const marker = new mapboxgl.Marker().setLngLat(tree.coordinates).addTo(map.current)

      // Create and add the popup
      popupRef.current = new mapboxgl.Popup({
        offset: 30,
        className: 'tree-details-popup',
        closeOnClick: false,
        closeButton: false,
      })
        .setLngLat(tree.coordinates)
        .setHTML(
          `
    <div class="tree-popup-content">
      <div class="tree-popup-header">
        <img src="/tree-icon.png" alt="Tree" class="tree-icon" />
      </div>
      <div class="tree-popup-body">
        <p>Species: ${tree.species}</p>
        <p>DBH: ${tree.dbh}</p>
        <p>Height: ${tree.height}</p>
        <p>Condition: ${tree.condition}</p>
        <p>Crown Height: ${tree.crownHeight}</p>
        <p class="coordinates">[${tree.coordinates[1]}, ${tree.coordinates[0]}]</p>
      </div>
    </div>
        `
        )
        .addTo(map.current)
    })

    return () => {
      if (popupRef.current) popupRef.current.remove()
      if (map.current) map.current.remove()
    }
  }, [tree.coordinates])

  return (
    <div className="min-h-screen bg-gray-50 p-3">
      {/* Header with back button */}
      <div className="mb-2">
        <button
          onClick={() => router.push('/')}
          className="flex items-center justify-center gap-x-1 font-light border border-gray-200 rounded-lg p-2 mb-2 cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
            <path
              fill="#000"
              d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 7.35q3.05-2.8 4.525-5.087T18 10.2q0-2.725-1.737-4.462T12 4T7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35M12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22m0-12"
            />
          </svg>
          Back to Map
        </button>
      </div>

      {/* Mini map section with popup */}
      <div className="bg-white rounded-lg shadow-md mb-6">
        <div ref={mapContainer} className="h-[29rem] rounded-md" />
      </div>

      {/* New Chat button */}
      <div className="bg-white rounded-lg shadow-md w-full">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600 flex items-center justify-center gap-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
            <path
              fill="#fff"
              d="m6 18l-2.3 2.3q-.475.475-1.088.213T2 19.575V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm1-4h6q.425 0 .713-.288T14 13t-.288-.712T13 12H7q-.425 0-.712.288T6 13t.288.713T7 14m0-3h10q.425 0 .713-.288T18 10t-.288-.712T17 9H7q-.425 0-.712.288T6 10t.288.713T7 11m0-3h10q.425 0 .713-.288T18 7t-.288-.712T17 6H7q-.425 0-.712.288T6 7t.288.713T7 8"
            />
          </svg>
          New Chat
        </button>
      </div>

      {/* Custom styles for the popup */}
      <style jsx global>{`
        .tree-details-popup .mapboxgl-popup-content {
          padding: 0;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          max-width: 280px;
        }

        .tree-popup-content {
          padding: 7px 15px;
          display: flex;
          align-items: center;
        }

        .tree-popup-header {
          background-color: #d8c2ab;
          border-radius: 50%;
          padding: 12px;
          display: flex;
          align-items: center;
          margin-right: 5px;
        }

        .tree-popup-content p {
          margin: 2px 0;
          line-height: 1.4;
        }

        .tree-popup-content .coordinates {
          margin-top: 12px;
          font-size: 12px;
          color: #666;
          font-family: monospace;
        }

        .mapboxgl-popup-tip {
          border-top-color: #4caf50;
        }
      `}</style>
    </div>
  )
}
