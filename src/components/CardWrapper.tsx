"use client";

import BackButton from "./BackButton";
import AuthHeader from "../app/(auth)/_components/AuthHeader";
import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { CardWrapperProps } from "@/types/CardWrapperTypes";

const CardWrapper = ({
  label,
  title,
  backButtonLabel,
  backButtonHref,
  children,
}: CardWrapperProps) => {
  return (
    <Card>
      <CardHeader>
        <AuthHeader label={label} title={title} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
