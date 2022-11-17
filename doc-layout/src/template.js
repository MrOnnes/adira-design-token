import '@divriots/dockit-core/layout/dockit-layout.define.js';
import '@divriots/dockit-core/css-showcases/dockit-css-showcases.define.js';
import { styles } from '@divriots/dockit-core/layout';
import '~/tokens/variables.css';
import '~/field/doc/field.js';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import logoSvg from './logo.svg?raw';

import 'https://kit.fontawesome.com/5089d486f3.js';

// Needed for now, initial-color-scheme isn't enough
//document.documentElement.classList.add('dark');

export const docLayoutTemplate = (content, context) => html`
  <style>
    ${unsafeHTML(styles)} [slot='logo'] span {
      color: var(--figma-color-text-normal);
    }

    [slot='logo'] {
      display: flex;
      align-items: center;
      gap: 1em;
      font-size: 24px;
      width: max-content;
    }

    /** 
     * Double attr selector to beat dockit-layout's selector specificity
     * We want height of auto here. TODO: Fix in dockit-layout?

     initial-color-scheme = warna background
     */
    [slot='logo'][slot='logo'] > svg {
      height: auto;
    }
  </style>
  <dockit-layout
    disable-color-scheme-change
    initial-color-scheme="light"
    .context="${context}"
  >
    <div slot="logo">
      ${unsafeHTML(logoSvg)}<span>Figma Tokens Starter</span>
    </div>
    <div class="prose">${unsafeHTML(content)}</div>
  </dockit-layout>
`;
