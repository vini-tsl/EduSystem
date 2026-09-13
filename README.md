# EduSystem

> Sistema de gerenciamento acadêmico desenvolvido para facilitar a administração de uma instituição de ensino, centralizando informações de alunos, professores, turmas, disciplinas, notas e frequência.

## Sobre o projeto

O **EduSystem** é um sistema acadêmico desenvolvido com o objetivo de simular uma plataforma utilizada por instituições de ensino para gerenciamento de informações escolares.

O projeto foi desenvolvido pensando em diferentes perfis de usuários e suas respectivas permissões dentro do sistema.

A aplicação busca centralizar processos acadêmicos que normalmente seriam realizados de forma descentralizada, proporcionando uma estrutura mais organizada para gerenciamento das informações.

## Perfis de acesso

O sistema foi planejado considerando diferentes níveis de acesso:

| Perfil         | Responsabilidade                                                |
| ---------------| --------------------------------------------------------------- |
| Aluno          | Consulta de notas, frequência e informações acadêmicas          |
| Professor      | Gerenciamento de turmas, disciplinas, atividades e notas        |
| Coordenador    | Administração acadêmica e acompanhamento das turmas             |
| Administrador  | Gerenciamento geral da plataforma                               |
| Responsável    | Acompanhamento das informações acadêmicas dos alunos vinculados |

## Funcionalidades

### Alunos

* Visualização de informações acadêmicas
* Consulta de notas
* Consulta de frequência
* Visualização do boletim
* Acompanhamento das disciplinas

### Professores

* Gerenciamento das turmas atribuídas
* Gerenciamento de disciplinas
* Registro de notas
* Registro de frequência
* Gerenciamento de atividades

### Administração

* Gerenciamento de usuários
* Gerenciamento de alunos
* Gerenciamento de professores
* Gerenciamento de turmas
* Gerenciamento de disciplinas
* Controle de permissões

## Estrutura conceitual

O sistema foi projetado utilizando entidades relacionadas ao contexto acadêmico, incluindo:

```text
Usuario
 ├── Aluno
 ├── Professor
 └── Administrador

Aluno
 └── Turma

Professor
 └── Turma

Turma
 └── Disciplina

Disciplina
 ├── Atividade
 └── Nota
```

## Tecnologias

### Front-end

* HTML5
* CSS3
* JavaScript

### Back-end

* Node.js

### Banco de dados

* PostgreSQL

### Outros

* Git
* GitHub
* REST API
* JSON

## Estrutura do projeto

```text
EduSystem/
│
├── frontend/
│   ├── assets/
│   ├── css/
│   ├── js/
│   └── pages/
│
└── README.md
```

## Objetivos técnicos

O projeto foi desenvolvido para praticar conceitos importantes de desenvolvimento de sistemas:

* Modelagem de banco de dados
* Desenvolvimento de APIs
* Integração entre frontend e backend
* Autenticação e autorização
* Controle de permissões
* Relacionamentos entre entidades
* Organização de código
* Arquitetura de aplicações web

## Status

**Em desenvolvimento**

Novas funcionalidades e melhorias estão sendo implementadas gradualmente.
