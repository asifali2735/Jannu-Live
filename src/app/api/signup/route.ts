import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // TODO: Handle signup logic here
  const body = await request.json();
  console.log(body);
  return NextResponse.json({ success: true, message: 'Signup endpoint reached' });
}
