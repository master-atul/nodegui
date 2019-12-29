---
id: "index"
title: "@nodegui/nodegui"
sidebar_label: "README"
---

# NodeGui

[![Join the NodeGUI community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/nodegui)
[![All Contributors](https://img.shields.io/badge/all_contributors-16-orange.svg?style=flat-square)](#contributors)
[![JS Party #96](https://img.shields.io/badge/JS%20Party-%2396-FFCD00.svg)](https://changelog.com/jsparty/96)

[![Build and Test status](https://github.com/nodegui/nodegui/workflows/.github/workflows/test.yml/badge.svg)](https://github.com/nodegui/nodegui/actions)

Build **performant**, **native** and **cross-platform** desktop applications with **Node.js** and **CSS like styling**.🚀

NodeGUI is powered by **Qt5** 💚 which makes it CPU and memory efficient as compared to other chromium based solutions like electron.

If you are looking for **React** based version, check out: **[React NodeGUI](https://github.com/nodegui/react-nodegui)**.

Visit: https://nodegui.github.io/nodegui for docs.

<img alt="logo" src="https://github.com/nodegui/nodegui/raw/master/extras/logo/nodegui.png" height="200" />

> This project is in active development. It should be okay for smaller projects but anything complex - electron is the way to go for now. 🚧

## How does it look?

<div style="display:inline; margin: 0 auto;">
<img alt="demo_linux" src="https://github.com/nodegui/examples/raw/master/nodegui/calculator/calculator_linux.png" height="280" />
<img alt="demo_win" src="https://github.com/nodegui/examples/raw/master/nodegui/calculator/calculator_win.jpg" height="280" />
<img alt="demo_mac" src="https://github.com/nodegui/examples/raw/master/nodegui/calculator/calculator_mac.png" height="280" />
</div>

<div style="display:inline; margin: 0 auto;"><img alt="kitchen" src="https://github.com/nodegui/nodegui/raw/master/extras/assets/kitchen.png" height="280" /><img alt="demo_mac" src="https://github.com/nodegui/examples/raw/master/react-nodegui/weather-app-widget/weather_widget_mac.png" height="280" /><img alt="demo_win" src="https://github.com/nodegui/examples/raw/master/react-nodegui/image-view/image_view_win.jpg" height="280" />
</div>

**More screenshots?**

### More Examples:

https://github.com/nodegui/examples

---

## Features

-   🧬 Cross platform. Should work on major Linux flavours, Windows and MacOS.
-   📉 Low CPU and memory footprint. Current CPU stays at 0% on idle and memory usage is under 20mb for a hello world program.
-   💅 Styling with CSS (includes actual cascading). Also has full support for Flexbox layout (thanks to Yoga).
-   ✅ Complete Nodejs api support (Currently runs on Node v12.x - and is easily upgradable). Hence has access to all nodejs compatible npm modules.
-   🎪 Native widget event listener support. Supports all events available from Qt / NodeJs.
-   💸 Can be used for Commercial applications.
-   🕵️‍♂️ Good Devtools support.
-   📚 Good documentation and website.
-   🧙‍♂️ Good documentation for contributors.
-   🦹🏻‍♀️ Good support for dark mode (Thanks to QT).
-   🏅First class Typescript support. (Works on regular JS projects too 😉).

## Getting Started

-   Check out [nodegui-starter](https://github.com/nodegui/nodegui-starter) to get up and running with your own React NodeGUI app!
-   Read through the [docs](https://nodegui.github.io/nodegui).
-   Checkout the examples: https://github.com/nodegui/examples .

## Installation

To install latest stable release:

```
npm install @nodegui/nodegui
```

To install the latest version available on master branch:

```
npm install https://github.com/nodegui/nodegui/releases/download/latest-master/nodegui-master.tgz
```

**Community guides**

-   https://blog.logrocket.com/electron-alternatives-exploring-nodegui-and-react-nodegui/ - Electron alternatives: Exploring NodeGUI and React NodeGUI by [Siegfried Grimbeek](https://blog.logrocket.com/author/siegfriedgrimbeek/).
-   https://hibbard.eu/node-gui/ - Excellent guide from [James Hibbard](https://github.com/jameshibbard).

**Talks/Podcasts**

-   [NodeGui and React NodeGui at KarmaJS Nov 2019 meetup: https://www.youtube.com/watch?v=8jH5gaEEDv4](https://www.youtube.com/watch?v=8jH5gaEEDv4)

-   <audio data-theme="night" data-src="https://changelog.com/jsparty/96/embed" src="https://cdn.changelog.com/uploads/jsparty/96/js-party-96.mp3" preload="none" class="changelog-episode" controls></audio><p><a href="https://changelog.com/jsparty/96">JS Party 96: Performant Node desktop apps with NodeGUI</a> – Listen on <a href="https://changelog.com/">Changelog.com</a></p>

## Docs for contributing

```
It is easier than you think, try it
```

Looking to contribute? If you wish to implement a new widget/add more features and need help understanding the codebase, you can start here: [Contributing developer docs](https://github.com/nodegui/nodegui/tree/master/website/docs/development).

Please read https://github.com/nodegui/.github/blob/master/CONTRIBUTING.md

## Building

`npm run build`

Optionally set `QT_INSTALL_DIR='/path/to/qt'` environment variable to build using your own version of Qt.

## Funding

NodeGUI is an open source project and requires your support. If you like this project, please consider supporting my work by clicking on the Sponsor button on this Github repository or via Ko-Fi.
Alternatively, Issues on NodeGui can be funded by anyone via Issuehunt and the amount will be distributed to respective contributors.

<p>
<a href='https://ko-fi.com/E1E510AV9' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://az743702.vo.msecnd.net/cdn/kofi4.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a> &nbsp; &nbsp;<a href="https://issuehunt.io/r/nodegui/nodegui"><img alt="issuehunt" src="https://github.com/BoostIO/issuehunt-materials/raw/master/v1/issuehunt-button-v1.svg?sanitize=true"  height="30px" /></a>
</p>

## Special Thanks

-   [Logo: Thanks to Vishwas Shetty from the Noun Project.](https://github.com/nodegui/nodegui/blob/master/extras/legal/logo/thanks.md)

## Code of Conduct

https://github.com/nodegui/.github/blob/master/CODE_OF_CONDUCT.md

## License

MIT

## Backers 🚀

Thanks goes to these wonderful people.

<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/yazla"><img src="https://avatars1.githubusercontent.com/u/681281?s=460&v=4" width="100px;" alt="Yuriy Yazlovytskyy"/><br /><sub><b>Yuriy Yazlovytskyy</b></sub></a></td>
    <td align="center"><a href="https://github.com/johnsusek"><img src="https://avatars1.githubusercontent.com/u/611996?s=460&v=4" width="100px;" alt="John Susek"/><br /><sub><b>John Susek</b></sub></a></td>
     <td align="center"><a href="https://github.com/Spharax"><img src="https://avatars2.githubusercontent.com/u/2892381?s=460&v=4" width="100px;" alt="Marc Dijoux"/><br /><sub><b>Marc Dijoux</b></sub></a></td>
    <td align="center"><a href="https://github.com/Qard"><img src="https://avatars2.githubusercontent.com/u/205482?s=460&v=4" width="100px;" alt="Stephen Belanger"/><br /><sub><b>Stephen Belanger</b></sub></a></td>
  </tr>
</table>

## Maintainers ✨

People maintaining this project.

<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://blog.atulr.com"><img src="https://avatars2.githubusercontent.com/u/4029423?v=4" width="100px;" alt="Atul R"/><br /><sub><b>Atul R</b></sub></a></td>
    <td align="center"><a href="https://github.com/dimitarnestorov"><img src="https://avatars3.githubusercontent.com/u/8790386?s=460&v=4" width="100px;" alt="Dimitar"/><br /><sub><b>Dimitar Nestorov</b></sub></a></td>
  </tr>
</table>

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://lramage.gitlab.io"><img src="https://avatars1.githubusercontent.com/u/43783393?v=4" width="100px;" alt=""/><br /><sub><b>Lucas Ramage</b></sub></a><br /><a href="https://github.com/nodegui/nodegui/commits?author=oxr463" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/gamtiq"><img src="https://avatars3.githubusercontent.com/u/1177323?v=4" width="100px;" alt=""/><br /><sub><b>Denis Sikuler</b></sub></a><br /><a href="https://github.com/nodegui/nodegui/commits?author=gamtiq" title="Documentation">📖</a></td>
    <td align="center"><a href="https://twitter.com/nahueljo"><img src="https://avatars1.githubusercontent.com/u/1612488?v=4" width="100px;" alt=""/><br /><sub><b>Nahuel José</b></sub></a><br /><a href="#question-Naahuel" title="Answering Questions">💬</a></td>
    <td align="center"><a href="https://github.com/kakulgupta"><img src="https://avatars3.githubusercontent.com/u/10727047?v=4" width="100px;" alt=""/><br /><sub><b>Kakul Gupta</b></sub></a><br /><a href="https://github.com/nodegui/nodegui/commits?author=kakulgupta" title="Code">💻</a></td>
    <td align="center"><a href="http://rahulgaba.com"><img src="https://avatars3.githubusercontent.com/u/7898942?v=4" width="100px;" alt=""/><br /><sub><b>Rahul Gaba</b></sub></a><br /><a href="https://github.com/nodegui/nodegui/commits?author=rgabs" title="Code">💻</a></td>
    <td align="center"><a href="http://uriziel.pl"><img src="https://avatars1.githubusercontent.com/u/568207?v=4" width="100px;" alt=""/><br /><sub><b>Paweł Borecki</b></sub></a><br /><a href="https://github.com/nodegui/nodegui/commits?author=Uriziel01" title="Code">💻</a></td>
    <td align="center"><a href="http://marcus-sa.me"><img src="https://avatars0.githubusercontent.com/u/8391194?v=4" width="100px;" alt=""/><br /><sub><b>Marcus S. Abildskov</b></sub></a><br /><a href="https://github.com/nodegui/nodegui/commits?author=marcus-sa" title="Tests">⚠️</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://www.mad3linux.org"><img src="https://avatars3.githubusercontent.com/u/508624?v=4" width="100px;" alt=""/><br /><sub><b>Átila Camurça Alves</b></sub></a><br /><a href="https://github.com/nodegui/nodegui/commits?author=atilacamurca" title="Documentation">📖</a></td>
    <td align="center"><a href="http://hibbard.eu"><img src="https://avatars2.githubusercontent.com/u/1940994?v=4" width="100px;" alt=""/><br /><sub><b>James Hibbard</b></sub></a><br /><a href="https://github.com/nodegui/nodegui/commits?author=jameshibbard" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/soonoo"><img src="https://avatars2.githubusercontent.com/u/5436405?v=4" width="100px;" alt=""/><br /><sub><b>Soonwoo Hong</b></sub></a><br /><a href="https://github.com/nodegui/nodegui/commits?author=soonoo" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/illBeRoy"><img src="https://avatars2.githubusercontent.com/u/6681893?v=4" width="100px;" alt=""/><br /><sub><b>Roy Sommer</b></sub></a><br /><a href="https://github.com/nodegui/nodegui/commits?author=illBeRoy" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/paulocoghi"><img src="https://avatars1.githubusercontent.com/u/378397?v=4" width="100px;" alt=""/><br /><sub><b>Paulo Coghi</b></sub></a><br /><a href="#ideas-paulocoghi" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://balthild.com"><img src="https://avatars2.githubusercontent.com/u/2662758?v=4" width="100px;" alt=""/><br /><sub><b>Balthild Ires</b></sub></a><br /><a href="https://github.com/nodegui/nodegui/commits?author=balthild" title="Code">💻</a></td>
    <td align="center"><a href="https://dimitarnestorov.com"><img src="https://avatars0.githubusercontent.com/u/8790386?v=4" width="100px;" alt=""/><br /><sub><b>Dimitar Nestorov</b></sub></a><br /><a href="https://github.com/nodegui/nodegui/commits?author=dimitarnestorov" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://www.greatapes.fi"><img src="https://avatars3.githubusercontent.com/u/3404389?v=4" width="100px;" alt=""/><br /><sub><b>Mikko Sairio</b></sub></a><br /><a href="https://github.com/nodegui/nodegui/commits?author=msairio" title="Code">💻</a></td>
    <td align="center"><a href="http://blog.pepf.nl"><img src="https://avatars1.githubusercontent.com/u/1265435?v=4" width="100px;" alt=""/><br /><sub><b>Pepijn</b></sub></a><br /><a href="https://github.com/nodegui/nodegui/commits?author=pepf" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/slidinghotdog"><img src="https://avatars3.githubusercontent.com/u/33790211?v=4" width="100px;" alt=""/><br /><sub><b>slidinghotdog</b></sub></a><br /><a href="https://github.com/nodegui/nodegui/commits?author=slidinghotdog" title="Code">💻</a></td>
    <td align="center"><a href="http://www.bundyo.org"><img src="https://avatars1.githubusercontent.com/u/98318?v=4" width="100px;" alt=""/><br /><sub><b>Bundyo (Kamen Bundev)</b></sub></a><br /><a href="https://github.com/nodegui/nodegui/commits?author=bundyo" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/feng8848"><img src="https://avatars2.githubusercontent.com/u/40539968?v=4" width="100px;" alt=""/><br /><sub><b>feng8848</b></sub></a><br /><a href="https://github.com/nodegui/nodegui/commits?author=feng8848" title="Code">💻</a></td>
    <td align="center"><a href="https://karelov.info"><img src="https://avatars3.githubusercontent.com/u/2384454?v=4" width="100px;" alt=""/><br /><sub><b>Maksim Karelov</b></sub></a><br /><a href="https://github.com/nodegui/nodegui/commits?author=Ty3uK" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/mspencer92"><img src="https://avatars2.githubusercontent.com/u/1910455?v=4" width="100px;" alt=""/><br /><sub><b>mspencer92</b></sub></a><br /><a href="https://github.com/nodegui/nodegui/commits?author=mspencer92" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!