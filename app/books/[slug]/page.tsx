import {notFound} from 'next/navigation';
import Link from 'next/link';
import {books,site} from '@/lib/content';
import {Cover,TextLink} from '@/components/ui';
export function generateStaticParams(){return books.map(b=>({slug:b.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const b=books.find(b=>b.slug===slug);return {title:b?.title??'Book not found',alternates:{canonical:`/books/${slug}`}}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const i=books.findIndex(b=>b.slug===slug);if(i<0)notFound();const b=books[i];return <><Link className="back" href="/books">← All books</Link><article className="book-detail"><div className="detail-cover"><Cover index={i}/></div><div><span className="eyebrow">{b.category}</span><h1>{b.title}</h1>{b.subtitle&&<p className="lead">{b.subtitle}</p>}<p>{b.credit}</p>{b.description?.map(paragraph=><p key={paragraph.slice(0,48)}>{paragraph}</p>)}<TextLink href={site.amazon}>Find this book in my Amazon bookstore</TextLink><p className="fine-print">Available editions and current pricing are listed on Amazon.</p></div></article></>}
