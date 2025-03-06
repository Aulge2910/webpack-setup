# Webpack setup

## Overview
This project is configured with Webpack to bundle various types of assets including SCSS, images, JavaScript, etc. The configuration is designed for development and production environments.

## Features
- Bundles JavaScript files
- Processes SCSS and CSS files
- Optimizes images
- Uses Babel for JavaScript transpilation
- Lints JavaScript files with ESLint
- Generates HTML file using a template

## Getting Started

### Prerequisites
- Node.js
- npm (Node Package Manager)

### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/Aulge2910/project2.git
    ```
2. Navigate to the project directory:
    ```sh
    cd project2
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Development
To start the development server, run:
```sh
npm run dev
```
This will start the Webpack Dev Server on `localhost:3000` and open it in your default browser.

## Building for Production
To create a production build, run:
```sh
npm run build
```
This will generate the optimized output in the `dist` directory.
