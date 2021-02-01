import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/shared/services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  public formGroup: FormGroup;
  constructor(
    private userDataService: UserDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    localStorage.removeItem('token');
    this.formGroup = new FormGroup({
      userName: new FormControl(null, Validators.required)
    })
  }

  public submit(): void {
    this.userDataService.userName = this.formGroup.get('userName').value;
    localStorage.setItem('token', this.formGroup.get('userName').value);
    this.router.navigate(['search']);
  }

}
