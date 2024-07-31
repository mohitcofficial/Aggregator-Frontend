import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import TawkToChat from "@/utils/TalkToChat";
import { GoogleTagManager } from "@next/third-parties/google";

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
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </head>
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

        {children}
      </body>
    </html>
  );
}
