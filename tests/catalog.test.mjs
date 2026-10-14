import test from 'node:test'
import assert from 'node:assert/strict'
import {products,available,getProduct} from '../src/data/products.js'
import {filterProducts} from '../src/utils/filterProducts.js'
import {cartKey,money,deliveryEstimate} from '../src/utils/format.js'

test('catalog IDs and options are consistent',()=>{
 assert.ok(products.length>=8)
 assert.equal(new Set(products.map(p=>p.id)).size,products.length)
 for(const p of products){
   assert.ok(p.name&&p.price>0&&p.image&&p.gallery.length>=1)
   for(const color of p.colors)assert.ok(Number.isInteger(available(p,color.id))&&available(p,color.id)>=0)
   assert.equal(getProduct(p.id)?.name,p.name)
 }
})
test('category filters and search respond to actual product fields',()=>{
 assert.ok(filterProducts(products,{category:'Drinkware'}).every(p=>p.category==='Drinkware'))
 assert.ok(filterProducts(products,{q:'vessel'}).length>0)
 assert.equal(filterProducts(products,{q:'does-not-exist'}).length,0)
})
test('price and alphabetical sorting work',()=>{
 const asc=filterProducts(products,{sort:'price-low'}).map(p=>p.price)
 assert.deepEqual(asc,[...asc].sort((a,b)=>a-b))
 const desc=filterProducts(products,{sort:'price-high'}).map(p=>p.price)
 assert.deepEqual(desc,[...desc].sort((a,b)=>b-a))
 const names=filterProducts(products,{sort:'name'}).map(p=>p.name)
 assert.deepEqual(names,[...names].sort((a,b)=>a.localeCompare(b)))
 assert.ok(filterProducts(products,{maxPrice:40}).every(p=>p.price<=40))
})
test('finish, wishlist and finish-specific availability filters work',()=>{
 assert.ok(filterProducts(products,{color:'moss'}).every(p=>p.colors.some(c=>c.id==='moss')))
 assert.ok(filterProducts(products,{color:'moss',inStock:true}).every(p=>p.stock.moss>0))
 assert.deepEqual(filterProducts(products,{favorites:true},['petal-dish']).map(p=>p.id),['petal-dish'])
})
test('sample cart formatting and delivery thresholds work',()=>{
 assert.equal(cartKey('arc-vase','sand'),'arc-vase::sand')
 assert.equal(money(68),'$68')
 assert.equal(deliveryEstimate(149),12)
 assert.equal(deliveryEstimate(150),0)
})

import {addCartLine,updateCartQuantity,calculateSubtotal} from '../src/utils/cart.js'
import {validateCheckout} from '../src/utils/validateCheckout.js'
test('cart line quantities, subtotal and variant identity are consistent',()=>{
 const one=addCartLine([],'arc-vase','chalk',2)
 assert.equal(one[0].quantity,2)
 const two=addCartLine(one,'arc-vase','chalk',3)
 assert.equal(two[0].quantity,5)
 const capped=addCartLine(two,'arc-vase','chalk',99)
 assert.equal(capped[0].quantity,8)
 assert.equal(calculateSubtotal(capped),8*68)
 const other=addCartLine(capped,'arc-vase','sand',1)
 assert.equal(other.length,2)
 assert.equal(calculateSubtotal(other),9*68)
 const adjusted=updateCartQuantity(other,cartKey('arc-vase','sand'),0)
 assert.equal(adjusted[1].quantity,1)
 assert.deepEqual(addCartLine([], 'arc-vase','moss',1),[])
})
test('checkout validation rejects malformed and incomplete details',()=>{
 assert.ok('email' in validateCheckout({}))
 const good={email:'demo@example.com',first:'Jane',last:'Sample',street:'123 Example Street',city:'Sampletown',region:'North',postal:'12345',country:'Sampleland'}
 assert.deepEqual(validateCheckout(good),{})
 assert.ok('email' in validateCheckout({...good,email:'not-an-email'}))
 assert.ok('postal' in validateCheckout({...good,postal:'1'}))
})
