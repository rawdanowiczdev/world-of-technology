# STILL IN PROGRESS World of Technology

My fourth project created with **Angular CLI** (version 11.0.4). It's a blog-like website with dynamic content fetched from GraphCMS.

## CMS + Apollo

In this project I'm connecting with GraphCMS using Apollo client for Angular. It's modern and fast way of managing content of a website.

First I had to create a **Schema** which is like a blueprint for content that I want to use on my website.

<img src="https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/iwvpmSyQFahtwH3r7pmA" alt="Schema">

After that I'm able to add **Content** by simply pressing *Create New*.

<img src="https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/nF6HKTSTMu9e6mkx3kty" alt="Add Content">

After adding new content I'm able to manage and edit my **Articles** in the list.

<img src="https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/uofsIqRFST6iJ0NlxEHg" alt="Articles list">

## Technologies

In this project I'm using:

- Angular
- Angular Universal
- Apollo Angular
- Marked (ngx-markdown)
- TypeScript
- SCSS
- Git

## Setup

To install this project locally clone the repository and use **npm**.

`$ npm install`

To work at **localhost:4200** in watch mode. Add `-o` flag to open automatically in your default browser.

`$ npm serve`

To build prerender app. The outcome will be located at **/dist/browser** folder.

`$ npm run prerender`

## Server

App is prerendered with **Angular Universal** which improves **SEO** a lot. For a server I'm using [Netlify](https://www.netlify.com/) service.

_In real prod situation I would use Universal in SSR mode which improves SEO for dynamic CMS content. Prerender is just for demo purposes._

### Animations

Stars animation created by [screenshake](https://linkedin.com/in/saranshsinha).
Bulb animation created by [Amanda Chen](https://codepen.io/jrying).

### Favicon

![Favicon](https://github.com/rawdanowiczdev/world-of-technology/blob/main/src/assets/favicon.png) Favicon created by [Pixel perfect](https://www.flaticon.com/authors/pixel-perfect/).
