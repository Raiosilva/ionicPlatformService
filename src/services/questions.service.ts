import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Question } from 'src/models/Question.dto';
import { BaseService } from './base.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService extends BaseService<Question>  {

  constructor(public http: HttpService) {
    super('question', http);
  }

  getAllQuestions(subCategoryUid: string) {
    return this.http.get(`${environment.url_api}/subcategory/${subCategoryUid}/questions`);
  }
}
