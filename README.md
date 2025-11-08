# Personal Portfolio Website

## Overview
This project is a personal portfolio website built using **Node.js**, **Express**, and **EJS templating**.  
It includes four pages — **Home**, **About**, **Projects**, and **Contact** — each rendered via Express routes and EJS view templates.  
Styling uses the **Bootswatch “Darkly”** theme for Bootstrap and **Font Awesome** for icons.  
The site is hosted on **Render** and version-controlled with **Git/GitHub**.

---

## Technologies Used
- Node.js + Express (server and routing)
- EJS (templates, partials, dynamic data)
- Bootstrap 5 with Bootswatch Darkly (responsive UI)
- Font Awesome (icons)
- Render (cloud hosting)
- GitHub (version control)

---

## Project Structure
app.js → Express app configuration
bin/www → Starts the Node.js server (uses process.env.PORT)
routes/index.js → Routes for Home/About/Projects/Contact
views/partials/ → Shared header.ejs and footer.ejs
views/index.ejs → Home page
views/about.ejs → About page
views/projects.ejs → Projects page
views/contact.ejs → Contact page
public/ → Static assets (images, css, js)

## How to Run Locally
1. Install dependencies  
   ```bash
   npm install
2. Start the server
    npm start
3. Open your browser
http://localhost:3001

## Deployment (Render)

Build Command: npm install

Start Command: npm start

Node version: >= 18

App listens on process.env.PORT (provided by Render)

## References

Bootstrap. (2024). Get started with Bootstrap 5.3 – Introduction. https://getbootstrap.com/docs/5.3/getting-started/introduction/

Bootswatch. (2024). Free themes for Bootstrap. https://bootswatch.com/

Font Awesome. (2024). Font Awesome Free – Icons and toolkit. https://fontawesome.com/

Express.js. (2024). Express application generator. https://expressjs.com/en/starter/generator.html

OpenAI. (2025). ChatGPT (GPT-5) [Large language model]. OpenAI. https://chat.openai.com/

Prompt used to generate the README and documentation:
“Make a README for a personal portfolio website using Node.js, Express, and EJS with Bootswatch Darkly theme, Font Awesome, Render, and GitHub, hosted on localhost:3001.”