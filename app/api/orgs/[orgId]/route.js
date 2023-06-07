import { NextResponse } from 'next/server';
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.NEXT_PUBLIC_BACKEND_URL);
 
export async function GET(request, {params}) {

  console.log(params.orgId)

  try{
    const data = await pb.collection("orgs").getOne(params.orgId);
    return NextResponse.json({status:200, ...data});
  } catch(e) {
    console.log(e);
    return NextResponse.json(e);
  }

}
