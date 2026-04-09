import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '关于我们 - 胡威宝会计税务所',
  description: '了解胡威宝会计税务所的专业税务服务团队，帮助全球华人企业在美国成功。',
  keywords: '税务服务, 公司注册, 报税, 咨询',
};

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">关于我们</h1>
      <p className="text-lg mb-4">胡威宝会计税务所是一家专业的税务服务公司，致力于为全球华人提供美国公司注册、报税和税务咨询服务。我们拥有经验丰富的团队，确保您的业务合规并优化税务策略。</p>
      <p className="text-lg">我们的使命是帮助您在美国市场中取得成功。</p>
    </div>
  );
}