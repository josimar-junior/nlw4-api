import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import Survey from "./Survey";
import User from "./User";

@Entity('surveys_users')
class SurveyUser {

    @PrimaryColumn()
    readonly id: string;

    @ManyToOne(() => Survey)
    @JoinColumn({name: 'survey_id'})
    survey: Survey;

    @ManyToOne(() => Survey)
    @JoinColumn({name: 'user_id'})
    user: User;

    @Column()
    value: number;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export default SurveyUser;