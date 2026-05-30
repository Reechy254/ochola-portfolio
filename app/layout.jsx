import "./globals.css";

export const metadata = {
  title: "Richard Ochola Portfolio",
  description:
    "Portfolio for Richard Ochola, software developer, game development enthusiast, and blockchain explorer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
