import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FaithCircle Hospital | Abeokuta, Ogun State",
  description:
    "FaithCircle Hospital — compassionate, world-class healthcare in Olorunsogo, Abeokuta, Ogun State. Open 24 hours. Emergency, diagnostics, maternity, surgery and more.",
  keywords: "hospital Abeokuta, FaithCircle Hospital, Olorunsogo hospital, Ogun State healthcare",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
