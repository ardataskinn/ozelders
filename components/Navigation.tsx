'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Aktif bölümü belirle
      const sections = ['about', 'results', 'projects', 'services', 'contact']
      const scrollPosition = window.scrollY + 150

      // Sayfa en üstteyse aktif bölüm yok
      if (window.scrollY < 100) {
        setActiveSection('')
        return
      }

      // En son görünen bölümü bul
      let currentSection = ''
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = sections[i]
            break
          }
        }
      }
      
      setActiveSection(currentSection)
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // İlk yüklemede kontrol et
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 shadow-lg backdrop-blur-sm'
          : 'bg-gradient-to-r from-primary-600/90 via-primary-500/90 to-accent-500/90'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-lg font-bold text-white shadow-sm">
              AT
            </div>
            <div className="leading-tight">
              <div className="text-lg sm:text-xl font-semibold tracking-wide text-white drop-shadow-sm">
                Arda Taşkın
              </div>
              <div className="text-[11px] sm:text-xs text-primary-100/90">
                Öğretmen & Eğitim Koçu
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection('about')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === 'about'
                    ? 'text-primary-600 bg-white shadow-sm'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Hakkımda
              </button>
              <button
                onClick={() => scrollToSection('results')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === 'results'
                    ? 'text-primary-600 bg-white shadow-sm'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Sınav Sonuçları
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === 'projects'
                    ? 'text-primary-600 bg-white shadow-sm'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Projelerim
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === 'services'
                    ? 'text-primary-600 bg-white shadow-sm'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Hizmetlerim
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === 'contact'
                    ? 'bg-primary-700 text-white'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                İletişim
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

