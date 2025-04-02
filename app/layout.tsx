// app/layout.tsx
import Footer from './components/footer';  // Caminho correto para o Footer
import type { Metadata } from "next";
import Script from "next/script"; 
import "./globals.css"; 

export const metadata: Metadata = {
  title: "Monitoria Digital",
  description: "Login no Monitoria Digital",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
        <Script src="https://meet.jit.si/external_api.js" strategy="lazyOnload" />
        <Footer />
      </body>
    </html>
  );
}
