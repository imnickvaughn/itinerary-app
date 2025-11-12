# Itinerary Creation App

Angular 20 application for creating and managing travel itineraries with a mobile-first design approach.

## Features

- **Origin/Destination Selection** - Set starting and ending locations
- **Itinerary Basics** - Create itinerary titles and manage place selections
- **Member Management** - Add and manage itinerary members with preferences
- **Place Details** - Add detailed information about places including dates, times, and transportation
- **Preference Matching** - Match preferences across members
- **Transport Selection** - Choose transportation methods

## Tech Stack

- **Frontend**: Angular 20
- **Styling**: SCSS with BEM methodology
- **State Management**: RxJS Observables
- **Forms**: Reactive Forms
- **Internationalization**: i18n
- **Fonts**: Gilroy and Calistoga only

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── shared/          # Reusable UI components
│   │   ├── itinerary/      # Main screen components
│   │   └── forms/          # Form input components
│   ├── services/            # Business logic and data services
│   ├── models/             # TypeScript interfaces and enums
│   └── styles/             # SCSS variables, typography, mixins
├── assets/
│   ├── data/               # JSON data files
│   └── i18n/               # Translation files
```

## Development Guidelines

### Code Conventions

- **Strict Typing**: No 'any' types, no magic strings
- **Interfaces**: All interfaces in separate files under `models/`
- **Services**: All business logic in services, exposed as Observables
- **Forms**: Reactive Forms only (no template-driven)
- **Async**: RxJS Observables only (no Promises)
- **Architecture**: SOLID principles, MVC pattern
- **Styling**: Mobile-first, 8px grid system
- **Fonts**: Only Gilroy and Calistoga fonts

### Data Management

- All hardcoded data in JSON files under `assets/data/`
- Services fetch data with 1000ms delay for API mocking
- Data exposed as Observables

### Internationalization

- All text uses i18n translations
- Translation files in `assets/i18n/`

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI 18+

### Installation

```bash
npm install
```

### Development Server

```bash
npm start
```

Navigate to `http://localhost:4200/`

### Build

```bash
npm run build
```

### Running Tests

```bash
npm test
```

## Routes

- `/origin` - Origin screen (default)
- `/itinerary-basics` - Itinerary basics screen
- `/select-destination` - Destination selection
- `/member-details` - Member details form
- `/members` - Members list
- `/place-details` - Place details form

## Services

- `LocationService` - Location data management
- `MemberService` - Member CRUD operations
- `PlaceService` - Place management
- `ItineraryService` - Itinerary management
- `PreferenceService` - Preference data
- `TransportService` - Transport options

## Typography System

The app uses a consolidated typography system with 8 font styles:

- **Heading 1** (32px, bold) - Screen titles
- **Heading 2** (20px, medium) - Section headers
- **Body Large** (21px, regular) - Primary text
- **Body Medium** (17px, regular) - Secondary text
- **Body Small** (15px, regular) - Labels
- **Caption** (11px, regular) - Helper text
- **Caption Medium** (14px, regular) - Slightly larger helper text
- **Button Text** (16px, medium) - Button labels
- **Input Text** (21px, regular) - Form inputs

All fonts use Gilroy or Calistoga only.

## Contributing

1. Follow the code conventions outlined above
2. Use strict typing (no 'any', no magic strings)
3. Keep interfaces in separate files
4. Place business logic in services
5. Use Reactive Forms and RxJS Observables
6. Ensure mobile-first responsive design
7. Add i18n translations for all text

## License

[Add your license here]
