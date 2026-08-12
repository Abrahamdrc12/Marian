# Nuestra historia 💕

Proyecto Angular (standalone components, Angular 17) con las 5 pantallas de la experiencia:

1. **Portada** – frase inicial + botón para comenzar
2. **Nuestra primera salida** – revelación interactiva paso a paso
3. **El comienzo** – galería con línea de tiempo
4. **Lo que quiero decirte** – el mensaje reflexivo
5. **La sorpresa** – la pregunta final, con el botón "No" juguetón y celebración animada al aceptar

## Cómo correrlo

1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Levanta el servidor local:
   ```bash
   npm start
   ```
3. Abre `http://localhost:4200`

## Cómo personalizarlo

### Fotos
Coloca tus imágenes dentro de `src/assets/photos/`:
- `portada.jpg` → foto de fondo de la primera pantalla
- `momento1.jpg`, `momento2.jpg`, `momento3.jpg`, `momento4.jpg` → fotos de la línea de tiempo (puedes agregar más o menos editando el arreglo `momentos` en `src/app/components/comienzo/comienzo.component.ts`)

### Música (opcional)
Coloca un archivo `.mp3` en `src/assets/music/portada.mp3`. El botón 🔇/🔈 en la esquina de la portada la activa (los navegadores bloquean el autoplay, así que siempre requiere un clic).

### Textos
Todos los textos están directamente en los archivos `.html` de cada componente — puedes editarlos libremente sin tocar la lógica.

### Colores
La paleta está centralizada en `src/styles.scss` (variables CSS `--wine`, `--blush`, `--gold`, etc.) — cambia esos valores para ajustar el tono general.

## Estructura

```
src/
  app/
    app.component.ts        → controla qué pantalla se muestra
    components/
      portada/               → pantalla 1
      primera-salida/        → pantalla 2 (interactiva)
      comienzo/               → pantalla 3 (galería)
      mensaje/                → pantalla 4
      sorpresa/               → pantalla 5 (pregunta final)
  assets/
    photos/                  → tus fotos van aquí
    music/                   → tu canción va aquí
```

## Publicarlo (para compartir el link)

Una vez listo, puedes desplegarlo gratis en:
- **Vercel** o **Netlify**: arrastra la carpeta `dist/nuestra-historia` después de correr `npm run build`
- **Firebase Hosting**: `firebase init hosting` + `firebase deploy`

Así puedes mandarle el link directamente en lugar de mostrarle el código.
