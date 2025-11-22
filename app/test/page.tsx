// app/test/page.tsx
import Link from 'next/link'

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">🧪 Test</h1>
      <div className="flex flex-col gap-3 text-lg">
        <Link href="/" className="text-blue-400 hover:underline">Accueil</Link>
        <Link href="/functional" className="text-amber-400 hover:underline font-bold">→ Application fonctionnelle</Link>
        <Link href="/gallery" className="text-cyan-400 hover:underline">Galerie</Link>
      </div>
    </div>
  )
}