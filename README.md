# Slide Menu with burger

A simple, lightweight, responsive and animate slide burger menu using only JavaScript, and CSS. 

Tested in IE11, Firefox 64, Edge 44 and Chrome 71.

[View in CodePen](https://codepen.io/kevinmouzet/pen/PVyagN)

## HTML

    <div class="container" id="container">
        <header>
          <h1>Title</h1>
          <div class="burgerIcon" id="burgerButton">
            <span></span>
          </div>
        </header>
    
    
        <main>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A earum enim nam rerum eveniet fugiat
            temporibus qui! Incidunt ipsa facere aspernatur beatae. Sequi esse harum vitae voluptate odit soluta,
            eius dignissimos! Voluptatibus hic maxime quae error, aspernatur aliquid eveniet sed omnis odio
            voluptatem laborum distinctio?</p>
        </main>
    
    
        <div class="slideCloser" id="slideCloser">
        </div>
    
      </div>
      <div class="menuSlide">
        <h3>Slide menu</h3>
        <ul>
          <li> <a href="#">Link1</a>
          </li>
          <li> <a href="#">Link2</a>
          </li>
          <li> <a href="#">Link3</a>
          </li>
          <li> <a href="#">Link4</a>
          </li>
        </ul>
      </div>

## CSS

General style (without burgerIcon)

    body {
      margin: 0;
      background-color: rgb(30, 30, 30);
      font-family: sans-serif;
      color: #ffffff
    }
    
    .container {
      width: 100%;
      z-index: 9;
      background-color: rgb(72, 4, 99);
      position: relative;
      transition: transform 0.3s;
    }
    
    header {
      background-color: rgba(255, 255, 255, 0.4);
      color: rgb(72, 4, 99);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 30px 3% 30px 3%;
    }
    
    main {
      z-index: 10;
      padding: 5% 10%;
      text-align: justify;
    }
    
    
    /* slide menu is under the container */
    .menuSlide {
      width: 280px;
      position: absolute;
      right: 0%;
      top: 0%;
      z-index: 1;
    }
    
    .menuSlide ul {
      padding: 0;
    }
    
    .menuSlide h3 {
      text-align: center;
    }
    
    .menuSlide li {
      text-align: center;
      list-style-type: none;
      padding: 5%;
      border-bottom: 1px solid rgba(140, 10, 192, 0.6);
    }
    
    .menuSlide a {
      text-decoration: none;
      color: #ffffff;
    }
    
    /* to reveal the slideMenu, the container move to left */
    .container.open {
      transform: translateX(-280px);
    }
    
    /* display none when slide menu is closed */
    .slideCloser {
      content: "";
      position: fixed;
      cursor: pointer;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 999;
      display: none;
      background-color: transparent;
    }
    
    .slideCloser.open {
      display: block;
    }

Animated burger Icon

    /* animated burger icon */
    :root {
      --burger_background_color: transparent;
      --burger_color: #ffffff;
    }
    
    .burgerIcon {
      min-width: 60px;
      min-height: 60px;
      display: block;
      background-color: var(--burger_background_color);
      border-radius: 50%;
      position: relative;
      transition: transform 0.5s;
      cursor: pointer;
    }
    
    .burgerIcon span {
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      height: 4px;
      border-radius: 10%;
      width: 40px;
      background-color: var(--burger_color);
      transition: background-color 0.5s;
    }
    
    .burgerIcon span::before {
      width: 40px;
      height: 4px;
      border-radius: 10%;
      content: "";
      display: block;
      position: absolute;
      background-color: var(--burger_color);
      transform: translateY(-10px);
      transition: transform 0.5s;
      transform-origin: 50% 50%;
    }
    
    .burgerIcon span::after {
      width: 40px;
      height: 4px;
      border-radius: 10%;
      content: "";
      display: block;
      position: absolute;
      background-color: var(--burger_color);
      transform: translateY(10px);
      transition: transform 0.5s;
      transform-origin: 50% 50%;
    }
    
    .burgerIcon:hover span::before {
      transform: translateY(-13px);
    }
    
    .burgerIcon:hover span::after {
      transform: translateY(13px);
    }
    
    .burgerIcon.open span {
      background: transparent;
    }
    
    .burgerIcon.open span::before {
      transform: rotate(45deg);
    }
    
    .burgerIcon.open span::after {
      transform: rotate(-45deg);
    }
    
    .burgerIcon.open {
      transform: rotate(180deg);
    }

## JavaScript

    // slide menu
    
    (function () {
    
      const burgerButton = document.getElementById("burgerButton");
      const container = document.getElementById("container");
      const slideCloser = document.getElementById("slideCloser");
    
    
      // switch the slide menu from close to open and reverse
    
      function toggleSlide() {
        burgerButton.classList.toggle("open");
        container.classList.toggle("open");
        slideCloser.classList.toggle("open");
      }
    
      slideCloser.addEventListener("click", function () {
        toggleSlide()
      });
    
      // button burger
    
      burgerButton.addEventListener("click", function () {
        toggleSlide()
      })
    
    })();
