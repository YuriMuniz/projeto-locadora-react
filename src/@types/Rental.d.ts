declare interface IRental{
    id: number;
    movies: Movie[],
    user?: User,
    returnDate: Date;
	createdDate: Date;
	updatedDate: Date;
	isRenewed: boolean;
    returnDateRenewed: Date;
    isReturned: boolean;
    countRenewed;
}