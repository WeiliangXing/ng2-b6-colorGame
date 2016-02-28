import {Component, OnDestroy} from 'angular2/core';
import {Router, Location} from 'angular2/router';
import {Color} from './color';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css'],
})

export class DashboardComponent implements OnDestroy {
  constructor(private _router: Router, private location: Location) {

  }
  ngOnDestroy() {
    
  }
      // public progress = {}
      // public game = {}
      // public colorLookup = {
      //     'r': {
      //         'text': 'red',
      //         'color': '#ee6e73'
      //     },
      //     'g': {
      //         'text': 'green',
      //         'color': '#26a69a'
      //
      //     },
      //     'b': {
      //         'text': 'blue',
      //         'color': '#2196F3'
      //
      //     },
      //     'o': {
      //         'text': 'orange',
      //         'color': '#ff9800'
      //     }
      // }
      // public iconLookup = {
      //     'right': {
      //         icon: 'thumb_up',
      //         color: '#26a69a'
      //     },
      //     'wrong': {
      //         icon: 'thumb_down',
      //         color: '#ee6e73'
      //     },
      //     'empty': {
      //         icon: 'thumb_down',
      //         color: '#fff'
      //     }
      // }
      // public rightScore = 5;
      // public wrongScore = -3;
      // public totalTime = 30;
      // public totalScore;
      // constructor(private _router: Router, private location: Location) {
      //     var self = this;
      //     this.progress = "width:0%";
      //     this.totalScore = 0;
      //     this.reset();
      // }
      // reset() {
      //     this.progress = "width:0%";
      //     this.totalScore = 0;
      //     this.game.countDown = 30;
      //     this.game.color = 'b';
      //     this.game.colorClass = colorLookup.b.color;
      //     this.game.colorText = colorLookup.r.text;
      //     this.game.started = false;
      //     this.game.rightCount = 0;
      //     this.game.wrongCount = 0;
      //     this.icon = iconLookup.right;
      // }
      //
      // start() {
      //     if (this.game.started) return;
      //     var self = this;
      //     this.game.started = true;
      //     this.icon = iconLookup.empty;
      //     this.gameTimer = setInterval(function() {
      //         if (self.game.countDown == 0) {
      //             clearInterval(self.gameTimer);
      //             self.stopGame();
      //         } else {
      //             self.game.countDown--;
      //             var progressV = Math.ceil((totalTime - self.game.countDown) / totalTime * 100);
      //             self.progress = "width:" + progressV + "%";
      //         }
      //
      //     }, 1000)
      // }
      //
      // stopGame() {
      //     this.game.started = false;
      //     var self = this;
      //     //calculate score;
      //     this.totalScore = this.game.rightCount * rightScore + this.game.wrongCount * wrongScore;
      //     $('#modal1').openModal({
      //         dismissible: true, // Modal can be dismissed by clicking outside of the modal
      //         opacity: .5, // Opacity of modal background
      //         in_duration: 300, // Transition in duration
      //         out_duration: 200, // Transition out duration
      //         ready: function() {}, // Callback for Modal open
      //         complete: function() {
      //                 self.reset();
      //             } // Callback for Modal close
      //     });
      // }
      //
      // addPlayer(name) {
      //     $('#modal1').closeModal()
      //     if (name && name !==""){
      //       this.dataRef.push({
      //           name: name,
      //           score: this.totalScore
      //       });
      //     }
      // }
      // ngOnDestroy() {
      //     // console.log('on destroy')
      //     clearTimeout(this.gameTimer);
      //     this.reset();
      // }
      //
      // getRandom() {
      //     var choice = ["g", "r", "b", "o"];
      //     return choice[Math.floor(Math.random() * 4)];
      // }
      //
      // setNextProblem() {
      //     var textKey = this.getRandom();
      //     this.game.colorText = colorLookup[textKey].text
      //         //get the key
      //     var key = this.getRandom();
      //     while (key == textKey || key == this.game.color) {
      //         key = this.getRandom();
      //     }
      //     this.game.color = key;
      //     this.game.colorClass = colorLookup[key].color;
      //
      // }
      // isGameStarted() {
      //     return this.game.started == true
      // }
      //
      // clicked(color: Color) {
      //     clearTimeout(this.iconTimer);
      //     this.icon = iconLookup.empty;
      //     var self = this;
      //     var clicked = color;
      //     var isRight = clicked == this.game.color;
      //     if (isRight) {
      //         this.game.rightCount++;
      //         this.icon = iconLookup.right;
      //         Materialize.toast('correct!', 500);
      //     } else {
      //         this.game.wrongCount++;
      //         this.icon = iconLookup.wrong;
      //         Materialize.toast('incorrect', 500);
      //     }
      //     this.iconTimer = setTimeout(function() {
      //         self.icon = iconLookup.empty;
      //         self.setNextProblem();
      //     }, 500);
      // }
}
