import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./users";
import  Status from "../interfaces/IAppointment";

@Entity({
    name: "appointments"
})
export class Appointment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "date", nullable: false})
    date: Date;

    @Column({type: "varchar", length: 5, nullable: false})
    time: string;

    @ManyToOne(() => User, (user) => user.appointments, {nullable: false})
    user: User;

    @Column({type: "varchar", length: 9, default: Status.Active, nullable: false})
    status: Status;
}