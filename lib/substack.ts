import { unstable_cache } from 'next/cache';
import { XMLParser } from 'fast-xml-parser';
export type Post = {title:string;url:string;excerpt:string;date:string};
function plain(value:unknown){return String(value??'').replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();}
export function parseFeed(xml:string):Post[]{
 const doc=new XMLParser({ignoreAttributes:false,processEntities:true}).parse(xml);
 const raw=doc?.rss?.channel?.item;const items=Array.isArray(raw)?raw:raw?[raw]:[];
 return items.flatMap((item:Record<string,unknown>)=>{try{const url=new URL(String(item.link));if(url.protocol!=='https:'||url.hostname!=='paolonarciso.substack.com')return [];const title=plain(item.title);if(!title)return [];const text=plain(item.description);return [{title,url:url.href,excerpt:text.length>180?text.slice(0,177)+'…':text,date:Number.isNaN(Date.parse(String(item.pubDate)))?'':new Date(String(item.pubDate)).toISOString()}]}catch{return []}}).slice(0,12);
}
const cached=unstable_cache(async()=>{
 const response=await fetch('https://paolonarciso.substack.com/feed',{signal:AbortSignal.timeout(7000),headers:{Accept:'application/rss+xml, application/xml, text/xml'},cache:'no-store'});
 if(!response.ok)throw new Error('Feed unavailable');const xml=await response.text();if(xml.length>2000000)throw new Error('Feed too large');const posts=parseFeed(xml);if(!posts.length)throw new Error('Empty feed');return posts;
},['paolo-substack-v1'],{revalidate:3600});
export async function getPosts():Promise<Post[]>{try{return await cached()}catch{return []}}
