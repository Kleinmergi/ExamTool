import Link from 'next/link';
const links=[['/dashboard','Dashboard'],['/tasks','Aufgaben'],['/theory','Theorie'],['/review','Wiederholen'],['/pdfs','PDFs'],['/videos','Videos'],['/exam-mode','Prüfungsmodus'],['/settings','Einstellungen']];
export function SidebarNav(){return <aside className='w-64 border-r bg-white p-4'><h1 className='mb-4 text-xl font-bold'>Exam OS</h1><nav className='space-y-2'>{links.map(([h,l])=><Link key={h} href={h} className='block rounded px-3 py-2 hover:bg-slate-100'>{l}</Link>)}</nav></aside>}
