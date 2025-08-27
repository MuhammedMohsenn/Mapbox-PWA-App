import { create } from 'zustand'

const useMapStore = create((set) => ({
  viewState: {
    longitude: 4.911211,
    latitude: 52.371114,
    zoom: 17,
    pitch: 60,
  },
  setViewState: (viewState) => set({ viewState }),

  mapStyle: 'mapbox://styles/mapbox/outdoors-v12',
  setMapStyle: (style) => set({ mapStyle: style }),
}))

export default useMapStore
