export interface Project {
    id: number;
    attributes: {
        title: string;
        description: string;
    }
}

export interface Comment{
    id: number;
    attributes: {
        name: string;
        surname: string;
        comment: string;
    }
}