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

export interface Counter {
    attributes: {
        uporabniki: number;
        projekti: number;
        leta_izkusenj: number;
    }
}

export interface ContactMessage {
    token: string;
    email: string;

    message: string;
    subject: string;
}