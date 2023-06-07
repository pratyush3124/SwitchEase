"use client"

import PocketBase from 'pocketbase';
import { useEffect } from 'react';

const pb = new PocketBase(process.env.NEXT_PUBLIC_BACKEND_URL);

export default function Test() {
  console.log("fd")
  useEffect(()=>{
    console.log("fdsa")
  }, [])
}