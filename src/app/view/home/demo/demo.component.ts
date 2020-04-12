import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetJsonService } from '../../../services/getJson.service';

@Component({
  selector: 'app-demo',
  templateUrl: `./demo.component.html`,
  styleUrls: [`./demo.component.scss`]
})
export class DemoComponent implements OnInit {
  // checkbox 开关
  cb = {
    search: false,
  }
  constructor() { }


  ngOnInit() {
    console.log('Fetching heros...');
  }

}
