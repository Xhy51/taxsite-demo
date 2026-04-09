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

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert('感谢您的咨询！');
      } else {
        alert('提交失败，请重试。');
      }
    } catch (error) {
      alert('提交失败，请重试。');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block">姓名</label>
        <input {...register('name')} className="w-full p-2 border" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div>
        <label className="block">邮箱</label>
        <input {...register('email')} className="w-full p-2 border" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <label className="block">消息</label>
        <textarea {...register('message')} className="w-full p-2 border" rows={4} />
        {errors.message && <p className="text-red-500">{errors.message.message}</p>}
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">提交</button>
    </form>
  );
}