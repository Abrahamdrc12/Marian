import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-primera-salida',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './primera-salida.component.html',
  styleUrl: './primera-salida.component.scss',
})
export class PrimeraSalidaComponent {
  @Output() completado = new EventEmitter<void>();

  // 1: whatsapp, 2: quería una cosa, 3: bailar contigo, 4: rechazabas a todos, 5: porque me esperabas
  subpaso = signal(1);

  siguiente() {
    if (this.subpaso() < 5) {
      this.subpaso.update((v) => v + 1);
    } else {
      this.completado.emit();
    }
  }
}
