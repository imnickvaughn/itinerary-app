import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Member, MemberFormData } from '../models/member.interface';
import membersData from '../../assets/data/members.json';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private readonly members: Member[] = membersData as Member[];

  getMembers(): Observable<Member[]> {
    return of([...this.members]).pipe(delay(1000));
  }

  getMemberById(id: string): Observable<Member | undefined> {
    const member = this.members.find(m => m.id === id);
    return of(member).pipe(delay(1000));
  }

  addMember(memberData: MemberFormData): Observable<Member> {
    const newMember: Member = {
      id: `member${Date.now()}`,
      ...memberData,
      avatar: ''
    };
    this.members.push(newMember);
    return of(newMember).pipe(delay(1000));
  }

  updateMember(id: string, memberData: Partial<MemberFormData>): Observable<Member> {
    const index = this.members.findIndex(m => m.id === id);
    if (index !== -1) {
      this.members[index] = { ...this.members[index], ...memberData };
      return of(this.members[index]).pipe(delay(1000));
    }
    throw new Error(`Member with id ${id} not found`);
  }

  deleteMember(id: string): Observable<boolean> {
    const index = this.members.findIndex(m => m.id === id);
    if (index !== -1) {
      this.members.splice(index, 1);
      return of(true).pipe(delay(1000));
    }
    return of(false).pipe(delay(1000));
  }
}

