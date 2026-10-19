import"./esa-dropdown-menu.BOBdfZ9J.js";var e=`
  :host { --dropdown-menu-min-width: 13rem; --dropdown-menu-max-width: 22rem; }
  .esa-dropdown-menu__panel { max-height: min(32rem, calc(100vh - 6rem)); }
  .esa-dropdown-menu__item > span:not([class]) { white-space: nowrap; }
  /* The editor's list family (theme-app.css --rd-list-*): 28px rows, 14px text at weight 500, 14px glyphs. */
  .esa-dropdown-menu__item.typography-body-md {
    min-height: var(--rd-list-row, 1.75rem);
    padding-block: var(--spacing-050, 0.125rem);
    padding-inline: var(--spacing-200, 0.5rem);
    font-size: var(--rd-list-type, 0.875rem);
    font-weight: var(--rd-list-weight, 500);
    line-height: 1.3;
  }
  .rd-menu__glyph { display: inline-flex; flex: none; width: var(--rd-list-glyph, 0.875rem); height: var(--rd-list-glyph, 0.875rem); color: var(--color-content-default-secondary, #646464); }
  .rd-menu__glyph svg { width: 100%; height: 100%; }
  .rd-menu__glyph ~ .esa-dropdown-menu__bullet { display: none; }
  .esa-dropdown-menu__item--danger .rd-menu__glyph { color: inherit; }
  .rd-menu__check { display: inline-flex; flex: none; width: var(--rd-list-glyph, 0.875rem); height: var(--rd-list-glyph, 0.875rem); margin-left: auto; color: var(--color-content-default, #202020); }
  .rd-menu__check svg { width: 100%; height: 100%; }
  .rd-menu__key {
    flex: none; margin-left: auto; padding-left: var(--spacing-600, 1.5rem);
    font-family: inherit; letter-spacing: 0.02em;
    color: var(--color-content-default-secondary, #646464);
    font-size: var(--rd-type-dense, 0.8125rem); font-weight: var(--typography-font-weight-regular, 350); font-variant-numeric: tabular-nums; white-space: nowrap;
  }
  .rd-menu__check + .rd-menu__key { margin-left: var(--spacing-200, 0.5rem); }
`,t=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>`,n=null;function r(){if(customElements.get(`rd-block-menu`))return;let e=customElements.get(`esa-dropdown-menu`);if(!e)return;class t extends e{updated(e){super.updated?.(e),i(this)}}customElements.define(`rd-block-menu`,t)}function i(r){let i=r.shadowRoot;if(!i)return;n||(n=new CSSStyleSheet,n.replaceSync(e)),i.adoptedStyleSheets.includes(n)||(i.adoptedStyleSheets=[...i.adoptedStyleSheets,n]);let a=[...i.querySelectorAll(`.esa-dropdown-menu__item`)];if(!a.length)return;let o=(r.items??[]).filter(e=>!e.divider);a.forEach((e,n)=>{let r=o[n];for(let t of e.querySelectorAll(`.rd-menu__glyph, .rd-menu__check, .rd-menu__key`))t.remove();if(e.setAttribute(`role`,r?.radio?`menuitemradio`:`menuitem`),e.removeAttribute(`aria-checked`),e.removeAttribute(`aria-keyshortcuts`),e.removeAttribute(`aria-description`),e.removeAttribute(`title`),r){if(r.glyph){let t=document.createElement(`span`);t.className=`rd-menu__glyph`,t.setAttribute(`aria-hidden`,`true`),t.innerHTML=r.glyph,e.prepend(t)}if(r.radio&&(e.setAttribute(`aria-checked`,String(!!r.checked)),r.checked)){let n=document.createElement(`span`);n.className=`rd-menu__check`,n.setAttribute(`aria-hidden`,`true`),n.innerHTML=t,e.append(n)}if(r.shortcut){let t=document.createElement(`kbd`);t.className=`rd-menu__key`,t.textContent=r.shortcut,e.append(t),e.setAttribute(`aria-keyshortcuts`,r.shortcut)}r.disabled&&r.reason&&(e.title=r.reason,e.setAttribute(`aria-description`,r.reason))}})}r();