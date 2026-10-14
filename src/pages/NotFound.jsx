import {Link} from 'react-router-dom'
import {ArrowLeft} from 'lucide-react'
export default function NotFound(){return <main className="not-found container"><p className="eyebrow">ERROR / 404</p><h1>Not quite <em>here.</em></h1><p>We couldn't find that page. A good place to begin again is the collection.</p><Link to="/" className="btn btn-dark"><ArrowLeft size={17}/> Back to home</Link></main>}
