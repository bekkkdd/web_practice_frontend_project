import { Component, OnInit } from '@angular/core';
import {MessagesService} from '../messages.service';
import {Message} from '../messages';
import {Location} from '@angular/common';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private messageService: MessagesService, private location: Location) { }

  messages : Message[];

  ngOnInit(): void {
    this.getMessages();
  }
  getMessages():void {
    this.messageService.getMessages().subscribe(messages => this.messages = messages);
  }
  goBack(): void{
    this.location.back();
  }

}
