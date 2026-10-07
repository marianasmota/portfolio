import { useEffect, useState } from 'react'

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // localStorage unavailable (private mode, etc.) — fall through to system
  }
  return null
}

function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    if (theme) {
      document.documentElement.dataset.theme = theme
      try {
        localStorage.setItem('theme', theme)
      } catch {
        // ignore — nothing to persist to
      }
    } else {
      delete document.documentElement.dataset.theme
    }
  }, [theme])

  const isDark =
    theme === 'dark' ||
    (!theme &&
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-color-scheme: dark)').matches)

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M12 2.5v2.5M12 19v2.5M4.22 4.22l1.77 1.77M18 18l1.77 1.77M2.5 12H5M19 12h2.5M4.22 19.78l1.77-1.77M18 6l1.77-1.77"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            d="M20 14.5a8.5 8.5 0 1 1-10.5-11A7 7 0 0 0 20 14.5Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  )
}

export default ThemeToggle
