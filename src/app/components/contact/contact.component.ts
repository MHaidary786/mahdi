import { Component } from '@angular/core';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };
  submitted = false;
  loading = false;
  successMessage = '';

  constructor(private emailService: EmailService) {}

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      this.loading = true;
      
      // Simulate email sending
      setTimeout(() => {
        this.loading = false;
        this.submitted = true;
        this.successMessage = 'Message sent successfully! I\'ll get back to you soon.';
        this.resetForm();
      }, 2000);
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }

  closeMessage() {
    this.submitted = false;
    this.successMessage = '';
  }
}