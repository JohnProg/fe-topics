# Angular - Lazy Loading de Módulos

Implementa lazy loading en una aplicación Angular dividiendo la aplicación en varios
módulos. Usa Angular Router para definir rutas y carga los módulos solo cuando el
usuario los necesita.
Entrega el código y explica los beneficios de usar lazy loading en una aplicación de gran
escala.

```
El concepto de Lazy Loading nos permite organizar una aplicación Angular que no cargue en forma completa toda la aplicación web en una única llamada al servidor, sino que retrace la carga hasta el momento de su utilización.

Esta forma de particionar una aplicación y su carga por partes es de suma importancia cuando tenemos aplicaciones muy grandes y tiene como beneficio que el usuario no tenga que esperar mucho tiempo en la carga inicial de la aplicación. Como desventaja podríamos decir que cuando el usuario accede a otras secciones de la aplicación también tenga que esperar que se recuperen del servidor.
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
