# Curriculum Vitae

My professional minimalist curriculum vitae!

[![Website](https://img.shields.io/website?url=https://fjrodafo-cv.vercel.app/&style=flat&label=▲Vercel&labelColor=000000&color=000000)](https://fjrodafo-cv.vercel.app/)
[![GitHub Stars](https://img.shields.io/github/stars/FJrodafo/CV?style=social&logo=github&logoColor=000000&label=Stars&labelColor=ffffff&color=ffffff)](https://github.com/FJrodafo/CV/stargazers)

[![Docker Pulls](https://img.shields.io/docker/pulls/fjrodafo/cv?style=flat&logo=docker&logoColor=ffffff&label=Pulls&labelColor=2560FF&color=2560FF)](https://hub.docker.com/r/fjrodafo/cv)
[![Image Size](https://img.shields.io/docker/image-size/fjrodafo/cv?style=flat&logo=docker&logoColor=ffffff&label=Size&labelColor=2560FF&color=2560FF)](https://hub.docker.com/r/fjrodafo/cv)

## Index

1. [Introduction](#introduction)
2. [Download the code](#download-the-code)
3. [Install dependencies](#install-dependencies)
4. [Final steps](#final-steps)
5. [Using Docker](#using-docker)
    1. [Run with Docker Compose (Recommended)](#run-with-docker-compose-recommended)
    2. [Build Docker image manually](#build-docker-image-manually)
6. [Learn More](#learn-more)
7. [Deploy on Vercel](#deploy-on-vercel)
8. [Credits](#credits)

## Introduction

My professional minimalist cv, made with [Nextjs](https://nextjs.org/), powered by [&#x25B2;Vercel](https://vercel.com/), designed by [Bartosz Jarocki](https://github.com/BartoszJarocki), replicating the [JSON Resume](https://www.jsonresume.org/) philosophy!

<details>
<summary>Project structure</summary>

```
/
├── public/
│   ├── icons/
│   │   └── *.svg
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── *.tsx
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

This project must be initialized and the necessary dependencies installed with the following command:

```shell
npm install
```

## Final steps

If you have Node v22.14 or higher installed on your machine, then you are good to go!

To check if you already have Node installed on your machine, run `node -v` in your terminal. Otherwise, you will need to install Node v22.14 or higher or, as a last option, check out the [Docker](#using-docker) alternative.

Finally, if you have Node installed, run the following command to run the development server:

```shell
npm run dev
# Press 'Ctrl + C' to exit
```

Open [http://localhost:3000](http://localhost:3000) in your favorite browser to see the result (The page auto-updates as you edit the project files).

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Using Docker

This project can be run using Docker without installing Node.js locally.

You can find a Docker image of this project ready to be pulled on [GitHub Packages](https://github.com/FJrodafo/CV/pkgs/container/cv) or [Docker Hub](https://hub.docker.com/r/fjrodafo/cv) website!

Pull the image with the following commands:

```shell
# Docker Hub
docker pull fjrodafo/cv:v1.0.6
```

```shell
# GitHub Packages
docker pull ghcr.io/fjrodafo/cv:v1.0.6
```

### Run with Docker Compose (Recommended)

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

Open [http://localhost:3000](http://localhost:3000) in your favorite browser to see the result.

> [!IMPORTANT]
> 
> If you already have applications that use port 3000, you will need to change the host port before creating the Docker container so that it can run correctly on a free port.

### Build Docker image manually

If you prefer not to use Docker Compose, you can build and run the image manually.

If you don't have Node v22.14 or higher installed on your machine, you can build a Docker image by running the [Dockerfile](https://github.com/FJrodafo/CV/blob/main/App/Dockerfile).

Open a terminal and run the following command:

```shell
docker build -t cv .
```

After the build completes, you can run your container with the following command:

```shell
docker run -dp 3000:3000 cv
```

Open [http://localhost:3000](http://localhost:3000) in your favorite browser to see the result.

> [!IMPORTANT]
> 
> If you already have applications that use port 3000, you will need to change the host port before creating the Docker container so that it can run correctly on a free port.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=https://github.com/FJrodafo/CV/tree/main/App)

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Credits

Forked from [BartoszJarocki/cv](https://github.com/BartoszJarocki/cv) with MIT license

Website originally designed by [Bartosz Jarocki](https://github.com/BartoszJarocki)

Check the original website at https://cv.jarocki.me/

Icons from https://lucide.dev/
