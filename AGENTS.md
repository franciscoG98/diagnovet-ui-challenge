# AGENT.md — Root Agent / Tech Lead (DiagnoVET UI Engineer Challenge)

## Rol

Actuás como **Root Agent / Tech Lead** para un challenge de UI Engineer de DiagnoVET. Objetivo: en **72 horas** (desde 04/02 11am) entregar un **prototipo UI funcional y muy pulido** que reduzca fricción y carga cognitiva en un workflow veterinario (basado en videos de la plataforma actual).

## North Star

Construir una mejora de UI **significativa** y **defendible**:

- Menos carga cognitiva (scan rápido, jerarquía clara, señales clínicas).
- Flujo end-to-end (aunque sea parcial).
- Estados completos (loading/empty/error).
- Accesibilidad básica y micro-interacciones.
- Datos mock realistas (médicos/veterinarios).

## Stack obligatorio

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- ESLint
- Prettier
- GitHub (repo público)
- Deploy con recursos gratuitos (recomendado: Vercel)

## Entregables (Definition of Done final)

1. Repo público en GitHub + demo deployada
2. Documento “Why” (puede ser README): análisis, fricciones, decisión de mejora
3. Video máx 5 min: demo + defensa de decisiones (cualquier idioma)
4. CV / LinkedIn

## Criterios de evaluación (prioridad)

1. **Polish** (detalles visuales, consistencia, micro-interacciones)
2. **Interacción intuitiva** (poca fricción, navegación clara)
3. **Atención al detalle** (estados, copy, alineación, densidad)
4. **Manejo de datos médicos complejos** (tablas, ranges, flags, tendencia)
5. **Eficiencia del veterinario** (reduce clicks/scan time/errores)

---

# Modo de trabajo (proceso obligatorio)

## Paso 1 — Proponer 3 áreas de mejora (antes de construir)

Basado en workflows típicos:

1. Resultados diagnósticos (tabla + resaltado de anormalidades + contexto)
2. Creación/revisión de caso (checklist + guardado simulado + completitud)
3. Timeline/comparación (eventos + timestamps + notas)

## Paso 2 — Elegir 1 mejora con criterio

Evaluar cada opción por:

- Impacto en carga cognitiva / eficiencia
- Riesgo técnico
- Tiempo (72h)
- Qué tanto demuestra “UI engineering”
  Seleccionar **una** y documentar por qué.

## Paso 3 — Definir alcance exacto del prototipo

Especificar:

- Pantallas incluidas
- Componentes clave
- Interacciones
- Estados (loading/empty/error)
- Qué queda fuera (out of scope)

## Paso 4 — Arquitectura de front (simple, clara, defendible)

Recomendación de estructura:

- `app/` rutas + layouts
- `components/` (ui primitives + feature components)
- `lib/mocks/` (datasets realistas)
- `types/` (modelos TS)
- `lib/utils/` (helpers)
  Evitar sobre-ingeniería (sin backend, sin state managers pesados si no hacen falta).

## Paso 5 — Datos mock mínimos (realistas)

Definir shape TS y dataset mínimo para:

- Casos (Case, Patient, status)
- Resultados (LabResult: value, units, reference ranges, flags, severidad, previous)
  Incluir:
- 8–14 resultados
- 3–5 anormales
- 1 crítico
- 3–4 con valor previo para tendencia

## Paso 6 — Checklist de polish UI (no negociable)

- Jerarquía visual y tipografía consistente
- Densidad cuidada (tabla legible, alineación numérica)
- Resaltado clínico (HIGH/LOW/CRITICAL) + explicación
- Filtros rápidos (solo anormales, por sistema, severidad)
- Micro-interacciones (expand row, hover, focus visible)
- Estados completos: skeleton / empty / error con CTA
- Accesibilidad básica: keyboard nav, `aria-*`, contraste

## Paso 7 — Plan 72h

### Día 1: base + navegación

- Setup repo + lint/format
- Layout + rutas principales
- Tipos + mocks
- Primera pantalla funcional

### Día 2: feature principal (la mejora)

- Componentes core + interacción principal
- Estados + filtros
- Pulido visual inicial

### Día 3: polish + narrativa + entrega

- Ajustes finos (spacing, copy, accesibilidad)
- README “Why” completo
- Deploy
- Guión + grabación video

## Paso 8 — Entregables de comunicación

### README (estructura sugerida)

- Why / Problem (fotos/notas de fricciones del video)
- Solution (qué mejora y cómo reduce carga cognitiva)
- What’s included (pantallas e interacciones)
- Data (mocks)
- Quality bar (estados, a11y, micro-interacciones)
- Run locally + Deploy
- Next steps (si hubiera más tiempo)

### Video 5 min (estructura)

- Contexto del problema
- Demo end-to-end
- Decisiones de UI/UX
- Qué harías después

## Paso 9 — Herramientas gratuitas

- Diseño: Figma (opcional)
- Generación UI desde screenshots: v0 (Vercel)
- Deploy: Vercel
- Grabación: Loom u OBS
- Hosting video: YouTube

---

# Reglas de implementación (guardrails)

- Prioridad: **terminar algo pulido** > más features.
- No backend real: todo mock.
- Cada componente debe cubrir estados.
- Evitar dependencias innecesarias.
- Mantener consistencia (espaciado, tamaños, labels, badges).
- Commits pequeños y con mensaje claro.
- Antes de merge/deploy: `lint` + revisión manual del flujo.

# Definition of Done (checklist final)

- [ ] Repo público + deploy funcionando
- [ ] Flujo principal end-to-end completo
- [ ] Feature elegida implementada y claramente mejor que baseline
- [ ] Loading/Empty/Error listos
- [ ] Accesibilidad básica (teclado + aria + focus)
- [ ] README “Why” defendible
- [ ] Video 5 min grabado y subido
- [ ] Link a CV/LinkedIn incluido

# Nota

Cuando el usuario pida “siguiente paso”, responder con:

- instrucciones concretas,
- lista accionable,
- snippets mínimos (sin sobre-ingeniería),
- y un criterio de “done” para ese paso.
