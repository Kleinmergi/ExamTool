'use client';
import { useState } from 'react';
import { nextInterval } from '@/lib/review/scheduler';
export default function Practice(){ const [submitted,setSubmitted]=useState(false); const [rating,setRating]=useState(3); const interval=nextInterval(rating,false);
return <div className='space-y-4'><h2 className='text-2xl font-semibold'>Lernmodus</h2><textarea className='w-full rounded border p-3 h-40' placeholder='Eigene Lösung...' />
<button className='rounded bg-slate-900 text-white px-3 py-2' onClick={()=>setSubmitted(true)}>Lösung abgeben</button>
{submitted && <div className='rounded border p-4 bg-white space-y-2'><p>Vergleichsansicht (eigene Lösung vs Musterlösung)</p><input type='range' min={1} max={5} value={rating} onChange={(e)=>setRating(Number(e.target.value))}/><p>Nächstes Review in {interval} Tagen</p></div>}</div>}
