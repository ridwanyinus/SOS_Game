import "./globals.css";

export const metadata = {
  title: "SOS GAMING APP",
  description: "Survival at all cost game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
