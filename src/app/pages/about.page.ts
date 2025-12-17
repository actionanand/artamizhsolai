import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <div class="about-container">
      <header class="about-header">
        <h1>About Me</h1>
        <p class="subtitle">Welcome to AR Tamizh Solai</p>
      </header>

      <div class="about-content">
        <section class="about-section">
          <h2>Welcome</h2>
          <p>
            Welcome to <strong>AR Tamizh Solai</strong>, a dedicated space for exploring Tamil literature, 
            language, and culture. This blog serves as a platform for sharing knowledge, insights, and 
            appreciation for the rich heritage of Tamil traditions.
          </p>
        </section>

        <section class="about-section">
          <h2>About This Blog</h2>
          <p>
            AR Tamizh Solai (அர் தமிழ் சொலை) is built with a passion for Tamil language and literature. 
            Here, you'll find:
          </p>
          <ul class="features-list">
            <li>In-depth articles on Tamil literature and linguistic studies</li>
            <li>Explorations of Tamil cultural heritage and traditions</li>
            <li>Writing tips and language learning resources</li>
            <li>Reviews and analyses of classical and contemporary Tamil works</li>
            <li>Discussions on the relevance of Tamil in the modern world</li>
          </ul>
        </section>

        <section class="about-section">
          <h2>Technology Stack</h2>
          <p>
            This blog is built with modern web technologies including Angular, TypeScript, and Analog.js,
            ensuring a fast, responsive, and accessible experience for all readers. The content is authored
            in Markdown, making it easy to maintain and update.
          </p>
        </section>

        <section class="about-section">
          <h2>Get In Touch</h2>
          <p>
            I'd love to hear from you! Whether you have feedback, suggestions, or just want to discuss 
            Tamil literature and language, feel free to reach out through the contact form in the footer 
            or connect with me on social media.
          </p>
          <p>
            Thank you for visiting AR Tamizh Solai. Happy reading! 📚
          </p>
        </section>

        <section class="about-cta">
          <a routerLink="/blog" class="cta-button">Explore the Blog</a>
          <a routerLink="/archive" class="cta-button secondary">View Archive</a>
        </section>
      </div>
    </div>
  `,
  styles: `
    .about-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
    }

    .about-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .about-header h1 {
      font-size: 2.5rem;
      margin: 0 0 0.5rem 0;
      color: #212529;
    }

    .subtitle {
      font-size: 1.125rem;
      color: #6c757d;
      margin: 0;
    }

    .about-content {
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
    }

    .about-section {
      line-height: 1.8;
    }

    .about-section h2 {
      font-size: 1.75rem;
      color: #212529;
      margin: 0 0 1rem 0;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #0d6efd;
    }

    .about-section p {
      color: #495057;
      margin: 0 0 1rem 0;
    }

    .about-section p:last-child {
      margin-bottom: 0;
    }

    .features-list {
      list-style: none;
      padding: 0;
      margin: 1rem 0;
    }

    .features-list li {
      padding-left: 2rem;
      margin-bottom: 0.75rem;
      color: #495057;
      position: relative;
    }

    .features-list li:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #0d6efd;
      font-weight: bold;
    }

    .about-cta {
      display: flex;
      gap: 1rem;
      justify-content: center;
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 1px solid #dee2e6;
    }

    .cta-button {
      display: inline-block;
      padding: 0.75rem 2rem;
      background: #0d6efd;
      color: white;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 600;
      transition: background 0.3s ease;
    }

    .cta-button:hover {
      background: #0b5ed7;
    }

    .cta-button.secondary {
      background: #6c757d;
    }

    .cta-button.secondary:hover {
      background: #5c636a;
    }

    @media (max-width: 768px) {
      .about-container {
        padding: 1.5rem;
      }

      .about-header h1 {
        font-size: 1.75rem;
      }

      .about-section h2 {
        font-size: 1.5rem;
      }

      .about-cta {
        flex-direction: column;
      }

      .cta-button {
        width: 100%;
        text-align: center;
      }
    }
  `
})
export default class AboutPage {}
