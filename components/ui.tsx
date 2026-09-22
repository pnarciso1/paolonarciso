import Link from 'next/link';
import type { ReactNode } from 'react';
import { books, projects, site, visualizations } from '@/lib/content';
export function TextLink({href,children}:{href:string;children:ReactNode}) {return <Link className="text-link" href={href}>{children}<span aria-hidden="true"> ↗</span></Link>}
export function Cover({index}:{index:number}) {
  const b = books[index];
  return <img className="cover" src={b.image} alt={`${b.title} book cover`} />;
}
export function Portrait(){return <img className="portrait" src="/images/photoshoot8_MyFav3.png" alt="Paolo Narciso smiling, wearing a blue shirt"/>}
export function PageIntro({eyebrow,title,children}:{eyebrow:string;title:string;children:ReactNode}){return <div className="page-intro"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><div className="lead">{children}</div></div>}
export function BookCard({index}:{index:number}){const b=books[index];return <article className="book-card"><Link className="book-stage" href={`/books/${b.slug}`}><Cover index={index}/></Link><span className="eyebrow">{b.category}</span><h3><Link href={`/books/${b.slug}`}>{b.title}</Link></h3>{b.subtitle&&<p>{b.subtitle}</p>}<TextLink href={`/books/${b.slug}`}>View the book</TextLink></article>}
export function AlligatorSpread() {
  const b=books.find(book=>book.slug==='theres-an-alligator-in-our-yard');
  if (!b) return null;
  return <article className="alligator-spread">
    <div className="alligator-spread-inner">
      <Link className="alligator-art" href={`/books/${b.slug}`}>
        <img src={b.image} alt={`${b.title} book cover`}/>
      </Link>
      <div className="alligator-copy">
        <span className="eyebrow">{b.category}</span>
        <h3>{b.title}</h3>
        {b.description?.[0]&&<p>{b.description[0]}</p>}
        <TextLink href={`/books/${b.slug}`}>Open the book</TextLink>
      </div>
    </div>
  </article>;
}
export function VisualizationCard({index=0,overlay=false}:{index?:number;overlay?:boolean}) {
  const v=visualizations[index];
  return <article className={overlay?'viz-card viz-card-overlay':'viz-card'}>
    <a className="viz-still" href={v.url}><img src={v.image} alt={v.title} style={v.imagePosition?{objectPosition:v.imagePosition}:undefined}/></a>
    <div className="viz-body">
      <span className="eyebrow">{v.eyebrow}</span>
      <h3>{v.title}</h3>
      <p>{v.description}</p>
      <TextLink href={v.url}>{v.cta}</TextLink>
    </div>
  </article>;
}
export function ProjectMedia({video,image,name,autoPlay=false}:{video?:string;image?:string;name:string;autoPlay?:boolean}) {
  if (video) {
    return <video className="project-media" src={video} controls playsInline preload="metadata" muted={autoPlay} autoPlay={autoPlay} loop={autoPlay} aria-label={`${name} video`}/>;
  }
  if (image) {
    return <img className="project-media" src={image} alt={`${name}`}/>;
  }
  return null;
}
export function ProjectCard({index}:{index:number}) {
  const p=projects[index];
  return <article className={`project-card ${p.id==='goaxi'?'goaxi':'core'}`}>
    <ProjectMedia video={p.video} image={p.image} name={p.name}/>
    <div className="project-body">
      <span className="eyebrow">Founder / {p.label}</span>
      <div>
        <span className="project-name">{p.name}</span>
        <h3>{p.title}</h3>
        <p>{p.description}</p>
      </div>
      <TextLink href={`/social-impact#${p.id}`}>{p.id==='goaxi'?'Discover GoAxi':'Explore Core Immersive'}</TextLink>
    </div>
  </article>
}
