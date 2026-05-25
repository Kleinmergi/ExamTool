import Link from 'next/link';
import { tasks } from '@/lib/mock-data';
export default function Tasks(){return <div><h2 className='text-2xl font-semibold mb-4'>Aufgaben</h2><div className='space-y-2'>{tasks.map(t=><Link key={t.id} href={`/tasks/${t.id}`} className='block rounded border bg-white p-4'><div className='font-medium'>{t.title}</div><div className='text-sm text-slate-600'>{t.topic} • {t.status}</div></Link>)}</div></div>}
