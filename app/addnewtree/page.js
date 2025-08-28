'use client'

import { useRouter } from 'next/navigation'

export default function TreeDataEntryPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="flex justify-between items-center mb-4">
        <button
          className="flex w-fit items-center space-x-2 bg-white border border-gray-200 hover:bg-[#bb6e47]/90 text-black px-4 py-2 rounded-md"
          onClick={() => router.push('/')}
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
            className="lucide lucide-map-pin w-5 h-5"
          >
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>Back to Map</span>
        </button>
      </div>

      <form className="space-y-4">
        <div className="mb-6">
          <div className="mb-3">
            <label htmlFor="species" className="block text-sm font-medium text-gray-700">
              Species
            </label>
            <input
              type="text"
              className="px-3 mt-1 block w-full rounded-md h-10 border border-gray-300 shadow-sm focus:border-[#bb6e47] focus:ring-[#bb6e47] sm:text-sm"
              placeholder="0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="species" className="block text-sm font-medium text-gray-700">
              DBH (Diameter at Breast Height)
            </label>
            <input
              type="text"
              className="px-3 mt-1 block w-full rounded-md h-10 border border-gray-300 shadow-sm focus:border-[#bb6e47] focus:ring-[#bb6e47] sm:text-sm"
              placeholder="0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="species" className="block text-sm font-medium text-gray-700">
              Height
            </label>
            <input
              type="text"
              className="px-3 mt-1 block w-full rounded-md h-10 border border-gray-300 shadow-sm focus:border-[#bb6e47] focus:ring-[#bb6e47] sm:text-sm"
              placeholder="0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="species" className="block text-sm font-medium text-gray-700">
              Condition
            </label>
            <input
              type="text"
              className="px-3 mt-1 block w-full rounded-md h-10 border border-gray-300 shadow-sm focus:border-[#bb6e47] focus:ring-[#bb6e47] sm:text-sm"
              placeholder="0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="species" className="block text-sm font-medium text-gray-700">
              Cluster ID
            </label>
            <input
              type="text"
              className="px-3 mt-1 block w-full rounded-md h-10 border border-gray-300 shadow-sm focus:border-[#bb6e47] focus:ring-[#bb6e47] sm:text-sm"
              placeholder="0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="species" className="block text-sm font-medium text-gray-700">
              Latitude
            </label>
            <input
              type="text"
              className="px-3 mt-1 block w-full rounded-md h-10 border border-gray-300 shadow-sm focus:border-[#bb6e47] focus:ring-[#bb6e47] sm:text-sm"
              placeholder="0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="species" className="block text-sm font-medium text-gray-700">
              Longitude
            </label>
            <input
              type="text"
              className="px-3 mt-1 block w-full rounded-md h-10 border border-gray-300 shadow-sm focus:border-[#bb6e47] focus:ring-[#bb6e47] sm:text-sm"
              placeholder="0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="species" className="block text-sm font-medium text-gray-700">
              Planted Date
            </label>
            <input
              type="date"
              className="px-3 mt-1 block w-full rounded-md h-10 border border-gray-300 shadow-sm focus:border-[#bb6e47] focus:ring-[#bb6e47] sm:text-sm"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="species" className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              className="px-3 mt-1 block w-full rounded-md h-10 border border-gray-300 shadow-sm focus:border-[#bb6e47] focus:ring-[#bb6e47] sm:text-sm"
              placeholder="0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="species" className="block text-sm font-medium text-gray-700">
              Additional Instructions
            </label>
            <input
              type="text"
              className="px-3 mt-1 block w-full rounded-md h-10 border border-gray-300 shadow-sm focus:border-[#bb6e47] focus:ring-[#bb6e47] sm:text-sm"
              placeholder="0"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center space-x-2 bg-[#bb6e47] hover:bg-[#bb6e47]/90 text-white px-4 py-2 rounded-md disabled:opacity-50"
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
              className="lucide lucide-save w-5 h-5"
            >
              <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
              <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
              <path d="M7 3v4a1 1 0 0 0 1 1h7"></path>
            </svg>
            <span>Create Tree</span>
          </button>
        </div>
      </form>
    </div>
  )
}
