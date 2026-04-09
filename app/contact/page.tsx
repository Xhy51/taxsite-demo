import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: '联系我们 - 胡威宝会计税务所',
  description: '联系胡威宝会计税务所获取税务服务咨询。',
  keywords: '联系, 税务咨询',
};

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">联系我们</h1>
      <p className="mb-4">联系人：胡威宝 | 地址：729B Sacramento St., #6, San Francisco, CA 94108 | 电话：415-819-1248 | 传真：877-496-9298 | 电子邮箱：henryhuea@aol.com</p>
      <ContactForm />
    </div>
  );
}