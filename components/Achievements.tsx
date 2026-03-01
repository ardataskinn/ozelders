export default function Achievements() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            İletişim
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Eğitim hizmetlerim hakkında daha fazla bilgi almak veya randevu oluşturmak için benimle iletişime geçebilirsiniz.
          </p>
        </div>

        <div className="flex justify-center">
          <a
            href="https://wa.me/905528276002"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 hover:from-green-600 hover:to-green-700 flex items-center gap-4"
          >
            <div className="text-4xl animate-pulse group-hover:animate-none">
              💬
            </div>
            <div className="flex flex-col items-start">
              <span className="text-2xl">WhatsApp ile Sohbet Et</span>
              <span className="text-sm font-normal text-green-100 opacity-90">
                Hemen mesaj gönder, hızlıca yanıtlayayım
              </span>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <span className="text-green-600 text-xs font-bold">→</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

