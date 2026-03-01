import Image from 'next/image'

export default function VolunteerWork() {
  const volunteerWorks = [
    {
      title: 'Toplum Gönüllüleri Vakfı (TOG)',
      period: 'Mayıs 2024 - Mart 2025',
      description: 'Çevreyi, hayvanları koruma ve eğitim, insan hakları konularında gönüllü desteği verdim',
      logo: '/tog.png',
    },
    {
      title: 'Ankara Gönüllü Takımı',
      period: 'Aralık 2023 - ...',
      description: 'Sosyoekonomik imkanları daha kısıtlı bölgelerdeki çocuklarla atölyeler ve eğitimler yapıp onların kişisel gelişimine katkıda bulunuyorum ayrıca günlük hayattaki sorunlarının çözümüne ilişkin destek sağlıyorum',
      logo: '/agt.png',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-accent-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gönüllü Çalışmalarım
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Eğitime katkı sağlamak için yaptığım gönüllü işler
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {volunteerWorks.map((work, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-4 w-full">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={work.logo}
                      alt={work.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {work.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium">
                      {work.period}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

