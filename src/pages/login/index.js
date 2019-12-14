import '../../components/title';
import '../../components/button';


import { LitElement, html } from 'lit-element';
import style from './index.gen.css';

class CustomElement extends LitElement {
  static get is() {
    return 'a100-page-login';
  }

  static get path() {
    return '/login';
  }

  static get styles() {
    return [style];
  }

  render() {
    return html`
      <a100-title label="ログイン"></a100-title>
      <form action="" method="get">
        <div class="form">
          <input class="email" type="email" name="email" id="email" placeholder="suitter@example.com" required>
        </div>
        <div class="form">
          <a100-button label="ログイン" @click="${this.loginClick}"></a100-button>
        </div>
      </form>
    `
  }

  loginClick(event){
    console.log(event);
    //ログインの処理をかく
  }
}

window.customElements.define(CustomElement.is, CustomElement);
export default CustomElement;
