import { create } from 'zustand'

const useMapStore = create((set) => ({
  viewState: {
    longitude: 4.911211,
    latitude: 52.371114,
    zoom: 18,
    pitch: 700,
  },
  setViewState: (viewState) => set({ viewState }),

  mapStyle: 'mapbox://styles/mapbox/streets-v12',
  setMapStyle: (style) => set({ mapStyle: style }),
}))

export default useMapStore
