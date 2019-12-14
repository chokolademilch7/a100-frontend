import { LitElement, html } from 'lit-element';
import style from './index.gen.css';

class CustomElement extends LitElement {
  static get is() {
    return 'a100-title';
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
    this.label = '';
  }

  render() {
    const {label} = this;
    return html`
      <div class="container">
        <div class="label">${label}</div>
      </div>
    `
  }
}

window.customElements.define(CustomElement.is, CustomElement);
export default CustomElement;
