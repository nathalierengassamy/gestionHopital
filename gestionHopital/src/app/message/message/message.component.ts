import { Component, OnInit } from '@angular/core';
import { Message } from 'app/model/message';
import { MessageService } from 'app/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  messages!: any[];
  message:Message=new Message();
  
  constructor(private messageService:MessageService) { }

  ngOnInit(): void {
    this.findAllMessage();
  }

  findAllMessage(){
    this.messageService.findAllMessage().subscribe(data => {this.message = data;});
  }
  deleteMessage(id:number){
    this.messageService.deleteMessage(id).subscribe(()=>{this.findAllMessage()});
  }
  saveMessage(){
    this.messageService.saveMessage(this.message).subscribe(()=>{
      this.findAllMessage();
      this.message = new Message();
    })
  }
}

