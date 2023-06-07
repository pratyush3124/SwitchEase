"use client"

import { useRouter } from 'next/navigation';
import PocketBase from 'pocketbase';

import { useEffect, useState } from "react"
import AdminDash from './adminDash';
import UserDash from './userDash';

const pb = new PocketBase(process.env.NEXT_PUBLIC_BACKEND_URL);

export default function Home() {

  const router = useRouter()

  if (!pb.authStore.isValid) {
    router.push("/login")
    return <div>asdf</div>
  }

  return (<div>
    {pb.authStore.model.role=="admin" ? <AdminDash /> : <UserDash />}
  </div>
  )
}
