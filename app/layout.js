import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import "./globals.css";

export const metadata = {
  title: "Street2Site - Transform Your Street into a Digital Presence",
  description: "Professional web development and digital marketing services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollProvider>
          <div className="min-h-screen bg-[#f5f5f0] text-[#1a1a1a]">
            <Header />
            <main className="pt-16">{children}</main>
            <Footer />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
