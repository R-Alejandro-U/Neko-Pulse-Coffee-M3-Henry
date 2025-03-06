interface IUser {
    id: number,
    name: string,
    email: string,
    birthdate: Date,
    nDni: number,
    credentialsId: number,
};

interface IUserResponse{
    data: IUser[],
    message: string,
}

export {IUser, IUserResponse};