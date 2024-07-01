import React from "react";
import CardWrapper from "../../../components/CardWrapper";
import { LoginForm } from "../_components/login-form";

const register = () => {
  return (
    <CardWrapper
      title="Login to MedTrack"
      label="Care giver login"
      backButtonHref="/auth/register"
      backButtonLabel="Sign Up as a user"
      children={<LoginForm />}
    />
  );
};

export default register;
