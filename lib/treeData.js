export async function fetchTreeData(bbox) {
  const overpassQuery = `
    [out:json];
    node["natural"="tree"](${bbox});
    out;
  `

  const response = await fetch(`https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`)
  const data = await response.json()

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
}
