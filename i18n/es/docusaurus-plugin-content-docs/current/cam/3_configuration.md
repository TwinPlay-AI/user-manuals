---
id: configuration
title: Configuración
description: Conecta la cámara a una red WiFi mediante QR o acceso manual.
---

# Configuración

## Cuándo es necesario
:::tip[Nota]
- En el primer uso, es necesario emparejar la cámara con una (o más) redes WiFi con acceso a internet.
- Todas las redes guardadas permanecen en la memoria, y la cámara se conectará automáticamente a la primera red disponible.
:::

El procedimiento debe repetirse si:

1. Se cambia el nombre o la contraseña de la red.
2. Deseas emparejar la unidad con una nueva red a la que nunca haya accedido antes.

## Requisitos

- Una red WiFi con acceso a internet, cuyo nombre y contraseña sean conocidos.
- Un teléfono, tableta o PC diferente del que se utiliza como punto de acceso.

:::danger[Advertencia]
- Asegúrate de que la red WiFi tenga acceso a internet y no requiera autenticación adicional (además de la contraseña).
- La cámara admite principalmente redes WiFi de **2.4 GHz**. Algunos canales de 5 GHz no son compatibles. Consulta [**la configuración del punto de acceso**](#phone-hotspot-configuration) para más información.
- Si usas un punto de acceso móvil, se necesita un segundo dispositivo para el emparejamiento.
:::

### Configuración del punto de acceso del teléfono {#phone-hotspot-configuration}
- Punto de acceso en `Android`: Ve a la configuración del punto de acceso y establece la frecuencia en `2.4 GHz`.
- Punto de acceso en `iPhone`: Ve a la configuración del punto de acceso y habilita la opción `Optimizar compatibilidad`.

## Configuración WiFi con App Móvil

:::tip[Método recomendado]
La app móvil TwinPlay permite configurar las redes WiFi en cualquier momento, incluso durante la grabación, sin necesidad de interrumpir los entrenamientos.
:::

### Requisitos
- Smartphone con Bluetooth habilitado  
- App TwinPlay instalada
- Cámara encendida y funcionando

### Procedimiento
1. **Descarga la app TwinPlay** desde tu tienda (App Store/Google Play)
2. **Habilita Bluetooth** en tu smartphone
3. **Abre la app** y ve a la sección "WiFi Configuration"
4. **Conéctate a la cámara** vía Bluetooth (la cámara aparecerá en la lista de dispositivos disponibles)
5. **Selecciona la red WiFi** deseada de la lista de redes disponibles
6. **Introduce la contraseña** de la red WiFi
7. **Confirma la configuración** - la cámara se conectará automáticamente

:::info[Ventajas de la app móvil]
- ✅ **Configuración durante grabación**: Cambia red WiFi sin parar la grabación
- ✅ **Gestión múltiples redes**: Guarda y gestiona varias redes WiFi 
- ✅ **Monitoreo en tiempo real**: Ve el estado de conexión y potencia de señal
- ✅ **Sin interrupciones**: No requiere poner la cámara en modo asociación
- ✅ **Más fácil**: Sin códigos QR ni navegador web
:::

## Procedimiento de asociación

1. Enciende la red WiFi a la que deseas asociar la cámara.
2. Enciende la unidad de procesamiento. Es importante que esta se encienda **DESPUÉS** de haber encendido la red WiFi.
3. Espera a que la luz indicadora haga un doble parpadeo antes de continuar.
   (Consulta las secciones [**Comandos**](before-starting#comandos) y [**Estados**](before-starting#estados) para más información)
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <span style={{ fontSize: '20px'}}>espera</span> {/* Flecha grande */}
  <img src="/img/blink2_400ms_50_1000ms.gif" alt="doble_parpadeo" style={{ width: '80px' }} />
</div>

<details>
  <summary>a) Con código QR</summary>
  
1. Escanea el primer código QR para conectarte a la red TwinPlay.

   <img src="/img/QR_wifi.png" alt="qr_wifi" width="150" />

2. Escanea el segundo código QR para ser redirigido a la página de configuración de TwinPlay.

   <img src="/img/QR_link.png" alt="qr_link" width="150" />
</details>

<details>
  <summary>b) Sin código QR</summary>

```
Red: TwinPlay
Contraseña: TwinPlayCamera
```

1. Conéctate a la red.

2. Abre el navegador (Chrome, Safari, etc.) y ve a la página **http://192.168.4.1:5000**, donde se abrirá la página de configuración de TwinPlay.
</details>

### Guardar red

5. Selecciona la red WiFi a la que deseas conectar la cámara, introduce su contraseña y haz clic en el botón “Conectar”.
6. Espera 1 minuto.

Si la asociación se realizó correctamente, la luz indicadora comenzará a **parpadear regularmente**, iniciando directamente la grabación del entrenamiento. Si la luz vuelve a parpadear con 2 impulsos rápidos, la asociación no se completó correctamente: verifica que la conexión tenga acceso a internet y que la contraseña ingresada sea correcta.