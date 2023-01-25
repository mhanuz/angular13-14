import { Injectable, EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
// subject is obserable and ovserver, multicast
// emit events to its subscriber 

@Injectable({providedIn: 'root'}) // alternative like providers in app module 
export class UserService{
    // EventEmitter: do emit custome events and handler register  
    activatedEmmiter = new Subject<boolean>();
}

// observable unicast, passive: wraps call back or even, call from inside  
// subject kind of object, active, call next from outside 
// use subject instead of observable