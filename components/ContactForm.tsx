// filepath: components/ContactForm.tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, '姓名必填'),
  email: z.string().email('无效邮箱'),
  message: z.string().min(10, '消息至少10字符'),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const subject = encodeURIComponent('网站咨询');
    const body = encodeURIComponent(`姓名: ${data.name}\n邮箱: ${data.email}\n\n${data.message}`);
    window.location.href = `mailto:henryhuea@aol.com?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block" htmlFor="name">姓名</label>
        <input id="name" {...register('name')} className="w-full p-2 border" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div>
        <label className="block" htmlFor="email">邮箱</label>
        <input id="email" type="email" {...register('email')} className="w-full p-2 border" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <label className="block" htmlFor="message">消息</label>
        <textarea id="message" {...register('message')} className="w-full p-2 border" rows={4} />
        {errors.message && <p className="text-red-500">{errors.message.message}</p>}
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">提交</button>
    </form>
  );
}