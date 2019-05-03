import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

export class ChatService {
  private url = 'http://119.205.235.198:3000';
  private socket;

  constructor() {
    this.socket = io(this.url);
  }

  public sendMessage(message){
      this.socket.emit('new-message', message);
  }

  public getMessages = () => {
      return Observable.create((observer) => {
              this.socket.on('new-message', (message) => {
                      observer.next(message);
                      });
              });
  }

}
