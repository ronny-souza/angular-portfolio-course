import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public knowledges = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone do Angular',
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone do HTML5',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone do CSS3',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone do Javascript',
    },
    {
      src: 'assets/icons/knowledge/git.svg',
      alt: 'Ícone do Git',
    },
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Ícone do Java',
    },
    {
      src: 'assets/icons/knowledge/database.svg',
      alt: 'Ícone de banco de dados',
    },
  ]);
}
