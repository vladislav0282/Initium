import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckService {
  constructor() { }
  isChecked$ = new BehaviorSubject<boolean>(false)

  private selectedUsersSubject = new BehaviorSubject<any[]>([]);
  selectedUsers$ = this.selectedUsersSubject.asObservable();

  public checkIndex:any[] = []

  setSelectedUsers(users: any[]) {
    this.selectedUsersSubject.next(users);
    this.checkIndex = users.map((user, index) => index+1);
  }

  checked(){
  this.isChecked$.next(true)
  }
}
