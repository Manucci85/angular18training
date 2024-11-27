import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {RouterOutlet} from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    MatSidenavModule,
    RouterOutlet,
    MatListModule,
    MatToolbarModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
