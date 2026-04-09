import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // 验证数据（可选，因为前端已验证）
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // CSV 行
    const csvLine = `${name},${email},${message}\n`;

    // 目录路径
    const dir = path.join(process.cwd(), 'submissions');

    // 创建目录如果不存在
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // 文件路径
    const filePath = path.join(dir, 'contacts.csv');

    // 如果文件不存在，添加 CSV 头
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '姓名,邮箱,消息\n');
    }

    // 追加到文件
    fs.appendFileSync(filePath, csvLine);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving contact:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}