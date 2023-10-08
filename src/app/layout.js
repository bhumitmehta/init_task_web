import Navbar from '@/components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Blog from '@/components/blog'
import Footer from '@/components/footer'
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'djinit.ai',
  description: 'Blog page',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
     
      <Navbar/>
      <Blog/>
      <Footer/>
      </body>
    </html>
  )
}
