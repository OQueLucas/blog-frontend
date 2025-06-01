import { Component, input } from '@angular/core';

@Component({
  selector: 'icon-moon',
  imports: [],
  template: `
    <svg
      [attr.width]="size()"
      [attr.height]="size()"
      xmlns="http://www.w3.org/2000/svg"
      class="text-gray-200"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
    </svg>
  `,
})
export class MoonIconComponent {
  public size = input<string>();
}
