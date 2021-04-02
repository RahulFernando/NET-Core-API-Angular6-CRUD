import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { Product } from "../entities/product";
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {
    private BASE_URL: string = 'http://localhost:5000/api/product/';

    constructor(
        private http: Http
    ){}

    findAll(): Observable<Product[]>{
        return this.http.get(this.BASE_URL + 'findall')
        .pipe(map((res: Response) => res.json()));
    }

    find(id: string): Observable<Product>{
        return this.http.get(this.BASE_URL + 'find/' + id)
        .pipe(map((res: Response) => res.json()));
    }

    delete(id: string): Observable<string> {
        return this.http.delete(this.BASE_URL + 'delete/' + id)
        .pipe(map((res: Response) => res.json()));
    }

    create(product: Product): Observable<Product> {
        return this.http.post(this.BASE_URL + 'create', product)
        .pipe(map((res: Response) => res.json()));
    }

    update(product: Product): Observable<Product> {
        return this.http.put(this.BASE_URL + 'update', product)
        .pipe(map((res: Response) => res.json()));
    }
}