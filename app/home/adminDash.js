"use client"

import { useRouter } from 'next/navigation';
import PocketBase from 'pocketbase';
import useSWR from "swr";

import { useEffect, useState } from "react"

const pb = new PocketBase(process.env.NEXT_PUBLIC_BACKEND_URL);

async function getOrg(){
  const org = pb.collection("orgs").getOne("rfz4nyknaj3dxi0")
  console.log(org);
  return org;
}

export default function AdminDash() {

  const [org, setOrg] = useState();

  useEffect(()=>{
    fetch("/api/orgs/rfz4nyknaj3dxi0").then(data=>{
      if (data.status==200){
        console.log(data);
      } else {
        console.log(data);
      }
    })
  }, [])

  return (
    <div>
      <div>
        Admin Dashboard
      </div>
      <div>
        Hello, {pb.authStore.model.name}
      </div>
      <div>
        Organization : {pb.authStore.model.org}
      </div>
      <div>
        Raised Tickets till now.
        { }
      </div>
    </div>
  )
}
