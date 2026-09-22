import Link from 'next/link';
import {Suspense} from 'react';
import {AlligatorSpread,BookCard,ProjectCard,TextLink,VisualizationCard} from '@/components/ui';
import Writing from '@/components/writing';
import {site,videos} from '@/lib/content';
export const revalidate=3600;
export default function Home(){return <>
<section className="hero hero-atlas">
  <img className="hero-atlas-map" src="/images/HumanOriginsAtlas.jpg" alt=""/>
  <div className="hero-copy">
    <span className="eyebrow">Paolo Narciso</span>
    <h1>Most of what I make starts with a question about where we come from <em>and ends with how we might reach each other.</em></h1>
    <p>I write books, build ventures, and explore history through stories and data. Educational opportunity and human connection run through all of it.</p>
    <div className="actions">
      <a className="button" href="#writing">Read the latest</a>
      <a className="quiet-link" href={site.subscribe}>Subscribe</a>
      <Link className="quiet-link" href="/about">About me</Link>
    </div>
  </div>
</section>
<section id="writing" className="section">
  <div className="section-heading">
    <div>
      <span className="eyebrow">01 / Currently thinking</span>
      <h2>Latest writing</h2>
    </div>
    <TextLink href={site.substack}>Read on Substack</TextLink>
  </div>
  <Suspense fallback={<p>Essays and reflections, published on Substack.</p>}>
    <Writing featured/>
  </Suspense>
  <div className="section-end">
    <TextLink href="/writing">More writing</TextLink>
    <TextLink href={site.subscribe}>Subscribe on Substack</TextLink>
  </div>
</section>
<section id="selected" className="section">
  <div className="section-heading">
    <div>
      <span className="eyebrow">02 / Writing & building</span>
      <h2>Selected work</h2>
    </div>
    <p>A wide shelf.<br/>One set of questions.</p>
  </div>
  <div className="selected-grid">
    <BookCard index={0}/>
    <ProjectCard index={0}/>
  </div>
  <AlligatorSpread/>
  <div className="selected-grid">
    <BookCard index={1}/>
    <ProjectCard index={1}/>
  </div>
  <div className="section-end">
    <TextLink href="/books">Browse all books</TextLink>
    <TextLink href="/social-impact">More about my social impact work</TextLink>
  </div>
</section>
<section className="section">
  <div className="section-heading">
    <div>
      <span className="eyebrow">03 / Following curiosity</span>
      <h2>Explorations</h2>
    </div>
    <p>History and human stories,<br/>through data and film.</p>
  </div>
  <div className="explore-grid">
    <VisualizationCard overlay/>
    <article className="history-panel">
      <span className="eyebrow">Short films / Philippine history</span>
      <h3>Small stories.<br/>A deeper history.</h3>
      <p>Mini Philippine History Lessons explores people and events in Philippine history through short videos.</p>
      <div className="history-thumbs">{videos.map(video=><a className="video-still" href={`${site.youtube}/videos`} key={video.title}><img src={video.image} alt=""/><span>{video.title}</span></a>)}</div>
      <TextLink href={site.youtube}>Watch on YouTube</TextLink>
    </article>
  </div>
  <div className="section-end">
    <TextLink href="/explorations">More visual essays</TextLink>
  </div>
</section>
<section className="contact" id="contact">
  <span className="eyebrow">Stay in touch</span>
  <h2>Subscribe for new writing.</h2>
  <p>I serve on the boards of the Foundation for Social Connection and CaringBridge. If you want the next essay, subscribe. If you want to talk, I’m on LinkedIn.</p>
  <div className="actions">
    <a className="button" href={site.subscribe}>Subscribe on Substack</a>
    <TextLink href={site.linkedin}>LinkedIn</TextLink>
  </div>
</section>
</>}
