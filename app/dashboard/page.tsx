import { schedules, tasks } from '@/lib/mock-data';
export default function Dashboard(){
  return <div className='space-y-4'><h2 className='text-2xl font-semibold'>Dashboard</h2><div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
    <div className='rounded border bg-white p-4'><p>Heutige Wiederholungen</p><p className='text-3xl font-bold'>{schedules.length}</p></div>
    <div className='rounded border bg-white p-4'><p>Offene Aufgaben</p><p className='text-3xl font-bold'>{tasks.filter(t=>t.status!=='exam_ready').length}</p></div>
    <div className='rounded border bg-white p-4'><p>Kritische Themen</p><p className='text-3xl font-bold'>4</p></div>
  </div></div>
}
