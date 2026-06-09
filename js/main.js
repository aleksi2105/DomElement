'use strict'

const DomElement = function (selector, height, width, bg, fontSize, text) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.text = text;
  this.newElem = function () {
    let element;
    if (this.selector.startsWith('.')) {
      element = document.createElement('div')
      element.className = this.selector.slice(1);
    } else if (this.selector.startsWith('#')) {
      element = document.createElement('p');
      element.id = this.selector.slice(1);
    }

    element.style.cssText = `
            height: ${this.height};
            width: ${this.width};
            background: ${this.bg};
            font-size: ${this.fontSize};
            margin: auto;
        `;

    element.textContent = this.text;

    document.body.appendChild(element);

    return element;
  }
}

const firstElement = new DomElement(
  '.main-elem',
  '250px',
  '550px',
  'lightpurple',
  '20px',
  'Создаём div элемент'
);

firstElement.newElem();

const secondElement = new DomElement(
  '#text',
  '50px',
  '550px',
  'lightblue',
  '16px',
  'Создаём paragraph'
)
secondElement.newElem()


console.dir(DomElement);
