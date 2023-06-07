import { NextResponse } from 'next/server';
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.NEXT_PUBLIC_BACKEND_URL);

export async function GET() {

  try{
    const data = await pb.collection('articles').getList(1, 50, {});
    console.log(data);
    return NextResponse.json({status:200, ...data});
    // return NextResponse.json({status:200});
  } catch(e) {
    console.log(e);
    return NextResponse.json(e);
  }

}
