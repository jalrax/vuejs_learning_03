(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["portfolio"],{"1e15":function(t,n,i){},7572:function(t,n,i){"use strict";i.r(n);var s=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",t._l(t.stocks,function(t){return i("Stock",{attrs:{stock:t}})}))},e=[],a=(i("cadf"),i("551c"),i("097d"),function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"col-sm-6 col-md-4"},[i("div",{staticClass:"panel panel-info"},[i("div",{staticClass:"panel-heading"},[i("h3",{staticClass:"panel-title"},[t._v("\n        "+t._s(t.stock.name)+"\n        "),i("small",[t._v("(Price: "+t._s(t._f("currency")(t.stock.price))+" | Quantity: "+t._s(t.stock.quantity)+")")])])]),i("div",{staticClass:"panel-body"},[i("div",{staticClass:"pull-left"},[i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],staticClass:"form-control",class:{danger:t.insufficientQuantity},attrs:{type:"number",placeholder:"Quantity",min:"0"},domProps:{value:t.quantity},on:{input:function(n){n.target.composing||(t.quantity=n.target.value)}}})])]),i("div",{staticClass:"pull-right"},[i("button",{staticClass:"btn btn-info",class:{"btn-danger":t.insufficientQuantity},attrs:{disabled:t.insufficientQuantity||t.quantity<=0||!Number.isInteger(+this.quantity)},on:{click:t.sellStock}},[t._v(" Sell\n        ")])])])])])}),o=[],c={name:"Stock",props:["stock"],data:function(){return{quantity:0}},methods:{sellStock:function(){var t={stockId:this.stock.id,stockPrice:this.stock.price,quantity:this.quantity};this.$store.dispatch("sellStock",t),this.quantity=0}},computed:{funds:function(){return this.$store.getters.funds},insufficientQuantity:function(){return this.quantity>this.stock.quantity}}},u=c,l=(i("ffcb"),i("2877")),r=Object(l["a"])(u,a,o,!1,null,"b7e3d4ea",null);r.options.__file="Stock.vue";var f=r.exports,d={name:"Portfolio",computed:{stocks:function(){return this.$store.getters.stockPortfolio}},components:{Stock:f}},p=d,v=(i("b6eb"),Object(l["a"])(p,s,e,!1,null,"0607f0aa",null));v.options.__file="Portfolio.vue";n["default"]=v.exports},b6eb:function(t,n,i){"use strict";var s=i("1e15"),e=i.n(s);e.a},d6ed:function(t,n,i){},ffcb:function(t,n,i){"use strict";var s=i("d6ed"),e=i.n(s);e.a}}]);
//# sourceMappingURL=portfolio.50e1c278.js.map