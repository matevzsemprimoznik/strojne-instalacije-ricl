import {i18n} from "@/i18n/config";
import translations from "@/i18n/translations/sl";

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
export interface Project {
    id: number;
    attributes: {
        title: string;
        description: string;
        images: {
            data: Image[];
        }
    }
}

export interface Comment {
    id: number;
    attributes: {
        author: string;
        date: string;
        comment: string;
    }
}

export interface ContactMessage {
    token: string;
    email: string;

    message: string;
    subject: string;
}

export type localeType = typeof i18n['locales'][number]
export type dictionaryType = typeof translations