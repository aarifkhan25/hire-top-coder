import "../globals.css"
import { PageShell } from '@/components/site/PageShell.jsx'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
     
        <title>Hire Top Coder</title>
         <link rel="icon" href="/assets/logo1.png" />
      </head>
      <body>
        <PageShell>{children}</PageShell>
      </body>
    </html>
  )
}