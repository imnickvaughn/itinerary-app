import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Member } from '../../../models/member.interface';
import { MemberService } from '../../../services/member.service';
import { NotificationBarComponent } from '../../shared/notification-bar/notification-bar.component';
import { TopNavTitleComponent } from '../../shared/top-nav-title/top-nav-title.component';
import { ProgressBarComponent } from '../../shared/progress-bar/progress-bar.component';
import { BottomBarComponent } from '../../shared/bottom-bar/bottom-bar.component';

@Component({
  selector: 'app-members-list',
  standalone: true,
  imports: [
    CommonModule,
    NotificationBarComponent,
    TopNavTitleComponent,
    ProgressBarComponent,
    BottomBarComponent
  ],
  templateUrl: './members-list.component.html',
  styleUrl: './members-list.component.scss'
})
export class MembersListComponent implements OnInit {
  members$: Observable<Member[]> = this.memberService.getMembers();
  members: Member[] = [];

  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
    this.members$.subscribe(members => {
      this.members = members;
    });
  }

  onDiscard(): void {
    // Handle discard action
  }

  addMember(): void {
    // Navigate to member details
  }
}

