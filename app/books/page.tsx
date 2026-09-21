import {PageIntro,BookCard} from '@/components/ui';
import {books} from '@/lib/content';
export const metadata={title:'Books',alternates:{canonical:'/books'}};
export default function Page(){return <><PageIntro eyebrow="The bookshelf" title="Books for curious minds.">Technology, entrepreneurship, education, and stories for young readers.</PageIntro><div className="books-grid">{books.map((b,i)=><BookCard key={b.slug} index={i}/>)}</div></>}
