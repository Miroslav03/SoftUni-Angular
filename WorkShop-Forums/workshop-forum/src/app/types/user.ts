export interface User {
    "themes": string[];
    "posts": string[];
    "_id": string;
    "tel": string;
    "email": string;
    "username": string;
    "password": string;
    "created_at": string;
    "updatedAt": string;
    "__v": number;
}

export interface UserForAuth {
    id:string,
    firstName: string,
    emial: string,
    phone: string,
    password: string
}
