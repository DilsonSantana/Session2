import { Component } from '@angular/core';

import { Server } from './server/server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public servers: Server[] = [];
  public id: number = 0;

  addServer(){
    this.id++;

    this.servers.push(
      new Server("Servidor Elisa", this.id)
    );
  }

  removeServer(position: number, server: Server){
    this.servers.splice(position,1);
  }

  constructor(){

  }


}
