import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>case studies</title>
        <link rel="icon" href="/assets/logo1.png" />
      </head>
      <body>
        <>{children}</>
      </body>
    </html>
  );
}
