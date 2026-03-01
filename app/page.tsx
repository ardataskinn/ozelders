import About from '@/components/About'
import ExamResults from '@/components/ExamResults'
import Projects from '@/components/Projects'
import VolunteerWork from '@/components/VolunteerWork'
import Services from '@/components/Services'
import Achievements from '@/components/Achievements'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <main className="flex-1">
        <Navigation />
        <About />
        <ExamResults />
        <Projects />
        <VolunteerWork />
        <Services />
        <Achievements />
      </main>
      <footer className="w-full mt-8 border-t border-white/20 bg-gradient-to-r from-primary-900 via-slate-900 to-accent-900/90">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-200">
          <span className="tracking-wide">
            © {new Date().getFullYear()} <span className="font-semibold text-primary-200">Arda Taşkın</span>. Tüm hakları saklıdır.
          </span>
          <span className="text-slate-400">
            Öğretmen & Eğitim Koçu • LGS & YKS Koçluğu
          </span>
        </div>
      </footer>
    </div>
  )
}

