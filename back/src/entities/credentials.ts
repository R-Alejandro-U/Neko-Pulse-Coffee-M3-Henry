import { Column, Entity, PrimaryGeneratedColumn,  } from "typeorm";


@Entity({name: "credentials",})
export class Credential{
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({type: "varchar", unique: true, nullable: false})
    username: string;

    @Column({type: "varchar", nullable: false})
    password: string;
};