import '../../components/title';
import '../../components/listItem';

import { LitElement, html } from 'lit-element';
import api from '../../storage';
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

  static get properties() {
    return {
      __data: { type: Array }
    };
  }

  firstUpdated() {
    api.stores.onSnap(doc => {
      this.__data = doc.docs.map(doc => doc.data());
    });
  }


  constructor() {
    super();
    this.__data = []
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
    const {__data} = this;
    if(__data.length <= 0){
      return html``
    }
    return html`
      <a100-title label="一覧"></a100-title>
      ${when(
        __data.length > 0,
        () => html`
          <div class="list">
            ${__data.map((__data) => html`
              <a class="list-item" href="/sheet?${__data.id}">
                <a100-list-item
                  label="${__data.name}"
                  status="${__data.status}"
                  >
                </a100-list-item>
              </a>
            `)}
          </div>
        `
      )}
      
    `
  }
}

window.customElements.define(CustomElement.is, CustomElement);
export default CustomElement;
