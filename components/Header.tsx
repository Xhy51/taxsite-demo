'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">胡威宝会计税务所</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="/taxsite-demo/" className="text-gray-700 hover:text-blue-600">首页</a>
          <a href="/taxsite-demo/about" className="text-gray-700 hover:text-blue-600">关于我们</a>
          <a href="/taxsite-demo/services" className="text-gray-700 hover:text-blue-600">服务</a>
          <a href="/taxsite-demo/contact" className="text-gray-700 hover:text-blue-600">联系我们</a>
        </nav>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <a href="/taxsite-demo/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">首页</a>
          <a href="/taxsite-demo/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">关于我们</a>
          <a href="/taxsite-demo/services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">服务</a>
          <a href="/taxsite-demo/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">联系我们</a>
        </div>
      )}
    </header>
  );
}
