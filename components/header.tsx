"use client";
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useState} from 'react';
const nav=[['Books','/books'],['Writing','/writing'],['Explorations','/explorations'],['Social Impact','/social-impact'],['About','/about']];
export default function Header(){const path=usePathname();const [open,setOpen]=useState(false);return <header className="site-header"><Link className="wordmark" href="/" onClick={()=>setOpen(false)}>Paolo Narciso<span aria-hidden="true">.</span></Link><button className="menu-toggle" aria-controls="navigation" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?'Close':'Menu'}</button><nav id="navigation" aria-label="Main navigation" className={open?'nav open':'nav'}>{nav.map(([name,url])=><Link key={url} href={url} aria-current={path.startsWith(url)?'page':undefined} onClick={()=>setOpen(false)}>{name}</Link>)}</nav></header>}
