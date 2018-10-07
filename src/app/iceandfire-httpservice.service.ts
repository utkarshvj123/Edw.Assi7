import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class IceandfireHttpserviceService {

  public indexValueOf;
  public resultset1 = [];
  public resultset2 = [];
  public resultset3 = [];
    constructor(public http: HttpClient) {
    console.log('http service started!');
   }

  mainUrl = 'https://anapioficeandfire.com/api';


  public getbook(): any {
      const book = this.http.get(this.mainUrl + '/books');
      return book;
        }

  public gethouse(): any {
      const house = this.http.get(this.mainUrl + '/houses');
     return house;
    }

  public getcharacters(): any {
      const ficchar = this.http.get(this.mainUrl + '/characters');
     return ficchar;
    }

  }
