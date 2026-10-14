export function filterProducts(items, filters, wishlist = []) {
  const {category='All objects', q='', sort='featured', color='', maxPrice=150, favorites=false, inStock=false} = filters
  return items.filter(p =>
    (category==='All objects'||p.category===category) &&
    (!q||`${p.name} ${p.subtitle} ${p.category} ${p.material}`.toLowerCase().includes(q.toLowerCase())) &&
    p.price<=maxPrice &&
    (!color||p.colors.some(c=>c.id===color)) &&
    (!favorites||wishlist.includes(p.id)) &&
    (!inStock||(color ? (p.stock[color]||0)>0 : Object.values(p.stock).some(stock=>stock>0)))
  ).sort((a,b)=>sort==='price-low'?a.price-b.price:sort==='price-high'?b.price-a.price:sort==='name'?a.name.localeCompare(b.name):Number(b.featured)-Number(a.featured))
}
