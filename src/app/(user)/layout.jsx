import { PageShell } from '@/components/site/PageShell.jsx'
import ScrollToTop from '@/components/site/ScrollToTop.jsx'; // नया कंपोनेंट इम्पोर्ट किया
import "../globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Hire Top Coder</title>
        <link rel="icon" href="/assets/logo1.png" />
      </head>
      <body>
        <PageShell>{children}</PageShell>
        
        {/* स्क्रॉल बटन यहाँ पूरे वेबसाइट पर काम करेगा */}
        <ScrollToTop />
      </body>
    </html>
  )
}