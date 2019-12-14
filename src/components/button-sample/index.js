import { LitElement, html, svg } from 'lit-element';
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
      <div class="test">これはテストコンポーネント</div>
      <div class="title">
        <div class="title__logo">${this.renderTitleLogo()}</div>
        <div class="title__subtitle">${this.renderSubTitle()}</div>
      </div>
    `
  }

  renderTitleLogo() {
    return svg`
      <svg width="262px" height="54px" viewBox="0 0 262 54">
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
      <svg width="270px" height="20px" viewBox="0 0 270 20">
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
}

window.customElements.define(CustomElement.is, CustomElement);
export default CustomElement;
