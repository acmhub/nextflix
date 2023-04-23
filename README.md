# Nextflix

A Fullstack Netflix clone using NextJS 13, Prisma, NextAuth, MongoDB, Zustand, TailwindCSS and TypeScript.

![project](https://i.imgur.com/AnImLpL.jpeg)

## Features

-   Authentification using email, Google or Github account
-   Protected Routes that require authentication to access
-   Server Side Rendering
-       CRUD functionality to manage user's favorite movies, allowing them to create, read, update, and delete movie entries.
-   Custom hooks for managing state and data
-   Dynamic Routes based on movie id
-   Zustand to manage the modal state related to the movie
-   Fully Responsive

#### How to run locally

1. Clone the project

```bash
  git clone https://github.com/acmhub/nextflix.git
```

2. Execute `npm install` or `yarn` to install all the packages.
3. Setup .env file

-   [Create MongoDB cluster](https://cloud.mongodb.com/v2/63627ca671fa4007f530b7c4#/clusters)
-   [Github OAuth registration](https://github.com/settings/applications/new)
-   [Google OAuth registration](https://console.cloud.google.com/)

```
DATABASE_URL=
NEXTAUTH_JWT_SECRET=
NEXTAUTH_SECRET=
GITHUB_ID=
GITHUB_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

#### Start the app

`npm run dev` or `yarn start`
