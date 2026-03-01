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

## GitHub Pages’e Yayınlama

1. Bu projeyi kendi GitHub hesabında yeni bir repo olarak oluştur ve kodu push et.
2. Repo **Settings** → **Pages** → **Build and deployment** bölümünde **Source** olarak **GitHub Actions** seç.
3. `main` branch’e her push’ta site otomatik build alır ve yayınlanır. İlk seferde **Actions** sekmesinden “Deploy to GitHub Pages” workflow’unu manuel çalıştırabilirsin.
4. Site adresi: `https://[kullanici-adin].github.io/[repo-adi]/`  
   Örnek: `https://ardataskin.github.io/arda-taskin-portfolio/`

**Yerelde test:** GitHub’daki gibi alt dizinde çalıştırmak için:
```bash
BASE_PATH=/repo-adin npm run build
npx serve out
```
Ardından tarayıcıda `http://localhost:3000/repo-adin/` adresine git.

## Teknolojiler

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Lisans

Bu proje kişisel kullanım içindir.
