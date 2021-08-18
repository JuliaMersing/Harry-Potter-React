(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],[,,,,function(e,t,c){},,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(5),l=c.n(r),s=(c(10),c(2)),i=function(){return fetch("http://hp-api.herokuapp.com/api/characters").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.name,image:e.image,id:e.actor,house:e.house,ancestry:e.ancestry}}));return console.log(t),t}))},o=(c(11),c(0)),u=function(e){return Object(o.jsxs)("div",{className:"character",children:[Object(o.jsx)("div",{className:"character__name",children:Object(o.jsx)("h4",{children:e.character.name})}),Object(o.jsx)("img",{className:"character__img",src:e.character.image,alt:e.character.name}),Object(o.jsxs)("div",{className:"character__info",children:[Object(o.jsx)("p",{className:"character__text-info",children:"Gryffindor"===e.character.house?Object(o.jsx)("span",{children:"\ud83e\udd81 Gryffindor "}):"Slytherin"===e.character.house?Object(o.jsx)("span",{children:"\ud83d\udc0d Slytherin "}):"Hufflepuff"===e.character.house?Object(o.jsx)("span",{children:"\ud83e\udd9d Hufflepuff"}):"Ravenclaw"===e.character.house?Object(o.jsx)("span",{children:"\ud83e\udd85 Ravenclaw"}):""===e.character.house?Object(o.jsx)("span",{children:"No House"}):void 0}),Object(o.jsx)("p",{className:"character__text-info",children:"Half-blood"===e.character.ancestry?Object(o.jsx)("span",{children:"\ud83e\ude78 Half-blood "}):"Pure-blood"===e.character.ancestry?Object(o.jsx)("span",{children:"\ud83e\uddd9\u200d\u2642\ufe0f Pure-blood "}):"Squib"===e.character.ancestry?Object(o.jsx)("span",{children:"\ud83e\udd21 Squib"}):"Muggleborn"===e.character.ancestry?Object(o.jsx)("span",{children:" \ud83e\uddb9\u200d\u2640\ufe0f Muggleborn"}):""===e.character.ancestry?Object(o.jsx)("span",{children:" \u2754 No Defined"}):void 0})]})]})},j=(c(13),function(e){var t=e.characters.map((function(e){return Object(o.jsx)(u,{character:e},e.id)}));return Object(o.jsx)("section",{children:Object(o.jsx)("ul",{className:"cards",children:t})})}),h=c.p+"static/media/logo.febc60e1.png",f=(c(14),c(15),function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("label",{className:"form__label",htmlFor:"name"}),Object(o.jsx)("input",{type:"text",className:"form__input",name:"name",id:"name",placeholder:"Filter by name",value:e.filterName,onChange:function(t){e.handleFilter({value:t.target.value,key:"name"})}})]})}),d=(c(4),function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("label",{className:"form__label",htmlFor:"house"}),Object(o.jsxs)("select",{type:"text",className:"form__select",name:"house",id:"id",placeholder:"Filter by house",value:e.filterHouse,onChange:function(t){e.handleFilter({value:t.target.value,key:"house"})},children:[Object(o.jsx)("option",{value:"All",children:"All"}),Object(o.jsx)("option",{value:"Gryffindor",children:"Gryffindor"}),Object(o.jsx)("option",{value:"Slytherin",children:"Slytherin"}),Object(o.jsx)("option",{value:"Hufflepuff",children:"Hufflepuff"}),Object(o.jsx)("option",{value:"Ravenclaw",children:"Ravenclaw"}),Object(o.jsx)("option",{value:"",children:"No House"})]})]})}),b=function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("label",{className:"form__label",htmlFor:"ancestry"}),Object(o.jsxs)("select",{type:"text",className:"form__select",name:"ancestry",id:"id",placeholder:"Filter by ancestry",value:e.filterAncestry,onChange:function(t){e.handleFilter({value:t.target.value,key:"house"})},children:[Object(o.jsx)("option",{value:"All",children:"All"}),Object(o.jsx)("option",{value:"half-blood",children:"Half-blood"}),Object(o.jsx)("option",{value:"pure-blood",children:"Pure-blood"}),Object(o.jsx)("option",{value:"squib",children:"Squib"}),Object(o.jsx)("option",{value:"muggleborn",children:"Muggleborn"}),Object(o.jsx)("option",{value:"",children:"No Defined"})]})]})},m=(c(16),c(17),function(e){return Object(o.jsx)("div",{className:"reset",children:Object(o.jsx)("button",{className:"reset__button",onClick:function(){e.handleReset()},children:Object(o.jsx)("span",{children:"\ud83e\uddf9"})})})}),O=function(e){return Object(o.jsx)("section",{children:Object(o.jsxs)("form",{className:"form__container",children:[Object(o.jsx)(f,{filterName:e.filterName,handleFilter:e.handleFilter}),Object(o.jsx)(d,{filterSpecie:e.filterHouse,handleFilter:e.handleFilter}),Object(o.jsx)(b,{filterGender:e.filterAncestry,handleFilter:e.handleFilter}),Object(o.jsx)(m,{handleReset:e.handleReset})]})})},x={get:function(e,t){var c=localStorage.getItem(e);return null===c?t:JSON.parse(c)},set:function(e,t){localStorage.setItem(e,JSON.stringify(t))}},p=(c(18),function(){return Object(o.jsxs)("div",{className:"notfound",children:[Object(o.jsx)("p",{children:"Are you a real fan? This character doesn't exist"}),Object(o.jsx)("img",{className:"notfound_img",src:"https://media2.giphy.com/media/3ohzdD7vBsozD9ft6w/200.gif?cid=6104955e2b1b2c8e8e8ce7c6f895da43cba692bf5f4c3a1f&rid=200.gif&ct=s&cid=6104955e2b1b2c8e8e8ce7c6f895da43cba692bf5f4c3a1f&rid=200.gif&ct=s",alt:"Character not found"})]})}),g=function(){var e=Object(n.useState)(x.get("characters",[])),t=Object(s.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(x.get("filterName","")),l=Object(s.a)(r,2),u=l[0],f=l[1],d=Object(n.useState)(x.get("filterHouse","")),m=Object(s.a)(d,2),g=m[0],v=m[1],y=Object(n.useState)(x.get("filterAncestry","")),N=Object(s.a)(y,2),_=N[0],F=N[1];Object(n.useEffect)((function(){0===c.length&&i().then((function(e){a(e)}))}),[]),Object(n.useEffect)((function(){x.set("characters",c),x.set("filterName",u),x.set("filterHouse",g),x.set("filterAncestry",_)}),[c,u,g,_]);var S=c.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())})).filter((function(e){return"All"===g||e.house.toLowerCase().includes(g.toLowerCase())})).filter((function(e){return"All"===_||e.ancestry.toLowerCase()===_.toLowerCase()}));return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("img",{className:"logo",src:h,alt:"Logo"}),Object(o.jsx)(O,{filterName:u,filterSpecies:g,filterGender:b,handleFilter:function(e){"name"===e.key?f(e.value):"house"===e.key?v(e.value):"ancestry"===e.key&&F(e.value)},handleReset:function(){a(c),f(""),v("all"),F("All")}}),Object(o.jsx)("ul",{children:S.length>0?Object(o.jsx)(j,{characters:S}):Object(o.jsx)(p,{})})]})};l.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.492744ba.chunk.js.map