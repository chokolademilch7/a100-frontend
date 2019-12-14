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

  render() {
    // 一旦データ仮置き
    const items = [
      {
        title: "1卓",
        status: "open",
      },
      {
        title: "2卓",
        status: "open",
      },
      {
        title: "3卓",
        status: "close",
      },
      {
        title: "4卓",
        status: undefined,
      },
    ];

    return html`
      <a100-title label="一覧"></a100-title>
      <div class="list">
        ${items.map((item) => html`
          <a class="list-item" href="/one">
            <a100-list-item
              label="${item.title}" 
              status="${item.status}"
            ></a100-list-item>
          </a>
        `)}
      </div>
    `
  }
}

window.customElements.define(CustomElement.is, CustomElement);
export default CustomElement;
