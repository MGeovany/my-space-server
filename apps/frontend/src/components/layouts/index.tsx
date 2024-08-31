'use client'
import { ReactElement, ReactNode } from 'react'
import { Sidebar } from '../sidebar/'
import { usePathname } from 'next/navigation'

interface Props {
  list: ReactElement | null
  detail?: ReactElement | ReactNode
  hasDetail?: boolean
  shouldHideSidebar?: boolean
}

export function ListDetailView({ list, detail, hasDetail = false }: Props) {
  const pathname = usePathname()
  const hasDetailUrl = /\/bookmarks\/\d+$/.test(pathname)

  return (
    <div className="flex w-full">
      {list && (
        <div
          id="list"
          className={`bg-dots ${
            hasDetailUrl ? 'hidden lg:flex' : 'min-h-screen w-full'
          }`}
        >
          {list}
        </div>
      )}
      {detail}
    </div>
  )
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-full min-h-screen w-full">
      <Sidebar />
      <div className="flex flex-1">{children}</div>
    </div>
  )
}
