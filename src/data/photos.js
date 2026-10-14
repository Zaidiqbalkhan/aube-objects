// License: Unsplash License (https://unsplash.com/license).
// Each photo is an editorial stand-in for the fictional AUBE products, not a photograph of a real AUBE item.
// Keep remote URLs here so imagery can be replaced with licensed in-house assets later.
export const photos = {
  hero: 'photo-1612196808214-b8e1d6145a8c',
  studio: 'photo-1772487488987-425a4a0c1499',
  shelf: 'photo-1759847365004-8c17665602a6',
  roundVessel: 'photo-1580485978320-cc2bc7dcf569',
  sculptural: 'photo-1520408222757-6f9f95d87d5d',
  pairMugs: 'photo-1525972757199-cf2ad7cc4f4b',
  candle: 'photo-1607200711767-5f91ad860ae0',
  shelfMugs: 'photo-1536936812504-0e77dc3f0b40',
  lavender: 'photo-1623096765281-9c2a43de3ec8',
  morningMugs: 'photo-1542556398-95fb5b9f9b48',
  linen: 'photo-1581606559586-abc4b010ad31',
  paleVessel: 'photo-1617076678834-b804507ebf61',
  smallBowl: 'photo-1677694666947-61f5bf341ee6',
}
export function photo(key, width = 1100) {
  const id = photos[key] || photos.roundVessel
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`
}
