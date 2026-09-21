import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';
import { books, site } from '@/lib/content';
export function TextLink({href,children}:{href:string;children:ReactNode}) {return <Link className="text-link" href={href}>{children}<span aria-hidden="true"> ↗</span></Link>}
// Non-destructive CSS windows over supplied screenshots. Replace with original assets before launch.
const windows = [[2048,854,84,46,293,443],[2048,854,619,57,279,422],[2048,854,1145,57,281,422],[2048,854,1601,57,422,422],[1994,1232,162,87,380,576],[1994,1232,879,87,386,576]];
export function Cover({index}:{index:number}) {const [sw,sh,x,y,w,h]=windows[index];return <div role="img" aria-label={`${books[index].title} book cover`} className="cover" style={{aspectRatio:`${w}/${h}`,backgroundImage:`url(/images/${index<4?'books-one':'books-two'}.png)`,backgroundSize:`${sw/w*100}% ${sh/h*100}%`,backgroundPosition:`${x/(sw-w)*100}% ${y/(sh-h)*100}%`} as CSSProperties}/>}
export function Portrait(){return <div className="portrait" role="img" aria-label="Paolo Narciso smiling, wearing a blue shirt"/>}
export function PageIntro({eyebrow,title,children}:{eyebrow:string;title:string;children:ReactNode}){return <div className="page-intro"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><div className="lead">{children}</div></div>}
export function BookCard({index}:{index:number}){const b=books[index];return <article className="book-card"><Link className="book-stage" href={`/books/${b.slug}`}><Cover index={index}/></Link><span className="eyebrow">{b.category}</span><h3><Link href={`/books/${b.slug}`}>{b.title}</Link></h3>{b.subtitle&&<p>{b.subtitle}</p>}<TextLink href={`/books/${b.slug}`}>View the book</TextLink></article>}
export function Atlas(){return <article className="atlas-panel"><span className="eyebrow">Interactive exploration</span><h3>Human Origins<br/>Atlas</h3><p>Explore human origins and migration through an interactive atlas.</p><TextLink href={site.atlas}>Explore the atlas</TextLink><span className="atlas-index" aria-hidden="true">01 / HUMAN HISTORY</span></article>}
