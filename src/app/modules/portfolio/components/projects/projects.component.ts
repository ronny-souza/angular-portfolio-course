import { Component, inject, signal } from '@angular/core';
import { IProject } from '../../interface/IProject.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public projects = signal<IProject[]>([
    // {
    //   src: 'assets/img/projects/vfull.png',
    //   alt: 'Projeto Vida FullStack',
    //   title: 'Vida FullStack',
    //   width: '100px',
    //   height: '51px',
    //   description: 'Este é um projeto bacana desenvolvido por outra pessoa!',
    //   links: [
    //     {
    //       name: 'Conheça o blog',
    //       href: 'https://vidafullstack.com.br',
    //     },
    //   ],
    // },
  ]);

  public openDialog(data: IProject) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
