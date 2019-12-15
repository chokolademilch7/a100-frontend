import { baseImgPath } from '../../../constants';
import { repeat } from 'lit-html/directives/repeat';
import { html, LitElement, svg } from 'lit-element';
import '../../components/button';
import api from '../../storage';
import style from './index.gen.css';

class CustomElement extends LitElement {
  static get is() {
    return 'a100-page-top';
  }

  static get path() {
    return '/';
  }

  static get styles() {
    return [style];
  }

  static get properties() {
    return {
      __imgPaths: { type: Array }
    }
  }

  firstUpdated() {
    // api.seats.list('d62k8kto7E02kpm1Fmbi').then();
    // api.stores.list().then(r => console.log(r));
    api.seats.one('d62k8kto7E02kpm1Fmbi', 'KtPnfUPWNEKV4ZuoZyqa').then(r => console.log(r));
    api.topContents()
      .then(res => {
        this.__imgPaths = res.imgPath;
      })
  }

  constructor() {
    super();
    this.__imgPaths = []
  }

  render() {
    const { __imgPaths } = this;
    return html`
      <div class="title">
        <div class="title__main">${this.renderMainTitle()}</div>
        <div class="title__sub">${this.renderSubTitle()}</div>
        <div class="title__logo">${this.renderLogo()}</div>
      </div>
      <div class="main">
        <div class="main__contents">
          ${repeat(
            __imgPaths,
            __imgPath => {
              return html`
              <div class="main__item">
                <img class="main__image" src="${baseImgPath}/${__imgPath}">
              </div>
            `
          })}

        </div>
      </div>
      <a href="/store" class="button">
        <a100-button label="はじめる"></a100-button>
      </a>
      <a href="/login" class="button">
        <a100-button label="ログインする"></a100-button>
      </a>
    `
  }

  renderMainTitle() {
    return svg`
      <svg viewBox="0 0 228 54">
        <g id="v" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" font-family="TBUDRGoStd-Heavy, TBUDRGothic Std" font-size="60" font-weight="700" letter-spacing="1.25" opacity="0.857003348">
          <text id="Suitter" fill="#FEA130">
            <tspan x="-2" y="51">Suitter</tspan>
          </text>
        </g>
      </svg>
    `;
  }

  renderSubTitle() {
    return svg`
      <svg viewBox="0 0 270 20">
        <g id="v" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" font-family="ShinGoPr6N-Bold, A-OTF Shin Go Pr6N" font-size="21" font-weight="bold" letter-spacing="0.4375" opacity="0.857003348">
          <g id="iPhone-11-Pro" transform="translate(-50.000000, -116.000000)">
            <g id="logo_2" transform="translate(40.000000, 29.000000)">
              <text id="サクッと空いたお店を探そう">
                <tspan x="9" y="105" fill="#974E26">サク</tspan>
                <tspan x="51.875" y="105" letter-spacing="-2.0625" fill="#974E26">ッ</tspan>
                <tspan x="70.8125" y="105" font-family="ShinGoPr6N-Medium, A-OTF Shin Go Pr6N" font-size="18" font-weight="400" letter-spacing="0.955" fill="#563421">と</tspan>
                <tspan x="89.7675" y="105" font-family="ShinGoPr6N-Medium, A-OTF Shin Go Pr6N" font-weight="400" letter-spacing="1.5975" fill="#563421">空</tspan>
                <tspan x="112.365" y="105" font-family="ShinGoPr6N-Medium, A-OTF Shin Go Pr6N" font-weight="400" letter-spacing="1.3075" fill="#563421">い</tspan>
                <tspan x="134.6725" y="105" font-family="ShinGoPr6N-Medium, A-OTF Shin Go Pr6N" font-weight="400" letter-spacing="1.0175" fill="#563421">た</tspan>
                <tspan x="156.69" y="105" font-family="ShinGoPr6N-Medium, A-OTF Shin Go Pr6N" font-weight="400" fill="#563421">お店</tspan>
                <tspan x="199.565" y="105" font-family="ShinGoPr6N-Medium, A-OTF Shin Go Pr6N" font-size="18" font-weight="400" letter-spacing="0.955" fill="#563421">を</tspan>
                <tspan x="218.52" y="105" font-family="ShinGoPr6N-Medium, A-OTF Shin Go Pr6N" font-weight="400" letter-spacing="1.0175" fill="#563421">探</tspan>
                <tspan x="240.5375" y="105" font-family="ShinGoPr6N-Medium, A-OTF Shin Go Pr6N" font-weight="400" fill="#563421">そう</tspan>
              </text>
            </g>
          </g>
        </g>
      </svg>
    `;
  }

  renderLogo() {
    return svg`
      <svg viewBox="0 0 160 65">
        <g id="v" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
          <g id="iPhone-11-Pro" transform="translate(-107.000000, -195.000000)" stroke="#553421" stroke-width="9.681">
            <g id="logo_2" transform="translate(40.000000, 29.000000)">
              <g id="Group-7" transform="translate(72.000000, 171.000000)">
                <path d="M0.624844595,0.624472973 C0.624844595,0.624472973 21.9046419,27.3559595 74.7105878,27.3559595" id="Stroke-1"></path>
                <path d="M150.114399,0.624472973 C150.114399,0.624472973 126.822642,27.3559595 74.0166959,27.3559595" id="Stroke-3"></path>
                <path d="M80.9767973,31.0721014 L86.4901757,39.7576419 C95.7539595,54.3519662 115.2745,58.7133176 129.869568,49.4495338 C143.694635,40.6740608 148.336932,22.6964932 140.915649,8.41953378" id="Stroke-5"></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    `;
  }
}

window.customElements.define(CustomElement.is, CustomElement);
export default CustomElement;
