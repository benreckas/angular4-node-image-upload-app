import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthorizationService } from '../services/authorization.service';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  // Properties
  user: User = new User();
  errorMessage: string;

  // Methods
  constructor(
    private authorizationService: AuthorizationService,
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  register() {
    this.authorizationService.register(this.user).subscribe( data => {
      if (data.success) {
        this.authorizationService.setToken(data.token);
        this.activeModal.close();
      } else {
        this.displayErrorMessage();
      }
    }, err => this.displayErrorMessage());
  }

  displayErrorMessage() {
    this.errorMessage = 'An error has occured. Please try again.';
  }
}
