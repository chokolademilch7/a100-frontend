import '../../components/button-sample';

import { LitElement, html } from 'lit-element';
import style from './index.gen.css';

class CustomElement extends LitElement {
  static get is() {
    return 'a100-page-home';
  }

  static get styles() {
    return [style];
  }

  render() {
    return html`
      <a100-button-sample></a100-button-sample>
    `
  }
}

window.customElements.define(CustomElement.is, CustomElement);
export default CustomElement;