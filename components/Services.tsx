'use client'

import { useState } from 'react'

export default function Services() {
  const services = [
    {
      title: 'LGS Özel Ders',
      description:
        'LGS maratonuna beraber hazırlanalım. Yapamadığın soruları birlikte çözelim, deneme analizlerinle eksiklerini nokta atışı belirleyelim. İster sıfırdan başlayalım, ister sadece takıldığın konulara odaklanalım; kontrol tamamen sende.',
      features: [
        'Soru çözümü',
        'Deneme analizi',
        'Konu eksiği tespiti',
        'Sana özel ödev takvimi',
      ],
      icon: '📚',
      cardClass: 'from-blue-50 to-blue-200 border-blue-300 hover:shadow-blue-200/50 hover:scale-[1.02]',
      btnClass: 'bg-blue-600 hover:bg-blue-700 text-white',
      checkClass: 'text-blue-600',
    },
    {
      title: 'Ortaokul Özel Ders',
      description:
        'Ortaokul derslerinde sadece ezberlemiyor, mantığı kavrıyoruz. Yazılı sınavlar öncesi provalarla notlarını yükseltirken, eksik olduğun her konuda eksiksiz destek sağlıyorum.',
      features: [
        'Yazılı çözümleri',
        'Konu eksiği analizi',
        'Ödev takibi',
        'Konu anlatımı',
        'Soru çözümü',
      ],
      icon: '✏️',
      cardClass: 'from-emerald-50 to-emerald-200 border-emerald-300 hover:shadow-emerald-200/50 hover:-translate-y-1',
      btnClass: 'bg-emerald-600 hover:bg-emerald-700 text-white',
      checkClass: 'text-emerald-600',
    },
    {
      title: 'LGS Koçluk',
      description:
        'LGS sürecinde asla yalnız değilsin. Hata yapmadan, en doğru stratejiyle ilerlemen için her an yanındayım. Sadece bir koç değil, bu yolu yeni yürümüş bir yol arkadaşı kazanacaksın.',
      features: [
        'Motivasyon koçluğu',
        'Stresle başa çıkma',
        'Haftalık program',
        'Konu ve ders analizi',
        'Deneme analizi',
      ],
      icon: '🎯',
      cardClass: 'from-violet-50 to-violet-200 border-violet-300 hover:shadow-violet-200/50 hover:rotate-1',
      btnClass: 'bg-violet-600 hover:bg-violet-700 text-white',
      checkClass: 'text-violet-600',
    },
    {
      title: 'YKS Koçluk',
      description:
        'YKS yolculuğunda birebir mentorluk! Ben de bu yollardan geçtim, neler hissettiğini biliyorum. Akademik başarının yanında, sosyal hayatın ve derslerin arasındaki o hassas dengeyi de birlikte kuracağız.',
      features: [
        'Akademik danışman',
        'Sınav stratejileri',
        'Sosyal hayat - ders dengesi',
        'Deneme analizi',
        'Stres yönetimi',
        'Haftalık program',
      ],
      icon: '🚀',
      cardClass: 'from-amber-50 to-amber-200 border-amber-300 hover:shadow-amber-200/50 hover:translate-x-1',
      btnClass: 'bg-amber-600 hover:bg-amber-700 text-white',
      checkClass: 'text-amber-600',
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hizmetlerim
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Öğrencilerinize sunduğum profesyonel eğitim hizmetleri
          </p>
          <div className="mt-4 mx-auto max-w-2xl">
            <p className="inline-flex flex-wrap items-center justify-center gap-1 text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2">
              İhtiyaç durumunuza göre tek seferlik veya düzenli, online ya da bire bir dersler için{' '}
              <a
                href="https://wa.me/905528276002"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary-600 hover:text-primary-700 underline underline-offset-2"
              >
                iletişime geçin
              </a>
              {' '}planlayalım 😊
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${service.cardClass} rounded-2xl shadow-xl p-6 border-2 transition-all duration-300`}
            >
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-1.5">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm">
                    <span className={service.checkClass}>✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-4 w-full py-2.5 rounded-lg font-semibold text-sm transition-all ${service.btnClass}`}
              >
                Detaylı Bilgi
              </button>
            </div>
          ))}
        </div>

        <LocationInfo />
      </div>
    </section>
  )
}

function LocationInfo() {
  const [open, setOpen] = useState(false)

  return (
    <div className="mt-6 max-w-3xl mx-auto flex flex-col items-center gap-3">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-4 py-2 text-xs sm:text-sm font-medium text-primary-700 shadow-sm hover:bg-primary-50 hover:border-primary-300 transition-colors"
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-600 text-white text-xs">
          !
        </span>
        <span>Konum ve zaman bilgisi</span>
      </button>

      {open && (
        <div className="w-full">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-50 via-white to-accent-50 border border-primary-100 shadow-lg">
            <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary-400 to-accent-400" />
            <div className="px-6 py-6 sm:px-8 sm:py-7 pl-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Konum & Zaman Bilgisi
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Okul dönemlerinde Ankara Çankaya&apos;da ikamet ediyorum, yaz aylarında ise genellikle
                Mersin veya Ankara&apos;da oluyorum. Düzenli dersler için haftalık programım uygunsa
                geri dönüş yapıyorum; tek seferlik, rezervasyonlu dersler için ise WhatsApp üzerinden
                iletişime geçmeniz gerekiyor. Sadece uzun vadeli dersler değil, sınav dönemi öncesi
                yazılı provası gibi taleplerle ya da tek bir konu özelinde de destek alabilirsiniz.
                Yüz yüze derslerde ulaşımı Ankara içi kendim sağlıyorum; isteğe göre dersleri online
                ortamda da yapabiliriz.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
