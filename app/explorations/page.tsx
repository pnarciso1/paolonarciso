import {PageIntro,VisualizationCard,TextLink} from '@/components/ui';
import {site,videos,visualizations} from '@/lib/content';
export const metadata={title:'Explorations',alternates:{canonical:'/explorations'}};
export default function Page(){
  return <>
    <PageIntro eyebrow="Data, history & curiosity" title="Other ways of seeing.">A growing set of visual essays, plus short films on Philippine history.</PageIntro>
    <section>
      <span className="eyebrow">Visual essays</span>
      <h2>Follow the human journey.</h2>
      <p className="lead">Interactive pieces you can explore. The Human Origins Atlas is the first.</p>
      <div className="viz-list">
        {visualizations.map((_,i)=><VisualizationCard key={visualizations[i].title} index={i}/>)}
      </div>
    </section>
    <section className="section">
      <span className="eyebrow">Video series</span>
      <h2>Mini Philippine History Lessons</h2>
      <p className="lead">Short videos exploring people and events in Philippine history.</p>
      <div className="video-list">
        {videos.map((video,i)=>(
          <article key={video.title}>
            <a className="video-still" href={`${site.youtube}/videos`}>
              <img src={video.image} alt=""/>
            </a>
            <span className="eyebrow">Episode selection / 0{i+1}</span>
            <h3>{video.title}</h3>
            <TextLink href={`${site.youtube}/videos`}>Find on the YouTube channel</TextLink>
          </article>
        ))}
      </div>
    </section>
  </>;
}
