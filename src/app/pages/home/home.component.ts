import { CheckService } from './../../services/check.service';
import { ModalService } from './../../services/modal.service'
import { BehaviorSubject, Observable, Subject, map } from 'rxjs'
import { IUser, IUserObj } from '../../types/user.interface'
import { DataService } from './../../services/data.service'
import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../components/modal/modal.component';
import { ModalDeleteComponent } from '../../components/modal/modal-delete/modal-delete.component';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {


	default:boolean = true

	isChecked = false

	selectedUsers: any[] = [];



	

	constructor(
		public dataService: DataService,
		public modalService: ModalService,
		public checkService:CheckService,
		public _dialog: MatDialog,

	) {}

	openModal(){
		this._dialog.open(ModalComponent)
	  }

	  openDeleteModal(){
		this._dialog.open(ModalDeleteComponent)
	  }

	ngOnInit(): void {
	//this.dataService.users$ = this.dataService.getAll()
	this.dataService.getAll().subscribe((u)=>{
		this.dataService.users = u.users
		console.log(this.dataService.users);
		
	})
	}

	toggleSelection(user: any, event:any) {
		event.target.closest('tr').style.backgroundColor = event.target.checked ? '#E9F0FF' : '';
				
		if (this.selectedUsers.includes(user)) {
			
		  this.selectedUsers = this.selectedUsers.filter(u => u !== user);
		} else {
		  this.selectedUsers.push(user);
		}
		this.checkService.setSelectedUsers(this.selectedUsers);
	  }
		
	  deleteUsers() {
		for (const selectedUser of this.selectedUsers) {
		  const index = this.dataService.users.indexOf(selectedUser);
		  if (index !== -1) {
			this.dataService.users.splice(index, 1);
		  }
		}
	  }
}


	


