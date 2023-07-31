import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent {
users:User[];
}
