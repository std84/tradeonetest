import { Component, OnInit } from '@angular/core';
import { TnsChartService } from '../_services/tns-chart.service';
import { Tnslist } from '../_modal/tnslist';

@Component({
  selector: 'app-list-tnstoday',
  templateUrl: './list-tnstoday.component.html',
  styleUrls: ['./list-tnstoday.component.css']
})
export class ListTnstodayComponent implements OnInit {

  constructor(private tnsChartService: TnsChartService) { }
  data: Tnslist;
  ngOnInit() {
    this.tnsChartService.getTodayChart().subscribe( data => {
      this.data = data;
    }, error => { console.log(error); });

  }

}
