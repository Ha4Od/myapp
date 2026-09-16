import { Module } from '@nestjs/common';
import {ProductModel, ProductModelSchema} from "./product.model";
import {MongooseModule} from "@nestjs/mongoose";
import {ProductService} from "./product.service";
import {Product, ProductSchema} from "./product.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: Product.name,
            schema: ProductModelSchema
        }]),
    ],
    controllers: [],
    providers: [ProductService],
    exports: [ProductService],
})
export class ProductModule {}
