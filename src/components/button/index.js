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
      label: { type: String, reflect: true }
    };
  }

  constructor() {
    super();
    this.label = "";
  }

  render() {
    const { label } = this;
    return html`
      <div class="button" @click="${this.buttonClick}">
        ${label}
      </div>
    `
  }

  buttonClick(e) {
    const button = e.currentTarget;
    console.log(e.currentTarget);
  }
}

window.customElements.define(CustomElement.is, CustomElement);
export default CustomElement;
