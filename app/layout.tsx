import type {Metadata} from 'next';
import Link from 'next/link';
import Header from '@/components/header';
import {site} from '@/lib/content';
import './globals.css';
export const metadata:Metadata={metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||'https://paolonarciso.com'),title:{default:'Paolo Narciso | Author, Technologist & Social Entrepreneur',template:'%s | Paolo Narciso'},description:'Books, writing, and explorations by Paolo Narciso. Expanding educational opportunity and helping people find connection.',icons:{icon:'/icon.svg'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><div className="shell"><Header/><main id="main">{children}</main><footer><div><Link className="wordmark" href="/">Paolo Narciso.</Link><p>Writing. Building. Connecting.</p></div><nav aria-label="Footer"><a href={site.substack}>Substack ↗</a><a href={site.youtube}>YouTube ↗</a><Link href="/about">About</Link></nav><small>© {new Date().getFullYear()} Paolo Narciso</small></footer></div></body></html>}
