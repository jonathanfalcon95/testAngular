import { Component, OnInit } from '@angular/core';
import { GlobalService } from "../../providers/global.service";
import { HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  items: any;
  posts: any;
  config: any;
  collection = { count: 100, data: [] };
  constructor(public globalService: GlobalService) {
    this.items = ['London', 'Madrid', 'Barcelona', 'Paris', 'example', 'example'];

    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
  ngOnInit() {

    this.globalService.getModel("/posts").then(
      result => {
        console.log(result);
        let data;
        data = result;
        this.posts = result;
        console.log(this.posts);

      },
      err => {
        console.log(err);
        //this.loader.dismiss();
      }
    );

  }

}
