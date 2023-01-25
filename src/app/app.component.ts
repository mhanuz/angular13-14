import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  private activatedSub: Subscription
  constructor(private userService: UserService) {}

  ngOnInit() {
    // observable that's why subscribe 
    
    this.activatedSub = this.userService.activatedEmmiter.subscribe((didActivated)=>{
        this.userActivated = didActivated;
    })
  }

  // should unsubsribe  subject  when it does not need 
  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
}


// Dont use subject if you use @Output Decorator, because @Output is angular event emitter 