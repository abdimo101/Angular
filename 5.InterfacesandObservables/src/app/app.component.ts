import { Component, OnInit} from '@angular/core';
import { MessagesService } from './services/messages.service';
import * as e from 'express';
import { Post } from './interfaces/posts.interface';
import { LatestPrices, OrderBook, Student } from './interfaces/data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessagesService]
})
export class AppComponent implements OnInit {
  messages: string[] = [];
  posts: Post[] = [];

  constructor(private messagesService: MessagesService) {
    this.messages = messagesService.getMessages();
  }
  ngOnInit() {
    this.messagesService.getPosts().subscribe({
      next: (response: Post[]) => {
        this.posts = response;
      },
      error: (error) => {
        console.log('Error is ', error);
      }
    });

    this.messagesService.getLanguages().subscribe({
      next: (languages: Array<string>) => {
        console.log(languages);
      },
    });

    this.messagesService.getStudent().subscribe({
      next: (student: Student) => {
        console.log(student);
      },
    });

    this.messagesService.getBookOrders().subscribe({
      next: (order: OrderBook) => {
        console.log(order);
      },
    });

    this.messagesService.getLatestPrices().subscribe({
      next: (LatestPrices: LatestPrices) => {
        console.log(LatestPrices);
      },
    });
  }

  title = '5.InterfacesandObservables';
}
