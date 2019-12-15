import '../../components/title';
import '../../components/listItem';


import { LitElement, html } from 'lit-element';
import style from './index.gen.css';

class CustomElement extends LitElement {
  static get is() {
    return 'a100-page-store';
  }

  static get path() {
    return '/store';
  }

  static get styles() {
    return [style];
  }

  constructor() {
    super();
    this.data = [
      {
        title: "一蘭(ラーメン)",
        status: "open",
        id: 1,
      },
      {
        title: "会議室-20",
        status: "open",
        id:2,
      },
      {
        title: "芥川龍之介",
        status: "close",
        id:3,
      },
      {
        title: "お店の名前です",
        status: "full",
        id:4,
      },
    ]
  }

  updated(){
    const listItem = this.shadowRoot.querySelectorAll('.list-item');
    [...listItem].forEach(item => {
      item.addEventListener("touchstart", () => {
        item.classList.add('clicked');
      });
      item.addEventListener("touchend", () => {
        item.classList.remove('clicked');
      });
    });
  }


  render() {
    const {data} = this;

    return html`
      <a100-title label="一覧"></a100-title>
      <div class="list">
        ${data.map((data) => html`
          <a class="list-item" href="/sheet?${data.id}">
            <a100-list-item
              label="${data.title}"
              status="${data.status}"
              >
            </a100-list-item>
          </a>
        `)}
      </div>
    `
  }
}

window.customElements.define(CustomElement.is, CustomElement);
export default CustomElement;
