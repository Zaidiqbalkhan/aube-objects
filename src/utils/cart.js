import {getProduct,available} from '../data/products.js'
import {cartKey} from './format.js'

export function addCartLine(items,id,color,quantity){
 const product=getProduct(id),limit=product?available(product,color):0
 if(limit<=0)return items
 const key=cartKey(id,color),count=Math.max(1,Math.floor(Number(quantity)||1))
 if(items.some(item=>item.key===key))return items.map(item=>item.key===key?{...item,quantity:Math.min(limit,item.quantity+count)}:item)
 return [...items,{key,id,color,quantity:Math.min(limit,count)}]
}
export function updateCartQuantity(items,key,quantity){
 return items.map(item=>{
  if(item.key!==key)return item
  const product=getProduct(item.id),max=product?available(product,item.color):1
  return {...item,quantity:Math.max(1,Math.min(Math.floor(Number(quantity)||1),max||1))}
 })
}
export function calculateSubtotal(items){return items.reduce((sum,item)=>sum+(getProduct(item.id)?.price||0)*item.quantity,0)}
