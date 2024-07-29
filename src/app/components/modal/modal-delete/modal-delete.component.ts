import { CheckService } from './../../../services/check.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { DialogRef } from '@angular/cdk/dialog'
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrl: './modal-delete.component.scss'
})
export class ModalDeleteComponent implements OnInit{

  selectedUsers: any[] = [];

  selectedIndex: any[] = [];

  constructor(
		public dataService: DataService,
		public _dialog:MatDialog,
		public _dialogRef:DialogRef,
    public checkService:CheckService,
	) {}

  ngOnInit(): void {
    this.checkService.selectedUsers$.subscribe(users => {
      this.selectedUsers = users
    });

    
  }

  modalClose(){
		this._dialogRef.close()
	}


  deleteUsers() {
		for (const selectedUser of this.selectedUsers) {

		  const index = this.dataService.users.indexOf(selectedUser);
		  if (index !== -1) {
			this.dataService.users.splice(index, 1);
      this._dialogRef.close()
		  }
		}
	  }

}
