import"./assets/vendor-Bgfrje-I.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const i=document.querySelector("body"),n=`
<div class="container">
      <form>
        <input
          type="text"
          class="search-input"
          placeholder="Search images..."
          name="searchValue"
        />
        <button type="submit">Search</button>
      </form>
      <ul class="gallery"></ul>
</div>
`;i.insertAdjacentHTML("afterbegin",n);
//# sourceMappingURL=index.js.map
