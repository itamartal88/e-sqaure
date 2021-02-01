import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Input() showLogout: boolean;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public logout(): void {
    this.router.navigate(['logout'])
  }

}
