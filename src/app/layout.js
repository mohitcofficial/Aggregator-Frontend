import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import TawkToChat from "@/utils/TalkToChat";

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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        {/* Google Tag Manager */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Q4CT4BWRJJ"
          id="my-script1"
        />
        <Script id="google-analytics">
          {`
             window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-Q4CT4BWRJJ');

          `}
        </Script>
        <Script
          id="my-script2"
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16609409855"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-16609409855');

          `}
        </Script>
      </head>
      <body
        className={poppins.className}
        style={{ width: "100%", maxWidth: "100%" }}
      >
        {/* <Script src="//js-na1.hs-scripts.com/45211481.js" /> */}
        {<TawkToChat />}
        <Script src="https://smtpjs.com/v3/smtp.js" async />
        <Toaster position="bottom-center" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
