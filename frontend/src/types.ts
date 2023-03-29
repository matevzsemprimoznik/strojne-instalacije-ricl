export interface Project {
    id: number;
    attributes: {
        title: string;
        description: string;
        image: string
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