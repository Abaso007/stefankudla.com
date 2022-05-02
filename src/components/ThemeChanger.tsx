import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from './icons'

interface StylesProps {
  styles?: string
}

const ThemeChanger = ({ styles }: StylesProps) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      aria-label={
        resolvedTheme === 'dark' ? 'Activate Light Mode' : 'Activate Dark Mode'
      }
      title={
        resolvedTheme === 'dark' ? 'Activate Light Mode' : 'Activate Dark Mode'
      }
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
      className={styles}
    >
      {resolvedTheme === 'dark' ? (
        <span className="block w-4 h-4 bg-white rounded-full group-hover:-translate-y-1 transition-transform" />
      ) : (
        <span className="block w-4 h-4 bg-black rounded-full group-hover:-translate-y-1 transition-transform" />
      )}
    </button>
  )
}

export default ThemeChanger
