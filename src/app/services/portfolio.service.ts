import { Injectable } from '@angular/core';
import { Project, Skill } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  getProjects(): Project[] {
    return [
      {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'Full-stack e-commerce application with payment integration',
        image: 'assets/project1.jpg',
        technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
        link: 'https://demo.com',
        github: 'https://github.com'
      },
      {
        id: 2,
        title: 'Task Management App',
        description: 'Real-time task management with team collaboration features',
        image: 'assets/project2.jpg',
        technologies: ['Angular', 'Firebase', 'Material Design'],
        link: 'https://demo.com',
        github: 'https://github.com'
      },
      {
        id: 3,
        title: 'Weather Dashboard',
        description: 'Interactive weather app with location-based forecasting',
        image: 'assets/project3.jpg',
        technologies: ['Angular', 'RxJS', 'OpenWeather API'],
        link: 'https://demo.com',
        github: 'https://github.com'
      }
    ];
  }

  getSkills(): Skill[] {
    return [
      {
        category: 'Frontend',
        skills: ['Angular', 'TypeScript', 'HTML/CSS', 'RxJS', 'Material Design']
      },
      {
        category: 'Backend',
        skills: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'REST APIs']
      },
      {
        category: 'Tools',
        skills: ['Git', 'Docker', 'Webpack', 'Jest', 'VS Code']
      }
    ];
  }
}