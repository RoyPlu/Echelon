import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { RLSService } from './services/RLS.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  profile;

  constructor(private service: RLSService) { }

  ngOnInit(){
    this.getProfile();
  }

  getProfile(){
    this.service.getProfile().subscribe(data => {
      console.log(data);
      this.profile = data;
    })
  }

}
