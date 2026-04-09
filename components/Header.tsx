'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">胡威宝会计税务所</h1>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600">首页</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">关于我们</Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-600">服务</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">联系我们</Link>
        </nav>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">首页</Link>
          <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">关于我们</Link>
          <Link href="/services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">服务</Link>
          <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">联系我们</Link>
        </div>
      )}
    </header>
  );
}
