import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import PostAttributes from '../post-attributes';

@Component({
  selector: 'app-post-navigation',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <nav class="post-nav">
      @if (previousPost) {
      <a 
        [routerLink]="['/blog', previousPost.attributes.slug]"
        class="post-nav__link post-nav__link--prev"
      >
        <span class="post-nav__label">← Previous</span>
        <span class="post-nav__title">{{ previousPost.attributes.title }}</span>
      </a>
      } @else {
      <div class="post-nav__placeholder"></div>
      }

      @if (nextPost) {
      <a 
        [routerLink]="['/blog', nextPost.attributes.slug]"
        class="post-nav__link post-nav__link--next"
      >
        <span class="post-nav__label">Next →</span>
        <span class="post-nav__title">{{ nextPost.attributes.title }}</span>
      </a>
      } @else {
      <div class="post-nav__placeholder"></div>
      }
    </nav>
  `,
  styles: `
    .post-nav {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      margin: 4rem 0 2rem 0;
      padding-top: 2rem;
      border-top: 1px solid #dee2e6;
    }

    .post-nav__link {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding: 1.5rem;
      background: linear-gradient(135deg, #f0f5ff 0%, #ffffff 100%);
      border: 1px solid #dee2e6;
      border-radius: 8px;
      text-decoration: none;
      color: inherit;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .post-nav__link:hover {
      border-color: #0d6efd;
      background: linear-gradient(135deg, #e7f0ff 0%, #f0f5ff 100%);
      box-shadow: 0 6px 16px rgba(13, 110, 253, 0.2);
      transform: translateY(-2px);
    }

    .post-nav__link--prev {
      text-align: left;
    }

    .post-nav__link--next {
      text-align: right;
    }

    .post-nav__label {
      font-size: 0.8rem;
      color: #6c757d;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .post-nav__title {
      font-weight: 700;
      color: #0d6efd;
      line-height: 1.4;
      font-size: 1.1rem;
    }

    .post-nav__placeholder {
      opacity: 0;
    }

    @media (max-width: 640px) {
      .post-nav {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .post-nav__link--next {
        text-align: left;
      }
    }
  `,
})
export class PostNavigationComponent {
  @Input() previousPost: any = null;
  @Input() nextPost: any = null;
}
