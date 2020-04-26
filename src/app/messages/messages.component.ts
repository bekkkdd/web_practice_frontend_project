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
  async getMessages():Promise<void>{
    this.messages = await this.messageService.getMessages().toPromise();
    console.log(this.messages);
  }
  goBack(): void{
    this.location.back();
  }

}
