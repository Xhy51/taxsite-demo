import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "胡威宝会计税务所 - 美国公司注册与报税服务",
  description: "专业美国公司注册、报税、税务咨询服务，为全球华人提供合规解决方案。"
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
