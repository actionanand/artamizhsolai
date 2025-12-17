import{i as B,d as F,A as z,ɵ as A,R as I,C as $,a,b as s,c as i,e as g,h as o,j as _,l as c,f as C,g as x,k as P,m as f,n as d,r as b,w as E,o as T,t as y,x as S,y as L,s as w,p as v,q as k,u as p,v as u}from"./index-CkeyZ3PQ.js";import{p as R}from"./pagination-config-BIRU8DJ8.js";const M=n=>["/blog/",n],j=(n,e)=>e.attributes.slug;function V(n,e){if(n&1){const t=f();a(0,"button",11),d("click",function(){const l=p(t).$implicit,m=c(3);return u(m.setCategory(l))}),s(1),i()}if(n&2){const t=e.$implicit,r=c(3);T("active",r.selectedCategory===t),o(),k(" ",t," (",r.getPostsCountByCategory(t),") ")}}function q(n,e){if(n&1){const t=f();a(0,"div",8)(1,"h3",9),s(2,"Categories"),i(),a(3,"div",10)(4,"button",11),d("click",function(){p(t);const l=c(2);return u(l.setCategory(null))}),s(5," All "),i(),C(6,V,2,4,"button",12,x),i()()}if(n&2){const t=c(2);o(4),T("active",!t.selectedCategory),o(2),P(t.availableCategories)}}function N(n,e){if(n&1){const t=f();a(0,"button",11),d("click",function(){const l=p(t).$implicit,m=c(3);return u(m.toggleTag(l))}),s(1),i()}if(n&2){const t=e.$implicit,r=c(3);T("active",r.selectedTags.includes(t)),o(),k(" ",t," (",r.getPostsCountByTag(t),") ")}}function Q(n,e){if(n&1){const t=f();a(0,"div",8)(1,"h3",9),s(2,"Tags"),i(),a(3,"div",10)(4,"button",11),d("click",function(){p(t);const l=c(2);return u(l.clearTags())}),s(5," All "),i(),C(6,N,2,4,"button",12,x),i()()}if(n&2){const t=c(2);o(4),T("active",t.selectedTags.length===0),o(2),P(t.availableTags)}}function U(n,e){if(n&1&&(a(0,"div",3),g(1,q,8,2,"div",8),g(2,Q,8,2,"div",8),i()),n&2){const t=c();o(),_(t.availableCategories.length>0?1:-1),o(),_(t.availableTags.length>0?2:-1)}}function D(n,e){if(n&1){const t=f();a(0,"span",14),s(1),a(2,"button",15),d("click",function(){p(t);const l=c(2);return u(l.setCategory(null))}),s(3,"×"),i()()}if(n&2){const t=c(2);o(),y(" Category: ",t.selectedCategory," ")}}function G(n,e){if(n&1){const t=f();a(0,"span",14),s(1),a(2,"button",15),d("click",function(){const l=p(t).$implicit,m=c(2);return u(m.removeTag(l))}),s(3,"×"),i()()}if(n&2){const t=e.$implicit;o(),y(" Tag: ",t," ")}}function H(n,e){if(n&1&&(a(0,"div",4)(1,"span",13),s(2,"Filtering by:"),i(),g(3,D,4,1,"span",14),C(4,G,4,1,"span",14,x),i()),n&2){const t=c();o(3),_(t.selectedCategory?3:-1),o(),P(t.selectedTags)}}function J(n,e){if(n&1){const t=f();a(0,"div",6)(1,"p"),s(2,"No blog posts found for the selected filters."),i(),a(3,"button",16),d("click",function(){p(t);const l=c();return u(l.resetFilters())}),s(4,"Reset Filters"),i()()}}function K(n,e){if(n&1&&(a(0,"p",23),s(1),i()),n&2){const t=c().$implicit;o(),v(t.attributes.date)}}function W(n,e){if(n&1&&(a(0,"span",28),s(1),i()),n&2){const t=e.$implicit;o(),v(t)}}function X(n,e){if(n&1&&C(0,W,2,1,"span",28,x),n&2){const t=c().$implicit;P(t.attributes.tags)}}function Y(n,e){if(n&1&&(a(0,"article",17)(1,"div",18),S(2,"img",19),i(),a(3,"div",20)(4,"h2",21)(5,"a",22),s(6),i()(),g(7,K,2,1,"p",23),a(8,"div",24)(9,"span",25),s(10),i(),g(11,X,2,0),i(),a(12,"p",26),s(13),i(),a(14,"a",27),s(15," Read More → "),i()()()),n&2){const t=e.$implicit,r=c(2);o(2),b("src",t.attributes.coverImage||r.defaultCoverImage,L)("alt",t.attributes.title),o(3),b("routerLink",w(9,M,t.attributes.slug)),o(),y(" ",t.attributes.title," "),o(),_(t.attributes.date?7:-1),o(3),v(t.attributes.category||"uncategorized"),o(),_(t.attributes.tags&&t.attributes.tags.length>0?11:-1),o(2),v(t.attributes.description),o(),b("routerLink",w(11,M,t.attributes.slug))}}function Z(n,e){if(n&1&&C(0,Y,16,13,"article",17,j),n&2){const t=c();P(t.pagedPosts)}}function tt(n,e){if(n&1){const t=f();a(0,"nav",7)(1,"button",29),d("click",function(){p(t);const l=c();return u(l.goToPage(l.currentPage-1))}),s(2," ← Prev "),i(),a(3,"span",30),s(4),i(),a(5,"button",29),d("click",function(){p(t);const l=c();return u(l.goToPage(l.currentPage+1))}),s(6," Next → "),i()()}if(n&2){const t=c();o(),b("disabled",t.currentPage===1),o(3),E("Page ",t.currentPage," of ",t.totalPages," (",t.filteredPosts.length," posts)"),o(),b("disabled",t.currentPage===t.totalPages)}}const et="tamil-literature-default.svg",h=class h{constructor(e){this.route=e,this.posts=B(),this.pageSize=R.blogPageSize,this.defaultCoverImage=et,this.availableCategories=[],this.availableTags=[],this.selectedCategory=null,this.selectedTags=[],this.filteredPosts=[],this.pagedPosts=[],this.currentPage=1,this.totalPages=1}ngOnInit(){this.extractCategories(),this.extractTags(),this.applyFilters(),this.subscribeToQueryParams()}extractCategories(){const e=new Set;this.posts.forEach(t=>{e.add(t.attributes.category||"uncategorized")}),this.availableCategories=Array.from(e).sort()}extractTags(){const e=new Set;this.posts.forEach(t=>{t.attributes.tags&&Array.isArray(t.attributes.tags)&&t.attributes.tags.forEach(r=>e.add(r))}),this.availableTags=Array.from(e).sort()}subscribeToQueryParams(){this.route.queryParams.subscribe(e=>{this.selectedCategory=e.category||null,this.selectedTags=e.tags?e.tags.split(","):[],this.currentPage=1,this.applyFilters()})}applyFilters(){this.filteredPosts=this.posts.filter(e=>{const t=e.attributes.category||"uncategorized",r=!this.selectedCategory||t===this.selectedCategory,l=this.selectedTags.length===0||e.attributes.tags&&this.selectedTags.some(m=>e.attributes.tags?.includes(m));return r&&l}),this.totalPages=Math.max(1,Math.ceil(this.filteredPosts.length/this.pageSize)),this.currentPage=1,this.updatePagedPosts()}setCategory(e){this.selectedCategory=e,this.currentPage=1,this.applyFilters()}toggleTag(e){this.selectedTags.includes(e)?this.selectedTags=this.selectedTags.filter(t=>t!==e):this.selectedTags=[...this.selectedTags,e],this.currentPage=1,this.applyFilters()}removeTag(e){this.selectedTags=this.selectedTags.filter(t=>t!==e),this.currentPage=1,this.applyFilters()}clearTags(){this.selectedTags=[],this.currentPage=1,this.applyFilters()}resetFilters(){this.selectedCategory=null,this.selectedTags=[],this.currentPage=1,this.applyFilters()}goToPage(e){e<1||e>this.totalPages||(this.currentPage=e,this.updatePagedPosts(),window.scrollTo({top:0,behavior:"smooth"}))}updatePagedPosts(){const e=(this.currentPage-1)*this.pageSize,t=e+this.pageSize;this.pagedPosts=this.filteredPosts.slice(e,t)}getPostsCountByCategory(e){return e==="uncategorized"?this.posts.filter(t=>!t.attributes.category).length:this.posts.filter(t=>t.attributes.category===e).length}getPostsCountByTag(e){return this.posts.filter(t=>t.attributes.tags&&t.attributes.tags.includes(e)).length}};h.ɵfac=function(t){return new(t||h)(F(z))},h.ɵcmp=A({type:h,selectors:[["app-blog"]],decls:12,vars:4,consts:[[1,"blog-archive"],[1,"archive-header"],[1,"archive-subtitle"],[1,"filters-section"],[1,"applied-filters"],[1,"posts-list"],[1,"no-posts"],[1,"pagination"],[1,"filter-group"],[1,"filter-title"],[1,"filter-tags"],[1,"filter-tag",3,"click"],[1,"filter-tag",3,"active"],[1,"applied-filters-label"],[1,"filter-badge"],[1,"remove-filter",3,"click"],[1,"reset-btn",3,"click"],[1,"post-preview"],[1,"post-preview__image-container"],[1,"post-preview__image",3,"src","alt"],[1,"post-preview__content"],[1,"post-preview__title"],[3,"routerLink"],[1,"post-preview__date"],[1,"post-preview__meta"],[1,"post-meta-tag","category-tag"],[1,"post-preview__description"],[1,"post-preview__link",3,"routerLink"],[1,"post-meta-tag","tag-tag"],[1,"page-btn",3,"click","disabled"],[1,"page-info"]],template:function(t,r){t&1&&(a(0,"div",0)(1,"header",1)(2,"h1"),s(3,"Blog Archive"),i(),a(4,"p",2),s(5,"Explore all articles and stories"),i()(),g(6,U,3,2,"div",3),g(7,H,6,1,"div",4),a(8,"div",5),g(9,J,5,0,"div",6)(10,Z,2,0),i(),g(11,tt,7,5,"nav",7),i()),t&2&&(o(6),_(r.availableCategories.length>0||r.availableTags.length>0?6:-1),o(),_(r.selectedCategory||r.selectedTags.length>0?7:-1),o(2),_(r.filteredPosts.length===0?9:10),o(2),_(r.filteredPosts.length>0?11:-1))},dependencies:[I,$],styles:[`.blog-archive[_ngcontent-%COMP%] {
      max-width: 900px;
      margin: 0 auto;
    }

    .archive-header[_ngcontent-%COMP%] {
      text-align: center;
      margin-bottom: 3rem;
    }

    .archive-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
      font-size: 2.5rem;
      margin: 0 0 0.5rem 0;
      color: #212529;
    }

    .archive-subtitle[_ngcontent-%COMP%] {
      font-size: 1.125rem;
      color: #6c757d;
      margin: 0;
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

    

    .applied-filters[_ngcontent-%COMP%] {
      background: #e7f0ff;
      border-left: 4px solid #0d6efd;
      padding: 1rem;
      border-radius: 4px;
      margin-bottom: 2rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      align-items: center;
    }

    .applied-filters-label[_ngcontent-%COMP%] {
      font-weight: 600;
      color: #0d6efd;
    }

    .filter-badge[_ngcontent-%COMP%] {
      background: white;
      padding: 0.4rem 0.75rem;
      border-radius: 4px;
      border: 1px solid #0d6efd;
      color: #0d6efd;
      font-size: 0.875rem;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    .remove-filter[_ngcontent-%COMP%] {
      background: none;
      border: none;
      color: #0d6efd;
      cursor: pointer;
      font-weight: bold;
      font-size: 1rem;
      padding: 0;
      line-height: 1;
    }

    .remove-filter[_ngcontent-%COMP%]:hover {
      color: #0b5ed7;
    }

    .posts-list[_ngcontent-%COMP%] {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .post-preview[_ngcontent-%COMP%] {
      display: grid;
      grid-template-columns: 250px 1fr;
      gap: 2rem;
      padding: 1.5rem;
      border: 1px solid #dee2e6;
      border-radius: 8px;
      transition: all 0.3s ease;
    }

    .post-preview[_ngcontent-%COMP%]:hover {
      border-color: #0d6efd;
      box-shadow: 0 4px 12px rgba(13, 110, 253, 0.1);
    }

    .post-preview__image-container[_ngcontent-%COMP%] {
      overflow: hidden;
      border-radius: 5px;
    }

    .post-preview__image[_ngcontent-%COMP%] {
      width: 100%;
      height: 200px;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .post-preview[_ngcontent-%COMP%]:hover   .post-preview__image[_ngcontent-%COMP%] {
      transform: scale(1.05);
    }

    .post-preview__content[_ngcontent-%COMP%] {
      display: flex;
      flex-direction: column;
    }

    .post-preview__title[_ngcontent-%COMP%] {
      font-size: 1.5rem;
      margin: 0 0 0.5rem 0;
      line-height: 1.3;
    }

    .post-preview__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
      color: #212529;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .post-preview__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
      color: #0d6efd;
    }

    .post-preview__date[_ngcontent-%COMP%] {
      font-size: 0.875rem;
      color: #6c757d;
      margin: 0 0 0.5rem 0;
    }

    .post-preview__meta[_ngcontent-%COMP%] {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 0.75rem;
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

    .post-preview__description[_ngcontent-%COMP%] {
      color: #495057;
      margin: 0 0 1rem 0;
      line-height: 1.6;
      flex: 1;
    }

    .post-preview__link[_ngcontent-%COMP%] {
      color: #0d6efd;
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s ease;
      width: fit-content;
    }

    .post-preview__link[_ngcontent-%COMP%]:hover {
      color: #0b5ed7;
    }

    .no-posts[_ngcontent-%COMP%] {
      text-align: center;
      padding: 3rem;
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

    .pagination[_ngcontent-%COMP%] {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin: 2rem 0;
    }

    .page-btn[_ngcontent-%COMP%] {
      padding: 0.5rem 1rem;
      border: 1px solid #0d6efd;
      background: #0d6efd;
      color: white;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
      transition: background 0.2s ease;
    }

    .page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
      background: #0b5ed7;
      border-color: #0b5ed7;
    }

    .page-btn[_ngcontent-%COMP%]:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .page-info[_ngcontent-%COMP%] {
      color: #495057;
    }

    @media (max-width: 768px) {
      .archive-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
        font-size: 1.75rem;
      }

      .filter-tags[_ngcontent-%COMP%] {
        gap: 0.25rem;
      }

      .filter-tag[_ngcontent-%COMP%] {
        padding: 0.4rem 0.75rem;
        font-size: 0.8rem;
      }

      .post-preview[_ngcontent-%COMP%] {
        grid-template-columns: 1fr;
      }

      .post-preview__image-container[_ngcontent-%COMP%] {
        min-height: 200px;
      }

      .post-preview__title[_ngcontent-%COMP%] {
        font-size: 1.25rem;
      }

      .applied-filters[_ngcontent-%COMP%] {
        flex-direction: column;
        align-items: flex-start;
      }
    }`]});let O=h;export{O as default};
