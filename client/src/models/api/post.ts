import { PostType } from "../../enums/enums";




export interface UserPost {
    bookTitle: string;
    userName: string;
    content?: string;
    modifiedDatestring?: string;
    comments: PostComment[],
    postType: PostType
}



export interface PostComment {
    userName: string;
    content: string;
}