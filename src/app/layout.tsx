import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My personal portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-xl font-bold">Portfolio</div>
            <div className="flex items-center space-x-4">
              <ul className="flex space-x-4">
                <li><a href="/" className="hover:text-gray-300">Home</a></li>
                <li><a href="/projects" className="hover:text-gray-300">Case Studies</a></li>
                <li><a href="/testimonials" className="hover:text-gray-300">Testimonials</a></li>
                <li><a href="/projects" className="hover:text-gray-300">Recent Work</a></li>
                <li><a href="/contact" className="hover:text-gray-300">Get In Touch</a></li>
              </ul>
              <div className="flex space-x-2 ml-4">
                <a href="https://github.com" className="hover:text-gray-300">GitHub</a>
                <a href="https://linkedin.com" className="hover:text-gray-300">LinkedIn</a>
              </div>
            </div>
          </div>
        </nav>
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  )
}