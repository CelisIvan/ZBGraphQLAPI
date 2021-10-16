import { ObjectType, Field } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@ObjectType()
@Entity()
export class Product extends BaseEntity{
    @Field()
    @PrimaryGeneratedColumn()
    id:number

    @Field()
    @Column()
    name:string;

    @Field()
    @Column()
    sku:string;

    @Field()
    @Column()
    price:number;

    @Field()
    @CreateDateColumn()
    createdAt: Date;

    @Field()
    @UpdateDateColumn()
    updatedAt: Date;
}