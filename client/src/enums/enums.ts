


export enum PostType {
    StartedReading,
    DNF,
    FinishedReading, 
    Shared
}


export const postTypeToMessage = (postType: PostType): string =>
{
    switch(postType){
        case PostType.StartedReading: return "has started reading"; break;
        case PostType.DNF: return "has DNF'd"; break;
        case PostType.FinishedReading: return "has finished reading"; break;
        case PostType.Shared: return "has shared"; break;
    }
}