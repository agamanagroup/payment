import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Payment Information | Agamana Developers",
  description:
    "Securely make payments to Agamana Developers using the bank account details below or scan the UPI QR code.",
  keywords: [
    "Agamana Developers",
    "payment information",
    "bank details",
    "UPI",
    "HDFC Bank",
  ],
  openGraph: {
    title: "Payment Information | Agamana Developers",
    description:
      "Bank account details and UPI QR code for payments to Agamana Developers.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#01473A",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
