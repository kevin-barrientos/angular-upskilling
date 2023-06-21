import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tpg-todo-sidebar-list',
  templateUrl: './todo-sidebar-list.component.html',
  styleUrls: ['./todo-sidebar-list.component.css'],
})
export class TodoSidebarListComponent {
  @Output()
  itemClick = new EventEmitter<{ title: string; description: string; important?: boolean }>();

  readonly tasks = [
    {
      title: 'Finish report for client meeting',
      description: 'Compile and finalize the project report for the upcoming client meeting.',
      important: true,
    },
    {
      title: 'Update website content',
      description: 'Review and update the content of the company website to reflect recent changes and improvements.',
    },
    {
      title: 'Fix bug in payment module',
      description: 'Investigate and resolve the issue causing the payment module to malfunction in the application.',
    },
    {
      title: 'Prepare presentation slides',
      description: 'Create a set of visually appealing slides for the upcoming project presentation to stakeholders.',
    },
    {
      title: 'Conduct user testing sessions',
      description:
        'Organize and conduct usability testing sessions to gather feedback on the new application interface.',
    },
    {
      title: 'Review code pull requests',
      description:
        'Go through the submitted code pull requests and provide feedback, suggestions, and merge if necessary.',
    },
    {
      title: 'Schedule team meeting',
      description: 'Arrange a team meeting to discuss project updates, challenges, and upcoming milestones.',
    },
    {
      title: 'Optimize database performance',
      description:
        'Analyze and fine-tune the database queries and configurations to improve overall application performance.',
    },
    {
      title: 'Create user documentation',
      description:
        'Prepare comprehensive documentation to guide users on how to navigate and use the application effectively.',
    },
    {
      title: 'Research new technology trends',
      description:
        'Stay up-to-date with the latest industry trends and technologies by conducting research and reading relevant articles.',
    },
  ];

  itemClicked(title: string, description: string, important?: boolean) {
    this.itemClick.next({ title, description, important });
  }
}
