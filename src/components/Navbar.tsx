'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import { NAV } from '@/lib/nav'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenMenu(null)
  }, [pathname])

  // Every page opens on a dark (bg-ink-800) hero, so an unscrolled header can
  // safely go transparent with light text; it only needs to become opaque
  // once scrolled past the hero, or while the mobile menu is open.
  const solid = scrolled || mobileOpen

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        solid ? 'bg-paper/90 backdrop-blur-md border-b border-mist' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-5 sm:px-8 h-[68px] flex items-center justify-between">
        <Link href="/" className="shrink-0" onClick={() => setOpenMenu(null)}>
          <Logo variant={solid ? 'dark' : 'light'} />
        </Link>

        <div className="hidden lg:flex items-center gap-1" onMouseLeave={() => setOpenMenu(null)}>
          {NAV.map((item) => (
            <div key={item.href} className="relative" onMouseEnter={() => setOpenMenu(item.children ? item.label : null)}>
              <Link
                href={item.href}
                className={`px-4 py-2.5 text-[0.85rem] font-medium rounded-full transition-colors ${
                  solid
                    ? pathname === item.href || pathname.startsWith(item.href + '/')
                      ? 'text-electric-2'
                      : 'text-slate hover:text-ink-800'
                    : pathname === item.href || pathname.startsWith(item.href + '/')
                      ? 'text-electric-light'
                      : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
              </Link>

              {item.children && openMenu === item.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[340px]">
                  <div className="rounded-2xl bg-white border border-mist shadow-xl shadow-ink-800/5 p-2 animate-fade-up" style={{ animationDuration: '0.18s' }}>
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="flex flex-col gap-0.5 rounded-xl px-3.5 py-2.5 hover:bg-paper-2 transition-colors group"
                      >
                        <span className="text-[0.85rem] font-semibold text-ink-800 flex items-center gap-1.5">
                          {c.label}
                          <span className="text-electric opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        </span>
                        {c.blurb && <span className="text-[0.75rem] text-slate">{c.blurb}</span>}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          className={`lg:hidden w-10 h-10 flex items-center justify-center transition-colors ${solid ? 'text-ink-800' : 'text-white'}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Ouvrir le menu"
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 5L19 19M19 5L5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-paper border-t border-mist max-h-[calc(100vh-68px)] overflow-y-auto">
          <div className="px-5 py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <div key={item.href} className="border-b border-mist/70 py-2">
                <Link href={item.href} className="block py-2 text-[0.95rem] font-semibold text-ink-800">
                  {item.label}
                </Link>
                {item.children && (
                  <div className="flex flex-col pl-3 pb-1">
                    {item.children.map((c) => (
                      <Link key={c.href} href={c.href} className="py-1.5 text-[0.85rem] text-slate">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
