import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any[] = []
  catId: any;
  subId: any;

  constructor(private dataService: DataService, private activateRoute: ActivatedRoute ) {
    this.catId = this.activateRoute.snapshot.paramMap.get('catId')
    this.subId = this.activateRoute.snapshot.paramMap.get('subId')
   }

  ngOnInit(): void {
    this.dataService.getProductsByCatId(this.catId).subscribe(response =>{
      this.products = response.data
    })
    
    this.dataService.getProductsBySubId(this.subId).subscribe(response =>{
      this.products = response.data
    })
  }

}
