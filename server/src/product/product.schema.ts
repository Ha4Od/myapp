import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true })
export class Product {
    @Prop({ required: true, trim: true })
    title: string;

    @Prop({ required: true, min: 0 })
    price: number;

    @Prop([String])
    tags: string[];
}



export const ProductSchema = SchemaFactory.createForClass(Product);