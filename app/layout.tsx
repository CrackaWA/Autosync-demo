import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-growth-green/30">
        <div className="mind-space-bg" />
        {children}
      </body>
    </html>
  )
}
