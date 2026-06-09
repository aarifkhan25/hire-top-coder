"use client";
import "../globals.css";
export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image" href="/assets/logo1.png"/>
      </head>
      <body  className="color-background">
        {children}
        </body>
        </html>)}