import {useEffect,useRef,useState} from 'react'
import {NavLink,Link,useLocation,useNavigate} from 'react-router-dom'
import {Search,ShoppingBag,Heart,Menu,X,ArrowUpRight} from 'lucide-react'
import {useStore} from '../../context/StoreContext'
import Brand from '../ui/Brand'
import useFocusTrap from '../../hooks/useFocusTrap'
const navigation=[{label:'Shop all',to:'/shop'},{label:'Vessels',to:'/shop?category=Vessels'},{label:'Drinkware',to:'/shop?category=Drinkware'},{label:'Our story',to:'/about'}]
export default function Header(){
 const {totalItems,wishlist}=useStore();const [mobile,setMobile]=useState(false);const [searchOpen,setSearchOpen]=useState(false);const [query,setQuery]=useState('');const navigate=useNavigate();const location=useLocation();const inputRef=useRef(null);const searchRef=useRef(null);const menuRef=useRef(null);useFocusTrap(searchOpen,searchRef);useFocusTrap(mobile,menuRef)
 useEffect(()=>{setMobile(false);setSearchOpen(false)},[location.pathname,location.search])
 useEffect(()=>{if(searchOpen)inputRef.current?.focus()},[searchOpen])
 useEffect(()=>{const handle=e=>{if(e.key==='Escape'){setMobile(false);setSearchOpen(false)}};document.addEventListener('keydown',handle);return()=>document.removeEventListener('keydown',handle)},[])
 useEffect(()=>{document.body.style.overflow=(mobile||searchOpen)?'hidden':'';return()=>document.body.style.overflow=''},[mobile,searchOpen])
 const doSearch=e=>{e.preventDefault();setSearchOpen(false);navigate(`/shop${query.trim()?`?q=${encodeURIComponent(query.trim())}`:''}`)}
 return <>
 <div className="announcement"><span>THE ART OF EVERYDAY LIVING</span><span className="announcement-center">Complimentary standard delivery on demo orders $150+</span><Link to="/shipping">Delivery & returns <ArrowUpRight size={12}/></Link></div>
 <header className="site-header"><div className="container site-header-inner">
  <button className="header-mobile-button icon-button" aria-label={mobile?'Close navigation':'Open navigation'} aria-expanded={mobile} onClick={()=>setMobile(!mobile)}>{mobile?<X/>:<Menu/>}</button>
  <Brand onClick={()=>setMobile(false)}/>
  <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item=><NavLink key={item.label} to={item.to} className={({isActive})=>`nav-link ${isActive&&location.pathname===item.to?'is-active':''}`}>{item.label}</NavLink>)}</nav>
  <div className="header-actions"><button className="icon-button" aria-label="Open product search" onClick={()=>{setMobile(false);setSearchOpen(true)}}><Search size={20}/></button><Link className="icon-button favorite-link" to="/shop?favorites=1" aria-label={`Wishlist, ${wishlist.length} items`}><Heart size={20}/>{wishlist.length>0&&<span className="tiny-count">{wishlist.length}</span>}</Link><Link className="icon-button bag-icon" to="/cart" aria-label={`Shopping bag, ${totalItems} items`}><ShoppingBag size={20}/>{totalItems>0&&<span className="bag-count">{totalItems}</span>}</Link></div>
 </div></header>
 {mobile&&<div ref={menuRef} className="mobile-layer"><nav aria-label="Mobile navigation" className="mobile-nav">{navigation.map(item=><Link key={item.label} to={item.to} onClick={()=>setMobile(false)}>{item.label}<ArrowUpRight size={17}/></Link>)}<Link to="/contact" onClick={()=>setMobile(false)}>Get in touch <ArrowUpRight size={17}/></Link><p>Thoughtful things for everyday rituals.</p></nav></div>}
 {searchOpen&&<div ref={searchRef} className="search-overlay" role="dialog" aria-modal="true" aria-label="Search products" onClick={e=>{if(e.target===e.currentTarget)setSearchOpen(false)}}><div className="search-panel"><div className="search-top"><span className="eyebrow">SEARCH THE COLLECTION</span><button className="icon-button" aria-label="Close search" onClick={()=>setSearchOpen(false)}><X/></button></div><form onSubmit={doSearch} className="big-search"><Search size={23}/><input ref={inputRef} value={query} onChange={e=>setQuery(e.target.value)} aria-label="Search by product name, category, or material" placeholder="What are you looking for?" /><button type="submit" aria-label="Submit search"><ArrowUpRight/></button></form><div className="search-suggestions"><span>Discover</span><button onClick={()=>{setSearchOpen(false);navigate('/shop?category=Vessels')}}>Vessels</button><button onClick={()=>{setSearchOpen(false);navigate('/shop?category=Drinkware')}}>Drinkware</button><button onClick={()=>{setSearchOpen(false);navigate('/shop?category=Tableware')}}>Tableware</button></div></div></div>}
 </>
}
