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

export interface Comment{
    id: number;
    attributes: {
        author: string;
        date: string;
        comment: string;
    }
}