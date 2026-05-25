import { theoryPages } from '@/lib/mock-data';
export default async function TheoryDetail({params}:{params:Promise<{slug:string}>}){const {slug}=await params; const page=theoryPages.find(t=>t.slug===slug); if(!page) return <div>Nicht gefunden</div>; return <article className='prose max-w-none'><h2>{page.title}</h2><p>{page.summary}</p><pre>{page.content_markdown}</pre></article>;}
