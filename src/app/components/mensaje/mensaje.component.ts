import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mensaje',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mensaje.component.html',
  styleUrl: './mensaje.component.scss',
})
export class MensajeComponent {
  @Output() completado = new EventEmitter<void>();

  continuar() {
    this.completado.emit();
  }
}
