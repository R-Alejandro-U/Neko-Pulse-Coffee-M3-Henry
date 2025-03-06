import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Credential } from "./credentials";
import { Appointment } from "./appointmens";

@Entity({
    name: "users",
})

export class User{
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({type: "varchar", length: 150, nullable: false})
    name: string;
    
    @Column({type: "varchar", unique: true, nullable: false})
    email: string;
    
    @Column({type: "date", nullable: false})
    birthdate: Date;
    
    @Column({type: "integer", unique: true, nullable: false})
    nDni: number;
    
    @CreateDateColumn()
    createDt?: Date;
    
    @UpdateDateColumn()
    updateDt?: Date;

    @OneToOne(() => Credential)
    @JoinColumn()
    credentials: Credential;

    @OneToMany(() => Appointment, (appointments) => appointments.user)
    appointments: Appointment[];
};