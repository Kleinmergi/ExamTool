import Link from 'next/link'; import { theoryPages } from '@/lib/mock-data';
export default function Theory(){return <div><h2 className='text-2xl font-semibold mb-4'>Theorie</h2>{theoryPages.map(p=><Link key={p.id} href={`/theory/${p.slug}`} className='block rounded border bg-white p-4 mb-2'>{p.title}</Link>)}</div>}
