import React from "react"
import CardWrapper from "@/components/auth/CardWrapper"
import { RegisterForm } from "@/components/auth/RegisterForm"

const register = () => {
    return (
        <CardWrapper 
        title = "Register Now"
        label = "sign-up as a care giver"
        backButtonHref="/login"
        backButtonLabel="Login as a user"
        children={<RegisterForm />}
        />
        //     {/* <RegisterForm /> */}
        // // </CardWrapper>
    )
}

export default register