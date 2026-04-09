import Link from 'next/link';

export default function Hero() {
  return (
    <section className="w-full bg-gray-100 py-24 text-center">
      <h1 className="text-4xl font-bold mb-4">
        胡威宝会计税务所 - 专业美国公司注册与报税服务
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        为全球华人提供高效、安全、合规的美国税务解决方案。
      </p>

      <Link
        href="/contact"
        className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        立即咨询
      </Link>
    </section>
  );
}
