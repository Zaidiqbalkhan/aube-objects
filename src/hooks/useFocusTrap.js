import {useEffect} from 'react'
/** Keep keyboard focus inside an active lightweight dialog and restore it on close. */
export default function useFocusTrap(active,containerRef){
 useEffect(()=>{
  if(!active||!containerRef.current)return
  const previous=document.activeElement
  const root=containerRef.current
  const getItems=()=>[...root.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')].filter(el=>el.getClientRects().length)
  const handle=e=>{
    if(e.key!=='Tab')return
    const items=getItems();if(!items.length){e.preventDefault();return}
    const first=items[0],last=items[items.length-1]
    if(e.shiftKey&&(document.activeElement===first||!root.contains(document.activeElement))){e.preventDefault();last.focus()}
    else if(!e.shiftKey&&(document.activeElement===last||!root.contains(document.activeElement))){e.preventDefault();first.focus()}
  }
  document.addEventListener('keydown',handle)
  return()=>{document.removeEventListener('keydown',handle);if(previous?.isConnected)previous.focus()}
 },[active,containerRef])
}
