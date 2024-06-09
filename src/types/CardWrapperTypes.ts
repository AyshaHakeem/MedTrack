import React from "react";

export interface CardWrapperProps {
  label: string;
  title: string;
  backButtonLabel: string;
  backButtonHref: string;
  children: React.ReactNode;
}

export interface BackButtonProps {
  label: string;
  href: string;
}

export interface AuthHeaderProps {
  title: string;
  label: string;
}
