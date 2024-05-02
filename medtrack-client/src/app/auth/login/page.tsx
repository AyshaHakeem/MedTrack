import React from "react"
import CardWrapper from "@/components/auth/CardWrapper"
import { LoginForm } from "@/components/auth/LoginForm"

const register = () => {
    return (
        <CardWrapper 
        title = "Login to MedTrack"
        label = "Care giver login"
        backButtonHref="/login"
        backButtonLabel="Sign Up as a user"
        children={<LoginForm />}
        />
    )
}

export default register