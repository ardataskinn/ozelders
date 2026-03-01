// GitHub Pages'te repo adı altında yayınlandığı için resim/asset yollarına basePath eklenir.
// Yerelde NEXT_PUBLIC_BASE_PATH boş, GitHub Actions'ta /repo-adi olarak set edilir.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function assetPath(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`
  return basePath ? `${basePath}${p}` : p
}
