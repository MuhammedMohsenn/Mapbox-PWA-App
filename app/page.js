import MapComponent from '@/components/MapComponent'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="relative">
      <div className="h-screen w-full">
        <MapComponent />
      </div>

      <div className="flex flex-col absolute bottom-0 left-0 right-0 px-4 py-[17px] bg-white shadow-lg">
        <h1 className="text-lg text-center">Select a tree on the map to start to chat</h1>
        <a
          className="w-full border border-gray-300 text-gray-500 px-4 py-2 rounded-md text-center flex items-center justify-center gap-2"
          href="/addnewtree"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-circle-plus w-4 h-4"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M8 12h8"></path>
            <path d="M12 8v8"></path>
          </svg>
          <span className="text-sm">Add New Tree</span>
        </a>
      </div>
    </main>
  )
}
