import { Component, signal } from '@angular/core';
import { IExperience } from '../../interface/IExperience.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public lastExperiences = signal<IExperience[]>([
    {
      summary: {
        strong: 'Senior Software Developer - Cloud Integration Specialist',
        p: 'Claro Brasil | Nov. 2024 - Presente',
      },
      text: '<p>Em minha posição, tenho trabalhado na manutenção de um sistema multi-nuvem com Java 8 e Spring, além de sua migração contínua para microsserviços com as versões 17 e 21 do Java.</p> <p>Como parte do desenvolvimento, trabalho na criação de testes unitários e de integração com Junit e Mockito, além de documentação com OpenAPI e Swagger.</p> <p>Também atuo na integração de sistemas com o Keycloak para provisionamento de identidade e RabbitMQ para mensageria. Para além do desenvolvimento técnico, também oriento desenvolvedores juniores em pequenos esquadrões, realizando revisões de código e ajudando-os com seu desenvolvimento pessoal e profissional.</p>',
    },
    {
      summary: {
        strong: 'Java and Spring Ecosystem Instructor',
        p: 'SENAI/SC | Abr. 2023 - Presente',
      },
      text: '<p>Eu preparo e ministro aulas envolvendo diversas tecnologias-chave, como Java, Spring Boot, Spring MVC, Spring Core, Spring Data e JPA/Hibernate. Além disso, ensino as melhores práticas em programação e desenvolvimento de APIs RESTful.</p> <p>Uma experiência importante para enriquecer minhas habilidades interpessoais, como comunicação eficaz, adaptabilidade e trabalho em equipe.</p>',
    },
    {
      summary: {
        strong: 'Mid-Level Software Engineer - Cloud Integration Specialist',
        p: 'Claro Brasil | Jan. 2024 - Nov. 2024',
      },
      text: '<p>Na minha posição como desenvolvedor pleno, tenho trabalhado na manutenção de um sistema multi-nuvem com Java 8 e Spring, além de sua migração contínua para microsserviços com as versões 17 e 21 do Java.</p> <p>Como parte do desenvolvimento, trabalho na criação de testes unitários e de integração com Junit e Mockito, além de documentação com OpenAPI e Swagger.</p> <p>Também atuo na integração de sistemas com o Keycloak para provisionamento de identidade e RabbitMQ para mensageria. Para além do desenvolvimento técnico, também oriento desenvolvedores juniores em pequenos esquadrões, realizando revisões de código e ajudando-os com seu desenvolvimento pessoal e profissional.</p>',
    },
    {
      summary: {
        strong: 'Mid-Level Software Developer - Cloud Integration Specialist',
        p: 'Ustore | Jan. 2023 - Jan. 2024',
      },
      text: '<p>Na minha posição como desenvolvedor pleno, tenho trabalhado na manutenção de um sistema multi-nuvem com Java 8 e Spring, além de sua migração contínua para microsserviços com as versões 17 e 21 do Java.</p> <p>Como parte do desenvolvimento, trabalho na criação de testes unitários e de integração com Junit e Mockito, além de documentação com OpenAPI e Swagger.</p> <p>Também atuo na integração de sistemas com o Keycloak para provisionamento de identidade e RabbitMQ para mensageria. Para além do desenvolvimento técnico, também oriento desenvolvedores juniores em pequenos esquadrões, realizando revisões de código e ajudando-os com seu desenvolvimento pessoal e profissional.</p>',
    },
    {
      summary: {
        strong: 'Junior Software Developer',
        p: 'Ustore | Set. 2021 - Jan. 2023',
      },
      text: '<p>Responsável por manter e desenvolver novos recursos de uma plataforma multi-nuvem, que abrange nuvens públicas como AWS, Google Cloud, Oracle Cloud e Microsoft Azure, e nuvens privadas como Hyper-V.</p> <p>Ganhei experiência valiosa trabalhando com Java na versão 8 para manter o sistema legado, e na versão 17 para dissolver o projeto em microsserviços. Também trabalhei com recursos do Spring Cloud e mensageria com RabbitMQ.</p>',
    },
    {
      summary: {
        strong: 'Software Development Intern',
        p: 'Ustore | Dez. 2020 - Ago. 2021',
      },
      text: '<p>Usando Java e Spring como minhas principais tecnologias, minhas responsabilidades envolviam a manutenção e o desenvolvimento de uma API REST de integração multi-cloud, o que também me permitiu garantir experiência em nuvens como AWS, Google Cloud, Azure Cloud e Oracle Cloud.</p> <p>Também trabalhei extensivamente com ferramentas de versionamento como Git e GitLab, o que me permitiu colaborar com equipes e gerenciar o ciclo de vida de forma eficiente e organizada.</p>',
    },
  ]);
}
