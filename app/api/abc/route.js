import { NextResponse } from 'next/server';
import {app} from '@/firebase';

export async function GET() {

  console.log(app);
  const data = {}
  return NextResponse.json(data);
}