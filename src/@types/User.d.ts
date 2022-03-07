declare interface IUser {
    id?: number;
    name: string;
    email: string;
    gender: string;
    cpf: string;
    birthDate: string;
    createdDate?: Date;
    updateDate?: Date;
    situation?: string;
    userProfiles?: IUserProfile[];
}