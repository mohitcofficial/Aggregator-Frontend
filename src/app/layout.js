import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import WhatsappSticker from "@/components/items/WhatsappSticker";
import NextTopLoader from "nextjs-toploader";
import dynamic from "next/dynamic";
const TawkToChat = dynamic(() => import("../utils/TalkToChat"), { ssr: false });

// const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://virtualxcel.in"),
  title: {
    default: "Virtualxcel",
    template: "%s | Virtualxcel",
  },
  description: "Discover the ultimate coworking experience at Virtualxcel.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="4QP5sU8e94-iZECe8pfBrj__ums-nt3y-9LELy8GVOA"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16609409855"
          strategy="lazyOnLoad"
        />
        <Script id="google-ads-gtag" strategy="lazyOnLoad">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-16609409855');
          `}
        </Script>
        <Script id="text-script" type="text/javascript" strategy="lazyOnLoad">
          {`
            (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ngvpjxtrl3");  
        `}
        </Script>
      </head>
      <GoogleAnalytics gaId="G-KQWV7CENMY" />
      <GoogleTagManager gtmId="GTM-T55KLQJJ" />
      <body
        className={poppins.className}
        style={{ width: "100%", maxWidth: "100%" }}
      >
        {<TawkToChat />}
        <Toaster position="bottom-center" reverseOrder={false} />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T55KLQJJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <NextTopLoader color="#fcab14" showSpinner={false} />
        <WhatsappSticker />
        {children}
      </body>
    </html>
  );
}
