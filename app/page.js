import MapComponent from '@/components/MapComponent'

export default function Home() {
  return (
    <main className="relative">
      <div className="h-screen w-full">
        <MapComponent />
      </div>

      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 w-11/12 max-w-md text-center text-black bg-white bg-opacity-90 p-4 rounded-lg shadow-md">
        <h1 className="text-xl font-bold">Mapbox PWA</h1>
        <p className="text-[1rem]">Select a tree on the map to see it&apos;s data!</p>
      </div>
    </main>
  )
}
