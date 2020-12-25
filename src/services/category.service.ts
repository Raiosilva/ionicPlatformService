import { Injectable } from '@angular/core';
import { Category } from 'src/models/Category.dto';
import { BaseService } from './base.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService<Category> {

  constructor(public http: HttpService) { 
    super('category', http);
  }
}
