import {Link} from 'react-router-dom'
export default function Brand({light=false,onClick}){return <Link to="/" onClick={onClick} className={`brand-mark ${light?'brand-light':''}`} aria-label="AUBE Objects home"><span className="brand-name">aube<span className="brand-dot">.</span></span><span className="brand-sub">OBJECTS & EVERYDAY</span></Link>}
