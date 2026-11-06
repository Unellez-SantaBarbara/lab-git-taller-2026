# Laboratorio Git 2026

Proyecto práctico del taller **Git: del código al repositorio y al servidor** de formando.dev y UNELLEZ Santa Bárbara.

La aplicación es una landing estática para el **Nodo Estudiantil UNELLEZ Santa Bárbara**. Simula una página pública de encuentros tecnológicos con agenda, ubicación, aliados y recursos.

> Este repositorio contiene errores y mejoras preparados intencionalmente para el laboratorio. No represente sus textos, enlaces ni datos como información oficial hasta que un cambio sea revisado.

## Objetivo del laboratorio

Cada equipo toma una corrección, modifica el proyecto, verifica el resultado en el navegador y registra el avance en Git. Durante esta primera práctica se permite hacer `push` directo a `main`: los conflictos y cambios inesperados también serán material pedagógico.

## Inicio rápido

```bash
git clone https://github.com/Unellez-SantaBarbara/lab-git-taller-2026.git
cd lab-git-taller-2026
```

Abre `index.html` en el navegador. No requiere PHP, Node.js ni base de datos.

## Flujo mínimo

```bash
git status
git add .
git commit -m "Describe el cambio realizado"
git push origin main
```

Consulta [RETOS.md](RETOS.md) para las correcciones asignables y sus criterios de aceptación.

## Estructura

- `index.html`: contenido y estructura de la landing.
- `css/site.css`: estilos responsive.
- `js/site.js`: interacción del menú y avisos.
- `RETOS.md`: las 15 correcciones del laboratorio.

## Regla del taller

Un cambio pequeño, comprobable y explicado vale más que muchos cambios sin contexto. No subas contraseñas, tokens, datos personales reales ni archivos ajenos al proyecto.
