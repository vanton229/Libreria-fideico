# LibFideico

Libreria para conexion con los servicios REST del módulo de Fideicomiso

## Code scaffolding

Run `ng generate component component-name --project lib-fideico` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project lib-fideico`.
> Note: Don't forget to add `--project lib-fideico` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build lib-fideico` to build the project. The build artifacts will be stored in the `@laranda/` directory.

## Publishing

After building your library with `ng build lib-fideico`, go to the dist folder `cd @laranda/lib-fideico` and run `npm publish`.

## Instalación

npm i @laranda/lib-fideico

## Configurar Archivo app.module.ts

Después de instalar la librería importamos la clase LibFideicoModule

import { LibFideicoModule } from '@laranda/lib-fideico';
Se coloca en el imports LibFideicoModule

Ejemplo

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibFideicoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
