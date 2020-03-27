import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from '../../../services/message.service';

declare const $;
@Component({
  selector: 'app-request-test-parent',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestTestComponent implements OnInit, AfterViewInit {
  uploader: boolean = false;
  requestTest: boolean = false;
  constructor(
    public messageService: MessageService,
  ) { }
  ngOnInit() {

  }

  ngAfterViewInit(): void {

  }
}
