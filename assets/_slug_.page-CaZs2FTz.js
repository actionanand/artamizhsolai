import{ɵ as v,C as w,N as U,R as T,e as d,j as _,a as s,b as r,c as a,f as I,l,h as o,k as b,m as Y,n as V,r as u,z as F,t as W,u as Q,v as J,s as P,p as m,x as p,B as X,D as $,E as q,i as K,d as O,P as nn,F as tn,G as en,H as on,I as k,J as E,K as sn,L as an,M as rn,y as N,o as ln,O as cn,Q as gn,g as dn}from"./index-C3nhz1DW.js";import{p as _n}from"./pagination-config-BIRU8DJ8.js";function un(t){const e=[],n=/<h([1-4])[^>]*?(?:id=\"([^\"]*)\")?[^>]*>([\s\S]*?)<\/h\1>/gi;let i;for(;(i=n.exec(t))!==null;){const c=parseInt(i[1],10),g=i[2]||mn(z(i[3])),M=pn(z(i[3]).trim());e.push({level:c,text:M,id:g})}return e}function z(t){return t.replace(/<[^>]*>/g,"")}function mn(t){return t.toLowerCase().replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-").replace(/-+/g,"-")}function pn(t){return t.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'")}const Mn=()=>[],fn=(t,e)=>e.id;function xn(t,e){if(t&1){const n=Y();s(0,"li",4)(1,"a",5),V("click",function(){const c=Q(n).$implicit,g=l(2);return J(g.scrollToElement(c.id))}),r(2),a()()}if(t&2){const n=e.$implicit;u("ngClass","toc__item--level-"+n.level),o(),u("routerLink",F(4,Mn))("fragment",n.id),o(),W(" ",n.text," ")}}function Cn(t,e){if(t&1&&(s(0,"aside",0)(1,"nav",1)(2,"h3",2),r(3,"Table of Contents"),a(),s(4,"ul",3),I(5,xn,3,5,"li",4,fn),a()()()),t&2){const n=l();o(5),b(n.headings)}}const f=class f{constructor(){this.headings=[]}scrollToElement(e){setTimeout(()=>{const n=document.getElementById(e);n&&n.scrollIntoView({behavior:"smooth",block:"start"})},0)}};f.ɵfac=function(n){return new(n||f)},f.ɵcmp=v({type:f,selectors:[["app-table-of-contents"]],inputs:{headings:"headings"},decls:1,vars:1,consts:[[1,"toc"],[1,"toc__nav"],[1,"toc__title"],[1,"toc__list"],[1,"toc__item",3,"ngClass"],[1,"toc__link",3,"click","routerLink","fragment"]],template:function(n,i){n&1&&d(0,Cn,7,0,"aside",0),n&2&&_(i.headings.length>0?0:-1)},dependencies:[w,U,T],styles:[`.toc[_ngcontent-%COMP%] {
      position: sticky;
      top: 100px;
      background-color: #f8f9fa;
      border: 1px solid #dee2e6;
      border-radius: 8px;
      padding: 1rem;
      width: fit-content;
      min-width: 180px;
      max-width: 250px;
      max-height: 70vh;
      overflow-y: auto;
    }

    .toc__nav[_ngcontent-%COMP%] {
      display: flex;
      flex-direction: column;
    }

    .toc__title[_ngcontent-%COMP%] {
      font-size: 1rem;
      font-weight: 600;
      margin: 0 0 1rem 0;
      color: #212529;
    }

    .toc__list[_ngcontent-%COMP%] {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .toc__item[_ngcontent-%COMP%] {
      margin: 0.5rem 0;
    }

    .toc__item--level-2[_ngcontent-%COMP%] {
      margin-left: 0;
    }

    .toc__item--level-3[_ngcontent-%COMP%] {
      margin-left: 1.5rem;
    }

    .toc__item--level-4[_ngcontent-%COMP%] {
      margin-left: 3rem;
    }

    .toc__link[_ngcontent-%COMP%] {
      color: #495057;
      text-decoration: none;
      font-size: 0.95rem;
      transition: color 0.2s ease;
      display: block;
      padding: 0.25rem 0;
    }

    .toc__link[_ngcontent-%COMP%]:hover {
      color: #0d6efd;
    }

    @media (max-width: 1024px) {
      .toc[_ngcontent-%COMP%] {
        display: none;
      }
    }`]});let L=f;const Z=t=>["/blog",t];function hn(t,e){if(t&1&&(s(0,"a",1)(1,"span",4),r(2,"← Previous"),a(),s(3,"span",5),r(4),a()()),t&2){const n=l();u("routerLink",P(2,Z,n.previousPost.attributes.slug)),o(4),m(n.previousPost.attributes.title)}}function In(t,e){t&1&&p(0,"div",2)}function bn(t,e){if(t&1&&(s(0,"a",3)(1,"span",4),r(2,"Next →"),a(),s(3,"span",5),r(4),a()()),t&2){const n=l();u("routerLink",P(2,Z,n.nextPost.attributes.slug)),o(4),m(n.nextPost.attributes.title)}}function Pn(t,e){t&1&&p(0,"div",2)}const x=class x{constructor(){this.previousPost=null,this.nextPost=null}};x.ɵfac=function(n){return new(n||x)},x.ɵcmp=v({type:x,selectors:[["app-post-navigation"]],inputs:{previousPost:"previousPost",nextPost:"nextPost"},decls:5,vars:2,consts:[[1,"post-nav"],[1,"post-nav__link","post-nav__link--prev",3,"routerLink"],[1,"post-nav__placeholder"],[1,"post-nav__link","post-nav__link--next",3,"routerLink"],[1,"post-nav__label"],[1,"post-nav__title"]],template:function(n,i){n&1&&(s(0,"nav",0),d(1,hn,5,4,"a",1)(2,In,1,0,"div",2),d(3,bn,5,4,"a",3)(4,Pn,1,0,"div",2),a()),n&2&&(o(),_(i.previousPost?1:2),o(2),_(i.nextPost?3:4))},dependencies:[T,w],styles:[`.post-nav[_ngcontent-%COMP%] {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      margin: 4rem 0 2rem 0;
      padding-top: 2rem;
      border-top: 1px solid #dee2e6;
    }

    .post-nav__link[_ngcontent-%COMP%] {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding: 1.5rem;
      background: linear-gradient(135deg, #f0f5ff 0%, #ffffff 100%);
      border: 1px solid #dee2e6;
      border-radius: 8px;
      text-decoration: none;
      color: inherit;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .post-nav__link[_ngcontent-%COMP%]:hover {
      border-color: #0d6efd;
      background: linear-gradient(135deg, #e7f0ff 0%, #f0f5ff 100%);
      box-shadow: 0 6px 16px rgba(13, 110, 253, 0.2);
      transform: translateY(-2px);
    }

    .post-nav__link--prev[_ngcontent-%COMP%] {
      text-align: left;
    }

    .post-nav__link--next[_ngcontent-%COMP%] {
      text-align: right;
    }

    .post-nav__label[_ngcontent-%COMP%] {
      font-size: 0.8rem;
      color: #6c757d;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .post-nav__title[_ngcontent-%COMP%] {
      font-weight: 700;
      color: #0d6efd;
      line-height: 1.4;
      font-size: 1.1rem;
    }

    .post-nav__placeholder[_ngcontent-%COMP%] {
      opacity: 0;
    }

    @media (max-width: 640px) {
      .post-nav[_ngcontent-%COMP%] {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .post-nav__link--next[_ngcontent-%COMP%] {
        text-align: left;
      }
    }`]});let y=x;const Ln={tip:"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHN0eWxlPi5jbHMtMSwuY2xzLTJ7ZmlsbDpub25lO3N0cm9rZTojMDgzMmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LmNscy0xe3N0cm9rZS13aWR0aDoycHg7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT48L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI0LDEzLjFhOCw4LDAsMSwwLTEzLjYsNS43QTUuMDcsNS4wNywwLDAsMSwxMiwyMi40VjIzaDh2LS41M2E1LjIzLDUuMjMsMCwwLDEsMS42My0zLjY5QTgsOCwwLDAsMCwyNCwxMy4xWiI+PC9wYXRoPjxsaW5lIGNsYXNzPSJjbHMtMSIgeDE9IjEyIiB4Mj0iMjAiIHkxPSIyNiIgeTI9IjI2Ij48L2xpbmU+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMTMiIHgyPSIxOSIgeTE9IjI3IiB5Mj0iMjciPjwvbGluZT48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIxNiIgeDI9IjE2IiB5MT0iMjgiIHkyPSIyNyI+PC9saW5lPjxwb2x5bGluZSBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMTYgMTIuNDIgMTUgMTUuMjUgMTcgMTUuMjUgMTYgMTguMTciPjwvcG9seWxpbmU+PC9zdmc+",warning:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiPg0KICA8cGF0aCBzdHJva2U9IiM1MzUzNTgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTUuMTIgNC42MjNhMSAxIDAgMDExLjc2IDBsMTEuMzIgMjAuOUExIDEgMCAwMTI3LjMyMSAyN0g0LjY3OWExIDEgMCAwMS0uODgtMS40NzZsMTEuMzIyLTIwLjl6TTE2IDE4di02Ii8+DQogIDxwYXRoIGZpbGw9IiM1MzUzNTgiIGQ9Ik0xNy41IDIyLjVhMS41IDEuNSAwIDExLTMgMCAxLjUgMS41IDAgMDEzIDB6Ii8+DQo8L3N2Zz4=",danger:"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE3LjY2IDExLjJjLS4yMy0uMy0uNTEtLjU2LS43Ny0uODItLjY3LS42LTEuNDMtMS4wMy0yLjA3LTEuNjZDMTMuMzMgNy4yNiAxMyA0Ljg1IDEzLjk1IDNjLS45NS4yMy0xLjc4Ljc1LTIuNDkgMS4zMi0yLjU5IDIuMDgtMy42MSA1Ljc1LTIuMzkgOC45LjA0LjEuMDguMi4wOC4zMyAwIC4yMi0uMTUuNDItLjM1LjUtLjIzLjEtLjQ3LjA0LS42Ni0uMTJhLjU4LjU4IDAgMCAxLS4xNC0uMTdjLTEuMTMtMS40My0xLjMxLTMuNDgtLjU1LTUuMTJDNS43OCAxMCA0Ljg3IDEyLjMgNSAxNC40N2MuMDYuNS4xMiAxIC4yOSAxLjUuMTQuNi40MSAxLjIuNzEgMS43MyAxLjA4IDEuNzMgMi45NSAyLjk3IDQuOTYgMy4yMiAyLjE0LjI3IDQuNDMtLjEyIDYuMDctMS42IDEuODMtMS42NiAyLjQ3LTQuMzIgMS41My02LjZsLS4xMy0uMjZjLS4yMS0uNDYtLjc3LTEuMjYtLjc3LTEuMjZtLTMuMTYgNi4zYy0uMjguMjQtLjc0LjUtMS4xLjYtMS4xMi40LTIuMjQtLjE2LTIuOS0uODIgMS4xOS0uMjggMS45LTEuMTYgMi4xMS0yLjA1LjE3LS44LS4xNS0xLjQ2LS4yOC0yLjIzLS4xMi0uNzQtLjEtMS4zNy4xNy0yLjA2LjE5LjM4LjM5Ljc2LjYzIDEuMDYuNzcgMSAxLjk4IDEuNDQgMi4yNCAyLjguMDQuMTQuMDYuMjguMDYuNDMuMDMuODItLjMzIDEuNzItLjkzIDIuMjd6Ii8+PC9zdmc+",info:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE2MCIgd2lkdGg9IjE2MCIgdmVyc2lvbj0iMS4wIj4KIDxnIGZpbGw9IiM0YjRiNGIiPgogIDxwYXRoIGQ9Im04MCAxNWMtMzUuODggMC02NSAyOS4xMi02NSA2NXMyOS4xMiA2NSA2NSA2NSA2NS0yOS4xMiA2NS02NS0yOS4xMi02NS02NS02NXptMCAxMGMzMC4zNiAwIDU1IDI0LjY0IDU1IDU1cy0yNC42NCA1NS01NSA1NS01NS0yNC42NC01NS01NSAyNC42NC01NSA1NS01NXoiLz4KICA8cGF0aCBkPSJtNTcuMzczIDE4LjIzMWE5LjM4MzQgOS4xMTUzIDAgMSAxIC0xOC43NjcgMCA5LjM4MzQgOS4xMTUzIDAgMSAxIDE4Ljc2NyAweiIgdHJhbnNmb3JtPSJtYXRyaXgoMS4xOTg5IDAgMCAxLjIzNDIgMjEuMjE0IDI4Ljc1KSIvPgogIDxwYXRoIGQ9Im05MC42NjUgMTEwLjk2Yy0wLjA2OSAyLjczIDEuMjExIDMuNSA0LjMyNyAzLjgybDUuMDA4IDAuMXY1LjEyaC0zOS4wNzN2LTUuMTJsNS41MDMtMC4xYzMuMjkxLTAuMSA0LjA4Mi0xLjM4IDQuMzI3LTMuODJ2LTMwLjgxM2MwLjAzNS00Ljg3OS02LjI5Ni00LjExMy0xMC43NTctMy45Njh2LTUuMDc0bDMwLjY2NS0xLjEwNSIvPgogPC9nPgo8L3N2Zz4K",note:"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzM4M2Q0MSIgZD0iTTMgMTcuMjVWMjFoMy43NUwxNy44MSA5Ljk0bC0zLjc1LTMuNzVMMy4wMiAxNy4yNXptMTcuNzEtMTAuMjFjLjM5LS4zOS4zOS0xLjAyIDAtMS40MWwtMi4zNC0yLjM0Yy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMGwtMS44MyAxLjgzIDMuNzUgMy43NSAxLjgzLTEuODN6Ii8+PC9zdmc+",success:"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzBmNTEzMiIgZD0iTTkgMTYuMTdMNC44MyAxMmwtMS40MiAxLjQxTDkgMTkgMjEgN2wtMS40MS0xLjQxTDkgMTYuMTd6Ii8+PC9zdmc+",caution:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiPg0KICA8cGF0aCBzdHJva2U9IiM1MzUzNTgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTUuMTIgNC42MjNhMSAxIDAgMDExLjc2IDBsMTEuMzIgMjAuOUExIDEgMCAwMTI3LjMyMSAyN0g0LjY3OWExIDEgMCAwMS0uODgtMS40NzZsMTEuMzIyLTIwLjl6TTE2IDE4di02Ii8+DQogIDxwYXRoIGZpbGw9IiM1MzUzNTgiIGQ9Ik0xNy41IDIyLjVhMS41IDEuNSAwIDExLTMgMCAxLjUgMS41IDAgMDEzIDB6Ii8+DQo8L3N2Zz4="};function yn(t){const e=/:::(\w+)(?:\[(.*?)\])?\s*\n([\s\S]*?)\n:::/g;return t.replace(e,(n,i,c,g)=>{if(i=i.toLowerCase(),!["tip","warning","danger","info","note","collapse","success","caution"].includes(i))return n;const D=c||{tip:"Tip",warning:"Warning",danger:"Danger",info:"Info",note:"Note",success:"Success",caution:"Caution",collapse:"Details"}[i],G=i==="collapse",S=g.trim(),R=Ln[i]||"";return G?`<details class="admonition admonition--collapse">
<summary class="admonition__title">
<span class="admonition__icon"></span>
${D}
</summary>
<div class="admonition__content">

${S}

</div>
</details>`:`<div class="admonition admonition--${i}">
<div class="admonition__title">
<img class="admonition__icon" src="${R}" alt="${i}" />
${D}
</div>
<div class="admonition__content">

${S}

</div>
</div>`})}const C=class C{transform(e){return e&&typeof e=="string"?yn(e):""}};C.ɵfac=function(n){return new(n||C)},C.ɵpipe=X({name:"admonitionTransform",type:C,pure:!0});let j=C;const jn=["contentRef"],B=t=>["/blog",t],H=(t,e)=>e.attributes.slug;function vn(t,e){if(t&1&&(s(0,"p",4),r(1),a()),t&2){const n=l();o(),m(n.attributes.date)}}function wn(t,e){t&1&&(s(0,"span",6),r(1,"📝 Draft"),a())}function Tn(t,e){t&1&&(s(0,"span",7),r(1,"📌 Pinned"),a())}function Nn(t,e){if(t&1&&(s(0,"span",20),r(1),a()),t&2){const n=e.$implicit;o(),m(n)}}function Dn(t,e){if(t&1&&I(0,Nn,2,1,"span",20,dn),t&2){const n=l();b(n.attributes.tags)}}function Sn(t,e){if(t&1&&p(0,"app-table-of-contents",12),t&2){const n=l(2);u("headings",n.headings)}}function On(t,e){if(t&1&&(s(0,"section",15)(1,"div",21),cn(),s(2,"svg",22),p(3,"circle",23)(4,"line",24)(5,"circle",25),a(),gn(),s(6,"h4"),r(7,"Disclaimer"),a()(),s(8,"p"),r(9),a()()),t&2){const n=l(2);o(9),m(n.disclaimerText)}}function zn(t,e){if(t&1&&p(0,"img",28),t&2){const n=l().$implicit,i=l(3);u("src",n.attributes.coverImage||i.defaultCoverImage,N)("alt",n.attributes.title)}}function An(t,e){if(t&1&&(s(0,"span",31),r(1),a()),t&2){const n=l().$implicit;o(),m(n.attributes.date)}}function kn(t,e){if(t&1&&(s(0,"li",27),d(1,zn,1,2,"img",28),s(2,"div",29)(3,"a",30),r(4),a(),d(5,An,2,1,"span",31),a()()),t&2){const n=e.$implicit,i=l(3);o(),_(n.attributes.coverImage||i.defaultCoverImage?1:-1),o(2),u("routerLink",P(4,B,n.attributes.slug)),o(),m(n.attributes.title),o(),_(n.attributes.date?5:-1)}}function En(t,e){if(t&1&&(s(0,"div",17)(1,"h3"),r(2,"Related Posts"),a(),s(3,"ul",26),I(4,kn,6,6,"li",27,H),a()()),t&2){const n=l(2);o(4),b(n.relatedPosts)}}function Zn(t,e){if(t&1&&p(0,"img",28),t&2){const n=l(2).$implicit,i=l(3);u("src",n.attributes.coverImage||i.defaultCoverImage,N)("alt",n.attributes.title)}}function Bn(t,e){if(t&1&&(s(0,"span",31),r(1),a()),t&2){const n=l(2).$implicit;o(),m(n.attributes.date)}}function Hn(t,e){if(t&1&&(s(0,"li",27),d(1,Zn,1,2,"img",28),s(2,"div",29)(3,"a",30),r(4),a(),d(5,Bn,2,1,"span",31),a()()),t&2){const n=l().$implicit,i=l(3);o(),_(n.attributes.coverImage||i.defaultCoverImage?1:-1),o(2),u("routerLink",P(4,B,n.attributes.slug)),o(),m(n.attributes.title),o(),_(n.attributes.date?5:-1)}}function Gn(t,e){if(t&1&&d(0,Hn,6,6,"li",27),t&2){const n=e.$implicit,i=l(3);_(n.attributes.slug!==i.currentSlug?0:-1)}}function Rn(t,e){if(t&1&&(s(0,"div",18)(1,"h3"),r(2,"Recent Posts"),a(),s(3,"ul",26),I(4,Gn,1,1,null,null,H),a()()),t&2){const n=l(2);o(4),b(n.recentPosts)}}function Un(t,e){if(t&1&&(s(0,"article",1)(1,"header",2)(2,"h1",3),r(3),a(),d(4,vn,2,1,"p",4),s(5,"div",5),d(6,wn,2,0,"span",6),d(7,Tn,2,0,"span",7),s(8,"span",8),r(9),a(),d(10,Dn,2,0),a(),s(11,"p",9),r(12),a()(),p(13,"img",10),s(14,"div",11),d(15,Sn,1,1,"app-table-of-contents",12),s(16,"div",13,0),p(18,"analog-markdown",14),k(19,"admonitionTransform"),a()(),d(20,On,10,1,"section",15),s(21,"section",16),d(22,En,6,0,"div",17)(23,Rn,6,0,"div",18),a(),p(24,"app-post-navigation",19),a()),t&2){const n=e,i=l();o(3),m(n.attributes.title),o(),_(n.attributes.date?4:-1),o(2),_(n.attributes.isDraft?6:-1),o(),_(n.attributes.isPinned?7:-1),o(2),m(n.attributes.category||"uncategorized"),o(),_(n.attributes.tags&&n.attributes.tags.length>0?10:-1),o(2),m(n.attributes.description),o(),u("src",n.attributes.coverImage||i.defaultCoverImage,N)("alt",n.attributes.title),o(),ln("blog-post__container--no-toc",!i.showToc),o(),_(i.showToc&&i.headings.length>0?15:-1),o(3),u("content",E(19,17,n.content)),o(2),_(i.showDisclaimer?20:-1),o(2),_(i.relatedPosts.length>0?22:23),o(2),u("previousPost",i.previousPost)("nextPost",i.nextPost)}}const h=class h{constructor(e,n){this.cdr=n,this.post$=$("slug"),this.defaultCoverImage="tamil-literature-default.svg",this.allPosts=[],this.headings=[],this.relatedPosts=[],this.recentPosts=[],this.previousPost=null,this.nextPost=null,this.currentSlug="",this.showToc=!0,this.showDisclaimer=!0,this.disclaimerText="The views expressed are personal and for informational purposes only.",this.hasExtractedHeadings=!1,this.isBrowser=q(e);const c=K().filter(g=>!g.attributes.isDraft);this.allPosts=c.sort((g,M)=>g.attributes.isPinned&&!M.attributes.isPinned?-1:!g.attributes.isPinned&&M.attributes.isPinned?1:new Date(M.attributes.date||"").getTime()-new Date(g.attributes.date||"").getTime())}ngOnInit(){this.post$.subscribe(e=>{e&&(this.currentSlug=e.attributes.slug,this.showToc=e.attributes.toc!==!1,this.showDisclaimer=e.attributes.disclaimerEnabled!==!1,this.disclaimerText=e.attributes.disclaimerText||this.disclaimerText,this.updateNavigation(),this.updateRelatedPosts(e.attributes.relatedPosts),this.recentPosts=this.allPosts.slice(0,_n.articleRecentPostsCount+1),this.headings=[],this.hasExtractedHeadings=!1)})}ngAfterViewInit(){this.updateContentHeadings(),this.isBrowser&&this.initObserver()}ngAfterViewChecked(){!this.hasExtractedHeadings&&this.contentRef?.nativeElement&&this.isBrowser&&this.contentRef.nativeElement.querySelectorAll("h1, h2, h3, h4").length>0&&this.headings.length===0&&setTimeout(()=>{this.updateContentHeadings(),this.cdr.detectChanges()},0)}ngOnDestroy(){this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0)}updateContentHeadings(){if(!this.isBrowser||!this.contentRef?.nativeElement)return;const e=this.contentRef.nativeElement,n=e.querySelectorAll("h1, h2, h3, h4");if(n.length===0)return;n.forEach(g=>{if(!g.id){const M=g.textContent||"";g.id=this.slugify(M)}});const i=e.innerHTML,c=un(i);c.length>0&&!this.hasExtractedHeadings&&(this.headings=c,this.hasExtractedHeadings=!0)}initObserver(){this.isBrowser&&this.contentRef?.nativeElement&&(this.mutationObserver||(this.mutationObserver=new MutationObserver(()=>{this.updateContentHeadings()}),this.mutationObserver.observe(this.contentRef.nativeElement,{childList:!0,subtree:!0,characterData:!0})))}slugify(e){return e.toLowerCase().replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-").replace(/-+/g,"-")}updateNavigation(){const e=this.allPosts.findIndex(n=>n.attributes.slug===this.currentSlug);e>0?this.previousPost=this.allPosts[e-1]:this.previousPost=null,e<this.allPosts.length-1?this.nextPost=this.allPosts[e+1]:this.nextPost=null}updateRelatedPosts(e){if(this.relatedPosts=[],!e||e.length===0)return;e.slice(0,5).forEach(i=>{const c=this.allPosts.find(g=>g.attributes.slug===i);c&&this.relatedPosts.push(c)})}};h.ɵfac=function(n){return new(n||h)(O(nn),O(tn))},h.ɵcmp=v({type:h,selectors:[["app-blog-post"]],viewQuery:function(n,i){if(n&1&&sn(jn,5),n&2){let c;an(c=rn())&&(i.contentRef=c.first)}},decls:2,vars:3,consts:[["contentRef",""],[1,"blog-post"],[1,"blog-post__header"],[1,"blog-post__title"],[1,"blog-post__date"],[1,"blog-post__meta"],[1,"post-meta-tag","draft-tag"],[1,"post-meta-tag","pinned-tag"],[1,"post-meta-tag","category-tag"],[1,"blog-post__description"],[1,"blog-post__image",3,"src","alt"],[1,"blog-post__container"],[1,"blog-post__toc",3,"headings"],[1,"blog-post__content"],[3,"content"],[1,"blog-post__disclaimer"],[1,"blog-post__related"],[1,"related-posts"],[1,"recent-posts"],[3,"previousPost","nextPost"],[1,"post-meta-tag","tag-tag"],[1,"disclaimer-header"],["viewBox","0 0 24 24","fill","currentColor",1,"disclaimer-icon"],["cx","12","cy","12","r","10","fill","none","stroke","currentColor","stroke-width","2"],["x1","12","y1","8","x2","12","y2","12","stroke","currentColor","stroke-width","2","stroke-linecap","round"],["cx","12","cy","16","r","0.5","fill","currentColor"],[1,"posts-list"],[1,"post-item"],[1,"post-thumbnail",3,"src","alt"],[1,"post-info"],[1,"post-link",3,"routerLink"],[1,"post-date"]],template:function(n,i){if(n&1&&(d(0,Un,25,19,"article",1),k(1,"async")),n&2){let c;_((c=E(1,1,i.post$))?0:-1,c)}},dependencies:[w,T,en,L,y,on,j],styles:[`.blog-post[_ngcontent-%COMP%] {
      max-width: 900px;
      margin: 0 auto;
    }

    .blog-post__header[_ngcontent-%COMP%] {
      margin-bottom: 2rem;
      text-align: center;
    }

    .blog-post__title[_ngcontent-%COMP%] {
      font-size: 2.5rem;
      margin: 0 0 1rem 0;
      line-height: 1.2;
      color: #212529;
    }

    .blog-post__date[_ngcontent-%COMP%] {
      font-size: 0.95rem;
      color: #6c757d;
      margin: 0 0 0.5rem 0;
    }

    .blog-post__description[_ngcontent-%COMP%] {
      font-size: 1.125rem;
      color: #495057;
      margin: 0;
      line-height: 1.6;
    }

    .blog-post__meta[_ngcontent-%COMP%] {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 0.75rem 0;
    }

    .post-meta-tag[_ngcontent-%COMP%] {
      display: inline-block;
      font-size: 0.75rem;
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-weight: 500;
    }

    .category-tag[_ngcontent-%COMP%] {
      background: #e3f2fd;
      color: #1976d2;
      border: 1px solid #1976d2;
    }

    .tag-tag[_ngcontent-%COMP%] {
      background: #f3e5f5;
      color: #7b1fa2;
      border: 1px solid #7b1fa2;
    }

    .pinned-tag[_ngcontent-%COMP%] {
      background: #fff3cd;
      color: #664d03;
      border: 1px solid #ffecb5;
      font-weight: 600;
    }

    .draft-tag[_ngcontent-%COMP%] {
      background: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
      font-weight: 600;
    }

    .blog-post__image[_ngcontent-%COMP%] {
      width: 100%;
      height: auto;
      max-height: 500px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 3rem;
      display: block;
    }

    .blog-post__container[_ngcontent-%COMP%] {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 2rem;
      margin-bottom: 1.5rem;
    }

    .blog-post__container--no-toc[_ngcontent-%COMP%] {
      grid-template-columns: 1fr;
    }

    .blog-post__toc[_ngcontent-%COMP%] {
      order: -1;
    }

    .blog-post__content[_ngcontent-%COMP%] {
      font-size: 1.05rem;
      line-height: 1.8;
      color: #333;
    }

    .blog-post__container--no-toc[_ngcontent-%COMP%]   .blog-post__content[_ngcontent-%COMP%] {
      grid-column: 1;
    }

    .blog-post__sidebar[_ngcontent-%COMP%] {
      margin-top: 2rem;
    }

    .blog-post__disclaimer[_ngcontent-%COMP%] {
      margin: 2rem 0;
      padding: 1.25rem;
      background: linear-gradient(135deg, #f5f5f5 0%, #fafafa 100%);
      border-left: 4px solid #9e9e9e;
      border-radius: 6px;
      color: #424242;
      position: relative;
      transform: translateX(-8px);
      box-shadow: -4px 4px 12px rgba(158, 158, 158, 0.1);
    }

    .disclaimer-header[_ngcontent-%COMP%] {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.75rem;
    }

    .disclaimer-icon[_ngcontent-%COMP%] {
      width: 20px;
      height: 20px;
      color: #9e9e9e;
      flex-shrink: 0;
    }

    .blog-post__disclaimer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
      margin: 0;
      font-size: 1rem;
      font-weight: 600;
      color: #9e9e9e;
    }

    .blog-post__disclaimer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
      margin: 0;
      font-size: 0.95rem;
      line-height: 1.6;
      color: #616161;
    }

    .blog-post__related[_ngcontent-%COMP%] {
      margin: 3rem 0 2rem 0;
    }

    .related-posts[_ngcontent-%COMP%], 
   .recent-posts[_ngcontent-%COMP%] {
      padding: 1.5rem 0;
    }

    .related-posts[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
   .recent-posts[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
      font-size: 1.25rem;
      margin: 0 0 1.5rem 0;
      color: #212529;
      border-bottom: 2px solid #0d6efd;
      padding-bottom: 0.75rem;
    }

    .posts-list[_ngcontent-%COMP%] {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }

    .post-item[_ngcontent-%COMP%] {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding: 1rem;
      background: #f8f9fa;
      border: 1px solid #dee2e6;
      border-radius: 8px;
      transition: all 0.3s ease;
    }

    .post-item[_ngcontent-%COMP%]:hover {
      border-color: #0d6efd;
      box-shadow: 0 4px 12px rgba(13, 110, 253, 0.1);
    }

    .post-thumbnail[_ngcontent-%COMP%] {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-radius: 6px;
      border: 1px solid #dee2e6;
    }

    .post-info[_ngcontent-%COMP%] {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      flex: 1;
    }

    .post-link[_ngcontent-%COMP%] {
      color: #0d6efd;
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.4;
      transition: color 0.2s ease;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .post-link[_ngcontent-%COMP%]:hover {
      color: #0b5ed7;
      text-decoration: underline;
    }

    .post-date[_ngcontent-%COMP%] {
      font-size: 0.85rem;
      color: #6c757d;
    }

    @media (max-width: 768px) {
      .posts-list[_ngcontent-%COMP%] {
        grid-template-columns: 1fr;
      }

      .post-item[_ngcontent-%COMP%] {
        flex-direction: row;
      }

      .post-thumbnail[_ngcontent-%COMP%] {
        width: 120px;
        height: 120px;
        flex-shrink: 0;
      }

      .post-info[_ngcontent-%COMP%] {
        justify-content: center;
      }
    }

    @media (max-width: 1024px) {
      .blog-post__container[_ngcontent-%COMP%] {
        grid-template-columns: 1fr;
      }

      .blog-post__toc[_ngcontent-%COMP%] {
        display: none;
      }
    }

    @media (max-width: 768px) {
      .blog-post__title[_ngcontent-%COMP%] {
        font-size: 2rem;
      }

      .blog-post__container[_ngcontent-%COMP%] {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .blog-post__sidebar[_ngcontent-%COMP%] {
        grid-column: 1;
      }

      .recent-posts-widget[_ngcontent-%COMP%] {
        position: static;
        max-height: none;
      }
    }

    [_nghost-%COMP%]     analog-markdown {
      font-size: 1.05rem;
      line-height: 1.8;
      color: #333;
    }

    [_nghost-%COMP%]     analog-markdown h2 {
      margin: 2rem 0 1rem 0;
      padding-top: 1rem;
      border-top: 1px solid #dee2e6;
    }

    [_nghost-%COMP%]     analog-markdown h3 {
      margin: 1.5rem 0 0.75rem 0;
    }

    [_nghost-%COMP%]     analog-markdown p {
      margin: 1rem 0;
    }

    [_nghost-%COMP%]     analog-markdown code {
      background-color: #f4f4f4;
      padding: 0.2rem 0.4rem;
      border-radius: 3px;
      font-size: 0.9em;
      font-family: 'Courier New', monospace;
    }

    [_nghost-%COMP%]     analog-markdown pre {
      background-color: #f4f4f4;
      padding: 1rem;
      border-radius: 5px;
      overflow-x: auto;
      margin: 1rem 0;
    }

    [_nghost-%COMP%]     analog-markdown pre code {
      background-color: transparent;
      padding: 0;
    }

    [_nghost-%COMP%]     analog-markdown blockquote {
      border-left: 4px solid #0d6efd;
      margin: 1rem 0;
      padding: 0 0 0 1rem;
      color: #6c757d;
    }

    [_nghost-%COMP%]     analog-markdown ul, 
   [_nghost-%COMP%]     analog-markdown ol {
      margin: 1rem 0;
      padding-left: 2rem;
    }

    [_nghost-%COMP%]     analog-markdown li {
      margin: 0.5rem 0;
    }

    [_nghost-%COMP%]     analog-markdown img {
      max-width: 100%;
      height: auto;
      border-radius: 5px;
      margin: 1rem 0;
    }

    [_nghost-%COMP%]     analog-markdown a {
      color: #0d6efd;
      text-decoration: none;
    }

    [_nghost-%COMP%]     analog-markdown a:hover {
      text-decoration: underline;
    }`]});let A=h;export{A as default};
