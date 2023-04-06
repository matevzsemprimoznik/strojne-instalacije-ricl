"use client";
import React from "react";
import { ReCaptchaProvider } from "next-recaptcha-v3";

const Providers = ({ children }: {children: any}) => {
    return (
        <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
            {children}
        </ReCaptchaProvider>
    );
};

export default Providers;