export async function fetchTreeData(bbox) {
  console.log('Fetching tree data for bbox:', bbox)

  const overpassQuery = `
    [out:json];
    node["natural"="tree"](${bbox});
    out;
  `

  try {
    const response = await fetch(`https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`)
    const data = await response.json()
    console.log('Tree data received:', data.elements?.length, 'trees')

    // Convert to GeoJSON format
    return {
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
  } catch (error) {
    console.error('Error fetching tree data:', error)
    return {
      type: 'FeatureCollection',
      features: [],
    }
  }
}
