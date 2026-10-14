import {CircleCheck,Info,X} from 'lucide-react'
import {useStore} from '../../context/StoreContext'
export default function Toast(){const {toast,setToast}=useStore();return <div aria-live="polite" aria-atomic="true" className="toast-root">{toast&&<div className="toast"><span className="toast-icon">{toast.type==='error'?<Info size={18}/>:<CircleCheck size={18}/>}</span><span>{toast.message}</span><button aria-label="Dismiss notification" className="icon-button" onClick={()=>setToast(null)}><X size={17}/></button></div>}</div>}
