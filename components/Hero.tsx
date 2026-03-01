export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fadeInUp">
            Öğretmenlik tutkumla öğrencilerimin potansiyellerini keşfetmelerine ve 
            hedeflerine ulaşmalarına yardımcı oluyorum.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp">
            <a
              href="#about"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              Daha Fazla Bilgi
            </a>
            <a
              href="#services"
              className="bg-accent-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-all shadow-lg hover:shadow-xl"
            >
              Hizmetlerim
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

