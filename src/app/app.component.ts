import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortadaComponent } from './components/portada/portada.component';
import { PrimeraSalidaComponent } from './components/primera-salida/primera-salida.component';
import { ComienzoComponent } from './components/comienzo/comienzo.component';
import { MensajeComponent } from './components/mensaje/mensaje.component';
import { SorpresaComponent } from './components/sorpresa/sorpresa.component';

type Paso = 1 | 2 | 3 | 4 | 5;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    PortadaComponent,
    PrimeraSalidaComponent,
    ComienzoComponent,
    MensajeComponent,
    SorpresaComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  pasoActual = signal<Paso>(1);

  irAlPaso(paso: Paso) {
    this.pasoActual.set(paso);
    // Sube al inicio del scroll en cada cambio de pantalla
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  siguientePaso() {
    const actual = this.pasoActual();
    if (actual < 5) {
      this.irAlPaso((actual + 1) as Paso);
    }
  }
}
