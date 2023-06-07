import { NextResponse } from 'next/server';
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.NEXT_PUBLIC_BACKEND_URL);
 
export async function GET() {
  const data = await pb.collection("orgs").getOne("rfz4nyknaj3dxi0")
 
  return NextResponse.json(data);
}