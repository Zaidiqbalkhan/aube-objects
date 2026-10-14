import {createContext,useCallback,useContext,useEffect,useMemo,useState} from 'react'
import {getProduct,available} from '../data/products'
import {cartKey} from '../utils/format'
import {addCartLine,updateCartQuantity,calculateSubtotal} from '../utils/cart'

const StoreContext=createContext(null)
const read=(key, fallback)=>{try{const raw=localStorage.getItem(key);return raw?JSON.parse(raw):fallback}catch{return fallback}}
export function StoreProvider({children}){
  const [cart,setCart]=useState(()=>read('aube-demo-cart',[]))
  const [wishlist,setWishlist]=useState(()=>read('aube-demo-wishlist',[]))
  const [toast,setToast]=useState(null)
  useEffect(()=>{try{localStorage.setItem('aube-demo-cart',JSON.stringify(cart))}catch{}},[cart])
  useEffect(()=>{try{localStorage.setItem('aube-demo-wishlist',JSON.stringify(wishlist))}catch{}},[wishlist])
  useEffect(()=>{if(!toast)return;const timer=setTimeout(()=>setToast(null),3800);return()=>clearTimeout(timer)},[toast])
  const notify=useCallback((message,type='success')=>setToast({message,type,id:Date.now()}),[])
  const addToCart=useCallback((id,color,quantity=1)=>{
    const p=getProduct(id);if(!p)return false
    const max=available(p,color);if(max<1){notify('This finish is currently unavailable.','error');return false}
    const key=cartKey(id,color)
    const current=cart.find(item=>item.key===key)?.quantity||0
    if(current>=max){notify('All available demo stock is already in your bag.','error');return false}
    setCart(items=>addCartLine(items,id,color,quantity))
    notify(`${p.name} added to your bag`)
    return true
  },[cart,notify])
  const changeQuantity=useCallback((key,n)=>{
    setCart(items=>updateCartQuantity(items,key,n))
  },[])
  const removeItem=useCallback(key=>{setCart(items=>items.filter(item=>item.key!==key));notify('Item removed from your bag')},[notify])
  const toggleWishlist=useCallback(id=>setWishlist(items=>items.includes(id)?items.filter(i=>i!==id):[...items,id]),[])
  const subtotal=calculateSubtotal(cart)
  const totalItems=cart.reduce((sum,item)=>sum+item.quantity,0)
  const value=useMemo(()=>({cart,wishlist,toast,notify,setToast,addToCart,changeQuantity,removeItem,toggleWishlist,subtotal,totalItems}),[cart,wishlist,toast,notify,addToCart,changeQuantity,removeItem,toggleWishlist,subtotal,totalItems])
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
export function useStore(){const state=useContext(StoreContext);if(!state)throw new Error('useStore outside StoreProvider');return state}
