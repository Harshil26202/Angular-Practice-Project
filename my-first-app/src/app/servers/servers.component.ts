import { Component } from '@angular/core';
@Component({
  selector: 'app-servers',
  // template: '<app-server></app-server>',
  templateUrl: './servers.component.html', 
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'server is not created';
  serverName = 'Test';
  serverCreated = false;
  servers = ['testserver','testserver2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }
  ngOnInit() {

  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =  this.serverName + ' Server is Created';
  }

  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}