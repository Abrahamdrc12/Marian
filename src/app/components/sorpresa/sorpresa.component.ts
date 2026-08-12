import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Corazon {
  id: number;
  left: number;
  delay: number;
  duracion: number;
  simbolo: string;
}

@Component({
  selector: 'app-sorpresa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sorpresa.component.html',
  styleUrl: './sorpresa.component.scss',
})
export class SorpresaComponent {
  // 1: intro, 2: pregunta, 3: celebración
  fase = signal(1);
  aceptado = signal(false);

  // Posición del botón "No" (para el efecto esquivo)
  noTop = signal<number | null>(null);
  noLeft = signal<number | null>(null);
  vecesEsquivado = signal(0);

  corazones = signal<Corazon[]>([]);

  revelarPregunta() {
    this.fase.set(2);
  }

  frasesEsquiva = [
    'Casi… 😏',
    '¡Uy, se me escapó!',
    'Inténtalo de nuevo 👀',
    'Nooo, ese no era el plan',
    '¿Segura? Yo creo que no 😌',
  ];

  fraseActual = signal('');

  esquivarNo(event: MouseEvent) {
    // Mueve el botón "No" a una posición aleatoria dentro del contenedor
    const contenedor = (event.currentTarget as HTMLElement).parentElement;
    if (!contenedor) return;

    const rect = contenedor.getBoundingClientRect();
    const maxTop = rect.height - 60;
    const maxLeft = rect.width - 140;

    this.noTop.set(Math.max(0, Math.random() * maxTop));
    this.noLeft.set(Math.max(0, Math.random() * maxLeft));

    this.vecesEsquivado.update((v) => v + 1);
    const idx = Math.min(this.vecesEsquivado() - 1, this.frasesEsquiva.length - 1);
    this.fraseActual.set(this.frasesEsquiva[idx]);
  }

  aceptar() {
    this.aceptado.set(true);
    this.fase.set(3);
    this.lanzarCorazones();
  }

  private lanzarCorazones() {
    const simbolos = ['❤️', '💕', '✨', '💫'];
    const nuevos: Corazon[] = Array.from({ length: 24 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 1.2,
      duracion: 3 + Math.random() * 2,
      simbolo: simbolos[Math.floor(Math.random() * simbolos.length)],
    }));
    this.corazones.set(nuevos);
  }
}
