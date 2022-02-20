import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-original',
  templateUrl: './original.component.html',
  styleUrls: ['./original.component.css']
})
export class OriginalComponent implements OnInit {
  slides:Array<any>=
  [
    {id: 1, img: "./static/images/laptop/1.png"},
    {id: 2, img: "./static/images/laptop/2.jpg"},
    {id: 3, img: "./static/images/laptop/3.jpg"},
    {id: 4, img: "./static/images/laptop/4.png"},
    {id: 5, img: "./static/images/laptop/1.png"},
    {id: 6, img: "./static/images/laptop/2.jpg"},
    {id: 7, img: "./static/images/laptop/3.jpg"},
    {id: 8, img: "./static/images/laptop/4.png"}
  ];
  slides2:Array<any>=
  [
    {id: 1, img: "./static/images/products/13.png", name:'iPhone 12', price:'₹36346.00'},
    {id: 2, img: "./static/images/products/13-mini.png" , name:'iPhone 12', price:'₹35646.00'},
    {id: 3, img: "./static/images/products/12-mini.png" , name:'iPhone 11', price:'₹36300.00'},
    {id: 4, img: "./static/images/products/12.png", name:'iPhone 11', price:'₹25346.00'},
    {id: 5, img: "./static/images/products/13.png", name:'iPhone 12', price:'₹16346.00'},
    {id: 6, img: "./static/images/products/13-mini.png", name:'iPhone 14', price:'₹30006.00'},
    {id: 7, img: "./static/images/products/12-mini.png", name:'iPhone 13', price:'₹24546.00'},
    {id: 8, img: "./static/images/products/12.png", name:'iPhone 11', price:'₹12346.00'}
  ];
  customOptions: OwlOptions = {
    autoplay: true,
    autoplayHoverPause: true,
    items: 1,
    nav: false,
    dots: true,
    loop: true    
  }
  customOptions2: OwlOptions = {
    autoplay: true,
    autoplayHoverPause: true,
    items: 4,
    nav: false,
    dots: true,
    loop: true    
  }
  constructor(private titleService: Title) { 
    titleService.setTitle("Attryb Tech: Original");
  }
  ngOnInit(): void {
  }

}
