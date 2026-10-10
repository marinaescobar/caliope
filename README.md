<div align="center">

<img src="assets/calliope_icon_256.png" alt="Logo de Calíope" width="140">

# Calíope

**Tu musa para la escritura**

Aplicación de escritorio para escritores: organiza tu novela en partes, capítulos y escenas, y ten a mano personajes, relaciones, lugares, mundo y mapas.

<br>

## ⬇️ Descargar

<a href="https://github.com/marinaescobar/caliope/releases/download/v1.9.1/Caliope-Setup-1.9.1.exe"><img src="https://img.shields.io/badge/Descargar%20para-Windows%20(.exe)-6C4AB6?style=for-the-badge&logo=windows&logoColor=white" alt="Descargar para Windows"></a>
&nbsp;
<a href="https://github.com/marinaescobar/caliope/releases/download/v1.9.1/Caliope-1.9.1-macOS-arm64.dmg"><img src="https://img.shields.io/badge/Descargar%20para-Mac%20Apple%20Silicon%20(.dmg)-A8B89F?style=for-the-badge&logo=apple&logoColor=1F2820&labelColor=A8B89F&color=A8B89F" alt="Descargar para Mac con Apple Silicon"></a>
&nbsp;
<a href="https://github.com/marinaescobar/caliope/releases/download/v1.9.1/Caliope-1.9.1-macOS-x86_64.dmg"><img src="https://img.shields.io/badge/Descargar%20para-Mac%20Intel%20(.dmg)-A8B89F?style=for-the-badge&logo=apple&logoColor=1F2820&labelColor=A8B89F&color=A8B89F" alt="Descargar para Mac con Intel"></a>

<sub>Versión 1.9.1 · [Página web](https://marinaescobar.github.io/caliope/) · [Todas las versiones y novedades](https://github.com/marinaescobar/caliope/releases)</sub>

</div>

<br>

| Tu equipo | Archivo | Enlace directo |
|---|---|---|
| 🪟 **Windows** 10 / 11 | `Caliope-Setup-1.9.1.exe` | [Descargar](https://github.com/marinaescobar/caliope/releases/download/v1.9.1/Caliope-Setup-1.9.1.exe) |
| 🍎 **Mac con chip Apple** (M1, M2, M3, M4…) | `Caliope-1.9.1-macOS-arm64.dmg` | [Descargar](https://github.com/marinaescobar/caliope/releases/download/v1.9.1/Caliope-1.9.1-macOS-arm64.dmg) |
| 🍎 **Mac con procesador Intel** | `Caliope-1.9.1-macOS-x86_64.dmg` | [Descargar](https://github.com/marinaescobar/caliope/releases/download/v1.9.1/Caliope-1.9.1-macOS-x86_64.dmg) |

### Instalar en Windows
Ejecuta el `.exe` y sigue el asistente (no necesita permisos de administrador). Si Windows SmartScreen avisa, pulsa **Más información › Ejecutar de todas formas**: el instalador aún no está firmado.

### Instalar en Mac
1. Abre el `.dmg` y arrastra **Calíope** a la carpeta **Aplicaciones**.
2. La primera vez macOS la bloqueará porque no está firmada por Apple: haz **clic derecho (o Control + clic) sobre Calíope › Abrir › Abrir**.
3. Si aun así dice que está dañada, ejecuta en la Terminal: `xattr -dr com.apple.quarantine /Applications/Caliope.app`.

¿Qué Mac tengo? Menú  › *Acerca de este Mac*: si pone «Chip Apple M…» elige *Apple Silicon*; si pone «Procesador Intel», elige *Intel*.

Calíope busca e instala actualizaciones desde **Ajustes › Información de Calíope y actualizaciones** (en Mac descarga el `.dmg` y lo abre para que lo arrastres a Aplicaciones).

> Los archivos de Mac se generan automáticamente al publicar cada versión; pueden tardar unos minutos en aparecer.

## Qué incluye

- **Manuscrito** por partes, capítulos y escenas, con propósito, resumen e ideas en cada nivel, importación de manuscritos (`.docx`, `.pdf`, `.txt`) y un panel de análisis con gráficos y recomendaciones.
- **Corrector** ortográfico, gramatical y de estilo en español, y diccionario de sinónimos, todo sin conexión.
- **Personajes, relaciones, lugares y mundo**, con autocompletado y enlaces entre ellos.
- **Cartografía**: mapas de fantasía y planos de ciudad.
- **Objetos y artefactos**: armas y armaduras, reliquias, vestimenta, vehículos, documentos y herramientas, con ficha por categoría, ilustración, portador y ubicación enlazados a tus personajes y lugares (cada personaje tiene su inventario y cada lugar, sus objetos presentes).
- **Cronología**: líneas temporales con eventos (fechas, imágenes, descripción), Edades como «Edad Media» con su color, y **calendarios** incluidos (gregoriano, juliano, chino, hebreo, islámico…) o creados por ti, con sus meses, su semana y su origen. La fecha se escribe (`2025-05-10`) o se elige en un calendario emergente construido con la estructura del calendario.
- **Retos de Talía**: meta diaria de palabras, racha de días, desafíos creativos y Modo Foco con temporizador y avisos discretos de Talía que te acompañan mientras escribes (saludo diario, metas, rachas, retos, insignias y fichas completadas) y, con la aplicación abierta, comenta cada media hora tu historia y tu Mundo con preguntas, curiosidades y consejos. **Talía no es una IA** ([cómo funciona](#talía-no-es-una-ia)): todo ocurre en tu equipo y se ajusta o se desactiva en Ajustes.
- **Clío**, una musa de la investigación para dudas factuales. Es la única parte de Calíope que usa inteligencia artificial.
- **Modo Ultra Foco** (opcional, en Ajustes): sustituye al Modo Foco con una pantalla completa de lienzo estrecho, **22 ambientes reales** (lluvia, bosque, agua, fuego, noche, cafeterías…), dos grabaciones de **máquina de escribir** a elegir, ocho fondos con vista previa y selección de la salida de audio. Todo en local; créditos de los sonidos en [`THIRD_PARTY.md`](THIRD_PARTY.md).
- Tema oscuro y claro, e interlineado, tipo de letra y sangría a tu gusto.

## Talía no es una IA

> **Talía no es una inteligencia artificial.** Detrás de ella no hay ningún modelo de IA, ningún servicio en internet ni nadie
> leyendo tu texto. Es un conjunto de reglas y frases escritas a mano que se ejecutan **dentro de tu ordenador**.

**Qué es.** Talía, la musa de la comedia, es la compañera de la sección **Retos**: te anima a escribir, cuenta tu racha, celebra tus metas
y, de vez en cuando, te hace una pregunta o te cuenta una curiosidad. Es un personaje de la aplicación, no un asistente que entienda lo que escribes.

**Cómo funciona, paso a paso.**

1. Cada cierto tiempo (cada 30 minutos por defecto; puedes cambiarlo o ponerlo en «nunca») y cuando pasa algo (abres el Manuscrito, completas
   un reto, terminas una ficha, llegas a tu meta de palabras), Calíope **cuenta y comprueba datos sencillos de tu proyecto, en tu equipo**:
   cuántas palabras llevas hoy, qué capítulos no tienen resumen, qué campos de una ficha están vacíos, si un personaje nace en un lugar que aún no tiene ficha…
2. Con ese recuento elige **al azar una frase de una lista preparada de antemano** (cientos de plantillas y curiosidades sobre escritura y
   worldbuilding, escritas por una persona) y rellena sus huecos con **nombres y datos que tú ya habías escrito** en tus fichas: «¿Qué te gustaría contar de *Rocío*?».
3. La muestra en un aviso discreto que se retira solo, con el tiempo que hace falta para leerlo. Si quieres, lo cierras con un clic.

**Qué no hace.** No interpreta, resume ni valora tu texto; no «entiende» tu historia; no genera texto nuevo; no aprende de ti; no se conecta a
internet; no envía nada a ningún sitio. Sus retos salen de catálogos escritos de antemano y los que se miden solos se comprueban contando
elementos de tu proyecto. Lo mismo vale para el corrector ortográfico, gramatical y de estilo y para el diccionario de sinónimos: reglas y
diccionarios que funcionan sin conexión.

**Cómo se ajusta.** En **Ajustes › Módulo de Retos de Talía** puedes desactivarla por completo, silenciar sus avisos o elegir cada cuánto comenta tu historia.

**¿Y Clío?** Clío, la musa de la investigación, **sí usa inteligencia artificial** (un modelo de Google Gemini al que le haces preguntas con tu propia clave).
Es la única que sale de tu ordenador, y solo envía lo que escribes en su chat; ver [Privacidad](#privacidad).

## Privacidad

Tus proyectos se guardan solo en tu equipo. Talía, el corrector y los sinónimos funcionan **sin conexión y sin IA**: ningún dato de tu proyecto sale de tu ordenador.
La única parte que se conecta a internet es **Clío**, y **no usa ningún dato introducido en Calíope**: únicamente recibe lo que escribas en su chat.
Si prefieres no usarla, desmarca **Ajustes › Mostrar a Clío** y su chat se oculta.

## Licencias de terceros

Ver [`THIRD_PARTY.md`](THIRD_PARTY.md).
