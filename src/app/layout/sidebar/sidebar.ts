import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListItem, MatNavList } from '@angular/material/list';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  imports: [
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    MatIconModule,
    MatNavList,
    MatListItem
  ],
})
export class Sidebar { }