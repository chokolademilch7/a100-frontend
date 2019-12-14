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
      a100BackGroundColor: { type: String, reflect: true, attribute: "a100-back-ground-color" },
      a100Color: { type: String, reflect: true, attribute: "a100-color" },
    };
  }
  
  constructor() {
    super();
    this.label = "";
    this.a100BackGroundColor = "";
    this.a100Color = "";
  }

  render() {
    const { label, a100BackGroundColor, a100Color } = this;
    return html`
      <div
        class="button"
        style="
        background-color: ${a100BackGroundColor};
        color:${a100Color};
      ">
        ${label}
      </div>
    `
  }
}

window.customElements.define(CustomElement.is, CustomElement);
export default CustomElement;
