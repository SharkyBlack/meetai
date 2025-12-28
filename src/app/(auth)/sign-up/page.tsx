import { Card } from '@/components/ui/card'
import { SingUpView } from '@/modules/auth/ui/views/sign-up-view'
import React from 'react'

const Page = () => {
  console.log("SIGn up page")
  return (
    <div>
        <SingUpView/>
    </div>
  )
}

export default Page

// http://localhost:3000/auth/sign-up
