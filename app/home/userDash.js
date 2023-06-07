"use client"

import { useRouter } from 'next/navigation';
import PocketBase from 'pocketbase';

import { useState } from "react"

const pb = new PocketBase(process.env.NEXT_PUBLIC_BACKEND_URL);

export default function UserDash() {
  return (
    <div>
      <div>
        User Dashboard
      </div>
      <div>
        Hello {pb.authStore.model.name}
      </div>
    </div>
  )
}