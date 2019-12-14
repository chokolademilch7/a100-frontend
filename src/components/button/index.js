import { LitElement, html } from 'lit-element';
import style from './index.gen.css';

class CustomElement extends LitElement {
  static get is() {
    return 'a100-button';
  }

  static get styles() {
    return [style];
  }

  static get properties() {
    return {
      label: { type: String, reflect: true },
      backgroundColor: { type: String, reflect: true, attribute: "a100-background-color" },
      color: { type: String, reflect: true, attribute: "a100-color" },
    };
  }

  constructor() {
    super();
    this.label = "";
    this.backgroundColor = "";
    this.color = "";
  }

  updated(){
    const button = this.shadowRoot.querySelector('.button');
    button.addEventListener("touchstart", () => {
      button.classList.add('clicked');
    })
    button.addEventListener("touchend", () => {
      button.classList.remove('clicked');
    })
  }

  render() {
    const { label, backgroundColor, color } = this;
    return html`
      <div
        class="button"
        style="
        background-color: ${backgroundColor};
        color: ${color};
      ">
        ${label}
      </div>
    `
  }
}

window.customElements.define(CustomElement.is, CustomElement);
export default CustomElement;
