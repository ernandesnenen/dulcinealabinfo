import { Header } from '@/components/Header'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
     
      <body className='bg-slate-300'>
      <Header />
      {children}
      </body>
    </html>
  )
}
