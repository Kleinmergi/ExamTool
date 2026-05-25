import { ReactNode } from 'react';
import { SidebarNav } from './sidebar-nav';
export function AppShell({children}:{children:ReactNode}){return <div className='flex min-h-screen'><SidebarNav/><main className='flex-1 p-6'>{children}</main></div>}
