import Image from 'next/image'
import { assetPath } from '@/lib/basePath'

const PROJECT_IMAGE_SIZE = 80

export default function Projects() {
  const projects = [
    {
      title: 'Soru Yazarlığı',
      description: 'Lise dönemimde soru yazarlığı yaptım başta kendi oluşturduğum bir platformun websitesi içinde yayınlıyordum sorularımı youtube üzerinden de çözümlerini yapıyordum daha sonrasında bir öğretmenim vasıtası ile bazı büyük yayınevlerinde sorularım basıldı ve bir dönem soru yazarı bir hocamla sorular ürettik ve onun ürettiklerini düzeltme gözden geçirme işini üstlendim, aynı zamanda lise seviyesi yazılılar hazırlayıp dizgileyip bunları ücretsiz olarak paylaştım birçok okulda kullanıldılar.',
      tags: [] as string[],
      icon: '✍️',
      image: assetPath('/paper.png'),
      showButton: true,
      exampleLink: 'https://darajaokullari.blogspot.com/?m=1',
      hideTags: true,
    },
    {
      title: 'Daraja Okulları',
      description: 'Deprem sonrası dönemde ücretsiz olarak dersler hazırlayıp bunları Youtube üzerinden paylaştım kendim de bizzat aynı dönemde sınav öğrencisi olduğum için kendi üzerimden doğru ve etkili öğretim methotları üzerine çıkarımlar yapma fırsatı buldum ve pratiğin öğrenmede en büyük etkiye sahip olduğunu gözlemlememle birlikte bunu kullanarak hazırladığım materyaller ve verdiğim derslerle birçok öğrenciye fayda sağladım ve çok sayıda geri dönüş aldım.',
      tags: ['Eğitim', 'YouTube', 'Ücretsiz İçerik'],
      icon: '🎓',
      image: assetPath('/IMG_2755.png'),
      showButtons: true,
      buttons: [
        { text: 'Platformun Web Sitesi', color: 'primary', link: '#' },
        { text: 'Platformun YouTube Kanalı', color: 'red', link: '#' },
      ],
    },
    {
      title: 'Tavsiye Videoları',
      description: 'YKS, LGS ve MSÜ için birçok konuyu ele alıp öğrencileri bilgilendirdiğim bir video serisi başlattım ve yaklaşık 50.000 izlenmeyle birçok insana bu deneyimleri aktardım ve hala aktif olarak geri dönüşler almaktayım',
      tags: ['Video', 'Eğitim', 'Tavsiye'],
      icon: '🎥',
      image: assetPath('/Youtube_logo.png'),
      highlightNumber: '50.000',
    },
    {
      title: 'Bire bir Koçluk',
      description: 'Sınav koçluğu ve mentorluk benim için titizlikle ele alınması gerekilen bir mevzu çünkü yanlış yönlendirme ve yaklaşım öğrencinin mental sağlığına ve akademik gidişatına büyük hasarlar verebilir. Öte yandan bugün çok sayıda "koçluk" verdiğini iddia eden insan var, başarılı bir öğrenci başarılı bir mentor,koç olmayabilir bu yüzden sınav sonucu iyi olması bir yana kişinin iletişim becerilerine ve meselenin bazı teknik yanlarına da hakimliğinin göz ardı edilmeden karar verilmesi gereklidir. Liseden beri alan seçimi, sınava nasıl çalışmalı veya tükenmişlikle nasıl başa çıkılır, ve motivasyon teknikleri gibi birçok konuda deneyimler kazandım ve birçok öğrencinin hayatına pozitif anlamda dokunma şansı elde ettim.',
      tags: ['Koçluk', 'Mentorluk', 'Sınav Hazırlığı'],
      icon: '🤝',
      image: assetPath('/mentoring.png'),
      showButton: false,
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projelerim
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Öğrencilerimin başarısı için geliştirdiğim projeler
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-all border border-primary-100"
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-xl overflow-hidden bg-white/50"
                  style={{ width: PROJECT_IMAGE_SIZE, height: PROJECT_IMAGE_SIZE }}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={PROJECT_IMAGE_SIZE}
                      height={PROJECT_IMAGE_SIZE}
                      className="object-contain"
                    />
                  ) : (
                    <span className="text-5xl">{project.icon}</span>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {project.highlightNumber ? (
                      <>
                        {project.description.split(project.highlightNumber)[0]}
                        <span className="font-bold text-primary-600 text-xl">
                          {project.highlightNumber}
                        </span>
                        {project.description.split(project.highlightNumber)[1]}
                      </>
                    ) : (
                      project.description
                    )}
                  </p>
                  {project.showButton && (
                    <div className="mb-3">
                      <a
                        href={project.exampleLink || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                      >
                        Örnek Soruları Gör
                      </a>
                    </div>
                  )}
                  {project.showButton && (
                    <p className="text-xs text-gray-500 italic mb-4">
                      *telif sorunları nedeniyle yayınevlerine verdiğim soruları buraya koyamamış bulunmaktayım
                    </p>
                  )}
                  {project.showButtons && project.buttons && (
                    <div className="mb-3 flex flex-wrap gap-3">
                      {project.buttons.map((button, btnIndex) => (
                        <a
                          key={btnIndex}
                          href={button.link}
                          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                            button.color === 'primary'
                              ? 'bg-primary-600 text-white hover:bg-primary-700'
                              : button.color === 'red'
                              ? 'bg-red-600 text-white hover:bg-red-700'
                              : 'bg-gray-600 text-white hover:bg-gray-700'
                          }`}
                        >
                          {button.text}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

