import "../styles/globals.css";

export const metadata = {
  title: "FANZA Sample",
  description: "スマホだけで作る Next.js サイト"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
