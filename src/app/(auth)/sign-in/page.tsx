import { Card } from "@/components/ui/card";
import { SingInView } from "@/modules/auth/ui/views/sign-in-view";
import React from "react";
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!!session) {
    redirect("/");
  }
  return <SingInView />;
};

export default Page;

// http://localhost:3000/sign-in
