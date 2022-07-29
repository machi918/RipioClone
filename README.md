# RipioClone
Aplicación clon de la App de [Ripio](https://www.ripio.com/ar/) con React Native.

Desarrollada únicamente con propósitos recreacionales.
[Ripio](https://www.ripio.com/ar/) posee todos los derechos reservados y no se busca infringir los mismos. 

El objetivo fue desarrollar un clon de la App de [Ripio](https://play.google.com/store/apps/details?id=com.ripio.android&hl=es_AR&gl=US) con el fin de 
testear un poco mis habilidades y realizar algunas modificaciones que podrían aplicarse muy bien en la App oficial.

Esta app cuenta con integración con Firebase para el manejo de usuarios e información muy básica. Esa información será borrada al cabo de 1 mes. Sólo se utiliza un correo
electrónico con el fin de realizar la autenticación y persistir información de sus Pesos y RPC en Firestore. Si NO desea registrarse, puede ingresar anónimamente
y disfrutar de la app igualmente.

## Tabla de contenidos

- [Instalación y ejecución](#instalación--ejecución)
- [Solución](#solución)
  - [Interfaz de usuario](#interfaz-de-usuario)
  - [State - Redux](#state---redux)
  - [APIs](#apis)
- [Librerías](#librerías)
- [Mejoras Posibles](#mejoras-posibles)
- [Descarga el APK](#descarga)
- [Agradecimientos](#agradecimientos)
- [Licencia](#licencia)


## Instalación & ejecución

Actualmente, la app únicamente se encuentra disponible para Android

No implementé ni probé su análogo en iOS ya que no poseo un Mac para compilar. Algunas librerías necesitan configuraciones extras para esa plataforma.

Primero, asegúrese de tener el ambiente de desarrollo configurados correctamente para [React Native](https://reactnative.dev/)

Una vez que clone el proyecto, abra la terminal y ejecute:
```bash
npm install
```

Para correr el proyecto localmente, ejecute:
```bash
npm run start
```

En otra terminal, puede instalar y ejecutar la aplicación en su simulador o teléfono, con el comando:
```bash
npx react-native run-android
```

## Solución

### Interfaz de usuario

En cuanto a la UI & UX se trató de realizar un calco lo más aproximado posible a la App original.

Se agregaron algunas animaciones extras. Éstas se puede apreciar en la barra de navegación de la app, interacción en ciertas pantallas y a la hora de realizar el registro.

Todas éstas fueron realizadas utilizando la librería [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/)

### State - Redux

En cuanto al manejo del estado e información de la app en uso, utilicé [Redux-Toolkit](https://redux-toolkit.js.org/): El mismo maneja tanto el estado del usuario, como también las noticias actuales y monedas (éste último siendo un dummy)

### APIs

En la app, se consultan dos APIs diferentes para la información de las criptos y blockchain:

- [Crypto Panic](https://cryptopanic.com/): Utilizada para obtener las ultimas noticias del mundo crypto.

- [CoinGecko](https://www.coingecko.com/es): Utilizada para obtener los precios de una determinada cripto dentro de los ultimos 60 días.

## Librerías
- [React Navigation](https://reactnavigation.org/)
- [React Native Firebase](https://rnfirebase.io/)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/)

## Mejoras Posibles
- Con la llegada de la tan esperada [Nueva Arquitectura de React Native](https://reactnative.dev/docs/new-architecture-intro), se le hizo un refresh absolutamente necesario.
Cambia muchas cosas de core, permitiendo desarrollar aplicaciones de muchísima más alta calidad. Esta app no se encuentra utilizando la nueva arquitectura ya que no la habilité.
Y por más de que implique un cambio muy central y que lleva tiempo implementar, indudablemente vale la pena pasarse.

- Para el manejo aún más rápido de imágenes como puede ser de las noticias (en el clon NO tienen imágenes las mismas), podría ser 
una buena idea implementar la librería [React Native Fast Image](https://github.com/DylanVann/react-native-fast-image). Ësta permite cachear las
imágenes más eficientemente, provocando una gran mejora de performance.

- En cuanto a la App oficial, sacando la posibilidad de que sea por seguridad, por lo menos en iOS, con mucha frecuencia se cierra la sesión y genera errores sin información. Esto puede generarse al token estar venciendo muy rápido o que no se maneje bien las fechas al hacer el decode del mismo. Es sólo una posibilidad, al conocer el código oficial no puedo estimarlo con exactitud.

## Descarga

Si no deseas iniciar todo el ámbito de desarrollo, puedes descargar el APK [AQUI](https://github.com/DylanVann/react-native-fast-image)

## Agradecimientos
Muchas gracias por tomarse el tiempo de leer este archivo y de probar la app clon que realicé.

Cada App que realizo me llena de orgullo que hayan personas las cuales puedan utilizarlas y disfrutarlas.

Cualquier tipo de feedback viene muy bien y es bienvenido.

## Licencia
No poseo ninguno de los derechos asociados a la marca Ripio o App Ripio. Todas son parte de su propiedad. 

[Ripio](https://www.ripio.com/ar/)

Este clon no será vendido ni distríbuido.
