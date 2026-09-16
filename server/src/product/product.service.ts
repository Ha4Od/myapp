import { Injectable } from '@nestjs/common';
import {ProductDocument, ProductModel} from "./product.model";
import {InjectModel} from "@nestjs/mongoose";
import {CreateProductDto} from "./dto/create-product.dto";
import {Product} from "./product.schema";
import {Model} from "mongoose";

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name)
        private readonly productModel: Model<ProductDocument>,
    ) {
    }

    async create(dto: CreateProductDto) {
        return this.productModel.create(dto);
    }

    async findById(id: string) {
        return this.productModel.findById(id).exec();
    }

    async deleteById(id: string) {
        return this.productModel.findByIdAndDelete(id).exec();
    }
}

    // async updateById(id: string, dto: CreateProductDto) {
    //     return this.productModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    // }