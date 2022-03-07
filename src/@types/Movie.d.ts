declare interface IMovie {
    id?: number;
    name: string;
    genre: string;
    director: string;
    amount: number;
    amountRented?: number;
    createdDate?: Date;
    updateDate?: Date;
    situation?: string;
}