import ProductCard from './ProductCard'
export default function ProductGrid({items}){return <div className="product-grid">{items.map(product=><ProductCard key={product.id} product={product}/>)}</div>}
