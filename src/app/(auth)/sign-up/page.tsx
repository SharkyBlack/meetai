

import React from "react";
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { SingUpView } from '@/modules/auth/ui/views/sign-up-view'


const Page = async () => {
  const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (!!session) {
      redirect("/");
    }
  return (
    <div>
        <SingUpView/>
    </div>
  )
}

export default Page

// http://localhost:3000/auth/sign-up
