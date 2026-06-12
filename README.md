# Angular Starter

A modern Angular 21 starter project built with standalone components, SCSS, lazy loading and a scalable folder architecture.

## 🚀 Tech Stack

* Angular 21
* TypeScript
* SCSS
* Standalone Components
* Angular Router
* Vitest
* Lazy Loading

## 📁 Project Structure

```text
src/app
├── core
│   ├── guards
│   ├── interceptors
│   ├── models
│   └── services
│
├── features
│   └── home
│
├── layout
│   ├── shell
│   ├── sidebar
│   └── topbar
│
├── shared
│   ├── directives
│   ├── pipes
│   └── ui
│
├── app.config.ts
├── app.routes.ts
├── app.ts
├── app.html
└── app.scss
```

## 🛠️ Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
ng serve
```

Open:

```text
http://localhost:4200
```

### Build

```bash
ng build
```

Production files will be generated in:

```text
dist/
```

### Run tests

```bash
ng test
```

## 🎯 Purpose

This repository serves as a reusable Angular starter template for future projects.

The goal is to provide:

* Clean architecture
* Feature-based organization
* Reusable shared components
* Modern Angular best practices
* Easy scalability for small and medium-sized applications

## 📚 Learning Goals

This project is also used as a playground to explore:

* Angular Signals
* Modern Angular Routing
* State Management patterns
* Component architecture
* Performance optimizations
* UI/UX best practices

