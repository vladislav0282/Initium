import { IUser, IUserObj } from './../types/user.interface';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { API_URL } from '../../constants/constants'
import { BehaviorSubject, Observable, Subject } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class DataService {

	//users$:Observable<IUserObj>

	users:IUser[] = []

	constructor(private http: HttpClient) {}

	getAll(): Observable<IUserObj> {
		return this.http.get<IUserObj>(API_URL)
	  }
}
