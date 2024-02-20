import { Component  } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { PopuppageComponent } from '../popuppage/popuppage.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [CommonModule, MatMenuModule,MatToolbarModule, MatCardModule,MatIconModule],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss'
})
export class MyProfileComponent {
  constructor(private dialog: MatDialog) {}
  edit() {
    const dialogRef = this.dialog.open(PopuppageComponent, {
      width: 'auto', 
       // Prevent closing by clicking outside or pressing ESC
      disableClose: true
    });
  }
}
