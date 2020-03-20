<p align="center">
  <a href="https://npmcharts.com/compare/covid19-gallery?minimal=true"><img src="https://img.shields.io/npm/dm/covid19-gallery.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/covid19-gallery"><img src="https://img.shields.io/npm/v/covid19-gallery.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/covid19-gallery"><img src="https://img.shields.io/npm/l/covid19-gallery.svg" alt="License"></a>
  <a href="https://discord.gg/6p8paPq"><img src="https://img.shields.io/discord/656620537514164249?label=discord%20chat" alt="Chat"></a>
  <a href="./CONTRIBUTING.md"><img src="https://img.shields.io/badge/PRs-welcome-green.svg" alt="PRs Welcome"></a>
</p>

# neo.mjs covid19
A multi-threaded Gallery showing countries affected by COVID 19.

You can configure and sort the gallery with the controls on the right side, resulting in a firework of CSS3 transitions.

This is a perfect performance demo for the webworkers driven UI framework <a href="https://github.com/neomjs/neo">neo.mjs</a>.

## Content
1. <a href="#online-versions">Online Versions</a>
2. <a href="#preview-image">Preview Image</a>
3. <a href="#getting-started">Getting Started</a>
4. <a href="#docs-app">Docs App</a>
5. <a href="#multithreading">Multithreading</a>
6. <a href="#attribution">Attribution</a>

## Online Versions
You can find the Online Versions <a href="https://neomjs.github.io/pages/">here on GitHub Pages</a> (COVID-19 Gallery).

## Preview Image
<img src="https://raw.githubusercontent.com/neomjs/pages/master/resources/images/covid_gallery.png">

## Getting Started
1. Clone this repo to your system to get the project files
   ```sh
   git clone https://github.com/neomjs/covid19.git
   ```

2. Open the checked out top level folder inside your terminal
   ```sh
   cd covid19
   ```

3. Install the required node modules & run all relevant build scripts at once
   ```sh
   npm run build-all
   ```

4. Make sure to use a local WebServer!
   * Use a local webserver of your choice
   * OR `npm run server-start`

## Docs App
Since this app shell was created using:
> npx neo-app

we do get documentation views for our app source code out of the box:
> localhost/covid19/docs/index.html

<img src="https://raw.githubusercontent.com/neomjs/pages/master/resources/images/covid_docs.png">
   
## Multithreading
In case you want to take a closer look at the workers setup, take a look into the Chrome dev tools Sources:

<img src="https://raw.githubusercontent.com/neomjs/pages/master/resources/images/covid_workers.png">

Your app code will get loaded into the App thread.

## Attribution
1. This App is created using the <a href="https://github.com/neomjs/neo">neo.mjs</a> UI framework.
2. Data provided by <a href="https://github.com/NovelCOVID/API">NovelCOVID/API</a>.
3. Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>.

### Join our Slack Channel for questions & feedback:

<a href="https://join.slack.com/t/neotericjs/shared_invite/enQtNDk2NjEwMTIxODQ2LWRjNGQ3ZTMzODRmZGM2NDM2NzZmZTMzZmE2YjEwNDM4NDhjZDllNWY2ZDkwOWQ5N2JmZWViYjYzZTg5YjdiMDc">Slack Channel Invite Link</a>

<br><br>
Build with :heart: in Germany.

<br><br>
Copyright (c) 2020 - today, <a href="https://www.linkedin.com/in/tobiasuhlig/">Tobias Uhlig</a>