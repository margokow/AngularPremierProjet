import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css'],
  standalone: true
})
export class EmployeeCardComponent {
  @Input() employee!: any;
}

