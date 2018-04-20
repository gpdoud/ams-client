import { Component, OnInit } from '@angular/core';
import { StartupService } from '@app/shared/services/startup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private StartupSvc: StartupService) {}

  ngOnInit() {
    console.log("Using server address -> ",  this.StartupSvc.settings);
  }
}

