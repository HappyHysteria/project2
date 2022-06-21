import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {

  subCategories: any[] = []
  catId: any;

  constructor(private dataService: DataService, private activateRoute: ActivatedRoute, private router: Router) {
    this.catId = this.activateRoute.snapshot.paramMap.get('catId')
   }

  ngOnInit(): void {
    this.dataService.getSubCategoryByCatId(this.catId).subscribe(response =>{
      this.subCategories = response.data
    })
    
  }

  onButtonClicked(subId: number){
    this.router.navigate(['/products/s', subId])
  }

}
