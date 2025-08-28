import { create } from 'zustand'

const useTreeStore = create((set, get) => ({
  selectedTree: null,
  trees: [],
  isLoading: false,
  error: null,

  setSelectedTree: (tree) => set({ selectedTree: tree }),
  clearSelectedTree: () => set({ selectedTree: null }),

  fetchTrees: async (bbox) => {
    set({ isLoading: true, error: null })

    const overpassQuery = `
      [out:json];
      node["natural"="tree"](${bbox});
      out;
    `

    try {
      const response = await fetch(`https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`)
      const data = await response.json()

      const trees = {
        type: 'FeatureCollection',
        features: data.elements.map((tree) => ({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [tree.lon, tree.lat],
          },
          properties: {
            id: tree.id,
            species: tree.tags?.species || 'Unknown tree',
            height: tree.tags?.height || 'N/A',
          },
        })),
      }

      set({ trees, isLoading: false })
      return trees
    } catch (error) {
      console.error('Error fetching tree data:', error)
      set({
        error: 'Failed to load tree data',
        isLoading: false,
        trees: {
          type: 'FeatureCollection',
          features: [],
        },
      })
      return {
        type: 'FeatureCollection',
        features: [],
      }
    }
  },
}))

export default useTreeStore
