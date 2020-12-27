import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/models/Question.dto';
import { SubCategory } from 'src/models/SubCategory.dto';
import { QuestionsService } from 'src/services/questions.service';

@Component({
  selector: 'app-nova-solicitacao-perguntas',
  templateUrl: './nova-solicitacao-perguntas.page.html',
  styleUrls: ['./nova-solicitacao-perguntas.page.scss'],
})
export class NovaSolicitacaoPerguntasPage implements OnInit {

  subCategory: SubCategory = new SubCategory();
  questions: Array<Question> = new Array<Question>();

  constructor(
    private service: QuestionsService,
    private router: Router
  ) { }

  ngOnInit() {
    try {
      const { extras } = this.router.getCurrentNavigation();
      if (extras && extras.state) {
        this.subCategory = extras.state as SubCategory;
        this.loadData();
      } else {
      this.router.navigateByUrl('/tabs');
      }
    } catch (error) {
      this.router.navigateByUrl('/tabs');
    }
  }

  async loadData(): Promise<void> {
    const result = await this.service.getAllQuestions(this.subCategory.uid);
    if (result.success) {
      this.questions = result.data as Array<Question>;
      console.log('questions: ', this.questions);
    }
  }

}
