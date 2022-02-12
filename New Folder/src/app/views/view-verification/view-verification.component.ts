import { Component, OnInit, ViewChild } from '@angular/core';
import { PlyrComponent } from 'ngx-plyr';

@Component({
  selector: 'app-view-verification',
  templateUrl: './view-verification.component.html',
  styleUrls: ['./view-verification.component.scss']
})
export class ViewVerificationComponent implements OnInit {

	@ViewChild(PlyrComponent)

  plyr: PlyrComponent;

  // or get it from plyrInit event
  player: Plyr;

  videoSources: Plyr.Source[] = [
    {
      src: 'bTqVqk7FSmY',
      provider: 'youtube',
    },
  ];

  played(event: Plyr.PlyrEvent) {
    console.log('played', event);
  }

  play(): void {
    this.player.play(); // or this.plyr.player.play()
  }

  stop(): void {
    this.player.stop(); // or this.plyr.player.play()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
