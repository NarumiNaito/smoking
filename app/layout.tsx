import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "../style/globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/const/siteConfig";
import StoreProvider from "@/redux/store/StoreProvider";
import Footer from "@/components/ui/Footer/Footer";
import Header from "@/components/ui/Header/Header";

const fontNotSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className={cn("bg-secondary", fontNotSansJP.className)}>
        <StoreProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
