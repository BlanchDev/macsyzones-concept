import localFont from "next/font/local";
import "./global.css";
import "./CodeHighlight.css";

const poppins = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});
const sf = localFont({
  src: "./fonts/SF.ttf",
  variable: "--font-sf",
  weight: "100 900",
});
const arco = localFont({
  src: "./fonts/ARCO.ttf",
  variable: "--font-arco",
  weight: "100 900",
});
const spartan = localFont({
  src: "./fonts/LeagueSpartan-Bold.otf",
  variable: "--font-spartan",
  weight: "100 900",
});

export const metadata = {
  title: "Macsy Zones",
  description: "Enhance your MacOS workflow. Free and open source!",
  icons: {
    icon: "/logo4.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        suppressHydrationWarning={true}
        className={`${poppins.variable} ${sf.variable} ${arco.variable} ${spartan.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
