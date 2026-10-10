# Recursos y bibliotecas de terceros

## Diccionarios en español (`caliope/resources/dictionaries/es/`)
Proceden del proyecto [LibreOffice/dictionaries](https://github.com/LibreOffice/dictionaries/tree/master/es).

| Archivos | Qué es | Autoría | Licencia |
|---|---|---|---|
| `es_ES.aff`, `es_ES.dic` | Corrector ortográfico Hunspell (español de España) | Proyecto RLA-ES | GPL 3 / LGPL 3 / MPL 1.1 a elección (se usa **LGPL 3**: `LGPLv3.txt`) |
| `th_es_v2.dat` | Diccionario de sinónimos (OpenThesaurus, formato MyThes) | Marcelo Garrone y colaboradores | **LGPL 2.1** (`LGPLv2.1.txt`) |

Se distribuyen sin modificar, junto con sus `README_*.txt` y `LICENSE.md` originales.
Se usan solo como datos: Calíope los lee en tiempo de ejecución y no enlaza código de ellos.

## Diccionario en inglés británico (`caliope/resources/dictionaries/en/`)
`en_GB.aff`, `en_GB.dic`: corrector Hunspell **en_GB-ise** (SCOWL, Kevin Atkinson y colaboradores; paquete de
[wooorm/dictionaries](https://github.com/wooorm/dictionaries)). Licencia permisiva tipo MIT/BSD con los avisos de SCOWL, Ispell y
WordNet; el texto completo está en `LICENSE_en_GB.txt`. Se distribuye sin modificar y se usa solo como datos.

`th_en_US_v2.dat`: diccionario de sinónimos inglés (formato MyThes, de LibreOffice/dictionaries), derivado de **WordNet 3.0**
(© Princeton University, licencia permisiva de WordNet incluida en `LICENSE_en_GB.txt`). Se filtra con `tools/build_th_en.py`
(se quitan los términos «generic term» y «related term», que no son sinónimos). Calíope activa el de español o el de inglés
según el idioma elegido.

## Traducciones de Qt (`caliope/resources/locales/qtbase_es.qm`)
Catálogo de PySide6/Qt (LGPL 3) copiado de la instalación de PySide6: traduce los menús nativos (deshacer, copiar, pegar…).

## Sonidos del Modo Ultra Foco (`assets/sounds/`)
**Ambientes** (`ambient_*.wav`): bucles de unos 24 s recortados de grabaciones reales de [Wikimedia Commons](https://commons.wikimedia.org/)
(mono, 22,05 kHz; se unen final y principio con `tools/make_ambient_samples.py`). Los de dominio público no exigen atribución; los
**CC BY** ([3.0](https://creativecommons.org/licenses/by/3.0/) / [4.0](https://creativecommons.org/licenses/by/4.0/)) se han
recortado, nivelado y convertido a mono, y exigen esta atribución:

| Ambiente | Archivo | Original | Autoría | Licencia |
|---|---|---|---|---|
| Lluvia en la ventana | `ambient_rain_window.wav` | [Rain against the window.ogg](https://commons.wikimedia.org/wiki/File:Rain_against_the_window.ogg) | cori | Dominio p�blico |
| Lluvia en la veranda | `ambient_rain_veranda.wav` | [Rain on a veranda and t.ogg](https://commons.wikimedia.org/wiki/File:Rain_on_a_veranda_and_t.ogg) | ezwa | Dominio p�blico |
| Tormenta sobre la veranda | `ambient_rain_storm.wav` | [Thunder and rain on a v.ogg](https://commons.wikimedia.org/wiki/File:Thunder_and_rain_on_a_v.ogg) | ezwa | Dominio p�blico |
| Lluvia con truenos lejanos | `ambient_rain_thunder.wav` | [Rain and thunder (1).ogg](https://commons.wikimedia.org/wiki/File:Rain_and_thunder_(1).ogg) | ezwa | Dominio p�blico |
| Lluvia, truenos y p�jaros | `ambient_rain_birds.wav` | [Rain thunder and birds.ogg](https://commons.wikimedia.org/wiki/File:Rain_thunder_and_birds.ogg) | ezwa | Dominio p�blico |
| Lluvia intensa | `ambient_rain_heavy.wav` | [Listening to Raindrops (1035382 - heavy loop).mp3](https://commons.wikimedia.org/wiki/File:Listening_to_Raindrops_(1035382_-_heavy_loop).mp3) | NASA | Dominio p�blico |
| Bosque en calma | `ambient_forest.wav` | [20090610 0 ambience.ogg](https://commons.wikimedia.org/wiki/File:20090610_0_ambience.ogg) | nille | Dominio p�blico |
| Bosque profundo | `ambient_forest_deep.wav` | [Forest ambience 2 (Gravity Sound).wav](https://commons.wikimedia.org/wiki/File:Forest_ambience_2_(Gravity_Sound).wav) | Gravity Sound | CC BY 4.0 |
| Amanecer en la selva | `ambient_dawn_rainforest.wav` | [RainforestDawnChorus Selaliparai DM.ogg](https://commons.wikimedia.org/wiki/File:RainforestDawnChorus_Selaliparai_DM.ogg) | DivyaCM | CC BY 4.0 |
| Arroyo | `ambient_brook.wav` | [Brook sound.ogg](https://commons.wikimedia.org/wiki/File:Brook_sound.ogg) | TwoWings | CC BY 3.0 |
| Cascada | `ambient_cascade.wav` | [Cascade de Syratu.ogg](https://commons.wikimedia.org/wiki/File:Cascade_de_Syratu.ogg) | Arie m den toom | CC BY 4.0 |
| Fuente en la plaza | `ambient_fountain.wav` | [La fontaine de la place.ogg](https://commons.wikimedia.org/wiki/File:La_fontaine_de_la_place.ogg) | aldor | Dominio p�blico |
| Playa | `ambient_beach.wav` | [Beach sounds South Carolina.ogg](https://commons.wikimedia.org/wiki/File:Beach_sounds_South_Carolina.ogg) | Anthropic42 (Wikipedia en ingl�s) | Dominio p�blico |
| Muelle | `ambient_wharf.wav` | [Boat by a wharf 2.ogg](https://commons.wikimedia.org/wiki/File:Boat_by_a_wharf_2.ogg) | ezwa | Dominio p�blico |
| Hoguera de San Juan | `ambient_bonfire.wav` | [WWS Bonfireburning.ogg](https://commons.wikimedia.org/wiki/File:WWS_Bonfireburning.ogg) | Work With Sounds / Werstas | CC BY 4.0 |
| Fuego de campamento | `ambient_campfire.wav` | [Campfire sound ambience.ogg](https://commons.wikimedia.org/wiki/File:Campfire_sound_ambience.ogg) | Glaneur de sons | CC BY 3.0 |
| Estanque al anochecer | `ambient_night_pond.wav` | [Nature sounds ambience in a Dordogne pond.ogg](https://commons.wikimedia.org/wiki/File:Nature_sounds_ambience_in_a_Dordogne_pond.ogg) | Glaneur de sons | CC BY 3.0 |
| Coro de ranas | `ambient_frogs.wav` | [Night Chorus of Frogs and Toads in Niger Delta.ogg](https://commons.wikimedia.org/wiki/File:Night_Chorus_of_Frogs_and_Toads_in_Niger_Delta.ogg) | ElemePodcast | CC BY 4.0 |
| Cigarras de verano | `ambient_cicadas.wav` | [Cicada orni.ogg](https://commons.wikimedia.org/wiki/File:Cicada_orni.ogg) | DavidDelon | Dominio p�blico |
| Restaurante | `ambient_restaurant.wav` | [Restaurant ambience.ogg](https://commons.wikimedia.org/wiki/File:Restaurant_ambience.ogg) | stephan | Dominio p�blico |
| Mercadillo bajo la lluvia | `ambient_flea_market.wav` | [Flea market in the rain.ogg](https://commons.wikimedia.org/wiki/File:Flea_market_in_the_rain.ogg) | stephan | Dominio p�blico |
| Reloj de pared | `ambient_kitchen_clock.wav` | [LA2 kitchen clock.ogg](https://commons.wikimedia.org/wiki/File:LA2_kitchen_clock.ogg) | LA2 | Dominio p�blico |

**Teclas de máquina de escribir** (`typewriter/classic/` y `typewriter/crisp/`, a elegir en Ajustes): pulsaciones recortadas (y con otro tono, en el caso de la barra, el retroceso y
Intro) de dos grabaciones de máquina de escribir generadas con **[ElevenLabs](https://elevenlabs.io)** (efectos de sonido «Typing on
typewriter» → *Clásica* y «Typewriter typing» → *Nítida*; `tools/make_typewriter_samples.py`). Los efectos de ElevenLabs son libres de derechos y se pueden usar en proyectos
comerciales; el plan gratuito exige atribución a elevenlabs.io (de ahí esta línea) y los planes de pago no. No se usan para
desarrollar ni ofrecer una herramienta de generación de sonido competidora.

## Bibliotecas
- **PySide6** (Qt for Python) — LGPL 3.
- **spylls** — implementación de Hunspell en Python puro — MIT.
- **Vosk** (Alpha Cephei) — reconocimiento de voz sin conexión para el dictado — Apache 2.0.

## Modelos de voz del dictado (no se distribuyen con Calíope)
Los modelos de Vosk (`vosk-model-es-0.42`, `vosk-model-small-es-0.42`, `vosk-model-en-us-0.22`, `vosk-model-small-en-us-0.15`,
licencia Apache 2.0) se descargan a petición de la persona usuaria desde https://alphacephei.com/vosk/models/ a la carpeta de
datos de Calíope (`models/vosk/`). Después el dictado no necesita conexión.

## Herramientas de compilación (no se distribuyen con el código)
- **PyInstaller** — empaqueta la aplicación en un ejecutable — GPL 2 con excepción para programas empaquetados.
- **Inno Setup** — genera el instalador — licencia propia de Inno Setup (uso libre).
