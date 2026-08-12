import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MomentoFoto {
  src: string;
  titulo: string;
  fecha: string;
}

@Component({
  selector: 'app-comienzo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comienzo.component.html',
  styleUrl: './comienzo.component.scss',
})
export class ComienzoComponent {
  @Output() completado = new EventEmitter<void>();

  // Reemplaza estas rutas y textos con sus propios momentos.
  // Las fotos van en src/assets/photos/
  momentos: MomentoFoto[] = [
    { src: 'assets/photos/Primera.png', titulo: 'Donde todo empezó', fecha: '2022' },
    { src: 'assets/photos/2023.jpg', titulo: 'Un día cualquiera juntos', fecha: '2022' },
    { src: 'assets/photos/mangui2023.jpg', titulo: 'Manguiiiii', fecha: '2023' },
    { src: 'assets/photos/cr7.jpg', titulo: 'Nos dormiamos en videollamadas juntos', fecha: 'Siempre' },
    { src: 'assets/photos/PrimerAtardecer.jpg', titulo: 'Nuestro primer atardecer', fecha: '2025' },
    { src: 'assets/photos/1.png', titulo: 'Relajadita siempre', fecha: '2026' },
    { src: 'assets/photos/2.png', titulo: 'Te ayude a amar mas el futbol Vikinga Sexi', fecha: '2026' },
    { src: 'assets/photos/3.png', titulo: 'Besito', fecha: '2026' },
    { src: 'assets/photos/4.png', titulo: 'Mas besitooossss', fecha: '2026' },
    { src: 'assets/photos/5.png', titulo: 'Cristiano nos suplico por una foto', fecha: '2026' },
    { src: 'assets/photos/6.png', titulo: 'Mi lugar feliz', fecha: '2026' },
    { src: 'assets/photos/7.png', titulo: 'Playitaaaaaaaa', fecha: '2026' },
    { src: 'assets/photos/8.png', titulo: 'Vistas nuevas', fecha: '2026' },
    { src: 'assets/photos/9.png', titulo: 'La Unica mujer que puede usar mi bestia y hacer lo que desee', fecha: '2026' },
    
  ];

  continuar() {
    this.completado.emit();
  }
}
