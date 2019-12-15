import { html, LitElement } from 'lit-element';
import '../../components/listItem';
import '../../components/title';
import api from '../../storage';
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

  static get properties() {
    return {
      __data: {type: Array}
    }
  }

  onBeforeEnter(e) {
    this.__id = e.search.slice(1, e.search.length);
  }

  firstUpdated() {
    const {__id} = this;
    api.seats(__id).then(res => {
      this.__data = res
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

    return html`
      <a100-title label="一覧"></a100-title>
      <div class="list">
        ${__data.map((data) => html`
          <a class="list-item" href="/one?${data.id}">
            <a100-list-item
              label="${data.name}" 
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
