import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-prompt',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    @if (isOpen) {
    <div class="password-modal-overlay" (click)="onOverlayClick()">
      <div class="password-modal" (click)="$event.stopPropagation()">
        <div class="password-modal__header">
          <h2 class="password-modal__title">🔒 This Article is Password Protected</h2>
          <button
            class="password-modal__close"
            (click)="onClose()"
            type="button"
            aria-label="Close dialog"
          >
            ✕
          </button>
        </div>

        <div class="password-modal__body">
          <p class="password-modal__description">
            This article requires a password to access. Please enter the password below.
          </p>

          <form (ngSubmit)="onSubmit()" class="password-form">
            <div class="password-form__group">
              <label for="password" class="password-form__label">Password:</label>
              <div class="password-form__input-wrapper">
                <input
                  id="password"
                  [type]="showPassword ? 'text' : 'password'"
                  [(ngModel)]="password"
                  name="password"
                  class="password-form__input"
                  placeholder="Enter password"
                  (keyup.enter)="onSubmit()"
                  autofocus
                />
                <button
                  type="button"
                  class="password-form__toggle"
                  (click)="togglePasswordVisibility()"
                  [attr.aria-label]="showPassword ? 'Hide password' : 'Show password'"
                  tabindex="-1"
                >
                  {{ showPassword ? '👁️‍🗨️' : '👁️' }}
                </button>
              </div>
            </div>

            @if (errorMessage) {
            <div class="password-form__error">{{ errorMessage }}</div>
            }

            <div class="password-form__actions">
              <button type="button" class="password-form__button password-form__button--cancel" (click)="onClose()">
                Cancel
              </button>
              <button type="submit" class="password-form__button password-form__button--submit" [disabled]="isLoading">
                {{ isLoading ? 'Verifying...' : 'Unlock' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    }
  `,
  styles: `
    .password-modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      backdrop-filter: blur(2px);
    }

    .password-modal {
      background: white;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      max-width: 450px;
      width: 90%;
      animation: slideUp 0.3s ease;
      overflow: hidden;
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .password-modal__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.5rem;
      border-bottom: 1px solid #e5e7eb;
      background: linear-gradient(135deg, #f9fafb 0%, #fcfdfe 100%);
    }

    .password-modal__title {
      margin: 0;
      font-size: 1.25rem;
      font-weight: 600;
      color: #212529;
    }

    .password-modal__close {
      background: none;
      border: none;
      font-size: 1.5rem;
      color: #6b7280;
      cursor: pointer;
      padding: 0;
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      transition: all 0.2s ease;
    }

    .password-modal__close:hover {
      background-color: #f3f4f6;
      color: #374151;
    }

    .password-modal__body {
      padding: 2rem;
    }

    .password-modal__description {
      margin: 0 0 1.5rem 0;
      color: #6b7280;
      line-height: 1.6;
    }

    .password-form__group {
      margin-bottom: 1.5rem;
    }

    .password-form__label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      color: #374151;
      font-size: 0.95rem;
    }

    .password-form__input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
    }

    .password-form__input {
      width: 100%;
      padding: 0.75rem;
      padding-right: 2.5rem;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      font-size: 1rem;
      transition: all 0.2s ease;
      box-sizing: border-box;
    }

    .password-form__toggle {
      position: absolute;
      right: 0.75rem;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.2rem;
      padding: 0.25rem;
      color: #6b7280;
      transition: color 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .password-form__toggle:hover {
      color: #374151;
    }

    .password-form__input:focus {
      outline: none;
      border-color: #0d6efd;
      box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.1);
    }

    .password-form__error {
      background-color: #fee;
      color: #dc2626;
      padding: 0.75rem;
      border-radius: 6px;
      margin-bottom: 1rem;
      font-size: 0.9rem;
      border-left: 3px solid #dc2626;
    }

    .password-form__actions {
      display: flex;
      gap: 0.75rem;
      justify-content: flex-end;
    }

    .password-form__button {
      padding: 0.625rem 1.25rem;
      border: none;
      border-radius: 6px;
      font-size: 0.95rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .password-form__button--cancel {
      background-color: #f3f4f6;
      color: #6b7280;
    }

    .password-form__button--cancel:hover {
      background-color: #e5e7eb;
      color: #374151;
    }

    .password-form__button--submit {
      background-color: #0d6efd;
      color: white;
    }

    .password-form__button--submit:hover:not(:disabled) {
      background-color: #0b5ed7;
    }

    .password-form__button--submit:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `,
})
export class PasswordPromptComponent {
  @Input() isOpen = false;
  @Input() articleTitle = '';
  @Output() submit = new EventEmitter<string>();
  @Output() close = new EventEmitter<void>();

  password = '';
  errorMessage = '';
  isLoading = false;
  showPassword = false;

  async onSubmit(): Promise<void> {
    if (!this.password.trim()) {
      this.errorMessage = 'Please enter a password';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    // Small delay to prevent rapid submissions
    await new Promise((resolve) => setTimeout(resolve, 300));

    this.submit.emit(this.password);
    this.isLoading = false;
  }

  onClose(): void {
    this.password = '';
    this.errorMessage = '';
    this.close.emit();
  }

  onOverlayClick(): void {
    this.onClose();
  }

  setError(message: string): void {
    this.errorMessage = message;
  }

  resetForm(): void {
    this.password = '';
    this.errorMessage = '';
    this.isLoading = false;
    this.showPassword = false;
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }}