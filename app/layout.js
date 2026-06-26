import './globals.css';

export const metadata = {
  title: '測測你是哪種天才麻糬',
  description: '一個軟Q可愛的麻糬心理測驗，找出最像你的那顆麻糬！',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}