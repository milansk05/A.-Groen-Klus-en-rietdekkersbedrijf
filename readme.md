# A. Groen Dienstverlening Website

Dit project is een moderne, responsieve website voor A. Groen Dienstverlening, een bedrijf gespecialiseerd in klussen en rietdekken in de regio Emmen.

## 📋 Projectoverzicht

De website is gebouwd met Next.js en maakt gebruik van moderne web technologieën om een responsieve en gebruiksvriendelijke ervaring te bieden voor bezoekers die op zoek zijn naar klus- en rietdekdiensten. Het platform biedt niet alleen een aantrekkelijke frontoffice voor potentiële klanten, maar ook een uitgebreid content management systeem (CMS) voor interne beheerders.

### 🌟 Belangrijkste functies

#### Publieke Pagina's
- **Homepage** met overzicht van diensten en klantbeoordelingen
- **Projectenpagina** met showcase van voltooide klussen en rietdekwerken
- **Over Ons pagina** met bedrijfsinformatie, missie en visie
- **Contact pagina** met formulier en bedrijfsgegevens

#### Admin Dashboard
- **Content Management** - Beheer van website teksten en afbeeldingen
- **Projectenbeheer** - Toevoegen, bewerken en verwijderen van projecten
- **Gebruikersbeheer** - Beheren van admin toegang en gebruikersrechten
- **Statistieken** - Overzicht van website activiteit en projecten

## 🛠️ Technische Stack

### Frontend
- **Next.js 14** - React framework met server-side rendering
- **React** - UI component bibliotheek
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide Icons** - Moderne icon bibliotheek
- **React Hook Form** - Formulier validatie

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **Prisma ORM** - Type-safe database ORM
- **PostgreSQL** - Relationele database
- **NextAuth.js** - Authenticatie en autorisatie

### Infrastructuur
- **Vercel** - Hosting en deployment platform
- **GitHub** - Versiebeheer
- **Neon** - Serverless PostgreSQL database

## 🚀 Installatie

### Vereisten
- Node.js 16.8 of hoger
- npm of yarn
- PostgreSQL database
- Vercel CLI (optioneel, voor deployment)

### Stappen

1. **Clone de repository**
   ```bash
   git clone https://github.com/username/a-groen-website.git
   cd a-groen-website
   ```

2. **Installeer dependencies**
   ```bash
   npm install
   # of
   yarn install
   ```

3. **Maak een .env.local bestand aan**
   ```bash
   cp .env.example .env.local
   ```
   Vul vervolgens de juiste waarden in voor de omgevingsvariabelen in .env.local:
   ```
   DATABASE_URL=postgresql://username:password@localhost:5432/agroen
   DIRECT_URL=postgresql://username:password@localhost:5432/agroen
   NEXTAUTH_SECRET=je-nextauth-secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Initialiseer de database**
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Start de ontwikkelingsserver**
   ```bash
   npm run dev
   # of
   yarn dev
   ```

6. **Open je browser en ga naar [http://localhost:3000](http://localhost:3000)**

## 🗂️ Projectstructuur

```
/
├── app/                  # Next.js app router
│   ├── actions/          # Server actions
│   ├── admin/            # Admin dashboard
│   ├── api/              # API routes
│   ├── components/       # Herbruikbare UI componenten
│   │   ├── admin/        # Admin-specifieke componenten
│   │   ├── home/         # Homepage componenten
│   │   ├── navigation/   # Navigatie componenten
│   │   └── ui/           # Algemene UI componenten
│   ├── contact/          # Contact pagina
│   ├── over-ons/         # Over Ons pagina
│   ├── projecten/        # Projecten pagina
│   └── inlog/            # Inlogpagina
├── lib/                  # Hulpbibliotheken en utilities
├── prisma/               # Prisma schema en migraties
├── public/               # Statische bestanden
│   ├── images/           # Afbeeldingen
│   └── fonts/            # Lettertypen
└── styles/               # Global CSS bestanden
```

## 📝 Database Schema

Het project maakt gebruik van Prisma ORM met de volgende modellen:

- **User** - Admin gebruikers voor het CMS
- **Project** - Projecten en referenties
- **Image** - Afbeeldingen voor verschillende paginasecties
- **TextContent** - Bewerkbare tekstinhoud voor de website

## 🔒 Authenticatie

De admin interface is beveiligd met een gebruikersnaam-wachtwoord authenticatie. Er zijn twee rollen:
- **ADMIN** - Volledige toegang tot alle functies
- **USER** - Beperkte toegang (alleen projecten bekijken)

### Database Setup

Zorg ervoor dat je een PostgreSQL database hebt opgezet (bijv. via Neon) en de juiste connection strings hebt geconfigureerd in je Vercel environment variables.
