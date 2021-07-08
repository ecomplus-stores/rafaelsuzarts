(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{194:function(t,s,e){"use strict";var a=e(28),n=(e(10),e(3));var i=(t,[s])=>{s||(s=t.location.pathname);const e="string"==typeof s?s.slice(1):null,a="/"+t.storeId+"@"+e.replace(/\//g,"$")+".json";return Object(n.h)({url:a}).then((t=>{const e=t.data.GET;if(e){const[t,a]=e.split("@");if(a)return{path:s,resource:t,_id:a}}const a=new Error("Resource not found, invalid slug or store ID");throw a.response=t,a}))};var r=(t,[s])=>new Promise(((e,a)=>{const{storeId:i}=t,{resource:r,_id:o}=s;if(r&&o)Object(n.g)({url:`/${r}/${o}.json`,storeId:i}).then((({data:t})=>{e({resource:r,body:t})})).catch(a);else{const t=new Error("Invalid route resource or object ID");t.response={},a(t)}})),o=t=>new Promise(((s,e)=>{const{storeId:a}=t,i=[],r=[];["products","categories","collections","brands"].forEach((t=>{i.push(Object(n.g)({url:`/${t}.json`,storeId:a}).then((s=>{const{result:e}=s.data;Array.isArray(e)&&e.forEach((({_id:s,slug:e,name:a,sku:n})=>{if(e){const i="/"+e;r.find((t=>t.path===i))||r.push({resource:t,_id:s,path:i,name:a,sku:n})}}))})))})),Promise.all(i).then((()=>s(r))).catch(e)})),c=e(2);var u=(t,[s,e=!0])=>{s||(s=t.location.hostname);const a="/domains/"+s+".json";return Object(n.e)({url:a}).then((({data:s})=>{if(e){["store_id","store_object_id","channel_id"].forEach((t=>c.a.set(t,s[t])));const t=s.default_lang;t&&(c.a.set("lang",t),c.a.set("country_code",t.replace(/^[a-z]{2}_/,"").toUpperCase()),"pt_br"===t&&(c.a.set("currency","BRL"),c.a.set("currency_symbol","R$")))}return t.storeId=s.store_id,s}))};s.a=function(t,s="object"==typeof window&&window.location){const e=this;this.storeId=t||a.$ecomConfig.get("store_id"),this.location=s,this.map=function(){return i(e,arguments)},this.resolve=function(){return r(e,arguments)},this.list=function(){return o(e)},this.setupStore=function(){return u(e,arguments)}}},263:function(t,s,e){"use strict";e.d(s,"a",(function(){return a})),e.d(s,"b",(function(){return n}));var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"product",attrs:{"data-product-id":t.body._id,"data-sku":t.body.sku}},[e("a-alert",{attrs:{"can-show":t.hasLoadError,variant:"danger"}},[t._v(" "+t._s(t.i19loadProductErrorMsg)+" "),e("a",{staticClass:"alert-link",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.fetchProduct.apply(null,arguments)}}},[t._v(" "+t._s(t.i19retry)+" ")])]),e("transition",{attrs:{"enter-active-class":"animated fadeIn slower"}},[t.body._id?e("div",{staticClass:"row"},[t._t("gallery-col",(function(){return[e("div",{staticClass:"col-12 col-md-6"},[e(t.isSSR?"portal":"div",{tag:"component",attrs:{selector:"#product-gallery"}},[e("product-gallery",{attrs:{product:t.body,"current-slide":t.currentGalleyImg,"is-s-s-r":t.isSSR},on:{"update:currentSlide":function(s){t.currentGalleyImg=s},"update:current-slide":function(s){t.currentGalleyImg=s}}},[t._t("first-picture")],2),t._t("gallery-footer")],2)],1)]})),e("div",{staticClass:"col"},[t.isSSR?t._e():t._t("heading",(function(){return[e(t.headingTag,{tag:"component",staticClass:"product__name"},[t._v(" "+t._s(t.name)+" ")]),e("p",{staticClass:"product__sku"},[t._v(" COD: "+t._s(t.body.sku)+" ")])]})),e(t.isSSR?"portal":"div",{tag:"component",attrs:{selector:"#product-actions"}},[t._t("rating",(function(){return[t._m(0)]})),t.body.available?t.isInStock?[t._t("prices",(function(){return[e("p",{staticClass:"product__prices"},[e("a-prices",{attrs:{product:Object.assign({},t.body,t.selectedVariation,t.finalPrices),"is-literal":!0,"is-big":!0},on:{"fix-price":function(s){return t.fixedPrice=s}}}),t._t("discount-tag",(function(){return[t.discount>0?e("span",{staticClass:"product__discount"},[t._v(" "+t._s(t.i19discountOf)+" "),e("strong",[t._v(t._s(t.discount)+"%")])]):t._e()]}),null,{discount:t.discount})],2)]})),t.hasVariations?t._t("variations",(function(){return[e("product-variations",{attrs:{product:t.body,"selected-id":t.selectedVariationId},on:{"update:selectedId":function(s){t.selectedVariationId=s},"update:selected-id":function(s){t.selectedVariationId=s},"select-option":t.handleGridOption}}),e("a-alert",{attrs:{"can-show":t.hasClickedBuy&&!t.selectedVariationId}},[t._v(" "+t._s(t.i19selectVariationMsg)+" ")]),t._t("variations-info")]})):t._e(),t.body.customizations?t._t("customizations",(function(){return t._l(t.body.customizations,(function(s){return s.custom_value?e("div",{key:s._id,staticClass:"product__customization form-group",class:s.grid_id?"product__customization--"+s.grid_id:null},[e("label",{attrs:{for:"c-"+s._id}},[t._v(" "+t._s(s.label)+" "),s.add_to_price?e("span",{staticClass:"badge badge-secondary"},[t._v(" "+t._s(t.formatAdditionalPrice(s.add_to_price))+" ")]):t._e()]),e("input",{staticClass:"form-control",attrs:{type:"text",id:"c-"+s._id},on:{keyup:function(e){return t.setCustomizationOption(s,e.target.value)}}})]):t._e()}))})):t._e(),t.isKit?e("div",{staticClass:"product__kit"},[t._t("kit",(function(){return[e("transition",{attrs:{"enter-active-class":"animated fadeInUp"}},[t.kitItems.length?e("quantity-selector",{attrs:{items:t.kitItems,min:t.body.min_quantity,max:t.body.quantity,slug:t.body.slug,"kit-product-id":t.body._id,"kit-name":t.name,"kit-price":t.fixedPrice},on:{buy:function(s){return t.$emit("buy",s)}},scopedSlots:t._u([{key:"buy-button-content",fn:function(){return[t._t("buy-button-content")]},proxy:!0}],null,!0)}):t._e()],1),t.kitItems.length?t._e():e("span",{staticClass:"product__kit-loading spinner-border",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[t._v("Loading...")])])]}),null,{kitItems:t.kitItems})],2):[e("div",{staticClass:"product__buy"},[e("span",{on:{click:t.buy}},[t._t("buy",(function(){return[e("button",{staticClass:"btn btn-lg btn-primary",attrs:{type:"button",disabled:t.hasClickedBuy&&!t.isOnCart}},[t._t("buy-button-content",(function(){return[e("i",{staticClass:"fas fa-shopping-bag mr-1"}),t._v(" "+t._s(t.strBuy)+" ")]}))],2)]}),null,{hasClickedBuy:t.hasClickedBuy,isOnCart:t.isOnCart})],2)]),t.isLowQuantity?e("p",{staticClass:"product__short-stock"},[e("i",{staticClass:"fas fa-forward mr-1"}),t._v(" "+t._s(t.i19only)+" "),e("strong",[t._v(t._s(t.productQuantity))]),t._v(" "+t._s(t.i19unitsInStock)+" ")]):t._e()],t.discount>0?e("span",{staticClass:"product__discount_counter"},[e("strong",[t._v(" Oferta"),e("br"),t._v("acaba em: "),e("div",[e("span",{staticClass:"h"}),t._v(":"),e("span",{staticClass:"m"}),t._v(":"),e("span",{staticClass:"s"})])])]):t._e(),t._t("share",(function(){return[t.body.slug?e("a-share",{staticClass:"mb-3",attrs:{url:"/"+t.body.slug,title:t.body.name,description:t.body.short_description}}):t._e()]})),e("transition",{attrs:{"enter-active-class":"animated fadeInUp"}},[!t.isQuickview&&t.paymentOptions.length?t._t("payment-gateways",(function(){return[e("article",{key:"payment-"+t.fixedPrice},[t._m(1)])]}),null,{paymentOptions:t.paymentOptions}):t._e()],2),t.body.production_time&&t.body.production_time.days?e("p",{staticClass:"product__production"},[e("i",{staticClass:"fas fa-info-circle mr-1"}),t._v(" "+t._s(t.i19productionDeadline)+": "),e("strong",[t._v(" "+t._s(t.body.production_time.days)+" "+t._s(t.body.production_time.working_days?t.i19workingDays:t.i19days)+" "),t.body.production_time.cumulative?[t._v(" "+t._s(t.i19perUnit)+" ")]:t._e()],2)]):t._e(),t.isQuickview?t._e():t._t("shipping",(function(){return[e("shipping-calculator",{attrs:{shippedItems:[Object.assign({},t.body,{product_id:t.body._id,quantity:t.body.min_quantity||1})]},scopedSlots:t._u([{key:"free-from-value",fn:function(s){var a=s.amountSubtotal,n=s.freeFromValue;return[e("div",{staticClass:"product__free-shipping-from"},[t._v(" "+t._s(t.i19freeShippingFrom)+" "),e("strong",[t._v(" "+t._s(Math.ceil(n/a))+" "+t._s(t.i19units)+" ")])])]}}],null,!1,3999804120)})]})),t._t("track-price",(function(){return[t._m(2)]}))]:t._t("out-of-stock",(function(){return[e("p",{staticClass:"product__out-of-stock"},[t._v(" "+t._s(t.i19outOfStock)+" ")])]})):t._t("unavailable",(function(){return[e("p",{staticClass:"product__unavailable"},[t._v(" "+t._s(t.i19unavailable)+" ")])]}))],2),!t.isSSR&&t.body.short_description?t._t("short-description",(function(){return[e("p",{staticClass:"product__info lead"},[t._v(" "+t._s(t.body.short_description)+" ")])]})):t._e()],2)],2):t._e()]),t.body._id?t._e():t._t("default")],2)},n=[function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",{staticClass:"product__rating",attrs:{"data-sku":t.body.sku}})},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"product__payment card mb-3"},[e("a",{staticClass:"card-header",attrs:{id:"product-payment-header",role:"button",href:"#product-payment","data-toggle":"collapse","aria-expanded":"false","aria-controls":"product-payment"}},[e("span",[t._v(t._s(t.i19paymentOptions))]),e("i",{staticClass:"fas fa-chevron-down"})]),e("div",{staticClass:"collapse",attrs:{id:"product-payment","aria-labelledby":"product-payment-header"}},[e("div",{staticClass:"card-body pb-0"},t._l(t.paymentOptions,(function(s){return e("div",{key:s.app_id,staticClass:"mb-3",attrs:{id:"product-payment-"+s.app_id}},t._l(s.payment_gateways,(function(a,n){return e("payment-option",{key:s.app_id+"-"+n,attrs:{"payment-gateway":a,"installments-option":s.installments_option,price:t.fixedPrice}})})),1)})),0)])])},function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",{staticClass:"product__track-price",attrs:{"data-sku":t.body.sku}})}]},361:function(t,s,e){"use strict";e.r(s);e(111);var a=e(43),n=e(194),i=e(0),r=e(29),o=e(257),c=e(259);const u=Object(i.$)("#fallback-404");if(u.length){const t=new URLSearchParams(window.location.search).get("url");if(t){const s=new n.a;u.html('<div class="spinner-border" role="status"></div>');const e=()=>{u.html(Object(i.$)("<h3>",{class:"my-4",html:['<i class="text-muted fas fa-exclamation-triangle mr-3"></i>',Object(a.a)({pt_br:"Página não encontrada",en_us:"Page not found"})]})),s.list().then((t=>{u.append([Object(i.$)("<p>",{class:"lead",html:Object(a.a)({pt_br:"Mapa do site:",en_us:"Sitemap:"})}),Object(i.$)("<ul>",{html:t.map((({path:t})=>`<li><a href="${t}">${t}</a></li>`))})])})).catch(console.error)};s.map(t).then((t=>{const{resource:e,_id:a}=t;switch(e){case"products":return new r.a({render:t=>t(o.a,{props:{productId:a}})});case"brands":case"categories":return s.resolve(t).then((({body:t})=>new r.a({render:s=>s(c.a,{props:{[e]:[t.name]}})})))}})).then((t=>{t?t.$mount(u[0]):e()})).catch((t=>{console.error(t),e()}))}}}},0,[30,31]]);