import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-404',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="error-container">
      <div class="error-content">
        <h1 class="error-code">404</h1>
        <h2 class="error-title">Page Not Found</h2>
        <p class="error-description">
          Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <div class="error-actions">
          <a routerLink="/" class="btn btn-primary">
            Go to Home
          </a>
          <a routerLink="/blog" class="btn btn-secondary">
            Browse Articles
          </a>
        </div>
      </div>
      
      <div class="error-illustration">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="90" stroke="#e9ecef" stroke-width="2"/>
          <text x="100" y="120" text-anchor="middle" font-size="80" font-weight="bold" fill="#dee2e6">?</text>
        </svg>
      </div>
    </div>
  `,
  styles: `
    .error-container {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 80vh;
      padding: 2rem;
      flex-wrap: wrap;
      gap: 3rem;
    }

    .error-content {
      max-width: 500px;
      text-align: center;
    }

    .error-code {
      font-size: 6rem;
      font-weight: 900;
      margin: 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .error-title {
      font-size: 2rem;
      margin: 0.5rem 0 1rem 0;
      color: #212529;
    }

    .error-description {
      font-size: 1.125rem;
      color: #6c757d;
      margin: 0 0 2rem 0;
      line-height: 1.6;
    }

    .error-actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn {
      display: inline-block;
      padding: 0.75rem 2rem;
      border-radius: 5px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      border: none;
      cursor: pointer;
    }

    .btn-primary {
      background-color: #0d6efd;
      color: white;
    }

    .btn-primary:hover {
      background-color: #0b5ed7;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(13, 110, 253, 0.3);
    }

    .btn-secondary {
      background-color: transparent;
      color: #0d6efd;
      border: 2px solid #0d6efd;
    }

    .btn-secondary:hover {
      background-color: #0d6efd;
      color: white;
      transform: translateY(-2px);
    }

    .error-illustration {
      width: 200px;
      height: 200px;
      opacity: 0.5;
    }

    @media (max-width: 768px) {
      .error-container {
        min-height: 60vh;
        gap: 2rem;
      }

      .error-code {
        font-size: 4rem;
      }

      .error-title {
        font-size: 1.5rem;
      }

      .error-description {
        font-size: 1rem;
      }

      .error-illustration {
        display: none;
      }
    }
  `,
})
export default class NotFoundPage {}
