import { classMap } from 'lit-html/directives/class-map';
import { LitElement, html } from 'lit-element';
import style from './index.gen.css';

class CustomElement extends LitElement {
  static get is() {
    return 'a100-list-item';
  }

  static get styles() {
    return [style];
  }

  static get properties() {
    return {
      label: { type: String, reflect: true },
      status: { type: String, reflect: true }
    };
  }

  constructor() {
    super();
    this.label = '';
    this.status = '';
  }

  render() {
    const {label, status} = this;
    return html`
      <div class="flex">
        <div class="title">${label}</div>
        <div class="${classMap({
          'stauts-label': true,
          'stauts-label--closed': status==="close",
          'stauts-label--opened': status==="open",
        })}">
          ${status}
        </div>
      </div>
    `
  }
}

window.customElements.define(CustomElement.is, CustomElement);
export default CustomElement;
