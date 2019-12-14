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

  render() {
    // 一旦データ仮置き
    const items = [
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
        status: undefined,
        id:4,
      },
    ]

    return html`
      <a100-title label="一覧"></a100-title>
      <div class="list">
        ${items.map((item) => html`
          <a href="/sheet">
            <a100-list-item
              label="${item.title}"
              status="${item.status}"
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
