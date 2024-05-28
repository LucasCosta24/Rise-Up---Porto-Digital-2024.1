import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-modais',
  templateUrl: './modais.component.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  styleUrl: './modais.component.css'
})
export class ModaisComponent {
  constructor(public dialog: MatDialog) {}

openDialog() {
  const dialogRef = this.dialog.open(ModaisComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
}




