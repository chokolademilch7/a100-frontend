import '../../components/title';
import '../../components/listItem';


import { LitElement, html } from 'lit-element';
import style from './index.gen.css';

class CustomElement extends LitElement {
  static get is() {
    return 'a100-page-list';
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
      },
      {
        title: "会議室-20",
        status: "open",
      },
      {
        title: "芥川龍之介",
        status: "close",
      },
      {
        title: "お店の名前です",
        status: undefined,
      },
    ]

    return html`
      <a100-title label="一覧"></a100-title>
      <div class="list">
        ${items.map((item) => html`
          <a100-list-item label="${item.title}" status="${item.status}"></a100-list-item>
        `)}
      </div>
    `
  }
}

window.customElements.define(CustomElement.is, CustomElement);
export default CustomElement;
