import { Component, OnInit, Input } from '@angular/core';
import { Tnslist } from '../_modal/tnslist';
import { Rate } from '../_modal/rate';


@Component({
  selector: 'app-detailed-tnstoday',
  templateUrl: './detailed-tnstoday.component.html',
  styleUrls: ['./detailed-tnstoday.component.css']
})
export class DetailedTnstodayComponent implements OnInit {
  @Input() data: Rate[];
  animationIdx = 0;
  isDateAsc = false;
  isRateAsc = false;
  constructor() {}

  ngOnInit() {
    
  }
  delete(idx) {
    if(confirm('Are you sure to delete ')) {
      this.data.splice(idx, 1);
    }
  }
  orderByRate() {
    if(this.isDateAsc === false){
      this.isDateAsc = !this.isDateAsc;
      return this.data.sort(function(a, b) {
        return a.Rate - b.Rate ;
      });
    } else{
      this.isDateAsc = !this.isDateAsc;
      return this.data.sort(function(a, b) {
        return b.Rate - a.Rate ;
      });
    }

  }
  orderByDate() {
    if(this.isDateAsc === false){
      this.isDateAsc  = !this.isDateAsc ;
      return this.data.sort((a, b) => {
        return <any>new Date(b.Date) - <any>new Date(a.Date);
      });
    }
    else{
      this.isDateAsc  = !this.isDateAsc ;
      return this.data.sort((a, b) => {
        return <any>new Date(a.Date) - <any>new Date(b.Date) ;
      });
    }
  }
  moveUpLanguage() {
    let id= setInterval(() => {
      let tmp = this.data[this.animationIdx];
      this.data[this.animationIdx] = this.data[this.animationIdx + 1];
      this.data[this.animationIdx + 1] = tmp;
    
      this.animationIdx ++;
      if(this.animationIdx === (this.data.length - 1)){
        clearInterval(id);
        this.moveDownLanguage();
      }
      return this.data;
      }, 1000);

  }
    moveDownLanguage() {
      let id= setInterval(() => {
        let tmp = this.data[this.animationIdx];
        this.data[this.animationIdx] = this.data[this.animationIdx - 1];
        this.data[this.animationIdx - 1] = tmp;
        this.animationIdx --;
        if(this.animationIdx == 0){
          clearInterval(id);
          this.moveDownLanguage();
        }
        return this.data;
        }, 1000);
    
   }
}
