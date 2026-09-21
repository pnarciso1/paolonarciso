import {getPosts} from '@/lib/substack';
import {site} from '@/lib/content';
import {TextLink} from './ui';

function Invite(){
  return <div className="writing-invite"><span className="eyebrow">From my notebook</span><h3>The conversation continues<br/>on Substack.</h3><p>Read my essays and reflections, and subscribe to receive new writing.</p><TextLink href={site.substack}>Visit my Substack</TextLink></div>;
}

export default async function Writing({limit=3,featured=false}:{limit?:number;featured?:boolean}){
  const posts=await getPosts();
  if(!posts.length) return <Invite/>;
  const shown=posts.slice(0,limit);
  if(featured){
    const [first,...rest]=shown;
    return <div className="post-list">
      <article className="post featured">
        {first.date&&<time dateTime={first.date}>{new Date(first.date).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'})}</time>}
        <h3><a href={first.url}>{first.title}</a></h3>
        <p>{first.lead||first.excerpt}</p>
        <a className="text-link" href={first.url}>Read on Substack<span aria-hidden="true"> ↗</span></a>
      </article>
      {rest.map((p,i)=><article key={p.url} className="post">
        <span className="post-number">{String(i+2).padStart(2,'0')}</span>
        <div>
          {p.date&&<time dateTime={p.date}>{new Date(p.date).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'})}</time>}
          <h3><a href={p.url}>{p.title}</a></h3>
        </div>
        <a className="post-arrow" href={p.url} aria-label={`Read ${p.title} on Substack`}>↗</a>
      </article>)}
    </div>;
  }
  return <div className="post-list">{shown.map((p,i)=><article key={p.url} className="post"><span className="post-number">{String(i+1).padStart(2,'0')}</span><div>{p.date&&<time dateTime={p.date}>{new Date(p.date).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'})}</time>}<h3><a href={p.url}>{p.title}</a></h3><p>{p.excerpt}</p></div><a className="post-arrow" href={p.url} aria-label={`Read ${p.title} on Substack`}>↗</a></article>)}</div>;
}
