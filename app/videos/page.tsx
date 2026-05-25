'use client';
import { useState } from 'react';
import { searchVideos } from '@/lib/youtube/service';
export default function Videos(){const [q,setQ]=useState('Dijkstra Algorithmus deutsch'); const [res,setRes]=useState<any[]>([]); return <div className='space-y-3'><h2 className='text-2xl font-semibold'>Videos</h2><div className='flex gap-2'><input className='border rounded p-2 flex-1' value={q} onChange={e=>setQ(e.target.value)}/><button className='rounded bg-slate-900 text-white px-3' onClick={async()=>setRes(await searchVideos(q))}>Suchen</button></div>{res.map(v=><div key={v.id} className='rounded border bg-white p-3'>{v.title} - {v.channel}</div>)}</div>}
