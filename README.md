# Arda Taşkın - Portfolyo Web Sitesi

Modern ve responsive bir portfolyo web sitesi. Next.js ve Tailwind CSS kullanılarak geliştirilmiştir.

## Özellikler

- 🎨 Modern ve etkileyici tasarım
- 📱 Tam responsive (mobil, tablet, desktop)
- ⚡ Next.js 14 ile yüksek performans
- 🎯 Güven veren ve enerjik renk paleti
- 🚀 SEO optimizasyonu

## Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

3. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## Yapı

- `/app` - Next.js App Router dosyaları
- `/components` - React bileşenleri
- `/public` - Statik dosyalar (resimler, vb.)

## Özelleştirme

- Fotoğrafınızı eklemek için `/components/About.tsx` dosyasındaki placeholder'ı değiştirin
- İletişim bilgilerinizi `/components/Achievements.tsx` dosyasında güncelleyin
- İstatistikleri ve başarıları kendi verilerinize göre düzenleyin

## GitHub Pages’te Yayınlama

1. **Projeyi GitHub’a atın**  
   Yeni bir repo oluşturup kodu push edin (repo adı örn. `arda-taskin-portfolio`).

2. **Pages’i açın**  
   Repo **Settings** → **Pages** → **Build and deployment** → **Source**: **GitHub Actions** seçin.

3. **Deploy’u tetikleyin**  
   `main` branch’e push yaptığınızda workflow otomatik çalışır.  
   İlk seferde **Actions** sekmesinden “Deploy to GitHub Pages” workflow’unu manuel çalıştırabilirsiniz.

4. **Site adresi**  
   Proje repo ise: `https://[kullanici-adiniz].github.io/[repo-adi]/`  
   (Örn. `https://ardataskin.github.io/arda-taskin-portfolio/`)

Yerelde test için: `BASE_PATH=/repo-adiniz npm run build` sonra `out` klasörünü bir statik sunucuda açın.

## Teknolojiler

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Lisans

Bu proje kişisel kullanım içindir.
