import{i as F,d as Y,A as w,ɵ as A,R as z,C as $,a as s,b as l,c as r,e as g,f as p,g as v,h as i,j as d,k as f,l as _,m,n as C,o as P,p as x,q as M,r as S,s as B,t as k,u as y,v as b}from"./index-CkeyZ3PQ.js";import{p as E}from"./pagination-config-BIRU8DJ8.js";const I=n=>["/blog",n],j=(n,e)=>e.attributes.slug;function R(n,e){if(n&1){const t=m();s(0,"button",8),C("click",function(){const o=y(t).$implicit,c=_(3);return b(c.setCategory(o))}),l(1),r()}if(n&2){const t=e.$implicit,a=_(3);P("active",a.selectedCategory===t),i(),M(" ",t," (",a.getPostsCountByCategory(t),") ")}}function L(n,e){if(n&1){const t=m();s(0,"div",5)(1,"h3",6),l(2,"Categories"),r(),s(3,"div",7)(4,"button",8),C("click",function(){y(t);const o=_(2);return b(o.setCategory(null))}),l(5," All "),r(),p(6,R,2,4,"button",9,v),r()()}if(n&2){const t=_(2);i(4),P("active",!t.selectedCategory),i(2),f(t.availableCategories)}}function V(n,e){if(n&1){const t=m();s(0,"button",8),C("click",function(){const o=y(t).$implicit,c=_(3);return b(c.toggleTag(o))}),l(1),r()}if(n&2){const t=e.$implicit,a=_(3);P("active",a.selectedTags.includes(t)),i(),M(" ",t," (",a.getPostsCountByTag(t),") ")}}function q(n,e){if(n&1){const t=m();s(0,"div",5)(1,"h3",6),l(2,"Tags"),r(),s(3,"div",7)(4,"button",8),C("click",function(){y(t);const o=_(2);return b(o.clearTags())}),l(5," All "),r(),p(6,V,2,4,"button",9,v),r()()}if(n&2){const t=_(2);i(4),P("active",t.selectedTags.length===0),i(2),f(t.availableTags)}}function Q(n,e){if(n&1&&(s(0,"div",3),g(1,L,8,2,"div",5),g(2,q,8,2,"div",5),r()),n&2){const t=_();i(),d(t.availableCategories.length>0?1:-1),i(),d(t.availableTags.length>0?2:-1)}}function U(n,e){if(n&1&&(s(0,"span",16),l(1),r()),n&2){const t=_().$implicit;i(),k("— ",t.attributes.date)}}function N(n,e){if(n&1&&(s(0,"span",19),l(1),r()),n&2){const t=e.$implicit;i(),x(t)}}function W(n,e){if(n&1&&p(0,N,2,1,"span",19,v),n&2){const t=_().$implicit;f(t.attributes.tags)}}function D(n,e){if(n&1&&(s(0,"li",13)(1,"div",14)(2,"a",15),l(3),r(),g(4,U,2,1,"span",16),s(5,"div",17)(6,"span",18),l(7),r(),g(8,W,2,0),r()()()),n&2){const t=e.$implicit;i(2),S("routerLink",B(5,I,t.attributes.slug)),i(),k(" ",t.attributes.title," "),i(),d(t.attributes.date?4:-1),i(3),x(t.attributes.category||"uncategorized"),i(),d(t.attributes.tags&&t.attributes.tags.length>0?8:-1)}}function G(n,e){if(n&1&&(s(0,"section",10)(1,"h2",11),l(2),r(),s(3,"ul",12),p(4,D,9,7,"li",13,j),r()()),n&2){const t=_().$implicit,a=_();i(2),x(t),i(2),f(a.getPostsForYear(t))}}function H(n,e){if(n&1&&g(0,G,6,1,"section",10),n&2){const t=e.$implicit,a=_();d(a.getPostsForYear(t).length>0?0:-1)}}function J(n,e){if(n&1){const t=m();s(0,"div",4)(1,"p"),l(2,"No posts found for the selected filters."),r(),s(3,"button",20),C("click",function(){y(t);const o=_();return b(o.resetFilters())}),l(4,"Reset Filters"),r()()}}const h=class h{constructor(e){this.route=e,this.posts=F(),this.grouped={},this.years=[],this.filteredYears=[],this.availableCategories=[],this.availableTags=[],this.selectedCategory=null,this.selectedTags=[],this.maxPerYear=E.archivePageSize,this.groupByYear(),this.extractCategories(),this.extractTags(),this.subscribeToQueryParams()}groupByYear(){const e={};for(const t of this.posts){const o=(t.attributes.date||"").match(/(\d{4})/),c=o?o[1]:"Unknown";e[c]||(e[c]=[]),e[c].length<this.maxPerYear&&e[c].push(t)}this.grouped=e,this.years=Object.keys(e).sort((t,a)=>t<a?1:-1),this.filteredYears=[...this.years]}extractCategories(){const e=new Set;this.posts.forEach(t=>{e.add(t.attributes.category||"uncategorized")}),this.availableCategories=Array.from(e).sort()}extractTags(){const e=new Set;this.posts.forEach(t=>{t.attributes.tags&&Array.isArray(t.attributes.tags)&&t.attributes.tags.forEach(a=>e.add(a))}),this.availableTags=Array.from(e).sort()}subscribeToQueryParams(){this.route.queryParams.subscribe(e=>{this.selectedCategory=e.category||null,this.selectedTags=e.tags?e.tags.split(","):[],this.applyFilters()})}applyFilters(){const e=this.posts.filter(a=>{const o=a.attributes.category||"uncategorized",c=!this.selectedCategory||o===this.selectedCategory,u=this.selectedTags.length===0||a.attributes.tags&&this.selectedTags.some(O=>a.attributes.tags?.includes(O));return c&&u}),t=new Set;e.forEach(a=>{const c=(a.attributes.date||"").match(/(\d{4})/),u=c?c[1]:"Unknown";t.add(u)}),this.filteredYears=this.years.filter(a=>t.has(a))}setCategory(e){this.selectedCategory=e,this.applyFilters()}toggleTag(e){this.selectedTags.includes(e)?this.selectedTags=this.selectedTags.filter(t=>t!==e):this.selectedTags=[...this.selectedTags,e],this.applyFilters()}clearTags(){this.selectedTags=[],this.applyFilters()}resetFilters(){this.selectedCategory=null,this.selectedTags=[],this.applyFilters()}getPostsForYear(e){let t=this.grouped[e]||[];return t=t.filter(a=>{const o=!this.selectedCategory||a.attributes.category===this.selectedCategory,c=this.selectedTags.length===0||a.attributes.tags&&this.selectedTags.some(u=>a.attributes.tags?.includes(u));return o&&c}),t}getPostsCountByCategory(e){return e==="uncategorized"?this.posts.filter(t=>!t.attributes.category).length:this.posts.filter(t=>t.attributes.category===e).length}getPostsCountByTag(e){return this.posts.filter(t=>t.attributes.tags&&t.attributes.tags.includes(e)).length}};h.ɵfac=function(t){return new(t||h)(Y(w))},h.ɵcmp=A({type:h,selectors:[["app-archive"]],decls:10,vars:2,consts:[[1,"year-archive"],[1,"archive-header"],[1,"archive-subtitle"],[1,"filters-section"],[1,"no-posts"],[1,"filter-group"],[1,"filter-title"],[1,"filter-tags"],[1,"filter-tag",3,"click"],[1,"filter-tag",3,"active"],[1,"archive-year"],[1,"archive-year__title"],[1,"archive-year__list"],[1,"archive-year__item"],[1,"archive-year__post"],[1,"archive-year__link",3,"routerLink"],[1,"archive-year__date"],[1,"archive-year__meta"],[1,"archive-meta-tag","category-tag"],[1,"archive-meta-tag","tag-tag"],[1,"reset-btn",3,"click"]],template:function(t,a){t&1&&(s(0,"div",0)(1,"header",1)(2,"h1"),l(3,"Archive"),r(),s(4,"p",2),l(5,"Browse by year, category, or tag"),r()(),g(6,Q,3,2,"div",3),p(7,H,1,1,null,null,v),g(9,J,5,0,"div",4),r()),t&2&&(i(6),d(a.availableCategories.length>0||a.availableTags.length>0?6:-1),i(),f(a.years),i(2),d(a.filteredYears.length===0?9:-1))},dependencies:[z,$],styles:[`.year-archive[_ngcontent-%COMP%] {
      max-width: 900px;
      margin: 0 auto;
    }

    .archive-header[_ngcontent-%COMP%] {
      text-align: center;
      margin-bottom: 2rem;
    }

    .archive-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
      font-size: 2.5rem;
      margin: 0 0 0.5rem 0;
      color: #212529;
    }

    .archive-subtitle[_ngcontent-%COMP%] {
      font-size: 1.125rem;
      color: #6c757d;
      margin: 0 0 2rem 0;
    }

    

    .filters-section[_ngcontent-%COMP%] {
      background: #f8f9fa;
      border-radius: 8px;
      padding: 1.5rem;
      margin-bottom: 2rem;
    }

    .filter-group[_ngcontent-%COMP%] {
      margin-bottom: 1.5rem;
    }

    .filter-group[_ngcontent-%COMP%]:last-child {
      margin-bottom: 0;
    }

    .filter-title[_ngcontent-%COMP%] {
      font-size: 0.95rem;
      font-weight: 600;
      color: #495057;
      margin: 0 0 0.75rem 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .filter-tags[_ngcontent-%COMP%] {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .filter-tag[_ngcontent-%COMP%] {
      padding: 0.5rem 1rem;
      border: 1px solid #dee2e6;
      background: white;
      color: #495057;
      border-radius: 20px;
      cursor: pointer;
      font-size: 0.875rem;
      transition: all 0.2s ease;
      white-space: nowrap;
    }

    .filter-tag[_ngcontent-%COMP%]:hover {
      border-color: #0d6efd;
      color: #0d6efd;
    }

    .filter-tag.active[_ngcontent-%COMP%] {
      background: #0d6efd;
      color: white;
      border-color: #0d6efd;
    }

    .archive-year[_ngcontent-%COMP%] {
      margin: 2rem 0;
      padding: 1.5rem;
      border: 1px solid #dee2e6;
      border-radius: 8px;
      background: #fafbfc;
    }

    .archive-year__title[_ngcontent-%COMP%] {
      font-size: 1.5rem;
      margin: 0 0 1rem 0;
      color: #212529;
    }

    .archive-year__list[_ngcontent-%COMP%] {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .archive-year__item[_ngcontent-%COMP%] {
      margin: 0.75rem 0;
    }

    .archive-year__post[_ngcontent-%COMP%] {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .archive-year__link[_ngcontent-%COMP%] {
      color: #0d6efd;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s ease;
    }

    .archive-year__link[_ngcontent-%COMP%]:hover {
      color: #0b5ed7;
      text-decoration: underline;
    }

    .archive-year__date[_ngcontent-%COMP%] {
      color: #6c757d;
      font-size: 0.875rem;
    }

    .archive-year__meta[_ngcontent-%COMP%] {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .archive-meta-tag[_ngcontent-%COMP%] {
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

    .no-posts[_ngcontent-%COMP%] {
      text-align: center;
      padding: 2rem;
      color: #6c757d;
    }

    .reset-btn[_ngcontent-%COMP%] {
      margin-top: 1rem;
      padding: 0.5rem 1.5rem;
      background: #0d6efd;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
      transition: background 0.2s ease;
    }

    .reset-btn[_ngcontent-%COMP%]:hover {
      background: #0b5ed7;
    }

    @media (max-width: 768px) {
      .archive-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
        font-size: 1.75rem;
      }

      .archive-year__title[_ngcontent-%COMP%] {
        font-size: 1.25rem;
      }

      .filter-tags[_ngcontent-%COMP%] {
        gap: 0.25rem;
      }

      .filter-tag[_ngcontent-%COMP%] {
        padding: 0.4rem 0.75rem;
        font-size: 0.8rem;
      }
    }`]});let T=h;export{T as default};
