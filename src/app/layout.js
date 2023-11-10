import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pedro Soares Dias',
  description: 'Como desenvolvedor web, meu objetivo é criar sites de alta qualidade, com ótimo desempenho e facilidade de uso.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
