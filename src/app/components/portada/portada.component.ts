import { Component, ElementRef, EventEmitter, Output, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portada',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portada.component.html',
  styleUrl: './portada.component.scss',
})
export class PortadaComponent {
  @Output() comenzar = new EventEmitter<void>();
  @ViewChild('musica') musicaRef?: ElementRef<HTMLAudioElement>;

  sonando = signal(false);

  toggleMusica() {
    const audio = this.musicaRef?.nativeElement;
    if (!audio) return;

    if (this.sonando()) {
      audio.pause();
    } else {
      audio.play().catch(() => {
        // El navegador puede bloquear el autoplay; se ignora silenciosamente
      });
    }
    this.sonando.set(!this.sonando());
  }

  empezar() {
    this.comenzar.emit();
  }
}
