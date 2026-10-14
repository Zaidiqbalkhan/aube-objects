import {useEffect,useState} from 'react'
import {photo} from '../../data/photos'
import {ImageOff} from 'lucide-react'
export default function Photo({image,alt,className='',loading='lazy',width=900,position='center',...rest}){
  const [error,setError]=useState(false)
  useEffect(()=>setError(false),[image])
  return <div className={`photo-frame ${className}`} {...rest}>
    {error?<div className="photo-fallback" role="img" aria-label={`Image unavailable: ${alt}`}><ImageOff size={27} strokeWidth={1.3}/><span>Image temporarily unavailable</span></div>:<img src={photo(image,width)} alt={alt} loading={loading} decoding="async" style={{objectPosition:position}} onError={()=>setError(true)} />}
  </div>
}
