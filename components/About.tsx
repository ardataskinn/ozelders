import Image from 'next/image'
import { assetPath } from '@/lib/basePath'

export default function About() {
  return (
    <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ben Kimim?
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Merhaba ben Orta Doğu Teknik Üniversitesi bilgisayar mühendisliği 2.sınıf öğrencisiyim. 
                Eğitimin öğretim kısmı ile uzun süredir alakalıyım kendimi bildim bileli öğrendiklerimi 
                çevremdeki insanlara aktarmayı ve paylaşmayı severim bunu yaparken ne kadar karmaşık 
                olursa olsun basit ve pratik hale getirip karşımdakine öğretmenin yollarını bulmaya çalışırım.
              </p>
              <p>
                Sabırlı, neşeli ve enerjik biriyimdir anlaşmasını iyi bilirim ve tatlı yaklaşırım o yüzden 
                öğrencide utangaçlık, panik gibi öğrenmeye engel olacak duygu ve ruh halleri olmaz. 
                Sabırlıyımdır anlatmaktan yorulmam veya sıkılmam tam aksine farklı yaklaşımlarla daha 
                kapsamlı olarak öğretmeyi sağlamaya çalışırım.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-gray-200 rounded-2xl p-2 shadow-2xl">
                <div className="aspect-square rounded-xl relative overflow-hidden">
                  <Image 
                    src={assetPath('/resmim.jpg')} 
                    alt="Arda Taşkın" 
                    fill 
                    className="rounded-xl object-cover" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

