import '../../components/title';
import '../../components/status';
import '../../components/button';
import {cache} from 'lit-html/directives/cache.js';
import { LitElement, html, svg } from 'lit-element';
import style from './index.gen.css';

class CustomElement extends LitElement {
  static get is() {
    return 'a100-page-one';
  }

  static get path() {
    return '/one';
  }

  static get styles() {
    return [style];
  }

  static get properties() {
    return {
      __favorite: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    this.data = {
      store: "一蘭(ラーメン)",
      sheet: "1卓",
      status: "open",
      favorite: true
    };
    this.__favorite = false;
  }

  render() {
    const { data, __favorite } = this;
    const onStar = this.renderOnStar();
    const offStar = this.renderOffStar();
    return html`
      <a100-title label="${data.store}"></a100-title>
      <div class="sheetTitle">${data.sheet}</div>
      <div class="kanban">
        <img class="kanban__image" src="https://firebasestorage.googleapis.com/v0/b/hackday2019-a91a3.appspot.com/o/top%2Fkanban.png?alt=media&token=4ec0ef98-649e-402a-b54c-8b4cf0859144">
        <a100-status status="open" font-size="40px"></a100-status>
      </div>
      <div class="flex">
        <a100-button
          label = "予約"
          a100-background-color = "#00ac97"
        ></a100-button>
        <div class="star" @click="${this.starClick}">
          ${cache(__favorite
            ? onStar()
            : offStar()
          )}
        </div>
      </div>
    `
  }

  renderOnStar() {
    return () => html`
      ${svg`
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          viewBox="0 0 1300 1300"
          preserveAspectRatio="xMidYMid meet"
        >
          <metadata>
            Created by potrace 1.15, written by Peter Selinger 2001-2017
          </metadata>
          <g
            transform="translate(0.000000,1226.000000) scale(0.100000,-0.100000)"
            fill="#f2a55f"
            stroke="none"
          >
            <path d="M5748 11533 c-190 -401 -599 -1261 -908 -1913 -310 -652 -564 -1187
            -566 -1189 -1 -2 -963 -158 -2136 -347 -1173 -188 -2134 -343 -2135 -343 -2
            -1 -3 -110 -3 -244 l0 -243 1491 -1409 c820 -776 1501 -1419 1514 -1430 l24
            -20 -54 -345 c-30 -190 -91 -579 -135 -865 -44 -286 -101 -646 -125 -800 -24
            -154 -76 -485 -115 -735 -39 -250 -112 -723 -163 -1050 l-93 -595 269 -3 270
            -2 1756 956 c966 527 1776 968 1801 982 l45 24 1938 -981 1938 -981 172 2 173
            3 -418 2225 c-229 1224 -416 2237 -415 2251 1 20 344 369 1465 1495 l1462
            1469 -2 245 -3 244 -170 23 c-93 12 -676 88 -1295 168 -619 80 -1507 195
            -1975 256 -467 61 -853 113 -857 117 -3 4 -211 405 -460 892 -250 487 -683
            1332 -963 1878 l-510 992 -236 0 -236 0 -345 -727z"/>
          </g>
        </svg>
      `}
    `
  }

  renderOffStar() {
    return () => html`
      ${svg`
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          viewBox="0 0 1300 1300"
          preserveAspectRatio="xMidYMid meet"
        >
          <metadata>
            Created by potrace 1.15, written by Peter Selinger 2001-2017
          </metadata>
          <g
            transform="translate(0.000000,1226.000000) scale(0.100000,-0.100000)"
            fill="#333"
            stroke="none"
          >
            <path d="M5748 11533 c-190 -401 -599 -1261 -908 -1913 -310 -652 -564 -1187
            -566 -1189 -1 -2 -963 -158 -2136 -347 -1173 -188 -2134 -343 -2135 -343 -2
            -1 -3 -110 -3 -244 l0 -243 1491 -1409 c820 -776 1501 -1419 1514 -1430 l24
            -20 -54 -345 c-30 -190 -91 -579 -135 -865 -44 -286 -101 -646 -125 -800 -24
            -154 -76 -485 -115 -735 -39 -250 -112 -723 -163 -1050 l-93 -595 269 -3 270
            -2 1756 956 c966 527 1776 968 1801 982 l45 24 1938 -981 1938 -981 172 2 173
            3 -418 2225 c-229 1224 -416 2237 -415 2251 1 20 344 369 1465 1495 l1462
            1469 -2 245 -3 244 -170 23 c-93 12 -676 88 -1295 168 -619 80 -1507 195
            -1975 256 -467 61 -853 113 -857 117 -3 4 -211 405 -460 892 -250 487 -683
            1332 -963 1878 l-510 992 -236 0 -236 0 -345 -727z"/>
          </g>
        </svg>
      `}
    `
  }

  starClick(){
    this.__favorite = !this.__favorite;
  }
}

window.customElements.define(CustomElement.is, CustomElement);
export default CustomElement;
