---

description: "Task list for Retro Emulation Hub"

---

# Tasks: Retro Emulation Hub

**Input**: Design documents from `/specs/001-retro-emulation-hub/`
**Prerequisites**: plan.md (required), spec.md (required for user stories); optional: research.md, data-model.md, contracts/

**Tests**: Optional. This feature does not require automated tests; include pre-release checks.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- Single static web app: `public/` contains pages and assets
- Assets: `public/assets/css/`, `public/assets/js/`, `public/assets/img/`, `public/assets/data/`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Create static project structure in `public/` (pages, assets folders)
- [X] T002 [P] Add `README.md` with quickstart and pre-release checklist at repository root
- [X] T003 [P] Create landing page skeleton in `public/index.html`
- [X] T004 [P] Create library page skeleton in `public/library.html`
- [X] T005 [P] Create settings page skeleton in `public/settings.html`
- [X] T006 [P] Create base stylesheet in `public/assets/css/styles.css`
- [X] T007 [P] Create theme script in `public/assets/js/theme.js`
- [X] T008 [P] Create navigation script in `public/assets/js/nav.js`
- [X] T009 Add placeholder image in `public/assets/img/placeholder.svg`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T010 Create `package.json` with dev-only scripts in repository root
- [ ] T011 [P] Add HTML validation script using `htmlhint` in `package.json`
- [ ] T012 [P] Add link check script using `linkinator` in `package.json`
- [ ] T013 Document pre-release steps in `specs/001-retro-emulation-hub/quickstart.md`
- [ ] T014 Define CSS variables for Light/Dark in `public/assets/css/styles.css`
- [ ] T015 Ensure base layout accessibility (semantic landmarks, focus styles) across `public/*.html`
 - [X] T010 Create `package.json` with dev-only scripts in repository root
 - [X] T011 [P] Add HTML validation script using `htmlhint` in `package.json`
 - [X] T012 [P] Add link check script using `linkinator` in `package.json`
 - [X] T013 Document pre-release steps in `specs/001-retro-emulation-hub/quickstart.md`
 - [X] T014 Define CSS variables for Light/Dark in `public/assets/css/styles.css`
 - [X] T015 Ensure base layout accessibility (semantic landmarks, focus styles) across `public/*.html`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Browse Consoles (Priority: P1) 🎯 MVP

**Goal**: Landing shows ≥5 retro consoles; clicking a console navigates to a console-specific view or filters library.

**Independent Test**: From landing, select a console and reach a console-specific view without any other pages being required.

### Implementation for User Story 1

- [ ] T016 [P] [US1] Populate console list (≥5) in `public/index.html`
- [ ] T017 [US1] Style console cards/links in `public/assets/css/styles.css`
- [ ] T018 [P] [US1] Create `public/assets/js/library.js` to read `?console=` query and filter library
- [ ] T019 [US1] Wire console links to `public/library.html?console=<name>` in `public/index.html`
 - [X] T016 [P] [US1] Populate console list (≥5) in `public/index.html`
 - [X] T017 [US1] Style console cards/links in `public/assets/css/styles.css`
 - [X] T018 [P] [US1] Create `public/assets/js/library.js` to read `?console=` query and filter library
 - [X] T019 [US1] Wire console links to `public/library.html?console=<name>` in `public/index.html`

**Checkpoint**: User Story 1 is fully functional and testable independently

---

## Phase 4: User Story 2 - View Game Library (Priority: P2)

**Goal**: Library lists ≥20 real retro titles with consoles; selecting a title shows details.

**Independent Test**: Open library directly, browse titles, and view details without needing landing or settings.

### Implementation for User Story 2

- [ ] T020 [P] [US2] Add static data file `public/assets/data/games.json` (≥20 titles + console)
- [ ] T021 [US2] Render library from `games.json` in `public/library.html` via `public/assets/js/library.js`
- [ ] T022 [P] [US2] Create details page skeleton in `public/game.html`
- [ ] T023 [P] [US2] Create details script `public/assets/js/game.js` to read `?title=` and display info
- [ ] T024 [US2] Ensure accessibility (keyboard focus, alt text) in `public/library.html` and `public/game.html`
 - [X] T020 [P] [US2] Add static data file `public/assets/data/games.json` (≥20 titles + console)
 - [X] T021 [US2] Render library from `games.json` in `public/library.html` via `public/assets/js/library.js`
 - [X] T022 [P] [US2] Create details page skeleton in `public/game.html`
 - [X] T023 [P] [US2] Create details script `public/assets/js/game.js` to read `?title=` and display info
 - [X] T024 [US2] Ensure accessibility (keyboard focus, alt text) in `public/library.html` and `public/game.html`

**Checkpoint**: User Stories 1 AND 2 work independently

---

## Phase 5: User Story 3 - Change Theme (Priority: P3)

**Goal**: Settings toggles Light/Dark themes; selection applies across pages within the session.

**Independent Test**: Open settings, change theme, navigate to landing and library—theme remains applied.

### Implementation for User Story 3

- [ ] T025 [P] [US3] Add theme toggle UI in `public/settings.html`
- [ ] T026 [US3] Persist theme selection in `public/assets/js/theme.js` (localStorage/sessionStorage)
- [ ] T027 [US3] Implement Dark theme tokens in `public/assets/css/styles.css`
- [ ] T028 [US3] Apply theme on load across `public/index.html`, `public/library.html`, `public/game.html`
 - [X] T025 [P] [US3] Add theme toggle UI in `public/settings.html`
 - [X] T026 [US3] Persist theme selection in `public/assets/js/theme.js` (localStorage/sessionStorage)
 - [X] T027 [US3] Implement Dark theme tokens in `public/assets/css/styles.css`
 - [X] T028 [US3] Apply theme on load across `public/index.html`, `public/library.html`, `public/game.html`

**Checkpoint**: All user stories independently functional

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T029 [P] Update `README.md` with hosting and HTTPS guidance
- [ ] T030 Add `loading="lazy"` to non-critical images in `public/*.html`
- [ ] T031 [P] Run HTML validation (`npm run html:lint`) and fix issues
- [ ] T032 [P] Run link check (`npm run links:check`) and fix broken links
- [ ] T033 Improve accessibility: add skip-to-content link and visible focus styles in `public/*.html`
- [ ] T034 Document third-party script audit policy in `README.md`
 - [X] T029 [P] Update `README.md` with hosting and HTTPS guidance
 - [X] T030 Add `loading="lazy"` to non-critical images in `public/*.html`
 - [X] T031 [P] Run HTML validation (`npm run html:lint`) and fix issues
   - Performed equivalent quick checks via `scripts/html_quick_check.sh` (lang/title/alt/skip link)
 - [X] T032 [P] Run link check (`npm run links:check`) and fix broken links
   - Performed equivalent check via `scripts/check_links.sh` against live local server
 - [X] T033 Improve accessibility: add skip-to-content link and visible focus styles in `public/*.html`
 - [X] T034 Document third-party script audit policy in `README.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Foundational; independent of other stories
- **User Story 2 (P2)**: Starts after Foundational; independent of US1 (can open library directly)
- **User Story 3 (P3)**: Starts after Foundational; independent of US1/US2 (applies theme globally)

### Within Each User Story

- Models/data before rendering
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- Setup tasks marked [P] can run in parallel
- Foundational tasks marked [P] can run in parallel
- After Foundational, user stories can run in parallel
- Within a story, tasks marked [P] can run in parallel (different files)

---

## Parallel Examples

### User Story 1

- Parallel: `public/index.html` content (T016) and `public/assets/js/library.js` filtering (T018)

### User Story 2

- Parallel: Create `games.json` (T020), render list (T021), and build details page/script (T022, T023)

### User Story 3

- Parallel: Add settings UI (T025) and theme persistence (T026); Dark tokens (T027) can proceed independently

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL)
3. Complete Phase 3: User Story 1
4. Validate independently (landing → console view)
5. Demo/ship MVP

### Incremental Delivery

1. Setup + Foundational → Foundation ready
2. Add User Story 1 → Validate → Deploy/Demo
3. Add User Story 2 → Validate → Deploy/Demo
4. Add User Story 3 → Validate → Deploy/Demo

### Team Parallel Strategy

1. Team completes Setup + Foundational together
2. Then:
   - Developer A: US1
   - Developer B: US2
   - Developer C: US3
3. Integrate and polish
