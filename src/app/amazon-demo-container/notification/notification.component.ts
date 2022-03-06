import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SignalRService } from 'src/app/signalr.servce';
import { User } from '../user';
import { throwError, pipe } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  
  constructor(public signalRService: SignalRService, private ref: ChangeDetectorRef, private http: HttpClient) { }
  public notifications:any= [];
  public visitData!:object;
  ngOnInit(): void {
   
    this.signalRService.startConnection();
    this.signalRService.addActivityListerner();
    let self=this;
    this.signalRService.notificationAdded.subscribe((user)=>{
      self.notifications.push(user);
      self.ref.detectChanges();
    })
  }
  getRequest(id: string,requestId: string){
    let self=this;

    this.getVisitorInformation(id,requestId).subscribe((result: any)=>{
      this.visitData=result;
      self.ref.detectChanges();

    });

  }

  getVisitorInformation(id: string,requestId: string){

    const url='https://api.fpjs.io/visitors/'+id+'?api_key=s1bmUM0fTlsJl5p4P4NX&request_id='+requestId;
    return this.http
    .get(url).pipe(
      catchError(this.handleError)
    );;
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}
