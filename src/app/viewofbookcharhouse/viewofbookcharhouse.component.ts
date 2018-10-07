import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IceandfireHttpserviceService,  } from '../iceandfire-httpservice.service';
import { Observable } from 'rxjs/Observable';
    import 'rxjs/add/operator/catch';
    import 'rxjs/add/operator/catch';


@Component({
  selector: 'app-viewofbookcharhouse',
  templateUrl: './viewofbookcharhouse.component.html',
  styleUrls: ['./viewofbookcharhouse.component.css']
})
export class ViewofbookcharhouseComponent implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    console.log('Home destructor is called');
  }
  public res1 = [];
  public res2 = [];
  public res3 = [];
  public res11 = [];
  public res22 = [];
  public res33 = [];
  constructor(public iceandfireservice: IceandfireHttpserviceService) {
    console.log('home constructor is called');
   }

  ngOnInit() {
    console.log('ngonInit() is called');
    this.iceandfireservice.getbook().subscribe(
      data => {
        console.log('logging into book data');
        for (const d of data) {
          this.res1.push(d);
        }
        for (let x = 0; x < 10; x++) {
         this.res11[x] = data[x]['name'];
         this.res22[x] = data[x]['name'];

      }
      this.res22.sort();
    },

      error => {
        console.log('some error occurred!');
        console.log(error.errorMessage);
      }
    );

    this.iceandfireservice.gethouse().subscribe(
      data => {
        console.log('logging into house data');
      for (const d of data) {
      this.res2.push(d['name']);
      }

      for (let x = 0; x < 10; x++) {
      this.res11[x + 10] = data[x].name;
      this.res22[x + 10] = data[x].name;

      }
  },

      error => {
        console.log('some error occurred!');
        console.log(error.errorMessage);
      }
    );

    this.iceandfireservice.getcharacters().subscribe(
      data => {
        console.log('logging into characters data');
        for (const d of data) {
          if (d['name'] == '') {
          this.res3.push('Please Click to know details!');
          } else {
             this.iceandfireservice.resultset3.push(d['aliases']);
          }
      }

      for (let x = 0; x < 10; x++) {
      this.res11[x + 20] = data[x].aliases[0];
      this.res22[x + 20] = data[x].aliases[0];

    }
  }

  ,

      error => {
        console.log('some error occurred!');
        console.log(error.errorMessage);
      }
    );
    this.iceandfireservice.resultset1 = this.res1;
    this.iceandfireservice.resultset2 = this.res2;
    this.iceandfireservice.resultset3 = this.res3;
   // console.log(this.res11)
   // console.log(this.res22)

}
  public passIndexValue(index): any {
    console.log(index);
    this.iceandfireservice.indexValueOf = index;
  }
}
