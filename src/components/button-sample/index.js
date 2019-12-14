import { LitElement, html } from 'lit-element';
import style from './index.gen.css';

class CustomElement extends LitElement {
  static get is() {
    return 'a100-button-sample';
  }

  static get styles() {
    return [style];
  }

  constructor() {
    super();
    this.name = 'aaaa';
  }

  render() {
    return html`
      <div>これはテdddンポーネ</div>
    `
  }
}

window.customElements.define(CustomElement.is, CustomElement);
export default CustomElement;
