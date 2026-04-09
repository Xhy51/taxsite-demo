import type { Metadata } from 'next';
import ServiceCard from '@/components/ServiceCard';

export const metadata: Metadata = {
  title: '服务 - 胡威宝会计税务所',
  description: '探索我们的税务服务：公司注册、报税服务和税务咨询。',
  keywords: '公司注册, 报税, 税务咨询',
};

export default function Services() {
  const services = [
    { title: '公司注册', description: '快速高效的美国公司注册服务。' },
    { title: '报税服务', description: '专业的报税和税务申报。' },
    { title: '税务咨询', description: '个性化税务咨询和规划。' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">我们的服务</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  );
}