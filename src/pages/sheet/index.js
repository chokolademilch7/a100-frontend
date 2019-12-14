import '../../components/title';
import '../../components/listItem';


import { LitElement, html } from 'lit-element';
import style from './index.gen.css';

class CustomElement extends LitElement {
  static get is() {
    return 'a100-page-sheet';
  }

  static get path() {
    return '/sheet';
  }

  static get styles() {
    return [style];
  }

  constructor() {
    super();
    this.data = [
      {
        title: "1卓",
        status: "open",
      },
      {
        title: "2卓",
        status: "reserved",
      },
      {
        title: "3卓",
        status: "close",
      },
      {
        title: "4卓",
        status: "open",
      },
    ];
  }

  updated(){
    const listItem = this.shadowRoot.querySelector('.list-item');
    listItem.addEventListener("touchstart", () => {
      listItem.classList.add('clicked');
    })
    listItem.addEventListener("touchend", () => {
      listItem.classList.remove('clicked');
    })
  }

  render() {
    const {data} = this;

    return html`
      <a100-title label="一覧"></a100-title>
      <div class="list">
        ${data.map((data) => html`
          <a class="list-item" href="/one">
            <a100-list-item
              label="${data.title}" 
              status="${data.status}"
            ></a100-list-item>
          </a>
        `)}
      </div>
    `
  }
}

window.customElements.define(CustomElement.is, CustomElement);
export default CustomElement;
