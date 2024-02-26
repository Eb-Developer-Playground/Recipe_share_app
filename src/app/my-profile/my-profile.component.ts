import { Component  } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { PopuppageComponent } from '../popuppage/popuppage.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [CommonModule,NavigationComponent,RouterModule, MatMenuModule,MatToolbarModule, MatCardModule,MatIconModule],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss'
})
export class MyProfileComponent {
  userData: any;
  constructor(private userService:UserService, private dialog: MatDialog,private router: Router) {}
  edit() {
    const dialogRef = this.dialog.open(PopuppageComponent, {
      width: '550px', 
       // Prevent closing by clicking outside or pressing ESC
      disableClose: true
    });
  }
  //fetch data from the server 
  ngOnInit(): void {
    //access local storage only when running on the browser
    if (typeof window !== 'undefined') {
    // Fetch data from the server when the component initializes
    const userId = localStorage.getItem('loggedInUserId');
    if (userId) {
      // Fetch user data based on user ID
      this.userService.getData(userId).subscribe(data => {
        // Process the fetched user data here
        console.log(data);
        this.userData=data;
      });
    } else {
      console.error('User ID not found in local storage');
    }
  }
}
  //logout 
  Logout(){
    this.router.navigate(['/LandingPage']);
  }
}
