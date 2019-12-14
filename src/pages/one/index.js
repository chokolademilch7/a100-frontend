import '../../components/title';
import '../../components/status';
import '../../components/button';

import { LitElement, html } from 'lit-element';
import style from './index.gen.css';

class CustomElement extends LitElement {
  static get is() {
    return 'a100-page-one';
  }

  static get path() {
    return 'one';
  }

  static get styles() {
    return [style];
  }

  render() {
    return html`
      <a100-title label="詳細"></a100-title>
      <a100-status status="open" font-size="40px"></a100-status>
      <a100-button label="予約"></a100-button>
    `
  }
}

window.customElements.define(CustomElement.is, CustomElement);
export default CustomElement;
