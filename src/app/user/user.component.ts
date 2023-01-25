import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit() {
    // params is an observable by default from angular
    // that's we don't need to unsubcribe, angular does it itself
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }

  onActivate () {
    // subject 
    this.userService.activatedEmmiter.next(true)
  }
}
