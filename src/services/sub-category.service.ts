import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SubCategory } from 'src/models/SubCategory.dto';
import { BaseService } from './base.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService extends BaseService<SubCategory> {

  constructor(public http: HttpService) {
    super('subCategory', http);
  }

  getAllByCategory(categoryUid: string) {
    return this.http.get(`${environment.url_api}/category/${categoryUid}/subCategorys`);
  }
}
