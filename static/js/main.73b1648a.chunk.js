(this["webpackJsonpxpcodehub-app"]=this["webpackJsonpxpcodehub-app"]||[]).push([[0],{121:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){},160:function(e,t,a){},162:function(e,t,a){},171:function(e,t,a){},193:function(e,t){},241:function(e,t,a){},244:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(19),s=a.n(n),c=(a(120),a(121),a(6)),o=a(10),i=a(9),u=a(8),l=a(12),d=a(3),p=a.n(d),h=a(7),j=a(29),b=(a(123),a(124),a.p+"static/media/ICON_CODEHUB-removebg.d2bf3a40.png"),m=(a.p,a(13)),O=a(5),g=a(97),f=a.n(g),v=function(e){return Object(O.a)(Object(O.a)({},e),{},{Authorization:"Bearer ".concat(localStorage.getItem("token-xpcodehub-login"))})},x=function(){function e(t){Object(c.a)(this,e),this.client=function(e){return f.a.create({timeout:3e5,headers:{"Content-type":"application/json"},baseURL:e})}(t)}return Object(o.a)(e,[{key:"get",value:function(){var e=Object(h.a)(p.a.mark((function e(t,a){var r,n,s,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.authorized,n=void 0===r||r,s=Object(m.a)(a,["authorized"]),n&&(s.headers=v(s.headers)),e.next=4,this.client.get(t,s);case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"post",value:function(){var e=Object(h.a)(p.a.mark((function e(t,a,r){var n,s,c,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.authorized,s=void 0===n||n,c=Object(m.a)(r,["authorized"]),s&&(c.headers=v(c.headers)),e.next=4,this.client.post(t,a,c);case 4:return o=e.sent,e.abrupt("return",o.data);case 6:case"end":return e.stop()}}),e,this)})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"put",value:function(){var e=Object(h.a)(p.a.mark((function e(t,a,r){var n,s,c,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.authorized,s=void 0===n||n,c=Object(m.a)(r,["authorized"]),s&&(c.headers=v(c.headers)),e.next=4,this.client.put(t,a,c);case 4:return o=e.sent,e.abrupt("return",o.data);case 6:case"end":return e.stop()}}),e,this)})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(h.a)(p.a.mark((function e(t,a){var r,n,s,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.authorized,n=void 0===r||r,s=Object(m.a)(a,["authorized"]),n&&(s.headers=v(s.headers)),e.next=4,this.client.delete(t,s);case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()}]),e}(),S=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this,"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL))).getUrlLogin=function(){return"/login"},e.getUrlHome=function(){return"/"},e.getLastElement=function(){var e=window.location.href.split("/");return e[e.length-1]},e.getUrlLogout=function(){return"/logout"},e.getUrlProgrammingTask=function(){return"/tech-steps/:techStepIdName/programming-questions/:programmingQuestionsId"},e.getUrlTechSteps=function(){return"/tech-steps/:idName"},e}return a}(x),C=a(16),k=a(15),N=a(11),w=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e,r;return Object(c.a)(this,a),(r=t.call(this,"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL))).getStudentInfo=Object(h.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(k.a)((e=Object(C.a)(r),Object(N.a)(a.prototype)),"get",e).call(e,"/student",{authorized:!0}));case 1:case"end":return t.stop()}}),t)}))),r}return a}(x),_=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e,r;return Object(c.a)(this,a),(r=t.call(this,"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL))).getLeaderboard=Object(h.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(k.a)((e=Object(C.a)(r),Object(N.a)(a.prototype)),"get",e).call(e,"/leaderboard",{authorized:!0}));case 1:case"end":return t.stop()}}),t)}))),r}return a}(x),T=a(36),E="top-center",y=function e(){Object(c.a)(this,e),this.sucesso=function(e){T.b.success(e,{position:E,autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0})},this.aviso=function(e){T.b.warn(e,{position:E,autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0})},this.erro=function(e){T.b.error(e,{position:E,autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0})},this.info=function(e){T.b.info(e,{position:E,autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0})}},P=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e,r;return Object(c.a)(this,a),(r=t.call(this,"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL))).login=function(){var t=Object(h.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("chegou aqui????? SIM, MAS FALTA TRATAR EM CASO DE ERRO"),t.next=3,Object(k.a)((e=Object(C.a)(r),Object(N.a)(a.prototype)),"post",e).call(e,"/login",n,{authorized:!1}).then((function(e){console.log("Login feito com Sucesso!"),r.toast.sucesso("Login feito com Sucesso!"),localStorage.setItem("token-xpcodehub-login",e.accessToken)})).catch((function(e){console.log("Erro ao logar: ".concat(e.response.data.message)),r.toast.erro("Erro ao logar: ".concat(e.response.data.message))}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),r.toast=new y,r}return a}(x),R=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e,r,n,s;return Object(c.a)(this,a),(s=t.call(this,"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL))).getSkillTreeList=Object(h.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(k.a)((e=Object(C.a)(s),Object(N.a)(a.prototype)),"get",e).call(e,"/skill-tree",{authorized:!0}));case 1:case"end":return t.stop()}}),t)}))),s.getSkillTreeSavedData=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(k.a)((r=Object(C.a)(s),Object(N.a)(a.prototype)),"get",r).call(r,"/skill-tree-saved-data",{authorized:!0}));case 1:case"end":return e.stop()}}),e)}))),s.getUserInfo=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(k.a)((n=Object(C.a)(s),Object(N.a)(a.prototype)),"get",n).call(n,"/student",{authorized:!0}));case 1:case"end":return e.stop()}}),e)}))),s}return a}(x),L=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e,r,n;return Object(c.a)(this,a),(n=t.call(this,"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL))).getTechSteps=function(){var t=Object(h.a)(p.a.mark((function t(r){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(k.a)((e=Object(C.a)(n),Object(N.a)(a.prototype)),"get",e).call(e,"/tech-steps/".concat(r),{authorized:!0});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n.updateTechConceptStatus=function(){var e=Object(h.a)(p.a.mark((function e(t,s){var c,o=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=o.length>2&&void 0!==o[2]?o[2]:function(){},e.abrupt("return",Object(k.a)((r=Object(C.a)(n),Object(N.a)(a.prototype)),"put",r).call(r,"/tech-concept/".concat(t,"/status/").concat(s),null,{authorized:!0}).then(c));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),n}return a}(x),I=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e,r,n;return Object(c.a)(this,a),(n=t.call(this,"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL))).getProgrammigQuestions=function(){var t=Object(h.a)(p.a.mark((function t(r){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(k.a)((e=Object(C.a)(n),Object(N.a)(a.prototype)),"get",e).call(e,"/programming-questions/".concat(r),{authorized:!0}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n.correctProgrammingQuestions=function(){var e=Object(h.a)(p.a.mark((function e(t,s){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(JSON.stringify({questionIdAnswerIdMap:Object.fromEntries(s)})),e.abrupt("return",Object(k.a)((r=Object(C.a)(n),Object(N.a)(a.prototype)),"post",r).call(r,"/programming-questions/".concat(t,"/correct"),{questionIdAnswerIdMap:Object.fromEntries(s)},{authorized:!0}));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),n}return a}(x),A=a(17),D=a(20),z=a(98),H=a(34),F=a(1),Q=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).getLeaderboard=Object(h.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.leaderboardService.getLeaderboard();case 2:t=e.sent,r.setState({leaderboard:t});case 4:case"end":return e.stop()}}),e)}))),r.getStudentInfo=Object(h.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.userService.getStudentInfo();case 2:t=e.sent,r.setState({student:t});case 4:case"end":return e.stop()}}),e)}))),r.redirecionarParaHome=function(){r.setState({redireciona:r.urlFinder.getUrlHome()})},r.renderBoost=function(e){return e?Object(F.jsxs)("div",{className:"header-boost-countdown",children:[Object(F.jsx)(D.a,{icon:A.d,className:"header-boost-icon"}),Object(F.jsx)(z.a,{date:e.finishBoostDate})]}):Object(F.jsxs)("div",{className:"header-without-boost",children:[Object(F.jsx)(D.a,{icon:A.d,className:"header-boost-icon"}),Object(F.jsx)("p",{children:"Sem Boost"})]})},r.invertStatusRenderLeaderboard=function(){r.setState({showLeaderboard:!r.state.showLeaderboard})},r.state={redireciona:!1,student:{level:"?",points:"?"},showLeaderboard:!1,leaderboard:[]},r.urlFinder=new S,r.userService=new w,r.leaderboardService=new _,r.getStudentInfo(),r.getLeaderboard(),r}return Object(o.a)(a,[{key:"Leaderboard",value:function(e){return Object(F.jsx)(H.a,{className:"remove-modal-background",show:e.show,onHide:e.onHide,centered:!0,contentClassName:"modal-teste",children:Object(F.jsxs)("div",{className:"leaderboard",children:[Object(F.jsxs)("header",{children:[Object(F.jsxs)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 511.999 511.999",className:"leaderboard__icon",children:[Object(F.jsx)("g",{children:Object(F.jsx)("g",{children:Object(F.jsx)("path",{d:"M466.45,49.374c-7.065-8.308-17.368-13.071-28.267-13.071H402.41v-11.19C402.41,11.266,391.143,0,377.297,0H134.705\r c-13.848,0-25.112,11.266-25.112,25.112v11.19H73.816c-10.899,0-21.203,4.764-28.267,13.071\r c-6.992,8.221-10.014,19.019-8.289,29.624c9.4,57.8,45.775,108.863,97.4,136.872c4.717,11.341,10.059,22.083,16.008,32.091\r c19.002,31.975,42.625,54.073,68.627,64.76c2.635,26.644-15.094,51.885-41.794,57.9c-0.057,0.013-0.097,0.033-0.153,0.046\r c-5.211,1.245-9.09,5.921-9.09,11.513v54.363h-21.986c-19.602,0-35.549,15.947-35.549,35.549v28.058\r c0,6.545,5.305,11.85,11.85,11.85H390.56c6.545,0,11.85-5.305,11.85-11.85v-28.058c0-19.602-15.947-35.549-35.549-35.549h-21.988\r V382.18c0-5.603-3.893-10.286-9.118-11.52c-0.049-0.012-0.096-0.028-0.145-0.04c-26.902-6.055-44.664-31.55-41.752-58.394\r c25.548-10.86,48.757-32.761,67.479-64.264c5.949-10.009,11.29-20.752,16.008-32.095c51.622-28.01,87.995-79.072,97.395-136.87\r C476.465,68.392,473.443,57.595,466.45,49.374z M60.652,75.192c-0.616-3.787,0.431-7.504,2.949-10.466\r c2.555-3.004,6.277-4.726,10.214-4.726h35.777v21.802c0,34.186,4.363,67.3,12.632,97.583\r C89.728,153.706,67.354,116.403,60.652,75.192z M366.861,460.243c6.534,0,11.85,5.316,11.85,11.85v16.208H134.422v-16.208\r c0-6.534,5.316-11.85,11.85-11.85H366.861z M321.173,394.03v42.513H191.96V394.03H321.173z M223.037,370.331\r c2.929-3.224,5.607-6.719,8.002-10.46c7.897-12.339,12.042-26.357,12.228-40.674c4.209,0.573,8.457,0.88,12.741,0.88\r c4.661,0,9.279-0.358,13.852-1.036c0.27,19.239,7.758,37.45,20.349,51.289H223.037z M378.709,81.803\r c0,58.379-13.406,113.089-37.747,154.049c-23.192,39.03-53.364,60.525-84.956,60.525c-31.597,0-61.771-21.494-84.966-60.523\r c-24.342-40.961-37.748-95.671-37.748-154.049V25.112c0-0.78,0.634-1.413,1.412-1.413h242.591c0.78,0,1.414,0.634,1.414,1.413\r V81.803z M451.348,75.192c-6.702,41.208-29.074,78.51-61.569,104.191c8.268-30.283,12.631-63.395,12.631-97.58V60.001h35.773\r c3.938,0,7.66,1.723,10.214,4.726C450.915,67.688,451.963,71.405,451.348,75.192z"})})}),Object(F.jsx)("g",{children:Object(F.jsx)("g",{children:Object(F.jsx)("path",{d:"M327.941,121.658c-1.395-4.288-5.103-7.414-9.566-8.064l-35.758-5.196l-15.991-32.402\r c-1.997-4.044-6.116-6.605-10.626-6.605c-4.511,0-8.63,2.561-10.626,6.605l-15.991,32.402l-35.758,5.196\r c-4.464,0.648-8.172,3.775-9.566,8.065c-1.393,4.291-0.231,8.999,2.999,12.148l25.875,25.221l-6.109,35.613\r c-0.763,4.446,1.064,8.938,4.714,11.59c3.648,2.651,8.487,3,12.479,0.902L256,190.32l31.982,16.813\r c1.734,0.911,3.627,1.36,5.512,1.36c2.456,0,4.902-0.763,6.966-2.263c3.65-2.652,5.477-7.144,4.714-11.59l-6.109-35.613\r l25.875-25.221C328.172,130.658,329.334,125.949,327.941,121.658z M278.064,146.405c-2.793,2.722-4.068,6.644-3.408,10.489\r l3.102,18.09l-16.245-8.541c-1.725-0.908-3.62-1.36-5.514-1.36c-1.894,0-3.788,0.454-5.514,1.36l-16.245,8.541l3.102-18.09\r c0.66-3.844-0.615-7.766-3.408-10.489l-13.141-12.81l18.162-2.64c3.859-0.56,7.196-2.985,8.922-6.482l8.123-16.458l8.122,16.458\r c1.727,3.497,5.062,5.921,8.922,6.482l18.162,2.64L278.064,146.405z"})})})]}),Object(F.jsxs)("h1",{className:"leaderboard__title",children:[Object(F.jsx)("span",{className:"leaderboard__title--top",children:"XPCodeHub"}),Object(F.jsx)("span",{className:"leaderboard__title--bottom",children:"Rank dos 5 Melhores"})]})]}),Object(F.jsx)("main",{className:"leaderboard__profiles",children:e.leaderboard.map((function(e){return Object(F.jsxs)("article",{className:"leaderboard__profile",children:[Object(F.jsx)("img",{src:"https://avatars.dicebear.com/api/avataaars/".concat(e.student.username,".svg"),alt:e.student.username,className:"leaderboard__picture"}),Object(F.jsx)("span",{className:"leaderboard__name",children:e.student.username}),Object(F.jsxs)("span",{className:"leaderboard__value",children:[e.points,Object(F.jsx)("span",{children:"Pontos"})]})]})}))})]})})}},{key:"render",value:function(){var e=this;return this.state.redireciona?Object(F.jsx)(l.a,{to:"../../../../../../../".concat(this.state.redireciona)}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(this.Leaderboard,{show:this.state.showLeaderboard,onHide:function(){return e.invertStatusRenderLeaderboard()},leaderboard:this.state.leaderboard}),Object(F.jsxs)("div",{className:"header",children:[Object(F.jsx)("img",{width:"100px",height:"100px",src:b,onClick:this.redirecionarParaHome,alt:"logo"}),"login"===this.urlFinder.getLastElement().toLowerCase()?Object(F.jsx)("span",{}):Object(F.jsxs)("div",{className:"header-infos-user",children:[Object(F.jsxs)("p",{children:[this.state.student.points," XP"]}),this.renderBoost(this.state.student.boost),Object(F.jsxs)("p",{children:["Lvl ",this.state.student.level]}),Object(F.jsx)(D.a,{icon:A.i,className:"header-leaderboard",onClick:function(){return e.invertStatusRenderLeaderboard()}})]}),"login"!==this.urlFinder.getLastElement().toLowerCase()?Object(F.jsxs)("div",{className:"header-profile",children:[Object(F.jsx)("img",{className:"header-profile-img",src:null==this.state.student.photo?"https://avatars.dicebear.com/api/avataaars/".concat(this.state.student.username,".svg?background=%23f3f4f6"):this.state.student.photo,alt:"Profile Picture"}),Object(F.jsx)("p",{children:this.state.student.username})]}):null]})]})}}]),a}(r.Component),U=(a(152),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(F.jsxs)("div",{className:"input-group",children:[Object(F.jsx)("label",{children:this.props.texto}),Object(F.jsx)("input",{className:"texto-input",maxLength:"60",type:this.props.type,placeholder:this.props.placeholder,id:this.props.id,name:this.props.name,onChange:this.props.onChange,value:this.props.value,onKeyDown:this.props.pressionouEnter})]})}}]),a}(r.Component)),M=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,n=t.value;r.setState(Object(j.a)({},a,n))},r.logar=Object(h.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r.state.email){e.next=3;break}return r.toast.erro("Fill the Email field to login! \u26a0"),e.abrupt("return");case 3:if(""!==r.state.password){e.next=6;break}return r.toast.erro("Fill the Password field to login! \u26a0"),e.abrupt("return");case 6:return(t=r.state).botaoLogin=!1,r.setState(t),e.next=11,r.loginService.login({email:r.state.email,password:r.state.password}).then((function(){r.setState({redirect:"/"})}));case 11:case"end":return e.stop()}}),e)}))),r.pressionouEnter=function(e){13===e.keyCode&&r.logar()},r.state={user:"",email:"",password:"",redirect:!1,botaoLogin:!0},r.loginService=new P,r.toast=new y,r}return Object(o.a)(a,[{key:"render",value:function(){return this.state.redirect?Object(F.jsx)(l.a,{to:this.state.redirect}):Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("div",{className:"full-height-grow",children:[Object(F.jsx)(Q,{}),Object(F.jsx)("div",{className:"container-login full-height-grow",children:Object(F.jsxs)("section",{className:"join-main-section",children:[Object(F.jsxs)("h1",{className:"join-text",children:["Junte-se a",Object(F.jsx)("span",{className:"accent-text",children:" Divers\xe3o."})]}),Object(F.jsxs)("form",{className:"join-form",children:[Object(F.jsx)(U,{texto:"Email:",type:"email",id:"email",placeholder:"xpcodehub@gmail.com",name:"email",onChange:this.handleChange,value:this.state.email,pressionouEnter:this.pressionouEnter}),Object(F.jsx)(U,{texto:"Password:",type:"password",id:"password",placeholder:"*********",name:"password",onChange:this.handleChange,value:this.state.password,pressionouEnter:this.pressionouEnter}),Object(F.jsx)("div",{className:"input-group",children:Object(F.jsx)("button",{type:"button",className:"btn",onClick:this.logar,children:"Join Now"})})]})]})}),Object(F.jsx)("div",{className:"join-page-circle-1"}),Object(F.jsx)("div",{className:"join-page-circle-2"})]})})}}]),a}(r.Component),B=(a(153),a(154),a(58)),V={border:"none",treeBackgroundColor:"none",heading:{font:"Homenaje, Impact, sans-serif"}},K=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).selectSkill=function(){var e=Object(h.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,200)}));case 2:r.setState({redireciona:"/tech-steps/".concat(t)});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.state={redireciona:!1,savedData:{}},r}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return this.state.redireciona?Object(F.jsx)(l.a,{to:this.state.redireciona}):Object(F.jsx)(F.Fragment,{children:Object(F.jsx)(B.SkillProvider,{children:Object(F.jsx)(B.SkillTreeGroup,{theme:V,children:function(){var t,a;return Object(F.jsx)(B.SkillTree,{treeId:e.props.data.id,title:e.props.data.title,data:e.props.data.root,savedData:null!==(t=null===(a=e.props.savedData.filter((function(t){return t.treeId===e.props.data.id}))[0])||void 0===a?void 0:a.skillTreeSavedData)&&void 0!==t?t:{},handleNodeSelect:function(t){return e.selectSkill(t.key)}})}})})})}}]),a}(r.Component),W=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).getSkillTreeData=Object(h.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.skillTreeService.getSkillTreeList();case 2:t=e.sent,r.setState({skillTreeData:t});case 4:case"end":return e.stop()}}),e)}))),r.getSkillTreeSavedData=function(){var e=Object(h.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.skillTreeService.getSkillTreeSavedData();case 2:a=e.sent,r.setState({savedData:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.state={skillTreeData:!1,savedData:!1,user:{}},r.skillTreeService=new R,r.getSkillTreeData(),r.getSkillTreeSavedData(),r}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("div",{className:"home",children:[Object(F.jsx)(Q,{}),Object(F.jsx)("div",{className:"skill-trees-container",children:this.state.skillTreeData&&this.state.savedData?this.state.skillTreeData.map((function(t){return Object(F.jsx)(K,{data:t,savedData:e.state.savedData})})):null})]})})}}]),a}(r.Component),q=(a(160),a(101)),G=a.n(q),J={position:"fixed",pointerEvents:"none",width:"100%",height:"100%",top:0,left:0},X=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).getProgrammigQuestions=function(){var e=Object(h.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.programmingQuestionsService.getProgrammigQuestions(t);case 2:a=e.sent,r.setState({programmingQuestions:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.makeShot=function(e,t){r.animationInstance&&r.animationInstance(Object(O.a)(Object(O.a)({},t),{},{origin:{y:.7,x:.2},particleCount:Math.floor(300*e)}))&&r.animationInstance(Object(O.a)(Object(O.a)({},t),{},{origin:{y:.7,x:.9},particleCount:Math.floor(300*e)}))&&r.animationInstance(Object(O.a)(Object(O.a)({},t),{},{origin:{y:.7},particleCount:Math.floor(400*e)}))},r.fireConfetti=function(){r.makeShot(.25,{spread:26,startVelocity:55}),r.makeShot(.2,{spread:60}),r.makeShot(.35,{spread:100,decay:.91,scalar:.8}),r.makeShot(.1,{spread:120,startVelocity:25,decay:.92,scalar:1.2}),r.makeShot(.1,{spread:120,startVelocity:45})},r.getInstance=function(e){r.animationInstance=e},r.redirect=function(e){r.setState({redireciona:e})},r.updateCurrentQuestionAndSendAnswer=function(){var e=Object(h.a)(p.a.mark((function e(t,a){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.state.answersIdChosenByStudent.set(t,a),r.state.answersIdChosenByStudent.size!==r.state.programmingQuestions.programmingQuestionList.length){e.next=6;break}return e.next=4,r.programmingQuestionsService.correctProgrammingQuestions(r.props.match.params.programmingQuestionsId,r.state.answersIdChosenByStudent);case 4:n=e.sent,r.setState({programmingQuestionsResult:n});case 6:r.setState({currentQuestionNumber:r.state.currentQuestionNumber+1});case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),r.finishQuiz=function(){return r.state.programmingQuestionsResult.correctAnswers===r.state.programmingQuestionsResult.numberOfQuestions&&r.fireConfetti(),Object(F.jsxs)("div",{className:"score-section",children:["Voc\xea acertou ",r.state.programmingQuestionsResult.correctAnswers," de ",r.state.programmingQuestionsResult.numberOfQuestions,"!",Object(F.jsxs)("div",{className:"score-section-buttons",children:[Object(F.jsx)(D.a,{icon:A.e,className:"icons-score-section",onClick:function(){return r.redirect("/")}}),Object(F.jsx)(D.a,{icon:A.f,className:"icons-score-section",onClick:function(){return r.redirect("/tech-steps/".concat(r.props.match.params.techStepIdName))}})]}),Object(F.jsx)(G.a,{refConfetti:r.getInstance,style:J})]})},r.state={programmingQuestions:{programmingQuestionList:[]},currentQuestionNumber:0,answersIdChosenByStudent:new Map,programmingQuestionsResult:!1,redireciona:!1},r.animationInstance=null,r.programmingQuestionsService=new I,r.getProgrammigQuestions(r.props.match.params.programmingQuestionsId),r}return Object(o.a)(a,[{key:"render",value:function(){var e=this;if(this.state.redireciona)return Object(F.jsx)(l.a,{to:this.state.redireciona});var t=this.state.programmingQuestions.programmingQuestionList[this.state.currentQuestionNumber];return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("div",{className:"programming-questions-container",children:[Object(F.jsx)(Q,{}),Object(F.jsx)("div",{className:"programming-questions",children:Object(F.jsx)("div",{className:"app",children:0===this.state.programmingQuestions.programmingQuestionList.length?null:this.state.programmingQuestionsResult?this.finishQuiz():Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)("div",{className:"question-section",children:[Object(F.jsxs)("div",{className:"question-count",children:[Object(F.jsxs)("span",{children:["Question ",this.state.currentQuestionNumber+1]}),"/",this.state.programmingQuestions.programmingQuestionList.length]}),Object(F.jsx)("div",{className:"question-text",children:t.question})]}),Object(F.jsx)("div",{className:"answer-section",children:t.answerOptions.map((function(a){return Object(F.jsx)("button",{onClick:function(){return e.updateCurrentQuestionAndSendAnswer(t.id,a.id)},children:a.answer})}))})]})})}),Object(F.jsx)("div",{className:"programming-questions-circle-2"}),Object(F.jsx)("div",{className:"programming-questions-circle-3"})]})})}}]),a}(r.Component),Y=(a(162),a(163),a(102)),Z=a.n(Y),$=(a(171),a(103)),ee=a.n($),te=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("div",{className:"formacao-header formacao__background-color--front-end",children:[Object(F.jsxs)("div",{className:"container-tech-steps",children:[Object(F.jsxs)("div",{className:"formacao-header-headline",children:[Object(F.jsx)("h1",{className:"formacao-headline-titulo",children:this.props.techSteps.name}),Object(F.jsx)("h2",{className:"formacao-headline-subtitulo",children:this.props.techSteps.description})]}),Object(F.jsx)("div",{className:"formacao-header-icon--degree"})]}),Object(F.jsx)("div",{className:"formacao-dados container-tech-steps",children:Object(F.jsxs)("div",{className:"formacao-header-dados",children:[Object(F.jsxs)("div",{className:"formacao-dados-finalizado formacao__text-color--front-end formacao__after-aux-border-color--front-end",children:[Object(F.jsx)("div",{className:"formacao-finalizado-cursos",children:Object(F.jsx)("div",{className:"guide-card__progress-bar guide-card__progress-bar__formacao"})}),Object(F.jsxs)("div",{className:"formacao-finalizado-texto",children:[Object(F.jsxs)("span",{className:"formacao-finalizado-fracao",children:[Object(F.jsx)("span",{className:"formacao-finalizado-fracao__completed",children:this.props.techSteps.progress?this.props.techSteps.progress.finished:0}),"/",this.props.techSteps.progress?this.props.techSteps.progress.size:0]}),Object(F.jsx)("span",{className:"formacao-finalizado-label",children:" Cursos finalizados"})]})]}),Object(F.jsx)("div",{className:"formacao_user-follow-certificate",children:Object(F.jsx)(ee.a,{completed:this.props.techSteps.progress?this.props.techSteps.progress.finished/this.props.techSteps.progress.size*100:0,customLabel:this.props.techSteps.progress?this.props.techSteps.progress.motivation:null,bgColor:"rgb(28,113,219)"})})]})})]})})}}]),a}(r.Component),ae=a(104),re=a(42),ne=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).getRandomNumberWithHigherProbabilityForLowestNumbers=function(e){return Math.floor(Math.pow(Math.random(),2)*e)},r.getGif=Object(h.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new re.GiphyFetch("MCUPVryg2ydH59s7daR3AgbYAOKczUSN").search("computer",{type:"gifs",limit:1,rating:"g",offset:r.getRandomNumberWithHigherProbabilityForLowestNumbers(100)});case 2:t=e.sent,console.log(t),r.setState({gif:t.data[0]});case 5:case"end":return e.stop()}}),e)}))),r.renderModalVideoAula=function(e){console.log(e),r.setState({modalVideoAulaId:e})},r.getTechSteps=function(){var e=Object(h.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.techStepsService.getTechSteps(t);case 2:a=e.sent,r.setState({techSteps:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.setRenderCodingTaskModal=function(e){console.log("t\xe3o me chamandoo"),r.setState({renderCodingTaskModal:e})},r.redirectToProgrammingQuestions=function(e){r.setState({redireciona:"/tech-steps/".concat(r.props.match.params.idName,"/programming-questions/").concat(e)})},r.getTechConceptIcons=function(e){switch(e.show=!0,console.log(e.techConceptStudent.status),console.log("PROCESSING"===e.techConceptStudent.status),e.type){case"VIDEO_LEARNING":return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(D.a,{icon:A.h,className:"icon-play-clickable",size:"2x",onClick:function(){return r.renderModalVideoAula(e.youtubeId)}}),Object(F.jsx)(D.a,{icon:A.a,className:"icon-check-clickable icon-check-".concat(e.techConceptStudent.status),size:"2x",onClick:function(){return r.techStepsService.updateTechConceptStatus(e.techConceptStudent.id,"SUCCESS"===e.techConceptStudent.status?"NOT_STARTED":"SUCCESS",(function(){return r.getTechSteps(r.props.match.params.idName)}))}})]});case"PROGRAMING_QUESTION":return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(D.a,{icon:A.g,className:"icon-quiz-clickable",size:"2x",onClick:function(){return r.redirectToProgrammingQuestions(e.id)}}),Object(F.jsx)(D.a,{icon:A.a,className:"icon-check icon-check-".concat(e.techConceptStudent.status),size:"2x"})]});case"CODING_TASK":return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(D.a,{icon:A.c,className:"icon-code-clickable",onClick:function(){return r.setRenderCodingTaskModal(e)},size:"2x"}),Object(F.jsx)(D.a,{icon:"PROCESSING"===e.techConceptStudent.status?A.j:A.a,className:"icon-check icon-check-".concat(e.techConceptStudent.status),size:"2x"})]});default:return Object(F.jsx)(F.Fragment,{})}},r.state={modalVideoAulaId:!1,techSteps:{techConceptList:[]},renderCodingTaskModal:!1,gif:!1,redireciona:!1},r.techStepsService=new L,r.toast=new y,console.log(r.props),r.getTechSteps(r.props.match.params.idName),r.getGif(),r}return Object(o.a)(a,[{key:"CodingTaskVerticallyCenteredModal",value:function(e){var t="git clone ".concat(e.codingTaskModal.githubRepository);return Object(F.jsxs)(H.a,{show:e.codingTaskModal.show,onHide:e.onHide,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(F.jsx)(H.a.Header,{closeButton:!0,children:Object(F.jsx)(H.a.Title,{id:"contained-modal-title-vcenter",className:"coding-task-modal",children:e.codingTaskModal.name})}),Object(F.jsxs)(H.a.Body,{className:"coding-task-modal-centralize",children:[Object(F.jsx)("p",{className:"coding-task-modal",children:"\xc9 hora da pr\xe1tica, vamos codificar! Clone o reposit\xf3rio abaixo e fa\xe7a os exerc\xedcios conforme explicado no m\xf3dulo de Introdu\xe7\xe3o ao XPCodeHub. Divirta-se com o c\xf3digo \ud83e\udd16\ud83d\ude01\u200d!"}),Object(F.jsx)("br",{}),Object(F.jsxs)("div",{className:"coding-task-modal-code-centralize",children:[Object(F.jsx)("code",{className:"coding-task-modal-code-tag",children:t}),Object(F.jsx)(D.a,{icon:A.b,className:"icon-clone",size:"lg",onClick:function(){return navigator.clipboard.writeText(t).then((function(){return e.toast.info("Git clone copied.")}))}})]})]}),Object(F.jsxs)(H.a.Footer,{className:"coding-task-modal-code-centralize",children:[e.gif?Object(F.jsx)(ae.Gif,{gif:e.gif,height:300,width:500}):null,Object(F.jsxs)("small",{className:"coding-task-modal",children:[" PS: Isso \xe9 um ",Object(F.jsx)("b",{children:"gif aleat\xf3rio"})," sobre computa\xe7\xe3o"]})]})]})}},{key:"render",value:function(){var e=this;return this.state.redireciona?Object(F.jsx)(l.a,{to:this.state.redireciona}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(Z.a,{channel:"youtube",isOpen:this.state.modalVideoAulaId,videoId:this.state.modalVideoAulaId,onClose:function(){return e.setState({modalVideoAulaId:!1})}}),Object(F.jsx)(this.CodingTaskVerticallyCenteredModal,{codingTaskModal:this.state.renderCodingTaskModal,onHide:function(){return e.setRenderCodingTaskModal(!1)},toast:this.toast,gif:this.state.gif}),Object(F.jsxs)("div",{className:"tech-steps",children:[Object(F.jsx)(Q,{}),Object(F.jsx)(te,{techSteps:this.state.techSteps}),Object(F.jsx)("div",{className:"tech-body",children:Object(F.jsx)("div",{className:"tech-concepts",children:this.state.techSteps.techConceptList.map((function(t){return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("div",{className:"specific-concept",children:[Object(F.jsx)("h3",{children:t.name}),Object(F.jsx)("div",{className:"icons-specific-concept",children:e.getTechConceptIcons(t)})]})})}))})}),Object(F.jsx)("div",{className:"tech-page-circle-2"}),Object(F.jsx)("div",{className:"tech-page-circle-3"}),Object(F.jsx)("div",{className:"tech-page-circle-1"})]})]})}}]),a}(r.Component),se=(a(241),a(242),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).state={edicoesRotas:!1,modulosRotas:!1},r.urlFinder=new S,r}return Object(o.a)(a,[{key:"render",value:function(){return Object(F.jsxs)(l.d,{children:[Object(F.jsx)(l.b,{path:"/",component:W,exact:!0}),Object(F.jsx)(l.b,{path:this.urlFinder.getUrlProgrammingTask(),component:X,exact:!0}),Object(F.jsx)(l.b,{path:this.urlFinder.getUrlTechSteps(),component:ne,exact:!0}),Object(F.jsx)(l.b,{path:this.urlFinder.getUrlLogin(),component:M,exact:!0}),Object(F.jsx)(l.b,{path:this.urlFinder.getUrlLogout(),exact:!0,render:function(){return localStorage.clear(),Object(F.jsx)(l.a,{to:"/Login"})}})]})}}]),a}(r.Component)),ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,250)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),s(e),c(e)}))},oe=a(33);s.a.render(Object(F.jsxs)(oe.a,{children:[Object(F.jsx)(se,{}),Object(F.jsx)(T.a,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnVisibilityChange:!0,draggable:!0,pauseOnHover:!0})]}),document.getElementById("root")),ce()}},[[244,1,2]]]);
//# sourceMappingURL=main.73b1648a.chunk.js.map