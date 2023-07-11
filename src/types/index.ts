import {i18n} from "@/i18n/config";
import translations from "@/i18n/translations/sl";
import {ReactNode} from "react";

interface Image {
    id: number,
    attributes: {
        formats: {
            small: {
                url: string;
            },
            medium: {
                url: string;
            }
        }
    }
}

export interface ContactMessage {
    token: string;
    email: string;

    message: string;
    subject: string;
    accepted: boolean;
}

export type localeType = typeof i18n['locales'][number]
export type dictionaryType = typeof translations

export interface BasicPageProps {
    params: {
        locale: localeType;
    }
}

export interface BasicLayoutProps extends BasicPageProps {
    children: ReactNode;
}