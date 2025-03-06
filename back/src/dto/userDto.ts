export interface userDto {
    name: string,
    email: string,
    birthdate: Date,
    nDni: number,
    password: string,
    username: string,
};

export interface userLoginDto {
    id: number,
    name: string,
    email: string,
    birthdate: Date,
    nDni: number,
}


export interface userLoginResDto {
    login: boolean,
    user: userLoginDto;
}