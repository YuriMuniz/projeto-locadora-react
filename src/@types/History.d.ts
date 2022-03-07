declare interface IHistory {
    id: number;
    movie: IMovie;
    user: IUser;
    isRenewed: boolean;
    createdDate: Date;
    updatedDate: Date;
}