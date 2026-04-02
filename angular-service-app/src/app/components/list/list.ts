import { Component, OnInit, signal } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Api } from '../../services/api';

@Component({
  selector: 'app-list',
  standalone: true,    
  // imports: [CommonModule],
  templateUrl: './list.html',
  styleUrls: ['./list.css'],
})
export class List implements OnInit {

  // lists: any[] = [];
  lists = signal<any[]>([]); 
  errorMessage = '';

  constructor(private api: Api) { }

  ngOnInit(): void {
    console.log("Component loaded");

    this.api.getPosts().subscribe({
      next: (data) => {
        console.log("DATA RECEIVED:", data);
        this.lists.set(data);
      },
      error: (err) => {
        console.log("ERROR:", err);
        this.errorMessage = err;
      }
    });
  }
  trackById(index: number, item: any) {
    return item.id;
  }
}