import "../globals.css"
import { PageShell } from '@/components/site/PageShell.jsx'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PageShell>{children}</PageShell>
      </body>
    </html>
  )
}