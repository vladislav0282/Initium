import { DataService } from './../../services/data.service'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ModalService } from './../../services/modal.service'
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { IUser, IUserObj } from '../../types/user.interface'
import { Observable } from 'rxjs'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatDialog } from '@angular/material/dialog'
import { DialogRef } from '@angular/cdk/dialog'

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrl: './modal.component.scss',

})




export class ModalComponent implements OnInit {

	isDisabled=true

	constructor(
		public modalService: ModalService,
		public dataService: DataService,
		public _dialog:MatDialog,
		public _dialogRef:DialogRef
	) {}

	modalClose(){
		this._dialogRef.close()
	}



	form = new FormGroup({
		name: new FormControl<string>('', [
			Validators.required,
			Validators.minLength(2),
		]),
		surname: new FormControl<string>('', [
			Validators.required,
			Validators.minLength(2),
		]),
		email: new FormControl<string>('', [
			Validators.required, 
			Validators.email]),
		phone: new FormControl<string>('', [
			Validators.required,
			Validators.minLength(11),
		]),
	})

	ngOnInit(): void {
		// this.dataService.users$=this.dataService.getAll()
		// this.dataService.users$.subscribe(u=>console.log(u)
		// )  
	}

	submit() {
		if(this.form.valid){
			this.isDisabled=!this.isDisabled
			const newUser: IUser = {
				name: this.form.value.name || '',
				surname: this.form.value.surname || '',
				email: this.form.value.email || '',
				phone: this.form.value.phone || '',
			}
			if (newUser.name || newUser.surname || newUser.email || newUser.phone){
				this.dataService.users.push(newUser)
			}
			this.modalClose()
		}
	}
}
