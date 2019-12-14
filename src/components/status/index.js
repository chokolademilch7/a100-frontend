import { classMap } from 'lit-html/directives/class-map';
import { LitElement, html } from 'lit-element';
import style from './index.gen.css';

class CustomElement extends LitElement {
  static get is() {
    return 'a100-status';
  }

  static get styles() {
    return [style];
  }

  static get properties() {
    return {
      status: { type: String, reflect: true },
      fontSize: { type: String, reflect: true, attribute: 'font-size',}
    };
  }

  constructor() {
    super();
    this.status = '';
    this.fontSize = "16px";
  }

  render() {
    const {status, fontSize} = this;
    return html`
      <div 
        class="${classMap({
          'stauts-label': true,
          'stauts-label--closed': status==="close",
          'stauts-label--opened': status==="open",
          'stauts-label--full': status==="full",
          'stauts-label--reserved': status==="reserved",
        })}" 
        style="font-size:${fontSize}"
      >
        ${status}
      </div>
    `
  }
}

window.customElements.define(CustomElement.is, CustomElement);
export default CustomElement;
