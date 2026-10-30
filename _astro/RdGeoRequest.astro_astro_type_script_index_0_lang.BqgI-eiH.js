import{a as e,n as t,s as n,t as r}from"./typography.Dt-sBkj4.js";import{t as i}from"./a11y.CplpE3OP.js";import"./esa-select.CwOdHpSg.js";import"./esa-button-toggle.CDDK6uSC.js";import"./esa-date-picker.DS6Vpisy.js";import"./esa-text-field.BfcNHWlq.js";import"./esa-checkbox.CBhxiisB.js";import"./esa-switch-toggle.DG-fqCyQ.js";import{t as a}from"./announcer.CIJ7EDwk.js";import"./esa-textarea.CjH4Yiu4.js";import"./esa-combobox.DIyY5T7Y.js";import"./esa-radio-group.DMTCZvrP.js";import{Bn as o,Hn as s,Jn as c,Un as l,Yn as u,_ as d,a as f,f as p,h as m,p as h,qn as g,t as _}from"./dom.DMLMEtIU.js";import{C as v,E as y,b,d as x,h as S,l as C,m as w,o as T,u as E,x as D}from"./base.B9tQvAgQ.js";import{l as O,n as k,r as A,t as j}from"./geo-ui.C7_5Lhel.js";var M=class extends t{static formAssociated=!0;static properties={label:{type:String},accept:{type:String},multiple:{type:Boolean},maxSizeMb:{type:Number,attribute:`max-size-mb`},disabled:{type:Boolean,reflect:!0},name:{type:String,reflect:!0},_isDragging:{state:!0},_files:{state:!0},_error:{state:!0}};internals;constructor(){super(),this.label=`Upload files`,this.accept=``,this.multiple=!1,this.maxSizeMb=10,this.disabled=!1,this.name=`files`,this._isDragging=!1,this._files=[],this._error=``,this.internals=this.attachInternals()}updated(){this.toggleAttribute(`dragging`,this._isDragging)}syncFormValue(){let e=new FormData;for(let t of this._files)e.append(this.name,t,t.name);this.internals.setFormValue(this._files.length?e:null),this.dispatchEvent(new CustomEvent(`change`,{detail:{files:[...this._files]},bubbles:!0,composed:!0}))}openFileBrowser=()=>{this.disabled||this.renderRoot.querySelector(`.native`)?.click()};onFileSelected=e=>{let t=e.target;t.files&&this.processFiles(Array.from(t.files)),t.value=``};onDragOver=e=>{e.preventDefault(),e.stopPropagation(),this.disabled||(this._isDragging=!0)};onDragLeave=e=>{e.preventDefault(),e.stopPropagation(),this._isDragging=!1};onDrop=e=>{if(e.preventDefault(),e.stopPropagation(),this._isDragging=!1,this.disabled)return;let t=e.dataTransfer?.files;t&&this.processFiles(Array.from(t))};onZoneKeydown=e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.openFileBrowser())};removeFile(e){let t=this._files[e];this._files=this._files.filter((t,n)=>n!==e),this.syncFormValue(),t&&a(`${t.name} removed. ${this._files.length} remaining.`)}formatFileSize(e){return e<1024?e+` B`:e<1048576?(e/1024).toFixed(1)+` KB`:(e/1048576).toFixed(1)+` MB`}processFiles(e){this._error=``;let t=this.maxSizeMb*1024*1024,n=e.filter(e=>e.size>t);n.length>0&&(this._error=`File${n.length>1?`s`:``} exceed ${this.maxSizeMb} MB limit: ${n.map(e=>e.name).join(`, `)}`,a(this._error,{assertive:!0}),e=e.filter(e=>e.size<=t)),e.length!==0&&(this._files=this.multiple?[...this._files,...e]:[e[0]],this.syncFormValue(),a(`${e.length} file${e.length>1?`s`:``} added. ${this._files.length} total.`))}render(){return e`
      <input
        type="file"
        class="native"
        accept=${this.accept}
        ?multiple=${this.multiple}
        ?disabled=${this.disabled}
        @change=${this.onFileSelected}
      />

      <div
        class="zone"
        role="button"
        tabindex="0"
        aria-disabled=${this.disabled}
        @click=${this.openFileBrowser}
        @dragover=${this.onDragOver}
        @dragleave=${this.onDragLeave}
        @drop=${this.onDrop}
        @keydown=${this.onZoneKeydown}
      >
        ${this.uploadIcon()}
        <span class="zone__label typography-label-md">${this.label}</span>
        <span class="zone__hint typography-body-sm">Drag &amp; drop or <span class="browse">browse</span></span>
        ${this.maxSizeMb?e`<span class="zone__limit typography-body-sm">Max ${this.maxSizeMb} MB per file</span>`:null}
      </div>

      ${this._error?e`<div class="error typography-body-sm">${this._error}</div>`:null}

      ${this._files.length>0?e`<ul class="files">
            ${this._files.map((t,n)=>e`<li class="file">
                ${this.fileIcon()}
                <span class="file__name typography-microcopy-sm-subtle">${t.name}</span>
                <span class="file__size typography-microcopy-sm-subtle">${this.formatFileSize(t.size)}</span>
                <button
                  type="button"
                  class="file__remove"
                  aria-label=${`Remove `+t.name}
                  @click=${e=>{e.stopPropagation(),this.removeFile(n)}}
                >
                  ${this.xIcon()}
                </button>
              </li>`)}
          </ul>`:null}
    `}uploadIcon(){return e`<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" /></svg>`}fileIcon(){return e`<svg class="icon icon--sm" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>`}xIcon(){return e`<svg class="icon icon--sm" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>`}static styles=[r,i,n`
    :host {
      display: block;
    }
    .icon {
      width: var(--icon-size-md, 20px);
      height: var(--icon-size-md, 20px);
      flex-shrink: 0;
    }
    .icon--sm {
      width: var(--icon-size-sm, 16px);
      height: var(--icon-size-sm, 16px);
    }
    .icon--lg {
      width: var(--icon-size-lg, 24px);
      height: var(--icon-size-lg, 24px);
    }

    .native {
      display: none;
    }

    .zone {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(--spacing-100, 4px);
      padding: var(--spacing-600, 32px) var(--spacing-400, 16px);
      /* The colour half was wired from the start; the width was a bare 2px until
         2026-08-16, because no tier-2 width meant 2px (default is the 1px
         hairline, focus means the ring). That literal is why the kit could keep
         claiming no component needed an emphasis role — a hardcoded number does
         not show up in a survey of token reads, so the one border that wanted
         the role was the one border the survey could not see. */
      border: var(--border-width-emphasis, 2px) dashed var(--form-border-color, #cecece);
      border-radius: var(--radius-md, 0.5rem);
      background: var(--color-background-field, transparent);
      cursor: pointer;
      text-align: center;
      color: var(--color-content-default-secondary, #646464);
      transition:
        border-color var(--transition-fast, 150ms ease),
        background var(--transition-fast, 150ms ease),
        box-shadow var(--transition-fast, 150ms ease);
    }
    .zone:hover {
      border-color: var(--form-border-color-focus, #3e9b4f);
    }
    .zone:focus-visible {
      border-color: var(--form-border-color-focus, #3e9b4f);
      outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
      outline-offset: var(--focus-ring-offset, 2px);
    }

    :host([dragging]) .zone {
      border-color: var(--color-background-brand, #46a758);
      background: var(--color-background-overlay-active, rgba(0, 88, 98, 0.08));
      color: var(--color-content-brand, #2a7e3b);
    }
    /* DISABLED IS A TOKEN TREATMENT, not an opacity hack. Tier 2 already ships the
       whole triple — --color-background-disabled, --color-border-disabled,
       --color-content-disabled — and this is the state they exist for; two of the
       three had zero readers because the kit reached for opacity instead.
       The fill is also the one moment a field is deliberately NOT the colour of its
       container: the break from the surface IS the signal that it is inert. */
    :host([disabled]) .zone,
    :host([disabled]) .zone:hover {
      background: var(--color-background-disabled, #f0f0f0);
      border-color: var(--color-border-disabled, #d9d9d9);
      color: var(--color-content-disabled, #8d8d8d);
      cursor: not-allowed;
    }

    .zone__label {
      color: var(--color-content-default, #202020);
    }
    .zone__hint {
      color: var(--color-content-default-secondary, #646464);
    }
    .browse {
      color: var(--color-content-brand, #2a7e3b);
      text-decoration: underline;
    }
    .zone__limit {
      color: var(--color-content-default-secondary, #646464);
    }

    .error {
      margin-top: var(--spacing-100, 4px);
      color: var(--color-content-utility-danger, #ce2c31);
    }

    .files {
      list-style: none;
      margin: var(--spacing-200, 8px) 0 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: var(--spacing-100, 4px);
    }
    .file {
      display: flex;
      align-items: center;
      gap: var(--spacing-200, 8px);
      padding: var(--spacing-200, 8px) var(--spacing-300, 12px);
      background: var(--color-background-elevation-sunken, #f0f0f0);
      border-radius: var(--radius-sm, 0.25rem);
      color: var(--color-content-default-secondary, #646464);
    }
    .file__name {
      flex: 1;
      color: var(--color-content-default, #202020);
      /* clip/visible, not "overflow: hidden" — the span carries
         .typography-microcopy-sm-subtle, whose line-height "none" (1) makes the line
         box 1em against DM Sans's 1.30em glyph box, so hiding the Y axis slices the
         descenders off every g/j/p/q/y in a filename. Same fix and same reasoning as
         esa-file-list's .file__name, where it is written out in full. */
      overflow-x: clip;
      overflow-y: visible;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .file__size {
      color: var(--color-content-default-secondary, #646464);
      white-space: nowrap;
    }
    .file__remove {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      padding: 0;
      border: none;
      background: transparent;
      color: var(--color-content-default-secondary, #646464);
      border-radius: 50%;
      cursor: pointer;
      flex-shrink: 0;
      transition: background var(--transition-fast, 150ms ease);
    }
    .file__remove:hover {
      background: var(--color-border-default, #cecece);
      color: var(--color-content-utility-danger, #ce2c31);
    }
    .file__remove:focus-visible {
      outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
      outline-offset: 1px;
    }

    /* FORCED COLORS. The dropzone keeps its 2px dashed border, so unlike the
       other overlays it does not vanish. Two smaller losses:

       DRAGGING differs from idle only by border-COLOUR, which is precisely what
       gets overridden — the "you may drop here" feedback disappears at the moment
       it matters. border-STYLE is not force-adjusted, so switching dashed to
       solid restores the distinction using a channel the mode cannot touch.

       DISABLED is 'aria-disabled' on a div carrying role=button, so there is no
       GrayText for free; it is named here. (Tag syntax is spelled out rather
       than written literally: check-a11y's markup scanner reads comments too,
       and a literal tag in prose reads to it as a keyboard-unreachable role.) */
    @media (forced-colors: active) {
      :host([dragging]) .zone { border-style: solid; }
      :host([disabled]) .zone {
        border-color: GrayText;
        color: GrayText;
      }
    }
  `]};customElements.get(`esa-file-upload`)||customElements.define(`esa-file-upload`,M);var N=e=>_(e);function P(){let e=document.getElementById(`rd-geo-req`);if(!e)return;h();let t=D(o),n={practice:t.practice??`bio`,rel:`new`,products:[],other:!1,desc:``,hours:0,yours:0,fit:``,hard:!1,hardWhy:``},r=t=>e.querySelector(`[data-step="${t}"]`),i=e=>[`task`,`need`,`dates`,`data`].forEach(t=>r(t).toggleAttribute(`data-locked`,!e)),a=N(`rd-geo-region`);a.options=c.map(e=>({label:e.id,value:e.id})),a.value=t.region??`NW`;let M=N(`rd-geo-practice`);M.options=g.map(e=>({label:e.name,value:e.id})),M.value=n.practice,M.addEventListener(`change`,()=>{n.practice=M.value,n.products=[],B(),X()});let P=N(`rd-geo-d`);P.options=s.map(e=>({label:`${e.d} ${e.name}`,value:e.d})),P.addEventListener(`change`,()=>R(String(P.value||``)));let F=N(`rd-geo-rel`),I=N(`rd-geo-rel-to`);F.options=[{label:`New Work`,value:`new`},...Object.keys(u).map(e=>({label:`${u[e]} an Open Priority`,value:e}))],F.value=`new`,F.addEventListener(`change`,()=>{n.rel=F.value,I.hidden=n.rel===`new`,X()}),I.addEventListener(`change`,()=>{n.relTo=Number(I.value),X()});let L=N(`rd-geo-task`);L.addEventListener(`change`,()=>{n.task=String(L.value),X()});function R(t){let r=v(t);if(n.d=r?.d,_(`rd-geo-proj`).hidden=!r,!r){_(`rd-geo-open`).hidden=!0,i(!1),X();return}let a=(t,n)=>{e.querySelector(`[data-p="${t}"]`).textContent=n};a(`name`,r.name),a(`client`,r.client);let o=e.querySelector(`[data-p="pm"]`);f(o),o.append(k(r.pm),document.createTextNode(`${D(r.pm)?.name??``}, PM`)),a(`egnyte`,r.egnyte),e.querySelector(`[data-rd-copy]`).dataset.rdCopy=r.egnyte,a(`budget`,`${S(r.remaining)} left of ${S(r.budget)}`);let s=b(r.d);_(`rd-geo-open`).hidden=s.length===0,I.options=s.map(e=>({label:e.title,value:String(e.id)})),I.value=s[0]?String(s[0].id):``,n.relTo=s[0]?.id,z(),L.options=r.tasks.map(e=>{let t=e.gisHours==null?`no GIS allocation`:`${Math.max(e.gisHours-e.gisActual,0)} of ${e.gisHours} GIS hours left`;return{label:`${e.code} ${e.name}, ${t}`,value:e.code}});let c=r.tasks.find(e=>e.gisHours!=null);L.value=c?.code??``,n.task=c?.code,i(!0),B(),X()}function z(){let e=_(`rd-geo-open-list`);if(f(e),!n.d)return;let t=new Set(E(n.d,n.task,n.products).map(e=>e.id));for(let r of b(n.d))e.append(p(`li`,{"data-match":t.has(r.id)?``:void 0},k(r.lead??r.requester),p(`span`,{class:`rd-geo-open__title`,text:r.title}),j(O(r.status)),p(`span`,{class:`rd-geo-open__due`,text:r.neededBy?`Due ${w(r.neededBy)}`:``})))}function B(){let e=_(`rd-geo-products`);f(e),_(`rd-geo-menu-name`).textContent=`${g.find(e=>e.id===n.practice)?.name} Products`;for(let t of C(n.practice)){let r=p(`esa-checkbox`,{size:`sm`,label:t.name,"data-cat":t.id});r.checked=n.products.includes(t.id),r.addEventListener(`change`,()=>{n.products=r.checked?[...n.products,t.id]:n.products.filter(e=>e!==t.id),X()}),e.append(p(`li`,{},r,p(`span`,{class:`rd-geo-products__meta`,text:`${t.hours} hours`})))}let t=p(`esa-checkbox`,{size:`sm`,label:`Something Else`});t.checked=n.other,t.addEventListener(`change`,()=>{n.other=!!t.checked,_(`rd-geo-custom`).hidden=!n.other,X()}),e.append(p(`li`,{"data-other":``},t,p(`span`,{class:`rd-geo-products__meta`,id:`rd-geo-other-hours`}))),e.append(p(`li`,{"data-total":``},p(`span`,{text:`Menu Total`}),p(`span`,{class:`rd-geo-products__total`,id:`rd-geo-menu-total`})))}let V=N(`rd-geo-desc`);V.addEventListener(`input`,()=>{n.desc=String(V.value??``),X()});let H=N(`rd-geo-hours`);H.addEventListener(`input`,()=>{n.hours=Number(String(H.value??``).replace(/[^\d.]/g,``))||0,X()});let U=N(`rd-geo-yours`);U.addEventListener(`input`,()=>{n.yours=Number(String(U.value??``).replace(/[^\d.]/g,``))||0,X()});let W=N(`rd-geo-fit`);W.addEventListener(`input`,()=>{n.fit=String(W.value??``)}),_(`rd-geo-dup-rev`).addEventListener(`click`,()=>{let e=n.d&&E(n.d,n.task,n.products)[0];e&&(n.rel=`revision`,n.relTo=e.id,F.value=`revision`,I.hidden=!1,I.value=String(e.id),X())});let G=N(`rd-geo-due`);G.addEventListener(`change`,()=>{n.due=String(G.value||``)||void 0,X()});let K=N(`rd-geo-hard`),q=N(`rd-geo-hard-why`);K.addEventListener(`change`,()=>{n.hard=!!K.checked,q.hidden=!n.hard,X()}),q.addEventListener(`input`,()=>{n.hardWhy=String(q.value??``),X()});let J=e.querySelector(`.rd-geo-card`),Y=()=>{let e=C(n.practice).filter(e=>n.products.includes(e.id));return{items:e,hours:e.reduce((e,t)=>e+t.hours,0)+(n.other?n.hours:0),days:e.reduce((e,t)=>Math.max(e,t.days),0)}};function X(){let e=n.d?v(n.d):void 0,r=Y(),i=n.rel!==`new`&&n.relTo?x(n.relTo):void 0,a=r.items.map(e=>e.name);n.other&&n.desc.trim()&&a.push(n.desc.trim().split(/[.\n]/)[0]);let o=n.rel===`revision`&&i?`${i.title}, Revision`:a.length?a[0]+(a.length>1?` and ${a.length-1} More`:``):`New Priority`;_(`rd-geo-menu-total`).textContent=`${r.hours} hours`,_(`rd-geo-other-hours`).textContent=n.other&&n.hours?`${n.hours} hours`:``;let s=n.yours||r.hours,c=n.yours&&r.hours&&(n.yours/r.hours>2||n.yours/r.hours<.5);_(`rd-geo-field`).hidden=!r.items.some(e=>e.field);let u=y({neededBy:n.due,hardDeadline:n.hard?n.hardWhy||`yes`:void 0}),d=[];u===`overdue`&&d.push({label:`Overdue`,variant:`danger`}),u===`hot`&&d.push({label:`Urgent`,variant:`warning`}),u===`soon`&&d.push({label:`Soon`,variant:`neutral`}),c&&d.push({label:`Talk to the Requester`,variant:`info`,title:`Your estimate ${n.yours} hours, menu ${r.hours} hours`}),A(J,{title:o,project:e?e.name:t.name,people:[t.id],due:n.due?`Due ${w(n.due)}`:``,hours:s?`${s} hours`:``,horizon:s?s<=8?`Short`:`Medium`:``,indicators:d});let f=_(`rd-geo-est`),p=e?.tasks.find(e=>e.code===n.task);f.hidden=!r.hours&&!n.yours&&!p;let m=(e,t)=>{f.querySelector(`[data-e="${e}"]`).textContent=t,f.querySelector(`[data-e="${e}"]`).parentElement.hidden=!t};m(`hours`,r.hours?`${r.hours} hours`:``),m(`yours`,n.yours?`${n.yours} hours`:``);let h=r.days?T(l,r.days):``;m(`turn`,h?w(h):``),m(`task`,p?`${p.code} ${p.name}`:``),G.helpText=h?`Standard turnaround: ${w(h)}`:``;let g=n.d?E(n.d,n.task,n.products).filter(e=>n.rel!==`revision`||n.relTo!==e.id):[];if(_(`rd-geo-dup`).hidden=g.length===0,g[0]){let e=g[0];_(`rd-geo-dup-text`).textContent=`${e.title} is ${O(e.status)} on this project, led by ${D(e.lead)?.name??`the GIS team`}${e.neededBy?`, due ${w(e.neededBy)}`:``}.`}z();let b=!!(n.d&&n.task&&(r.items.length||n.other&&n.desc.trim()&&n.hours)&&n.due);Q(b)}let Z=_(`rd-geo-submit`),Q=e=>d(Z,!e);m(Z).addEventListener(`click`,t=>{t.preventDefault(),_(`rd-geo-status`).textContent=`Submitted, #522`,_(`rd-geo-done`).hidden=!1,e.querySelector(`form`).setAttribute(`inert`,``)}),B(),X(),new URLSearchParams(location.search).get(`demo`)===`dup`&&customElements.whenDefined(`esa-combobox`).then(()=>requestAnimationFrame(()=>{P.value=`D202500432.00`,R(`D202500432.00`),n.products=[`bio-monitoring`],B(),G.value=`2026-11-13`,n.due=`2026-11-13`,X()}))}P();