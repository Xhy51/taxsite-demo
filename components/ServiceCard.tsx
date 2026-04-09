import { Building, FileText, Users } from 'lucide-react';

const iconMap = {
  '公司注册': Building,
  '报税服务': FileText,
  '税务咨询': Users,
};

export default function ServiceCard({ title, description }: { title: string; description: string }) {
  const Icon = iconMap[title as keyof typeof iconMap] || Building;
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Icon size={48} className="text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
