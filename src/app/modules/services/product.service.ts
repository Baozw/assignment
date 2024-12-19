import { Injectable } from "@angular/core";
import { ProductModule } from '../product/product.module';
import { HttpClient } from "@angular/common/http";
import { tap, map } from 'rxjs/operators';
import { Product } from "../product/models/product.model";

@Injectable()
export class ProductService {
    private apiUrl = 'http://localhost:3000';
    constructor(private http: HttpClient) {
    }
    getProduct(productId: string) {

        return this.http.get(this.apiUrl + '/products/' + productId)
            .pipe(
                tap((res: Product) => {
                    //console.log(res);
                }));
    }
    getProducts() {
        return this.http.get(this.apiUrl + '/products')
            .pipe(
                tap((res: Product[]) => {
                    //console.log(res);
                }));
    }



}