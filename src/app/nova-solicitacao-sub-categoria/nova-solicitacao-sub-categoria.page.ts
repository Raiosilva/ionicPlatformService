import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Category } from 'src/models/Category.dto';
import { SubCategory } from 'src/models/SubCategory.dto';
import { SubCategoryService } from 'src/services/sub-category.service';

@Component({
  selector: 'app-nova-solicitacao-sub-categoria',
  templateUrl: './nova-solicitacao-sub-categoria.page.html',
  styleUrls: ['./nova-solicitacao-sub-categoria.page.scss'],
})
export class NovaSolicitacaoSubCategoriaPage implements OnInit {

  category: Category = new Category();
  subCategories: Array<SubCategory> = new Array<SubCategory>();

  constructor(
    private router: Router,
    private service: SubCategoryService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    try {
      const { extras } = this.router.getCurrentNavigation();
      if (extras && extras.state) {
        this.category = extras.state as Category;
        this.loadData();
      } else {
      this.navCtrl.navigateRoot('/tabs');
      }
    } catch (error) {
      this.navCtrl.navigateRoot('/tabs');
    }
  }

  async loadData(): Promise<void> {
    const result = await this.service.getAllByCategory(this.category.uid);
    if (result.success) {
      this.subCategories = result.data as Array<SubCategory>;
    }
  }

  selectSubCategory(subCategory: SubCategory): void {
    this.router.navigate(['/tabs/tabSolicitacoes/nova-solicitacao-perguntas/'], { state: subCategory });
  }
}
