import { Component, OnInit, OnDestroy, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IceandfireHttpserviceService,  } from '../iceandfire-httpservice.service';
import { Observable } from 'rxjs/Observable';
    import 'rxjs/add/operator/catch';
    import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-detailofanycard',
  templateUrl: './detailofanycard.component.html',
  styleUrls: ['./detailofanycard.component.css']
})
export class DetailofanycardComponent implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    console.log('Details destructor is called!');
  }
  constructor(public route: Router, public acroute: ActivatedRoute, public detailshttpservice: IceandfireHttpserviceService) {
    console.log('Details Constructor is called!');
   }
   public resd1;
   public resd2;
   public resd3;
   public ret1;
   public ret2;
   public ret3;

  public urlOfPage;
  public selectedIndexValue;
  ngOnInit() {

      console.log('details ngOnInit() is called!');
      console.log('ngonInit() is called');
      this.urlOfPage = this.route.url;
      this.selectedIndexValue = this.detailshttpservice.indexValueOf;
      this.detailshttpservice.getbook().subscribe(
        data => {
              console.log('logging into book data');
              this.ret1 = data[this.selectedIndexValue];
              this.resd1 = Object.keys(this.ret1).length;

        },

        error => {
          console.log('some error occurred!');
          console.log(error.errorMessage);
        }
      );

      this.detailshttpservice.gethouse().subscribe(
        data => {
          console.log('logging into house data');
          this.ret2 = data[this.selectedIndexValue];
          this.resd2 = Object.keys(this.ret2).length;
        },

        error => {
          console.log('some error occurred!');
          console.log(error.errorMessage);
        }
      );

      this.detailshttpservice.getcharacters().subscribe(
        data => {
          console.log('logging into characters data');
          this.ret3 = data[this.selectedIndexValue];
          this.resd3 = Object.keys(this.ret3).length;
      },
        error => {
          console.log('some error occurred!');
          console.log(error.errorMessage);
        }
      );
  }

}
