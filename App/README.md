# CV

My professional minimalist curriculum vitae!

## Index

1. [Introduction](#introduction)
2. [Attribution](#attribution)
3. [Project Structure](#project-structure)
4. [Download the code](#download-the-code)
5. [Install dependencies](#install-dependencies)
6. [Final steps](#final-steps)
7. [Using Docker](#using-docker)
    1. [Run with Docker Compose](#run-with-docker-compose)
    2. [Build Docker image on your own](#build-docker-image-on-your-own)
8. [Learn More](#learn-more)
9. [Deploy on Vercel](#deploy-on-vercel)

## Introduction

My professional minimalist cv, made with [Nextjs](https://nextjs.org/), powered by [&#x25B2;Vercel](https://vercel.com/), designed by [Bartosz Jarocki](https://github.com/BartoszJarocki), replicating the [JSON Resume](https://www.jsonresume.org/) philosophy!

## Attribution

Forked from [BartoszJarocki/cv](https://github.com/BartoszJarocki/cv)

Website originally designed by [Bartosz Jarocki](https://github.com/BartoszJarocki)

Check the original website at https://cv.jarocki.me/

Icons from https://lucide.dev/

## Project Structure

<details>
<summary>Click me</summary>

```
App/
├── .next/
│   └── ...
├── .vercel/
│   └── ...
├── node_modules/
│   └── ...
├── public/
│   ├── next.svg
│   └── vercel.svg
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── *.tsx
│   │   ├── favicon.ico
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── icons/
│   │   │   ├── *.tsx
│   │   │   └── index.ts
│   │   ├── ui/
│   │   │   └── *.tsx
│   │   └── *.tsx
│   ├── data/
│   │   └── resume.tsx
│   ├── lib/
│   │   └── utils.ts
│   └── styles/
│       └── globals.css
├── components.json
├── docker-compose.yaml
├── Dockerfile
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```
</details>

## Download the code

Open your directory where you save your repositories and clone it with the following command:

```shell
# From GitHub
git clone https://github.com/FJrodafo/CV.git
```

## Install dependencies

This project must be initialized and the necessary dependencies installed with the following command (Make sure you are in the `App` directory):

```shell
npm install
```

## Final steps

If you have Node v18 or higher installed on your machine, then you are good to go!

To check if you already have Node installed on your machine, run `node -v` in your terminal. Otherwise, you will need to install Node v18 or higher or, as a last option, check out the [Docker](#using-docker) alternative.

Finally, if you have Node installed, run the following command to run the development server (Make sure you are in the `App` directory):

```shell
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
# Press 'Ctrl + C' to exit
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Using Docker

### Run with Docker Compose

Build the container:

```shell
docker compose build
```

Run the container:

```shell
docker compose up -d
```

Stop the container:

```shell
docker compose down
```

### Build Docker image on your own

If you don't have Node v18 or higher installed on your machine, you can build a Docker image by running the [Dockerfile](./Dockerfile).

Open a terminal and run the following command (Make sure you are in the `App` directory):

```shell
docker build -t cv .
```

After the build completes, you can run your container with the following command:

```shell
docker run -dp 127.0.0.1:3000:3000 cv
```

> [!IMPORTANT]
> 
> Please note that when using Docker, port 3000 on localhost will be occupied by the Discord application for its proper functioning.
> 
> If you already have applications that use port 3000, you will need to adjust certain parameters before creating the Docker container so that it can run correctly on a free port.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=https://github.com/FJrodafo/CV/tree/main/App)

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.