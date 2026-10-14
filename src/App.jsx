import {useEffect} from 'react'
import {BrowserRouter,Routes,Route,useLocation} from 'react-router-dom'
import {StoreProvider} from './context/StoreContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Toast from './components/ui/Toast'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductPage from './pages/ProductPage'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import {About,Contact,FAQ,Shipping,Legal} from './pages/Information'
import NotFound from './pages/NotFound'
function ScrollManager(){const {pathname}=useLocation();useEffect(()=>{window.scrollTo({top:0,behavior:'instant'})},[pathname]);return null}
function Shell(){return <><ScrollManager/><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/shop" element={<Shop/>}/><Route path="/product/:slug" element={<ProductPage/>}/><Route path="/cart" element={<Cart/>}/><Route path="/checkout" element={<Checkout/>}/><Route path="/about" element={<About/>}/><Route path="/faq" element={<FAQ/>}/><Route path="/shipping" element={<Shipping/>}/><Route path="/contact" element={<Contact/>}/><Route path="/privacy" element={<Legal kind="privacy"/>}/><Route path="/terms" element={<Legal kind="terms"/>}/><Route path="*" element={<NotFound/>}/></Routes><Footer/><Toast/></>}
export default function App(){return <BrowserRouter><StoreProvider><Shell/></StoreProvider></BrowserRouter>}
