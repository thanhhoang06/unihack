(()=>{var x=Object.defineProperty;var c=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;var f=(t,e,o)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,m=(t,e)=>{for(var o in e||(e={}))g.call(e,o)&&f(t,o,e[o]);if(c)for(var o of c(e))l.call(e,o)&&f(t,o,e[o]);return t};var j=(t,e)=>{var o={};for(var a in t)g.call(t,a)&&e.indexOf(a)<0&&(o[a]=t[a]);if(t!=null&&c)for(var a of c(t))e.indexOf(a)<0&&l.call(t,a)&&(o[a]=t[a]);return o};var i=(t,e,o)=>new Promise((a,n)=>{var p=r=>{try{u(o.next(r))}catch(d){n(d)}},$=r=>{try{u(o.throw(r))}catch(d){n(d)}},u=r=>r.done?a(r.value):Promise.resolve(r.value).then(p,$);u((o=o.apply(t,e)).next())});function s(t){var e;return(e=t.split("/").pop())!=null?e:""}function F(t){return`gid://shopify/Metaobject/${t}`}var I=new Map;function A(t,e){I.set(t,m({},e))}function Q(t,e){return fetch("shopify:admin/api/2026-07/graphql.json",{method:"POST",body:JSON.stringify({query:t,variables:e})}).then(o=>o.json())}function q(t){var e,o,a;return{question:(e=t.question)!=null?e:"",answer:(o=t.answer)!=null?o:"",show_on_faq_page:(a=t.show_on_faq_page)!=null?a:!0}}function b(t){return i(this,null,function*(){let e=yield Q(`#graphql
    query FAQ($id: ID!) {
      metaobject(id: $id) {
        values
      }
    }`,{id:F(t)}),o=q(e.data.metaobject.values);return A(t,o),o})}function y(){return i(this,null,function*(){let e=(yield Q(`#graphql
    query FAQs {
      metaobjects(type: "$app:faq", first: 50, sortKey: "updated_at", reverse: true) {
        edges {
          node {
            id
            values
          }
        }
      }
    }`)).data.metaobjects.edges.map(({node:n})=>m({id:n.id},q(n.values)));for(let o of e){let a=o,{id:n}=a,p=j(a,["id"]);A(s(n),p)}return e})}var _="application/faq";function h(t,e){return{type:"resource_link",uri:`gid://${_}/${s(t)}`,name:e.question,mimeType:_,_meta:{answer:e.answer,show_on_faq_page:e.show_on_faq_page}}}var w=()=>{shopify.tools.register("list_faqs",()=>i(null,null,function*(){return{results:(yield y()).map(e=>h(e.id,e))}})),shopify.tools.register("get_faq",e=>i(null,[e],function*({id:t}){let o=yield b(s(t));return{results:[h(t,o)]}}))};shopify.extend("admin.app.tools.data",(...t)=>w(...t));})();
//# sourceMappingURL=app-tools.js.map
