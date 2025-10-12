import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Trip, TripDataService } from '../trip-data.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trip-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.css']
})
export class TripFormComponent {
  trip: Trip = {
    code: '',
    name: '',
    length: 0,
    start: '',
    resort: '',
    perPerson: 0,
    image: '',
    description: ''
  };

  constructor(private tripService: TripDataService, private router: Router) {}

  onSubmit(): void {
    this.tripService.addTrip(this.trip).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => console.error('Error adding trip', err)
    });
  }
}


