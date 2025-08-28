'use client'

import Image from 'next/image'
import { mockTreeData } from '../tree/[id]/page'
import { useRouter } from 'next/navigation'

export default function ChatPage() {
  const router = useRouter()
  return (
    <div className="flex-1 flex flex-col lg:pl-64 lg:-ml-64 min-h-screen bg-white">
      <div className="text-black top-0 left-0 right-0 backdrop-blur-lg z-40">
        <div className="max-w-3xl mx-auto py-3 sm:py-4 flex items-center justify-between">
          <div className="flex flex-col w-full">
            <div className="flex justify-center sm:text-sm backdrop-blur-lg ">
              <div className="flex flex-col justify-center space-x-2 pb-2 w-full">
                <div className="mb-2" onClick={() => router.push('/')}>
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
                    className="lucide lucide-panel-right-close"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M15 3v18"></path>
                    <path d="m8 9 3 3-3 3"></path>
                  </svg>
                </div>
                <div className="w-full px-4">
                  <div className="w-full h-full">
                    <div className="flex flex-col space-x-2 border border-gray-200 rounded-md p-2">
                      <div className="flex justify-center items-center gap-x-2">
                        <div className="w-auto">
                          <Image
                            alt="GAIA"
                            loading="lazy"
                            width="128"
                            height="128"
                            className="rounded-full"
                            src="/tree-icon.jpg"
                          />
                        </div>
                        <div className="w-[50%]">
                          <p>
                            <span className="text-gray-400 text-xs">Species:</span> Robinia pseudoacacia Semperflorens
                          </p>
                          <p>
                            <span className="text-gray-400 text-xs">DBH:</span> 13.62 cm
                          </p>
                          <p>
                            <span className="text-gray-400 text-xs">Height:</span> 10.5 m
                          </p>
                          <p>
                            <span className="text-gray-400 text-xs">Condition:</span> good
                          </p>
                          <p>
                            <span className="text-xs">Centrum, Amsterdam, Netherlands</span>
                          </p>
                          <p>
                            <span className="text-gray-400 text-xs">Crown Height:</span> 5.19
                          </p>
                        </div>
                      </div>
                      <div className="text-xs">[52.369678674549945, 4.913067458939717]</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto mt-2 space-y-3 sm:space-y-4 p-3 sm:p-4 max-w-3xl mx-auto w-full text-base sm:text-lg pt-16 sm:pt-20">
        <div></div>
      </div>

      <div className="max-w-3xl mx-auto w-full p-3 sm:p-4  rounded-t-4xl bg-[#173a33]">
        <div className="flex space-x-2 border-1 border-[#395751] p-1.5 sm:p-2 rounded-full">
          <input
            className="flex-1 px-3 py-2 sm:p-3 bg-transparent text-gray-200 placeholder-gray-300 focus:outline-none text-base sm:text-lg"
            placeholder='Try asking: "Where do Salix spp. usually grow?"'
          />
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
            className="lucide lucide-arrow-up w-6 h-6 mt-2 mr-2 text-gray-300 rounded-full hover:text-white"
          >
            <path d="m5 12 7-7 7 7"></path>
            <path d="M12 19V5"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}
