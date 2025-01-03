import { IProject } from './../../../interface/IProject.interface';
import { Component, Inject, OnInit, signal } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-projects',
  imports: [MatDialogModule],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss',
})
export class DialogProjectsComponent implements OnInit {
  constructor(
    private _dialogRef: MatDialogRef<DialogProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: IProject
  ) {}

  public getData = signal<IProject | null>(null);

  ngOnInit(): void {
    this.getData.set(this._data);
  }

  public closeModal() {
    this._dialogRef.close();
  }
}
