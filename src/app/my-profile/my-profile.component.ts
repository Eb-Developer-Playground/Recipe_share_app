import { Component  } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { PopuppageComponent } from '../popuppage/popuppage.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [CommonModule,RouterModule, MatMenuModule,MatToolbarModule, MatCardModule,MatIconModule],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss'
})
export class MyProfileComponent {
  constructor(private dialog: MatDialog,private router: Router) {}
  edit() {
    const dialogRef = this.dialog.open(PopuppageComponent, {
      width: '550px', 
       // Prevent closing by clicking outside or pressing ESC
      disableClose: true
    });
  }
  //logout 
  Logout(){
    this.router.navigate(['/LandingPage']);
  }
}
