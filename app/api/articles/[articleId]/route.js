import { NextResponse } from 'next/server';
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.NEXT_PUBLIC_BACKEND_URL);

export async function GET(request, {params}) {

  try{
    const data = await pb.collection('articles').getOne(params.articleId, {});
    console.log(data);
    return NextResponse.json({status:200, ...data});
    // return NextResponse.json({status:200});
  } catch(e) {
    console.log(e);
    return NextResponse.json(e);
  }

}
