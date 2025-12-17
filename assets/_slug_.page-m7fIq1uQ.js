import{ɵ as y,C as j,N as R,R as P,e as g,j as d,a,b as c,c as s,f as N,l,h as i,k as v,m as U,n as Y,r as M,z as V,t as A,u as W,v as Q,s as w,p as _,x as m,B as F,D as J,i as X,E as $,d as D,P as q,F as K,G as nn,H as tn,I as E,J as k,K as en,L as on,M as sn,y as Z,o as an,g as rn}from"./index-CkeyZ3PQ.js";import{p as cn}from"./pagination-config-BIRU8DJ8.js";function ln(e){const t=[],n=/<h([1-4])[^>]*?(?:id=\"([^\"]*)\")?[^>]*>([\s\S]*?)<\/h\1>/gi;let o;for(;(o=n.exec(e))!==null;){const r=parseInt(o[1],10),u=o[2]||gn(z(o[3])),C=dn(z(o[3]).trim());t.push({level:r,text:C,id:u})}return t}function z(e){return e.replace(/<[^>]*>/g,"")}function gn(e){return e.toLowerCase().replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-").replace(/-+/g,"-")}function dn(e){return e.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'")}const Mn=()=>[],un=(e,t)=>t.id;function _n(e,t){if(e&1){const n=U();a(0,"li",4)(1,"a",5),Y("click",function(){const r=W(n).$implicit,u=l(2);return Q(u.scrollToElement(r.id))}),c(2),s()()}if(e&2){const n=t.$implicit;M("ngClass","toc__item--level-"+n.level),i(),M("routerLink",V(4,Mn))("fragment",n.id),i(),A(" ",n.text," ")}}function mn(e,t){if(e&1&&(a(0,"aside",0)(1,"nav",1)(2,"h3",2),c(3,"Table of Contents"),s(),a(4,"ul",3),N(5,_n,3,5,"li",4,un),s()()()),e&2){const n=l();i(5),v(n.headings)}}const p=class p{constructor(){this.headings=[]}scrollToElement(t){setTimeout(()=>{const n=document.getElementById(t);n&&n.scrollIntoView({behavior:"smooth",block:"start"})},0)}};p.ɵfac=function(n){return new(n||p)},p.ɵcmp=y({type:p,selectors:[["app-table-of-contents"]],inputs:{headings:"headings"},decls:1,vars:1,consts:[[1,"toc"],[1,"toc__nav"],[1,"toc__title"],[1,"toc__list"],[1,"toc__item",3,"ngClass"],[1,"toc__link",3,"click","routerLink","fragment"]],template:function(n,o){n&1&&g(0,mn,7,0,"aside",0),n&2&&d(o.headings.length>0?0:-1)},dependencies:[j,R,P],styles:[`.toc[_ngcontent-%COMP%] {
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
    }`]});let b=p;const B=e=>["/blog",e];function pn(e,t){if(e&1&&(a(0,"a",1)(1,"span",4),c(2,"← Previous"),s(),a(3,"span",5),c(4),s()()),e&2){const n=l();M("routerLink",w(2,B,n.previousPost.attributes.slug)),i(4),_(n.previousPost.attributes.title)}}function In(e,t){e&1&&m(0,"div",2)}function xn(e,t){if(e&1&&(a(0,"a",3)(1,"span",4),c(2,"Next →"),s(),a(3,"span",5),c(4),s()()),e&2){const n=l();M("routerLink",w(2,B,n.nextPost.attributes.slug)),i(4),_(n.nextPost.attributes.title)}}function hn(e,t){e&1&&m(0,"div",2)}const I=class I{constructor(){this.previousPost=null,this.nextPost=null}};I.ɵfac=function(n){return new(n||I)},I.ɵcmp=y({type:I,selectors:[["app-post-navigation"]],inputs:{previousPost:"previousPost",nextPost:"nextPost"},decls:5,vars:2,consts:[[1,"post-nav"],[1,"post-nav__link","post-nav__link--prev",3,"routerLink"],[1,"post-nav__placeholder"],[1,"post-nav__link","post-nav__link--next",3,"routerLink"],[1,"post-nav__label"],[1,"post-nav__title"]],template:function(n,o){n&1&&(a(0,"nav",0),g(1,pn,5,4,"a",1)(2,In,1,0,"div",2),g(3,xn,5,4,"a",3)(4,hn,1,0,"div",2),s()),n&2&&(i(),d(o.previousPost?1:2),i(2),d(o.nextPost?3:4))},dependencies:[P,j],styles:[`.post-nav[_ngcontent-%COMP%] {
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
      gap: 0.5rem;
      padding: 1.5rem;
      border: 2px solid #dee2e6;
      border-radius: 8px;
      text-decoration: none;
      color: inherit;
      transition: all 0.3s ease;
    }

    .post-nav__link[_ngcontent-%COMP%]:hover {
      border-color: #0d6efd;
      background-color: #f8f9fa;
    }

    .post-nav__link--prev[_ngcontent-%COMP%] {
      text-align: left;
    }

    .post-nav__link--next[_ngcontent-%COMP%] {
      text-align: right;
    }

    .post-nav__label[_ngcontent-%COMP%] {
      font-size: 0.875rem;
      color: #6c757d;
      font-weight: 500;
    }

    .post-nav__title[_ngcontent-%COMP%] {
      font-weight: 600;
      color: #0d6efd;
      line-height: 1.4;
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
    }`]});let f=I;const Cn={tip:"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHN0eWxlPi5jbHMtMSwuY2xzLTJ7ZmlsbDpub25lO3N0cm9rZTojMDgzMmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LmNscy0xe3N0cm9rZS13aWR0aDoycHg7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT48L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI0LDEzLjFhOCw4LDAsMSwwLTEzLjYsNS43QTUuMDcsNS4wNywwLDAsMSwxMiwyMi40VjIzaDh2LS41M2E1LjIzLDUuMjMsMCwwLDEsMS42My0zLjY5QTgsOCwwLDAsMCwyNCwxMy4xWiI+PC9wYXRoPjxsaW5lIGNsYXNzPSJjbHMtMSIgeDE9IjEyIiB4Mj0iMjAiIHkxPSIyNiIgeTI9IjI2Ij48L2xpbmU+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMTMiIHgyPSIxOSIgeTE9IjI3IiB5Mj0iMjciPjwvbGluZT48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIxNiIgeDI9IjE2IiB5MT0iMjgiIHkyPSIyNyI+PC9saW5lPjxwb2x5bGluZSBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMTYgMTIuNDIgMTUgMTUuMjUgMTcgMTUuMjUgMTYgMTguMTciPjwvcG9seWxpbmU+PC9zdmc+",warning:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiPg0KICA8cGF0aCBzdHJva2U9IiM1MzUzNTgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTUuMTIgNC42MjNhMSAxIDAgMDExLjc2IDBsMTEuMzIgMjAuOUExIDEgMCAwMTI3LjMyMSAyN0g0LjY3OWExIDEgMCAwMS0uODgtMS40NzZsMTEuMzIyLTIwLjl6TTE2IDE4di02Ii8+DQogIDxwYXRoIGZpbGw9IiM1MzUzNTgiIGQ9Ik0xNy41IDIyLjVhMS41IDEuNSAwIDExLTMgMCAxLjUgMS41IDAgMDEzIDB6Ii8+DQo8L3N2Zz4=",danger:"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE3LjY2IDExLjJjLS4yMy0uMy0uNTEtLjU2LS43Ny0uODItLjY3LS42LTEuNDMtMS4wMy0yLjA3LTEuNjZDMTMuMzMgNy4yNiAxMyA0Ljg1IDEzLjk1IDNjLS45NS4yMy0xLjc4Ljc1LTIuNDkgMS4zMi0yLjU5IDIuMDgtMy42MSA1Ljc1LTIuMzkgOC45LjA0LjEuMDguMi4wOC4zMyAwIC4yMi0uMTUuNDItLjM1LjUtLjIzLjEtLjQ3LjA0LS42Ni0uMTJhLjU4LjU4IDAgMCAxLS4xNC0uMTdjLTEuMTMtMS40My0xLjMxLTMuNDgtLjU1LTUuMTJDNS43OCAxMCA0Ljg3IDEyLjMgNSAxNC40N2MuMDYuNS4xMiAxIC4yOSAxLjUuMTQuNi40MSAxLjIuNzEgMS43MyAxLjA4IDEuNzMgMi45NSAyLjk3IDQuOTYgMy4yMiAyLjE0LjI3IDQuNDMtLjEyIDYuMDctMS42IDEuODMtMS42NiAyLjQ3LTQuMzIgMS41My02LjZsLS4xMy0uMjZjLS4yMS0uNDYtLjc3LTEuMjYtLjc3LTEuMjZtLTMuMTYgNi4zYy0uMjguMjQtLjc0LjUtMS4xLjYtMS4xMi40LTIuMjQtLjE2LTIuOS0uODIgMS4xOS0uMjggMS45LTEuMTYgMi4xMS0yLjA1LjE3LS44LS4xNS0xLjQ2LS4yOC0yLjIzLS4xMi0uNzQtLjEtMS4zNy4xNy0yLjA2LjE5LjM4LjM5Ljc2LjYzIDEuMDYuNzcgMSAxLjk4IDEuNDQgMi4yNCAyLjguMDQuMTQuMDYuMjguMDYuNDMuMDMuODItLjMzIDEuNzItLjkzIDIuMjd6Ii8+PC9zdmc+",info:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE2MCIgd2lkdGg9IjE2MCIgdmVyc2lvbj0iMS4wIj4KIDxnIGZpbGw9IiM0YjRiNGIiPgogIDxwYXRoIGQ9Im04MCAxNWMtMzUuODggMC02NSAyOS4xMi02NSA2NXMyOS4xMiA2NSA2NSA2NSA2NS0yOS4xMiA2NS02NS0yOS4xMi02NS02NS02NXptMCAxMGMzMC4zNiAwIDU1IDI0LjY0IDU1IDU1cy0yNC42NCA1NS01NSA1NS01NS0yNC42NC01NS01NSAyNC42NC01NSA1NS01NXoiLz4KICA8cGF0aCBkPSJtNTcuMzczIDE4LjIzMWE5LjM4MzQgOS4xMTUzIDAgMSAxIC0xOC43NjcgMCA5LjM4MzQgOS4xMTUzIDAgMSAxIDE4Ljc2NyAweiIgdHJhbnNmb3JtPSJtYXRyaXgoMS4xOTg5IDAgMCAxLjIzNDIgMjEuMjE0IDI4Ljc1KSIvPgogIDxwYXRoIGQ9Im05MC42NjUgMTEwLjk2Yy0wLjA2OSAyLjczIDEuMjExIDMuNSA0LjMyNyAzLjgybDUuMDA4IDAuMXY1LjEyaC0zOS4wNzN2LTUuMTJsNS41MDMtMC4xYzMuMjkxLTAuMSA0LjA4Mi0xLjM4IDQuMzI3LTMuODJ2LTMwLjgxM2MwLjAzNS00Ljg3OS02LjI5Ni00LjExMy0xMC43NTctMy45Njh2LTUuMDc0bDMwLjY2NS0xLjEwNSIvPgogPC9nPgo8L3N2Zz4K",note:"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzM4M2Q0MSIgZD0iTTMgMTcuMjVWMjFoMy43NUwxNy44MSA5Ljk0bC0zLjc1LTMuNzVMMy4wMiAxNy4yNXptMTcuNzEtMTAuMjFjLjM5LS4zOS4zOS0xLjAyIDAtMS40MWwtMi4zNC0yLjM0Yy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMGwtMS44MyAxLjgzIDMuNzUgMy43NSAxLjgzLTEuODN6Ii8+PC9zdmc+",success:"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzBmNTEzMiIgZD0iTTkgMTYuMTdMNC44MyAxMmwtMS40MiAxLjQxTDkgMTkgMjEgN2wtMS40MS0xLjQxTDkgMTYuMTd6Ii8+PC9zdmc+",caution:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiPg0KICA8cGF0aCBzdHJva2U9IiM1MzUzNTgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTUuMTIgNC42MjNhMSAxIDAgMDExLjc2IDBsMTEuMzIgMjAuOUExIDEgMCAwMTI3LjMyMSAyN0g0LjY3OWExIDEgMCAwMS0uODgtMS40NzZsMTEuMzIyLTIwLjl6TTE2IDE4di02Ii8+DQogIDxwYXRoIGZpbGw9IiM1MzUzNTgiIGQ9Ik0xNy41IDIyLjVhMS41IDEuNSAwIDExLTMgMCAxLjUgMS41IDAgMDEzIDB6Ii8+DQo8L3N2Zz4="};function bn(e){const t=/:::(\w+)(?:\[(.*?)\])?\s*\n([\s\S]*?)\n:::/g;return e.replace(t,(n,o,r,u)=>{if(o=o.toLowerCase(),!["tip","warning","danger","info","note","collapse","success","caution"].includes(o))return n;const T=r||{tip:"Tip",warning:"Warning",danger:"Danger",info:"Info",note:"Note",success:"Success",caution:"Caution",collapse:"Details"}[o],H=o==="collapse",S=u.trim(),G=Cn[o]||"";return H?`<details class="admonition admonition--collapse">
<summary class="admonition__title">
<span class="admonition__icon"></span>
${T}
</summary>
<div class="admonition__content">

${S}

</div>
</details>`:`<div class="admonition admonition--${o}">
<div class="admonition__title">
<img class="admonition__icon" src="${G}" alt="${o}" />
${T}
</div>
<div class="admonition__content">

${S}

</div>
</div>`})}const x=class x{transform(t){return t&&typeof t=="string"?bn(t):""}};x.ɵfac=function(n){return new(n||x)},x.ɵpipe=F({name:"admonitionTransform",type:x,pure:!0});let L=x;const fn=["contentRef"],Ln=e=>["/blog",e],yn=(e,t)=>t.attributes.slug;function jn(e,t){if(e&1&&(a(0,"p",4),c(1),s()),e&2){const n=l();i(),_(n.attributes.date)}}function Pn(e,t){if(e&1&&(a(0,"span",18),c(1),s()),e&2){const n=t.$implicit;i(),_(n)}}function Nn(e,t){if(e&1&&N(0,Pn,2,1,"span",18,rn),e&2){const n=l();v(n.attributes.tags)}}function vn(e,t){if(e&1&&m(0,"app-table-of-contents",10),e&2){const n=l(2);M("headings",n.headings)}}function wn(e,t){if(e&1&&(a(0,"section",13)(1,"p"),c(2),s()()),e&2){const n=l(2);i(2),_(n.disclaimerText)}}function Tn(e,t){if(e&1&&m(0,"img",20),e&2){const n=l(2).$implicit,o=l(2);M("src",n.attributes.coverImage||o.defaultCoverImage,Z)("alt",n.attributes.title)}}function Sn(e,t){if(e&1&&(a(0,"li",19),g(1,Tn,1,2,"img",20),a(2,"a",21),c(3),s()()),e&2){const n=l().$implicit,o=l(2);i(),d(n.attributes.coverImage||o.defaultCoverImage?1:-1),i(),M("routerLink",w(3,Ln,n.attributes.slug)),i(),A(" ",n.attributes.title," ")}}function Dn(e,t){if(e&1&&g(0,Sn,4,5,"li",19),e&2){const n=t.$implicit,o=l(2);d(n.attributes.slug!==o.currentSlug?0:-1)}}function zn(e,t){if(e&1&&(a(0,"article",1)(1,"header",2)(2,"h1",3),c(3),s(),g(4,jn,2,1,"p",4),a(5,"div",5)(6,"span",6),c(7),s(),g(8,Nn,2,0),s(),a(9,"p",7),c(10),s()(),m(11,"img",8),a(12,"div",9),g(13,vn,1,1,"app-table-of-contents",10),a(14,"div",11,0),m(16,"analog-markdown",12),E(17,"admonitionTransform"),s()(),g(18,wn,3,1,"section",13),a(19,"section",14)(20,"div",15)(21,"h3"),c(22,"Recent Posts"),s(),a(23,"ul",16),N(24,Dn,1,1,null,null,yn),s()()(),m(26,"app-post-navigation",17),s()),e&2){const n=t,o=l();i(3),_(n.attributes.title),i(),d(n.attributes.date?4:-1),i(3),_(n.attributes.category||"uncategorized"),i(),d(n.attributes.tags&&n.attributes.tags.length>0?8:-1),i(2),_(n.attributes.description),i(),M("src",n.attributes.coverImage||o.defaultCoverImage,Z)("alt",n.attributes.title),i(),an("blog-post__container--no-toc",!o.showToc),i(),d(o.showToc&&o.headings.length>0?13:-1),i(3),M("content",k(17,14,n.content)),i(2),d(o.showDisclaimer?18:-1),i(6),v(o.recentPosts),i(2),M("previousPost",o.previousPost)("nextPost",o.nextPost)}}const h=class h{constructor(t,n){this.cdr=n,this.post$=J("slug"),this.allPosts=X(),this.defaultCoverImage="tamil-literature-default.svg",this.headings=[],this.recentPosts=[],this.previousPost=null,this.nextPost=null,this.currentSlug="",this.showToc=!0,this.showDisclaimer=!0,this.disclaimerText="The views expressed are personal and for informational purposes only.",this.hasExtractedHeadings=!1,this.isBrowser=$(t)}ngOnInit(){this.post$.subscribe(t=>{t&&(this.currentSlug=t.attributes.slug,this.showToc=t.attributes.toc!==!1,this.showDisclaimer=t.attributes.disclaimerEnabled!==!1,this.disclaimerText=t.attributes.disclaimerText||this.disclaimerText,this.updateNavigation(),this.recentPosts=this.allPosts.slice(0,cn.articleRecentPostsCount),this.headings=[],this.hasExtractedHeadings=!1)})}ngAfterViewInit(){this.updateContentHeadings(),this.isBrowser&&this.initObserver()}ngAfterViewChecked(){!this.hasExtractedHeadings&&this.contentRef?.nativeElement&&this.isBrowser&&this.contentRef.nativeElement.querySelectorAll("h1, h2, h3, h4").length>0&&this.headings.length===0&&setTimeout(()=>{this.updateContentHeadings(),this.cdr.detectChanges()},0)}ngOnDestroy(){this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0)}updateContentHeadings(){if(!this.isBrowser||!this.contentRef?.nativeElement)return;const t=this.contentRef.nativeElement,n=t.querySelectorAll("h1, h2, h3, h4");if(n.length===0)return;n.forEach(u=>{if(!u.id){const C=u.textContent||"";u.id=this.slugify(C)}});const o=t.innerHTML,r=ln(o);r.length>0&&!this.hasExtractedHeadings&&(this.headings=r,this.hasExtractedHeadings=!0)}initObserver(){this.isBrowser&&this.contentRef?.nativeElement&&(this.mutationObserver||(this.mutationObserver=new MutationObserver(()=>{this.updateContentHeadings()}),this.mutationObserver.observe(this.contentRef.nativeElement,{childList:!0,subtree:!0,characterData:!0})))}slugify(t){return t.toLowerCase().replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-").replace(/-+/g,"-")}updateNavigation(){const t=this.allPosts.findIndex(n=>n.attributes.slug===this.currentSlug);t>0?this.previousPost=this.allPosts[t-1]:this.previousPost=null,t<this.allPosts.length-1?this.nextPost=this.allPosts[t+1]:this.nextPost=null}};h.ɵfac=function(n){return new(n||h)(D(q),D(K))},h.ɵcmp=y({type:h,selectors:[["app-blog-post"]],viewQuery:function(n,o){if(n&1&&en(fn,5),n&2){let r;on(r=sn())&&(o.contentRef=r.first)}},decls:2,vars:3,consts:[["contentRef",""],[1,"blog-post"],[1,"blog-post__header"],[1,"blog-post__title"],[1,"blog-post__date"],[1,"blog-post__meta"],[1,"post-meta-tag","category-tag"],[1,"blog-post__description"],[1,"blog-post__image",3,"src","alt"],[1,"blog-post__container"],[1,"blog-post__toc",3,"headings"],[1,"blog-post__content"],[3,"content"],[1,"blog-post__disclaimer"],[1,"blog-post__sidebar"],[1,"recent-posts-widget"],[1,"recent-posts-list"],[3,"previousPost","nextPost"],[1,"post-meta-tag","tag-tag"],[1,"recent-post-item"],[1,"recent-post-thumbnail",3,"src","alt"],[3,"routerLink"]],template:function(n,o){if(n&1&&(g(0,zn,27,16,"article",1),E(1,"async")),n&2){let r;d((r=k(1,1,o.post$))?0:-1,r)}},dependencies:[j,P,nn,b,f,tn,L],styles:[`.blog-post[_ngcontent-%COMP%] {
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
      padding: 1rem 1.25rem;
      border-left: 4px solid #ffc107;
      background: #fff3cd;
      color: #856404;
      border-radius: 6px;
    }

    .recent-posts-widget[_ngcontent-%COMP%] {
      background-color: #f8f9fa;
      border: 1px solid #dee2e6;
      border-radius: 8px;
      padding: 1.5rem;
      position: sticky;
      top: 100px;
      max-height: 70vh;
      overflow-y: auto;
    }

    .recent-posts-widget[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
      font-size: 1rem;
      margin: 0 0 1rem 0;
      color: #212529;
    }

    .recent-posts-list[_ngcontent-%COMP%] {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .recent-post-item[_ngcontent-%COMP%] {
      margin-bottom: 1rem;
      display: flex;
      gap: 0.75rem;
      align-items: flex-start;
    }

    .recent-post-thumbnail[_ngcontent-%COMP%] {
      width: 60px;
      height: 60px;
      object-fit: cover;
      border-radius: 6px;
      flex-shrink: 0;
    }

    .recent-posts-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
      color: #495057;
      text-decoration: none;
      transition: color 0.2s ease;
      font-size: 0.95rem;
      line-height: 1.4;
      display: block;
      flex: 1;
    }

    .recent-posts-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
      color: #0d6efd;
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
    }`]});let O=h;export{O as default};
