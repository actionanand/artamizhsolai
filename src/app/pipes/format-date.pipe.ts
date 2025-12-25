import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe to format dates in "January 24, 2025" format
 * Handles various input date formats and standardizes the output
 */
@Pipe({
  name: 'formatDate',
  standalone: true
})
export class FormatDatePipe implements PipeTransform {
  transform(value: string | Date | null | undefined): string {
    if (!value) return '';

    try {
      // Parse the date - works with ISO strings, date strings, Date objects
      const date = typeof value === 'string' ? new Date(value) : value;
      
      // Check if date is valid
      if (isNaN(date.getTime())) {
        return '';
      }

      // Format: "January 14, 2025"
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };

      return new Intl.DateTimeFormat('en-US', options).format(date);
    } catch (error) {
      console.warn('FormatDatePipe: Error formatting date', value, error);
      return '';
    }
  }
}
