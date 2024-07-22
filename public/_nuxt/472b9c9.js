(window.webpackJsonp=window.webpackJsonp||[]).push([[7,28,52],{473:function(t,e,r){"use strict";r(123),r(50);e.a={data:function(){return{itemList:[],cbList:[]}},methods:{checkAll:function(t){t.target.checked?this.cbList=this.itemList.map((function(i){return i.id})):this.cbList=[]},deleteBulk:function(){var t;null!==(t=this.cbList)&&void 0!==t&&t.length&&this.$refs.listPage.deleteItem(this.cbList.join(","))}}}},675:function(t,e,r){"use strict";r.r(e);r(20),r(21),r(25),r(26),r(17),r(7),r(14);var n=r(1),o=r(4),l=(r(22),r(123),r(50),r(32),r(199)),c=r(10),d=r(86);function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function _(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f={name:"Invoice",data:function(){return{}},props:{order:{type:Object}},mixins:[d.a],directives:{},components:{VueHtml2pdf:l.a},watch:{},computed:_(_(_(_({isFreeShipping:function(){return!(parseFloat(this.shippingPrice)>0)},userEmail:function(){var t,e,r,n;return null!==(t=null!==(e=null===(r=this.order)||void 0===r||null===(r=r.user)||void 0===r?void 0:r.email)&&void 0!==e?e:null===(n=this.order)||void 0===n||null===(n=n.guest_user)||void 0===n?void 0:n.email)&&void 0!==t?t:this.$t("prod.na")},currencyPosition:function(){var t;return null===(t=this.setting)||void 0===t?void 0:t.currency_position},totalPrice:function(){var t;return null===(t=this.order)||void 0===t?void 0:t.calculated.total_price},voucherPrice:function(){var t;return null===(t=this.order)||void 0===t?void 0:t.calculated.voucher_price},bundleOffer:function(){var t;return null===(t=this.order)||void 0===t?void 0:t.calculated.bundle_offer},shippingPrice:function(){var t;return null===(t=this.order)||void 0===t?void 0:t.calculated.shipping_price},taxPrice:function(){var t;return null===(t=this.order)||void 0===t?void 0:t.calculated.tax},subtotalPrice:function(){var t;return null===(t=this.order)||void 0===t?void 0:t.calculated.subtotal},currencyIcon:function(){var t;return(null===(t=this.setting)||void 0===t?void 0:t.currency_icon)||"$"}},Object(c.c)("admin",["isVendor"])),Object(c.c)("resource",["countryList"])),Object(c.c)("site-setting",["siteSetting"])),Object(c.c)("setting",["setting","base64SiteLogo","storeData"])),methods:_(_(_({generateAddress:function(t){if(!t)return this.$t("prod.na");var e=[];if(e.push(null==t?void 0:t.address_1),null!=t&&t.address_2&&e.push(null==t?void 0:t.address_2),e.push((null==t?void 0:t.city)+"-"+(null==t?void 0:t.zip)),this.countryList&&this.countryList[null==t?void 0:t.country]){var r,n=this.countryList[null==t?void 0:t.country];if(n.states[null==t?void 0:t.state])e.push(null===(r=n.states[t.state])||void 0===r?void 0:r.name);e.push(null==n?void 0:n.name)}return e.join(", ")},generatingPdf:function(){var t=this;this.$nextTick((function(){t.$refs.html2Pdf.generatePdf()}))},generatingAttribute:function(t){var e;return null==t||null===(e=t.updated_inventory)||void 0===e||null===(e=e.inventory_attributes)||void 0===e?void 0:e.map((function(i){var t,e;return[null==i||null===(t=i.attribute_value)||void 0===t||null===(t=t.attribute)||void 0===t?void 0:t.title,null==i||null===(e=i.attribute_value)||void 0===e?void 0:e.title]}))}},Object(c.b)("resource",["setCountryList"])),Object(c.b)("common",["getById"])),Object(c.b)("setting",["setConvertImage"])),beforeCreate:function(){},destroyed:function(){},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.countryList){e.next=7;break}return t.loading=!0,e.next=4,t.getById({params:null,id:"countries",api:"resource"});case 4:data=e.sent,t.setCountryList(data),t.loading=!1;case 7:if(t.base64SiteLogo){e.next=10;break}return e.next=10,t.setConvertImage(null===(r=t.siteSetting)||void 0===r?void 0:r.email_logo);case 10:case"end":return e.stop()}}),e)})))()}},h=r(15),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e("client-only",[e("vue-html2pdf",{ref:"html2Pdf",attrs:{"show-layout":!1,"float-layout":!0,"enable-download":!0,"preview-modal":!1,"paginate-elements-by-height":1400,filename:"Invoice-".concat(t.order.order),"pdf-quality":3,"manual-pagination":!1,"pdf-format":"a4","pdf-orientation":"portrait"}},[e("div",{staticClass:"order-wrapper invoice-wrapper f-9",attrs:{slot:"pdf-content"},slot:"pdf-content"},[e("div",{staticClass:"sided p-30 align-start"},[e("div",{staticClass:"mx-w-350x"},[e("img",{staticClass:"h-25x w-auto mb-10",attrs:{src:"data:image/png;base64,".concat(t.base64SiteLogo)}}),t._v(" "),e("h4",{staticClass:"fw-600 mtb-5"},[t._v("\n              "+t._s(t.getDataFromObject(t.storeData,"name"))+"\n            ")]),t._v(" "),e("p",[t._v(" "+t._s(t.generateAddress(t.setting)))]),t._v(" "),e("p",[t._v("Phone: "+t._s(t.getDataFromObject(t.setting,"phone",t.$t("prod.na"))))])]),t._v(" "),e("div",[e("h3",{staticClass:"mb-5 bold"},[t._v(t._s(t.$t("setting.inv")))]),t._v(" "),e("ul",{staticClass:"mx-w-400x order-details lh-2"},[e("li",[e("span",[t._v(t._s(t.$t("fSale.orderUp")))]),t._v(" "),e("span",[t._v("#"+t._s(t.order.order))])]),t._v(" "),e("li",[e("span",[t._v(t._s(t.$t("setting.od")))]),t._v(" "),e("span",[t._v(t._s(t.order.created))])]),t._v(" "),t.isVendor?t._e():e("li",[e("span",[t._v(t._s(t.$t("setting.oa")))]),t._v(" "),e("span",[t._v(t._s(t.priceFormatting(t.totalPrice)))])])])])]),t._v(" "),e("div",{staticClass:"plr-30"},[e("table",{staticClass:"mn-w-600x no-bg mt-0 shipping-table"},[e("tr",{staticClass:"lite-bold"},[e("th",[t._v(t._s(t.$t("fSale.shipTo")))]),t._v(" "),e("th",[t._v(t._s(t.$t("setting.om")))])]),t._v(" "),e("tr",[e("td",{staticClass:"w-50"},[e("div",{staticClass:"mx-w-300x"},[e("b",[t._v(t._s(t.getDataFromObject(t.order,"address.name",t.$t("prod.na"))))]),t._v(" "),t.getDataFromObject(t.order,"address")?e("span",{staticClass:"block"},[t._v("\n                    "+t._s(t.generateAddress(t.getDataFromObject(t.order,"address"))))]):t._e(),t._v(" "),e("span",{staticClass:"block"},[t._v("Email: "+t._s(t.userEmail))]),t._v(" "),e("span",{staticClass:"block"},[t._v("Phone: "+t._s(t.getDataFromObject(t.order,"address.phone",t.$t("prod.na"))))])])]),t._v(" "),e("td",{staticClass:"w-50"},[t._v(t._s(t.paymentTypes[t.order.order_method]))])])]),t._v(" "),e("table",{staticClass:"mn-w-600x no-bg"},[e("tr",{staticClass:"lite-bold"},[e("th",[t._v(t._s(t.$t("index.title")))]),t._v(" "),e("th",[t._v(t._s(t.$t("fSale.dFee")))]),t._v(" "),e("th",[t._v(t._s(t.$t("fSale.qty")))]),t._v(" "),e("th",[t._v(t._s(t.$t("brand.price")))]),t._v(" "),e("th",[t._v(t._s(t.$t("fSale.total")))])]),t._v(" "),t._l(t.order.ordered_products,(function(r,n){return e("tr",{key:n},[e("td",{staticStyle:{"min-width":"250px"}},[t._v("\n                "+t._s(r.product.title)+"\n                "),e("span",{staticStyle:{display:"block"}},[t._l(t.generatingAttribute(r),(function(i){return e("span",{staticClass:"mr-15"},[e("b",{staticClass:"mr-10"},[t._v(t._s(i[0])+":")]),t._v(" "+t._s(i[1])+"\n                  ")])})),t._v(" "),r.updated_inventory.sku?e("span",{staticClass:"block mt-5"},[t._v("\n                    SKU: "+t._s(r.updated_inventory.sku)+"\n                  ")]):t._e()],2)]),t._v(" "),e("td",[t._v(t._s(t.priceFormatting(r.shipping_price)))]),t._v(" "),e("td",[t._v(t._s(r.quantity))]),t._v(" "),e("td",[t._v(t._s(t.priceFormatting(r.selling)))]),t._v(" "),e("td",[t._v(t._s(t.priceFormatting(r.selling*r.quantity)))])])}))],2),t._v(" "),t.isVendor?t._e():e("div",{staticClass:"dply-felx j-right"},[e("ul",{staticClass:"mx-w-400x order-details order-price"},[e("li",[e("span",[t._v(t._s(t.$t("fSale.sTotal")))]),t._v(" "),e("span",[t._v(t._s(t.priceFormatting(t.subtotalPrice)))])]),t._v(" "),e("li",[e("span",[t._v(t._s(t.$t("fSale.sCost")))]),t._v(" "),t.isFreeShipping?e("span",[t._v("\n                  "+t._s(t.$t("ship.fre"))+"\n                ")]):e("span",[t._v(t._s(t.priceFormatting(t.shippingPrice)))])]),t._v(" "),t.bundleOffer?e("li",[e("span",[t._v(t._s(t.$t("fSale.bOffer")))]),t._v(" "),e("span",[t._v(t._s(t.priceFormatting(t.bundleOffer)))])]):t._e(),t._v(" "),t.voucherPrice?e("li",[e("span",[t._v(t._s(t.$t("fSale.voucher")))]),t._v(" "),e("span",[t._v(t._s(t.priceFormatting(t.voucherPrice)))])]):t._e(),t._v(" "),t.taxPrice?e("li",[e("span",[t._v(t._s(t.$t("fSale.tax")))]),t._v(" "),e("span",[t._v(t._s(t.priceFormatting(t.taxPrice)))])]):t._e(),t._v(" "),e("li",[e("span",[t._v(t._s(t.$t("fSale.total")))]),t._v(" "),e("span",[t._v(t._s(t.priceFormatting(t.totalPrice)))])])])]),t._v(" "),e("table",{staticClass:"w-50 no-bg mt-0 shipping-table single-table"},[e("tr",{staticClass:"lite-bold"},[e("th",[t._v(t._s(t.$t("setting.notes")))])]),t._v(" "),e("tr",[e("td",{staticClass:"w-50"},[e("p",{staticClass:"semi-bold italic mb-10"},[t._v("\n                  "+t._s(t.$t("setting.query"))+"\n                ")]),t._v(" "),e("p",[t._v("\n                  "+t._s(t.$t("setting.query"))+"\n                  "+t._s(t.$t("setting.regard"))+": "+t._s(t.getDataFromObject(t.setting,"phone",t.$t("prod.na")))+"\n                ")])])])])])])])],1),t._v(" "),e("div",{staticClass:"dply-felx j-right mt-20 mt-sm-15"},[e("button",{staticClass:"plr-20 dply-felx outline-btn",on:{click:function(e){return e.preventDefault(),t.generatingPdf.apply(null,arguments)}}},[e("i",{staticClass:"icon print-icon mr-10"}),t._v("\n      "+t._s(t.$t("setting.pi"))+"\n    ")])])],1)}),[],!1,null,null,null);e.default=component.exports},692:function(t,e,r){"use strict";r.r(e);r(20),r(21),r(25),r(26),r(17),r(7),r(14);var n=r(4),o=(r(50),r(10)),l=r(86),c=r(474);function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var v={name:"VendorOrders",data:function(){return{}},props:{},mixins:[l.a],components:{ListPage:c.default},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({currencyIcon:function(){var t;return(null===(t=this.setting)||void 0===t?void 0:t.currency_icon)||"$"}},Object(o.c)("setting",["setting"])),methods:{shippingPrice:function(t,e){return parseInt(e)===this.shippingTypeIn.location?parseFloat(t.price):parseInt(e)===this.shippingTypeIn.pickup?parseFloat(t.pickup_price):void 0},generatingAttribute:function(t){var e;return null==t||null===(e=t.updated_inventory)||void 0===e||null===(e=e.inventory_attributes)||void 0===e?void 0:e.map((function(i){var t,e;return[null==i||null===(t=i.attribute_value)||void 0===t||null===(t=t.attribute)||void 0===t?void 0:t.title,null==i||null===(e=i.attribute_value)||void 0===e?void 0:e.title]}))}},mounted:function(){}},_=v,f=r(15),component=Object(f.a)(_,(function(){var t=this,e=t._self._c;return e("list-page",{ref:"listPage",attrs:{"list-api":"getVendorOrders","route-name":"orders",name:t.$t("fSale.orderD"),gate:"order"},scopedSlots:t._u([{key:"table-top",fn:function(t){t.orderOptions;return[e("div")]}},{key:"table",fn:function(r){var n=r.list;return[e("tr",{staticClass:"lite-bold"},[e("th",[t._v(t._s(t.$t("index.title")))]),t._v(" "),e("th",[t._v(t._s(t.$t("fSale.shipTo")))]),t._v(" "),e("th",[t._v(t._s(t.$t("fSale.dFee"))+"("+t._s(t.currencyIcon)+")")]),t._v(" "),e("th",[t._v(t._s(t.$t("fSale.qty")))]),t._v(" "),e("th",[t._v(t._s(t.$t("fSale.attr")))]),t._v(" "),e("th",[t._v(t._s(t.$t("fSale.bOffer"))+"("+t._s(t.currencyIcon)+")")]),t._v(" "),e("th",[t._v(t._s(t.$t("brand.price"))+"("+t._s(t.currencyIcon)+")")]),t._v(" "),e("th",[t._v(t._s(t.$t("fSale.total"))+"("+t._s(t.currencyIcon)+")")]),t._v(" "),e("th",[t._v(t._s(t.$t("category.created")))])]),t._v(" "),t._l(n,(function(r,n){return e("tr",{key:n},[e("td",[e("nuxt-link",{staticClass:"dply-felx j-left link",attrs:{to:"/products/".concat(r.product.id)}},[e("img",{staticClass:"mr-20",attrs:{src:t.getThumbImageURL(r.product.image),alt:r.title}}),t._v(" "),e("h5",{staticClass:"mx-w-400x"},[t._v(t._s(r.product.title))])])],1),t._v(" "),e("td",[t._v(t._s(t.shippingType[r.shipping_type]))]),t._v(" "),e("td",[t._v(t._s(t.shippingPrice(r.shipping_place,r.shipping_type)))]),t._v(" "),e("td",[t._v(t._s(r.quantity))]),t._v(" "),e("td",[e("span",t._l(t.generatingAttribute(r),(function(i){return e("span",{staticClass:"mr-15"},[e("b",{staticClass:"mr-10"},[t._v(t._s(i[0])+":")]),t._v(" "+t._s(i[1])+"\n          ")])})),0)]),t._v(" "),e("td",[t._v(t._s(r.selling*r.bundle_offer||0))]),t._v(" "),e("td",[t._v(t._s(r.selling))]),t._v(" "),e("td",[t._v(t._s(r.selling*r.quantity))]),t._v(" "),e("td",[t._v(t._s(r.created))])])}))]}}])})}),[],!1,null,null,null);e.default=component.exports},846:function(t,e,r){"use strict";r.r(e);r(37),r(44),r(20),r(25),r(26),r(17);var n=r(4),o=(r(21),r(123),r(32),r(7),r(14),r(101),r(86)),l=r(474),c=r(644),d=r(692),v=r(10),_=r(473),f=r(102),h=r(675);function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var O={name:"OrderList",middleware:["common-middleware","auth"],data:function(){return{pdfList:[],loaded:!1,orderByOrders:{order_method:{title:this.$t("fSale.pMethod")},status:{title:this.$t("category.status")},total_amount:{title:this.$t("brand.price")},user_id:{title:this.$t("fSale.user")},created_at:{title:this.$t("category.date")}},checkedFilter:[],filterOptions:[{key:"cancelled",title:this.$t("index.orderCan")},{key:"cash_on_delivery",title:this.$t("fSale.cod")},{key:"card_payment",title:this.$t("fSale.card")},{key:"paypal",title:this.$t("fSale.paypal")},{key:"paid",title:this.$t("fSale.paid")},{key:"unpaid",title:this.$t("fSale.unpaid")}]}},mixins:[o.a,_.a],components:{Invoice:h.default,InlinePopOver:f.default,VendorOrders:d.default,ListPage:l.default,TableSort:c.default},computed:m({currencyIcon:function(){var t;return(null===(t=this.setting)||void 0===t?void 0:t.currency_icon)||"$"}},Object(v.c)("setting",["setting"])),methods:m({downloadPdf:function(){var t,e=this;if(this.pdfList=[],null!==(t=this.cbList)&&void 0!==t&&t.length){var r=[];this.itemList.forEach((function(i){r[i.id]=i})),this.cbList.forEach((function(i){r[i]&&e.pdfList.push(r[i])}))}this.$refs.bulkDelete.closePop();var i=0,n=this,o=setInterval((function(){if(n.cbList.length>i){var t,e="invoice".concat(n.cbList[i]);if(n.$refs[e].length>0)null===(t=n.$refs[e][0])||void 0===t||t.generatingPdf()}else clearInterval(o);i++}),200)},deleteAll:function(){this.$refs.bulkDelete.closePop(),this.deleteBulk()},deletedOrder:function(){this.emptyDashboard()},filterChanged:function(){this.$router.push({query:m(m({},this.$route.query),{},{page:1,orderBy:"created_at",orderByType:"desc",filter:this.checkedFilter.join(",")})})},userStr:function(t){var e,r,n;return null!==(e=null==t||null===(r=t.address)||void 0===r?void 0:r.name)&&void 0!==e?e:null==t||null===(n=t.address)||void 0===n?void 0:n.email},voucherStr:function(t){return t.voucher?"".concat(t.offered," (").concat(t.voucher,")"):this.$t("prod.na")}},Object(v.b)("dashboard",["emptyDashboard"])),mounted:function(){var t;this.checkedFilter=(null===(t=this.$route)||void 0===t||null===(t=t.query)||void 0===t||null===(t=t.filter)||void 0===t?void 0:t.split(","))||[]}},k=r(15),component=Object(k.a)(O,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticStyle:{height:"0",overflow:"hidden"}},t._l(t.pdfList,(function(data,t){return e("div",{key:t},[e("invoice",{ref:"invoice".concat(data.id),refInFor:!0,attrs:{order:data}})],1)})),0),t._v(" "),e("list-page",{ref:"listPage",attrs:{"list-api":"getVendorOrders","delete-api":"deleteOrder","route-name":"orders",name:t.$t("fSale.orderD"),"order-options":t.orderByOrders,gate:"order"},on:{deleted:t.deletedOrder,list:function(e){t.itemList=e}},scopedSlots:t._u([{key:"table-top",fn:function(r){var n=r.orderOptions;return[e("div",{staticClass:"dply-felx gap-10 j-left f-wrap mb-15"},[e("table-sort",{attrs:{"order-by-options":n}}),t._v(" "),e("inline-pop-over",{ref:"bulkDelete",staticClass:"bulk-action mt-md-10",attrs:{arrow:!0},scopedSlots:t._u([{key:"button",fn:function(){return[t._v("\n              "+t._s(t.$t("title.act"))+"\n            ")]},proxy:!0},{key:"content",fn:function(){return[e("button",{staticClass:"outline-btn",on:{click:function(e){return e.preventDefault(),t.downloadPdf.apply(null,arguments)}}},[t._v("\n                "+t._s(t.$t("setting.pi"))+"\n              ")])]},proxy:!0}],null,!0)})],1),t._v(" "),e("ul",{staticClass:"order-cb"},t._l(t.filterOptions,(function(r){return e("li",{key:r.key},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkedFilter,expression:"checkedFilter"}],staticClass:"styled-checkbox",attrs:{id:"checkbox-".concat(r.key),type:"checkbox"},domProps:{value:r.key,checked:Array.isArray(t.checkedFilter)?t._i(t.checkedFilter,r.key)>-1:t.checkedFilter},on:{change:[function(e){var n=t.checkedFilter,o=e.target,l=!!o.checked;if(Array.isArray(n)){var c=r.key,d=t._i(n,c);o.checked?d<0&&(t.checkedFilter=n.concat([c])):d>-1&&(t.checkedFilter=n.slice(0,d).concat(n.slice(d+1)))}else t.checkedFilter=l},t.filterChanged]}}),t._v(" "),e("label",{attrs:{for:"checkbox-".concat(r.key)}},[t._v("\n              "+t._s(r.title)+"\n            ")])])})),0)]}},{key:"table",fn:function(r){var n=r.list;return[e("tr",{staticClass:"lite-bold"},[e("th",[e("input",{attrs:{type:"checkbox"},on:{change:t.checkAll}})]),t._v(" "),e("th",[t._v(t._s(t.$t("fSale.orderUp")))]),t._v(" "),e("th",[t._v(t._s(t.$t("category.status")))]),t._v(" "),e("th",[t._v(t._s(t.$t("fSale.pMethod")))]),t._v(" "),e("th",[t._v(t._s(t.$t("fSale.pStatus")))]),t._v(" "),e("th",[t._v(t._s(t.$t("fSale.voucher")))]),t._v(" "),e("th",[t._v(t._s(t.$t("fSale.user")))]),t._v(" "),e("th",[t._v(t._s(t.$t("fSale.amount"))+"("+t._s(t.currencyIcon)+")")]),t._v(" "),e("th",[t._v(t._s(t.$t("category.created")))]),t._v(" "),e("th")]),t._v(" "),t._l(n,(function(r,n){return e("tr",{key:n,class:{"new-data":!parseInt(r.viewed)}},[e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.cbList,expression:"cbList"}],attrs:{type:"checkbox"},domProps:{value:r.id,checked:Array.isArray(t.cbList)?t._i(t.cbList,r.id)>-1:t.cbList},on:{change:function(e){var n=t.cbList,o=e.target,l=!!o.checked;if(Array.isArray(n)){var c=r.id,d=t._i(n,c);o.checked?d<0&&(t.cbList=n.concat([c])):d>-1&&(t.cbList=n.slice(0,d).concat(n.slice(d+1)))}else t.cbList=l}}})]),t._v(" "),e("td",[e("nuxt-link",{staticClass:"dply-felx j-left link",attrs:{to:"/orders/".concat(r.id)}},[t._v("\n              #"+t._s(r.order)+"\n            ")])],1),t._v(" "),e("td",[t._v(t._s(t.orderStatus[r.status].title))]),t._v(" "),e("td",{staticClass:"mn-w-80x"},[t._v(t._s(t.paymentTypes[r.order_method]))]),t._v(" "),e("td",{class:{"color-success":parseInt(r.payment_done)===t.status.PUBLIC}},[t._v("\n            "+t._s(parseInt(r.payment_done)===t.status.PUBLIC?t.$t("fSale.paid"):t.$t("fSale.unpaid"))+"\n          ")]),t._v(" "),e("td",[t._v(t._s(t.voucherStr(r)))]),t._v(" "),e("td",[e("span",{staticClass:"ellipsis mx-w-150x"},[t._v(t._s(t.userStr(r)))])]),t._v(" "),e("td",{staticClass:"mn-w-90x"},[t._v(t._s(r.total_amount))]),t._v(" "),e("td",{staticClass:"mn-w-90x"},[t._v(t._s(r.created))]),t._v(" "),e("td",{staticClass:"ptb-10"},[t.$can("order","view")?e("button",{staticClass:"lite-btn",on:{click:function(e){return e.preventDefault(),t.$refs.listPage.editItem(r.id)}}},[t._v("\n              "+t._s(t.$t("fSale.view")))]):t._e()])])}))]}}])})],1)}),[],!1,null,"a437732a",null);e.default=component.exports;installComponents(component,{InlinePopOver:r(102).default})}}]);