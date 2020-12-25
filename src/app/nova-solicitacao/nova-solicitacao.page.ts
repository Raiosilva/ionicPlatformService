import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/models/Category.dto';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-nova-solicitacao',
  templateUrl: './nova-solicitacao.page.html',
  styleUrls: ['./nova-solicitacao.page.scss'],
})
export class NovaSolicitacaoPage implements OnInit {

  categories: Array<Category> = new Array<Category>();

  constructor(
    private service: CategoryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadData();
  }

  async loadData(): Promise<void> {
    const result = await this.service.getAll();
    if (result.success) {
      this.categories = result.data as Array<Category>;
    }
  }

  selectCategory(category: Category): void {
    this.router.navigate(['/tabs/tabSolicitacoes/nova-solicitacao-sub-categoria/'], { state: category });
  }
}
