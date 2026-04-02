import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  selectedFilter = 'all';
  filters = ['all', 'Angular', 'Node.js', 'Firebase'];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.projects = this.portfolioService.getProjects();
    this.filteredProjects = this.projects;
  }

  filterProjects(filter: string) {
    this.selectedFilter = filter;
    if (filter === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(p => 
        p.technologies.includes(filter)
      );
    }
  }
}