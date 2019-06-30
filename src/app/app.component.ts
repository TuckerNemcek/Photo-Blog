import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: "app.component.html",
    styleUrls: ['app.component.css']

})
export class AppComponent {
    emoji: string[] = ["smiley face","winky face","horny face","eggplant️"];
    activeEmoji: string;
    changeEmoji(){
        this.activeEmoji = this.emoji[Math.floor(Math.random() * this.emoji.length)];
    }
    constructor(){
      
    }
}