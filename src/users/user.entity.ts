import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 96,
        nullable: false,
    })
    firstName: string;

    @Column({
        type: 'varchar',
        length: 96,
        nullable: true,
    })
    lastName: string;

    @Column({
        type: 'varchar',
        length: 96,
        nullable: false,
        unique: true,
    })
    email: string;

    @Column({
        type: 'varchar',
        length: 96,
        nullable: false,
    })
    password: string;
}
/**
 *  always note that your entity classes should match your DTO classes.
 * If there is a mismatch between the validations that you are doing inside your DTO and the properties
 * that you're defining in your entity classes, there could be a problem.
 */