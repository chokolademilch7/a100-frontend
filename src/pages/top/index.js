import { baseImgPath } from '../../../constants';
import { repeat } from 'lit-html/directives/repeat';
import { html, LitElement, svg } from 'lit-element';
import { when } from '../../directives/when';
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
      __imgPaths: { type: Array },
      __isShowGorori: { type: Boolean }
    }
  }

  firstUpdated() {
    api.topContents()
      .then(res => {
        this.__imgPaths = res.imgPath;
      })
  }

  constructor() {
    super();
    this.__imgPaths = []
    this.__isShowGorori = false;
  }

  updated(){
    const title = this.shadowRoot.querySelector('.title');
    const firstTitle = this.shadowRoot.querySelector('.title__first');
    const gorori = this.shadowRoot.querySelector('.title__gorori');

    let count = 0;
    title.addEventListener("touchstart", () => {
      title.classList.add('clicked');
    })
    title.addEventListener("touchend", () => {
      title.classList.remove('clicked');
      count++;
      if (count === 5) {
        this.__isShowGorori = true;
      }
    })
  }

  render() {
    const { __imgPaths } = this;
    return html`
      <div class="title">
        ${when(
          !this.__isShowGorori,
          () => html`
            <div class="title__first">
              <div class="title__main">${this.renderMainTitle()}</div>
              <div class="title__sub">${this.renderSubTitle()}</div>
              <div class="title__logo">${this.renderLogo()}</div>
            </div>
          `,
          () => html`
            <div class="title__gorori">${this.renderGorori()}</div>
          `
        )}


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

  renderGorori() {
    return svg`
      <svg viewBox="0 0 315 230" version="1.1">
        <defs>
          <polygon id="path-1" points="0.000178378378 0.1264 65.7326108 0.1264 65.7326108 48 0.000178378378 48"></polygon>
          <polygon id="path-3" points="0 0.338636982 68.5008011 0.338636982 68.5008011 67.0158089 0 67.0158089"></polygon>
          <polygon id="path-5" points="1.22112489e-05 0.006 50.9 0.006 50.9 36.7998 1.22112489e-05 36.7998"></polygon>
        </defs>
        <g id="v" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="iPhone-11-Pro" transform="translate(-40.000000, -30.000000)">
            <g id="logo_2" transform="translate(40.000000, 29.000000)">
              <text id="サクッと空いたお店を探そう" opacity="0.857003348" font-family="ShinGoPr6N-Bold, A-OTF Shin Go Pr6N" font-size="21" font-weight="bold" letter-spacing="0.4375">
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
                  <g id="Group-7" transform="translate(72.000000, 171.000000)" stroke="#553421" stroke-linecap="round" stroke-width="9.681">
                    <path d="M0.624844595,0.624472973 C0.624844595,0.624472973 21.9046419,27.3559595 74.7105878,27.3559595" id="Stroke-1"></path>
                    <path d="M150.114399,0.624472973 C150.114399,0.624472973 126.822642,27.3559595 74.0166959,27.3559595" id="Stroke-3"></path>
                    <path d="M80.9767973,31.0721014 L86.4901757,39.7576419 C95.7539595,54.3519662 115.2745,58.7133176 129.869568,49.4495338 C143.694635,40.6740608 148.336932,22.6964932 140.915649,8.41953378" id="Stroke-5"></path>
                  </g>
                  <g id="Group-8" transform="translate(117.000000, 122.000000)">
                    <g id="Group-3" transform="translate(0.418182, 0.000000)">
                      <mask id="mask-2" fill="white">
                        <use xlink:href="#path-1"></use>
                      </mask>
                      <g id="Clip-2"></g>
                      <path d="M44.1898541,48.0001778 L21.5429351,48.0001778 C9.69415135,48.0001778 0.000178378378,38.3379556 0.000178378378,26.5290667 L0.000178378378,21.5966222 C0.000178378378,9.78773333 9.69415135,0.1264 21.5429351,0.1264 L44.1898541,0.1264 C56.0386378,0.1264 65.7326108,9.78773333 65.7326108,21.5966222 L65.7326108,26.5290667 C65.7326108,38.3379556 56.0386378,48.0001778 44.1898541,48.0001778" id="Fill-1" fill="#643C26" mask="url(#mask-2)"></path>
                    </g>
                  </g>
                    <g id="空いてる" transform="translate(0.000000, 3.000000)">
                      <g id="Group-3" transform="translate(0.000000, 0.564000)">
                        <mask id="mask-4" fill="white">
                          <use xlink:href="#path-3"></use>
                        </mask>
                        <g id="Clip-2"></g>
                        <path d="M43.7712,21.3486 C44.0512,23.7816 44.7832,23.8416 46.7142,23.6186 L49.1462,23.3376 C51.0782,23.1146 51.0422,22.1766 51.1232,20.3546 C51.1872,19.0426 51.3862,18.8756 51.7272,18.6906 C52.3922,18.1786 52.3182,17.5356 52.2832,16.5976 C52.2572,16.3826 52.3042,16.1596 52.2712,15.8726 L52.2222,15.4446 C52.0982,14.3716 51.2042,13.5326 49.7742,13.6976 L44.9812,14.2506 C43.8362,14.3826 43.0772,15.3406 43.2172,16.5566 L43.7712,21.3486 Z M42.4582,45.1306 C41.2412,45.2716 40.4912,46.2996 40.6152,47.3726 L41.1182,51.7366 C41.2502,52.8806 42.2792,53.6316 43.3522,53.5076 L56.8722,51.9476 C59.8752,51.5996 62.8642,51.1106 65.8672,50.7636 C67.5122,50.5746 67.7392,51.2726 67.9952,53.4906 L68.3822,56.8516 C68.6472,59.1406 68.5862,59.8726 66.9412,60.0626 C63.9382,60.4096 60.9172,60.6136 57.9132,60.9596 L15.9962,65.7996 C12.9912,66.1466 10.0022,66.6366 6.9992,66.9836 C5.3532,67.1736 5.1362,66.5466 4.8972,64.4716 L4.4762,60.8246 C4.2282,58.6776 4.2802,57.8746 5.9242,57.6846 C8.9292,57.3376 11.9502,57.1336 14.9552,56.7866 L28.4032,55.2346 C29.5462,55.1016 30.3052,54.1446 30.1732,52.9996 L29.6692,48.6366 C29.5452,47.5636 28.5802,46.7326 27.4362,46.8656 L20.2832,47.6916 C17.4212,48.0216 14.6482,48.4866 11.8592,48.8086 C10.2132,48.9976 9.9792,48.2286 9.7402,46.1546 L9.3762,43.0066 C9.1362,40.9316 9.1982,40.2016 10.8432,40.0106 C13.6322,39.6896 16.4392,39.5096 19.2992,39.1786 L48.6992,35.7846 C51.4892,35.4626 54.2612,34.9976 57.0512,34.6756 C58.6972,34.4856 58.9222,35.1836 59.1282,36.9726 L59.5502,40.6206 C59.7732,42.5516 59.7132,43.2836 58.0682,43.4726 C55.2782,43.7946 52.4722,43.9746 49.6822,44.2966 L42.4582,45.1306 Z M13.2202,17.9176 C11.7912,18.0826 11.0312,19.0406 11.1712,20.2566 C11.2292,20.7576 11.5832,21.9486 11.6742,22.7356 C11.8732,24.4526 10.8252,24.7906 9.0372,24.9966 L4.6732,25.5006 C2.5992,25.7406 1.4292,25.6586 1.2402,24.0126 C1.1252,23.0116 1.1402,21.2696 0.9662,19.7676 L0.7522,17.9076 C0.4882,15.6186 0.1142,13.6326 0.0232,12.8456 C-0.2828,10.1986 2.4992,9.8056 4.5012,9.5746 C7.2922,9.2516 10.1692,9.0646 12.9592,8.7426 L22.4002,7.6526 C23.6892,7.5036 24.5272,6.6096 24.3782,5.3216 C24.3042,4.6786 23.8582,2.7006 23.8002,2.1996 C23.6682,1.0556 24.4392,0.8216 25.3692,0.7136 C26.8712,0.5396 31.3472,0.3866 32.9372,0.3476 C35.4732,0.3446 36.8332,0.1866 36.9642,1.3316 C37.0312,1.9046 36.6352,2.2406 36.3182,2.6386 C35.9302,3.0456 35.7752,3.5716 35.8332,4.0726 C35.9482,5.0736 36.8502,5.9846 38.3522,5.8106 L47.9382,4.7036 C50.7982,4.3736 53.5732,3.9086 56.3622,3.5866 C58.3652,3.3546 61.2332,3.0966 61.5392,5.7436 C61.6052,6.3156 61.6382,8.4856 61.9122,10.8466 L62.0932,12.4196 C62.1922,13.2786 62.3632,14.1286 62.5332,14.9786 C62.6452,15.3286 62.7112,15.9006 62.7522,16.2586 C62.9592,18.0466 61.5302,18.2116 60.1702,18.3686 L59.7412,18.4176 C59.4552,18.4516 59.0342,18.5726 59.0762,18.9296 C59.1082,19.2156 59.4832,19.3176 59.7852,19.4276 C60.4782,19.7826 60.8152,20.1786 60.8972,20.8936 C61.1532,23.1116 60.0892,27.0766 59.0792,29.0046 C57.6982,31.4836 55.7042,31.7866 53.2712,32.0676 L43.5432,33.1916 C38.8222,33.7366 34.7362,34.1346 34.0912,28.5556 C33.9432,27.2676 33.9462,26.0346 33.7972,24.7476 L32.9802,17.6656 C32.8472,16.5216 31.8192,15.7706 30.7462,15.8946 L27.0982,16.3156 C26.6692,16.3656 26.3192,16.4786 26.3602,16.8356 C26.4022,17.1936 26.9272,17.3496 27.2222,17.3886 C28.1932,17.6396 30.2702,18.0516 30.4022,19.1966 C30.4762,19.8396 29.6512,20.2246 29.2392,20.4176 C28.2622,20.7476 28.0722,20.9866 27.7502,21.9666 C23.8532,32.7826 9.7602,40.0626 7.1862,40.3606 C5.1842,40.5916 1.7692,36.1286 1.4632,33.4826 C1.3322,32.3376 1.9042,32.2716 3.7772,31.5486 C8.7072,29.6746 14.6762,25.5056 16.9462,20.6776 C17.1112,20.2236 17.6232,19.0046 17.5742,18.5756 C17.4582,17.5736 16.5112,17.5376 15.5822,17.6456 L13.2202,17.9176 Z" id="Fill-1" fill="#F88A67" mask="url(#mask-4)"></path>
                      </g>
                        <path d="M117.3362,27.043 C119.1022,26.8 124.8242,30.143 128.3402,34.39 C131.4562,38.158 133.6542,42.519 135.0222,47.126 C135.2962,48.155 135.7082,49.697 135.8152,50.481 C136.0052,51.855 135.7592,52.488 134.5052,53.06 C132.6902,53.91 130.4092,54.756 128.4462,55.026 C126.0282,55.359 125.8452,54.518 125.3082,52.06 C123.6402,44.295 120.0392,38.462 113.2172,34.871 C112.7802,34.598 112.4822,34.373 112.4102,33.85 C112.2042,32.346 115.3752,27.313 117.3362,27.043 M93.6972,32.427 C94.3682,32.468 95.1152,32.565 95.1962,33.154 C95.2322,33.415 95.0622,33.638 94.6492,34.028 C93.8892,34.798 93.8642,36.068 93.8022,37.076 C93.6282,40.164 93.7982,43.337 94.2122,46.345 C94.7792,50.464 96.0142,55.09 98.2922,58.575 C98.9672,59.614 100.4322,61.544 101.8712,61.346 C103.3742,61.139 104.5092,58.251 104.9542,57.125 C105.3042,56.277 105.7742,55.347 106.7562,55.211 C108.7172,54.942 114.0672,58.003 114.2832,59.572 C114.4992,61.141 111.9682,65.02 111.0282,66.415 C109.0902,69.28 107.0992,71.752 103.5032,72.247 C99.1242,72.849 94.9572,70.158 92.0692,67.091 C86.2952,60.958 84.5252,51.475 83.4192,43.433 C83.2492,42.191 82.4222,34.245 82.3612,33.321 C82.3282,32.591 82.6102,32.22 83.3292,32.121 C84.1782,32.004 92.0172,32.325 93.6972,32.427" id="Fill-4" fill="#E37890"></path>
                        <path d="M146.8635,31.6744 C146.6755,30.1104 146.4115,26.9894 146.5565,25.5154 C146.7315,23.7564 147.5265,23.8354 150.5505,23.9624 C158.9335,24.3344 167.2955,24.3614 175.7355,24.1644 C179.8705,24.0594 184.4655,23.9414 188.6225,23.6084 C188.7985,23.5684 188.9675,23.5844 189.1385,23.6024 C190.1595,23.7024 190.3475,24.6954 190.4275,25.6194 C190.5655,27.1234 190.6315,30.5094 190.4855,31.9844 C190.3785,33.0624 189.6975,32.9944 187.3655,32.8214 C184.3535,32.5804 182.0905,32.2994 179.0955,33.0334 C171.8715,34.8384 166.5105,40.9524 165.7685,48.4414 C165.2355,53.8304 167.8695,55.5814 172.8605,56.0754 C174.3365,56.2214 176.1695,56.2304 177.0205,56.3154 C178.0425,56.4154 178.4215,56.6254 178.3145,57.7034 C178.1515,59.3484 177.3955,62.9404 176.6925,64.2454 C176.0645,65.3854 175.3725,65.4324 174.1805,65.3144 C163.6295,64.2694 155.1055,60.6754 156.3185,48.4224 C156.8415,43.1464 158.9305,38.8274 162.3645,34.8144 C162.6255,34.4964 163.0095,34.0754 163.0545,33.6224 C163.1055,33.1114 162.7425,32.7314 162.1185,32.6694 C161.5515,32.6134 159.8715,32.7914 159.0055,32.8774 C155.9415,33.1464 151.9995,33.6154 148.9665,34.1744 C148.7325,34.2084 148.3305,34.2264 148.1025,34.2034 C147.1385,34.1084 146.9565,32.4864 146.8635,31.6744" id="Fill-6" fill="#C1D17C"></path>
                        <path d="M224.9319,56.1031 C223.9749,56.1781 223.0609,56.7901 223.1449,57.8681 C223.2719,59.4831 225.3679,60.1001 226.7439,59.9931 C227.5209,59.9311 228.1959,59.3361 228.1349,58.5591 C228.0699,57.7221 227.0259,55.9381 224.9319,56.1031 M238.8999,24.7341 C238.9269,25.0931 238.5929,25.4201 238.3079,25.6231 C235.9169,27.3751 233.4169,30.0391 231.4249,32.2421 C231.1499,32.5641 230.9389,32.9421 230.9709,33.3611 C231.0279,34.0791 231.7279,34.5661 232.4459,34.5091 C232.6239,34.4951 232.8589,34.4161 233.0989,34.3971 C233.9949,34.3271 236.1179,34.5211 237.3409,34.7871 C243.9569,36.2531 248.3719,41.1421 248.9039,47.9021 C249.7999,59.3261 240.3769,65.7831 229.9699,66.6001 C224.3469,67.0411 216.5729,65.3651 216.0329,58.4861 C215.6569,53.7021 219.7459,49.8301 224.3529,49.4671 C227.4619,49.2231 230.5649,50.4241 232.7269,52.6621 C233.7129,53.7281 233.9399,54.3121 234.5769,55.5261 C234.8629,56.1051 235.4439,56.6011 236.1019,56.5491 C237.5359,56.4371 240.1729,53.2211 239.8629,49.2731 C239.4639,44.1891 235.1589,42.2411 230.5529,42.6021 C226.1869,42.9451 222.4309,44.9241 219.3699,48.1141 C217.3679,50.1971 214.2249,53.8741 212.6049,56.2271 C211.8529,57.3701 211.4069,57.8271 211.1669,57.8451 C209.7909,57.9531 204.7419,53.4151 204.6529,52.2791 C204.5959,51.5601 205.1519,50.9751 206.3319,49.9191 C207.7339,48.6061 216.8879,37.9571 218.8229,35.7591 C219.8689,34.5341 220.6819,33.3861 221.6089,32.1701 C221.9949,31.7181 222.3859,31.3271 222.3389,30.7281 C222.2829,30.0111 221.3159,29.9661 221.0769,29.9851 C220.8979,29.9991 214.4719,31.7071 212.9349,32.0691 C212.7019,32.1471 212.4619,32.1661 212.2219,32.1851 C210.8469,32.2921 209.9559,25.5621 209.8679,24.4261 L209.8209,23.8281 C209.7499,22.9301 209.9299,22.9161 211.6639,22.7801 L213.0399,22.6721 C216.9229,22.3071 225.4249,20.9771 228.7219,19.2741 C230.1649,18.4991 230.7999,18.1481 231.2179,18.1151 C233.7899,17.9131 238.7959,23.4181 238.8999,24.7341" id="Fill-8" fill="#6BC5D5"></path>
                    </g>
                    <g id="Group-10" transform="translate(264.000000, 0.000000)">
                      <path d="M12.1248,46.0332 L28.3508,46.9502 C29.7968,44.8302 31.9538,43.0152 34.5768,41.5822 C36.9308,40.2802 39.1038,39.0642 41.0558,37.7942 L18.2348,36.5052 C15.4538,38.9832 13.2218,42.0132 12.1248,46.0332" id="Fill-1" fill="#F7E892"></path>
                      <g id="Group-5" transform="translate(0.000000, 0.993900)">
                        <mask id="mask-6" fill="white">
                          <use xlink:href="#path-5"></use>
                            </mask>
                            <g id="Clip-4"></g>
                            <path d="M50.5544,17.2478 C49.7434,13.3298 47.5144,9.7408 44.0344,6.8608 C40.4374,3.8828 35.5084,1.6608 29.4484,0.6138 C19.9204,-1.0332 11.7834,0.7808 5.3204,4.6738 C3.9884,5.4768 2.7214,6.3608 1.5334,7.3288 C0.6114,8.0638 0.1254,8.5768 0.0254,9.1568 C-0.0916,9.8328 0.1944,10.4778 0.9124,11.4978 L3.0764,14.5648 L6.7444,19.7658 C7.4644,20.7858 7.9594,21.3678 8.4444,21.4518 C9.0224,21.5518 9.6064,21.0568 10.5454,20.2238 C12.9334,18.0558 16.1314,16.2708 19.6024,15.4988 C21.6174,15.0508 23.7234,14.9418 25.8174,15.3038 C26.8204,15.4768 27.7384,15.7128 28.5674,16.0058 C32.2884,17.3168 34.1944,19.7808 33.6344,23.0188 C33.4164,24.2808 32.7584,25.3218 31.8254,26.2598 C30.5464,27.5468 28.7364,28.6338 26.6984,29.7778 C23.7284,31.4608 20.7584,33.2618 18.2354,35.5108 L41.0554,36.7998 C44.9814,34.2468 47.9814,31.4538 49.6174,27.2658 C50.0584,26.1388 50.4114,24.9238 50.6454,23.5708 C51.0194,21.4088 50.9754,19.2848 50.5544,17.2478" id="Fill-3" fill="#D56326" mask="url(#mask-6)"></path>
                      </g>
                      <path d="M18.6619,57.1328 C12.2889,56.0308 8.0109,60.0668 7.0259,65.7638 C6.1589,70.7848 9.4209,74.9298 14.4429,75.7968 C21.1059,76.9488 25.2879,72.8968 26.2049,67.5858 C27.0889,62.4668 23.8779,58.0328 18.6619,57.1328" id="Fill-6" fill="#D56326"></path>
                      <path d="M11.7078,47.875 C11.3238,50.096 11.3838,50.902 12.8328,51.152 L24.4228,53.154 C25.9678,53.422 26.2278,53.068 26.5268,51.33 C26.7988,49.757 27.4348,48.293 28.3508,46.95 L12.1248,46.033 C11.9628,46.627 11.8178,47.236 11.7078,47.875" id="Fill-8" fill="#D56326"></path>
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
