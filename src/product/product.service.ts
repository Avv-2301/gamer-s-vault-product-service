import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products = [{id: 1, name:"GTA 5"}]

    getAllProducts(){
        return this.products;
    }
}
