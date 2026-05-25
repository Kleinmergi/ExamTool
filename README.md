# Exam OS (MVP)
Produktionsnahes MVP für Staatsexamen Informatik vertieft auf Next.js 15 + TypeScript + Tailwind.

## Features
- Dashboard mit Wiederholungen, offenen Aufgaben, kritischen Themen
- Aufgabenliste + Detail + Lernmodus inkl. Review-Intervall
- Theorie-Seiten + Verknüpfungsgrundlage
- Videosuche mit Mock-Fallback ohne API-Key
- PDF-Bereich mit Upload-UI und Extraktions-Platzhalter
- Architektur für AI/PDF/YouTube Services mit Fallbacks

## Setup
1. `.env.example` nach `.env.local` kopieren.
2. Optional API-Keys eintragen (Supabase/OpenAI/YouTube).
3. Installieren: `npm install`
4. Starten: `npm run dev`

## Mock-Modus
Wenn `OPENAI_API_KEY`, `YOUTUBE_API_KEY` oder Supabase-Variablen fehlen, läuft die App mit lokalen Demo-Daten und Mock-Services.

## Seed-/Demo-Daten
Enthält 12 Aufgaben, 8 Theorie-Seiten, 5 Videos, 3 PDFs sowie Review-Daten in `lib/mock-data/index.ts`.

## Nächste Schritte
- Echte Supabase Auth + Storage + CRUD via Server Actions
- Shadcn/UI Komponenten ersetzen
- Whiteboard via tldraw/excalidraw persistieren
- Vollständige SQL Migrationen + RLS
