import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable, observable,pipe } from 'rxjs';
import { map, filter} from 'rxjs/operators';

// interval predefined function that is kind of observable 
// Subscription: an object to dispose resources: unsubscribe
// Observable: create a new observable (custome)

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription; // Subscription property
  private customeObsSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    // like setInterval, it will fire every 1s, 
    //  after every second new event will emitted
    // subscribe actually return subscription


  //   this.firstObsSubscription = interval(1000).subscribe(count => {
  //     console.log(count); 
  // })

  const customeIntervalObservable = Observable.create(observer=>{
    let count = 0
    setInterval(()=>{
      observer.next(count); // to emmit a new value
      // complete the observable
      if(count ===2){
        observer.complete();
      }
      if (count>3){
        observer.error(new Error('Count is greater than 3')) // during error oveservable does not stop, it's cancelled
      }
      count++;
    },1000)
  })

  
  //during subscribe Rxjs merge them all together as an object
  // pass this object to the observer
  this.customeObsSubscription =customeIntervalObservable.pipe(filter((data: number)=>{
    return data>0;
  }),map((data: number)=>{
    return 'Round'+ (data+1)
  })) .subscribe(data=>{
    console.log(data); 
  }, error=>{ // error handling
    console.log(error);
    alert(error.message)
  }, ()=>{
    console.log('Completed !');
  })

  }

  ngOnDestroy(): void {
    //this.firstObsSubscription.unsubscribe();
    this.customeObsSubscription.unsubscribe();
  }

}
