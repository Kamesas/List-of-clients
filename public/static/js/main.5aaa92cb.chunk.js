(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(e,t,a){e.exports={"parent-auth":"auth_parent-auth__2RpZq",auth:"auth_auth__3sAh1"}},249:function(e,t,a){e.exports=a(439)},432:function(e,t,a){},434:function(e,t,a){},436:function(e,t,a){},439:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(60),i=a.n(l),o=a(46),c=Object(o.combineReducers)({clients:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"FETCH_CLIENTS":return n;default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"loading",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return t.payload;default:return e}}}),s=a(217),u=a(35),p=a(218),m=a(17),h=a(18),d=a(20),f=a(19),g=a(21),C=(a(153),a(30)),v=a.n(C),E=a(219),b=a.n(E),y=a(455),I=a(458),j=a(453),O=a(38),w=a.n(O),S=a(75);v.a.initializeApp({apiKey:"AIzaSyCDF7P12-_oQkeAk71Sm_ro9nddyohU8QQ",authDomain:"listofclients-a081f.firebaseapp.com",databaseURL:"https://listofclients-a081f.firebaseio.com",projectId:"listofclients-a081f",storageBucket:"listofclients-a081f.appspot.com",messagingSenderId:"1053310062783"});var N=v.a.database().ref().child("clients"),k=v.a.storage(),_=(v.a.auth(),new v.a.auth.GoogleAuthProvider,a(440)),z=a(454),A=a(100),U=a(451),D=a(65),P=a.n(D),R=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={image:null,url:a.props.url,progress:a.props.progress,styleColor:"transparent"},a.uploadFile=function(e){e.target.files[0]&&a.setState({image:e.target.files[0],styleColor:"black"})},a.handleUpload=function(){if(null!==a.state.image){var e=a.state.image;k.ref("images/".concat(e.name)).put(e).on("state_changed",function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);a.setState({progress:t})},function(e){console.log(e)},function(){k.ref("images").child(e.name).getDownloadURL().then(function(e){a.setState({url:e}),a.props.getUrl(e)})})}else alert("The image is not selected")},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:P.a.uploadImg},r.a.createElement("img",{src:this.props.url?this.props.url:this.state.url,alt:"avatar"}),r.a.createElement("div",{className:P.a["div-input-btn-progress"]},r.a.createElement("div",{className:P.a["div-input-btn"]},r.a.createElement("input",{type:"file",onChange:this.uploadFile,id:P.a["custom-file-input"],style:{color:this.state.styleColor}}),r.a.createElement("button",{onClick:this.handleUpload},"Upload")),r.a.createElement("progress",{value:this.props.progress?this.props.progress:this.state.progress,max:"100"}),r.a.createElement("div",{className:P.a["div-progress-num"]},this.props.progress?this.props.progress:this.state.progress," %")))}}]),t}(n.Component),F=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={progress:0,firstName:a.props.client.general.firstName,lastName:a.props.client.general.lastName,avatar:a.props.client.general.avatar,email:a.props.client.contact.email,phone:a.props.client.contact.phone,city:a.props.client.address.city,country:a.props.client.address.country,street:a.props.client.address.street,zipCode:a.props.client.address.zipCode,company:a.props.client.job.company,title:a.props.client.job.title},a.handleChange=function(e){a.setState(Object(A.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){var e=a.state,t=e.firstName,n=e.lastName,r=e.avatar,l=e.email,i=e.phone,o={address:{city:e.city,country:e.country,street:e.street,zipCode:e.zipCode},contact:{email:l,phone:i},general:{avatar:r,firstName:t,lastName:n},job:{company:e.company,title:e.title}};a.props.updateContact(a.props.id,o),a.props.closeEditWindow(),a.setState({progress:"0"})},a.getUrl=function(e){a.setState({avatar:e})},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state,t=e.firstName,a=e.lastName,n=e.email,l=e.phone,i=e.company,o=e.title,c=e.city,s=e.country,u=e.zipCode,p=e.street;return r.a.createElement(U.a,null,r.a.createElement(R,{getUrl:this.getUrl,url:this.state.avatar,progress:this.state.progress}),r.a.createElement("hr",null),r.a.createElement(U.a.Group,{unstackable:!0,widths:2},r.a.createElement(U.a.Input,{label:"First name",placeholder:"First name",name:"firstName",value:t,onChange:this.handleChange}),r.a.createElement(U.a.Input,{label:"Last name",placeholder:"Last name",name:"lastName",value:a,onChange:this.handleChange})),r.a.createElement(U.a.Group,{widths:2},r.a.createElement(U.a.Input,{label:"Company",placeholder:"Company",name:"company",value:i,onChange:this.handleChange}),r.a.createElement(U.a.Input,{label:"Profession",placeholder:"Profession",name:"title",value:o,onChange:this.handleChange})),r.a.createElement(U.a.Group,{widths:2},r.a.createElement(U.a.Input,{label:"Email",placeholder:"Email",name:"email",value:n,onChange:this.handleChange}),r.a.createElement(U.a.Input,{label:"Phone",placeholder:"Phone",name:"phone",value:l,onChange:this.handleChange})),r.a.createElement(U.a.Group,{widths:2},r.a.createElement(U.a.Input,{label:"Country",placeholder:"Country",name:"country",value:s,onChange:this.handleChange}),r.a.createElement(U.a.Input,{label:"City",placeholder:"City",name:"city",value:c,onChange:this.handleChange})),r.a.createElement(U.a.Group,{widths:2},r.a.createElement(U.a.Input,{label:"Street",placeholder:"Street",name:"street",value:p,onChange:this.handleChange}),r.a.createElement(U.a.Input,{label:"ZipCode",placeholder:"ZipCode",name:"zipCode",value:u,onChange:this.handleChange})),r.a.createElement(z.a,{type:"submit",color:"green",onClick:this.handleSubmit},"Save"))}}]),t}(n.Component),G=Object(u.b)(null,function(e){return{updateContact:function(t,a){return e(function(e,t){return function(){var a=Object(S.a)(w.a.mark(function a(n){return w.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",N.child(e).update(t).then(function(){return N.once("value")}).then(function(e){return e.val()}).catch(function(e){return{errorCode:e.code,errorMessage:e.message}}));case 1:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}()}(t,a))}}})(F),H=a(452),L=a(456),x=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},a.show=function(e){return function(){return a.setState({dimmer:e,open:!0})}},a.close=function(){return a.setState({open:!1})},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state.open;return r.a.createElement("div",null,r.a.createElement(z.a,{onClick:this.show("blurring"),fluid:!0,color:"green",size:"mini"},"Edit"),r.a.createElement(H.a,{open:e,onClose:this.close},r.a.createElement(L.a,{icon:"user outline",content:"Edit the  card of client"}),r.a.createElement(H.a.Content,{image:!0},r.a.createElement(H.a.Description,null,this.props.children)),r.a.createElement(H.a.Actions,null,r.a.createElement(z.a,{color:"red",icon:"close",labelPosition:"right",content:"Cancel",onClick:this.close}))))}}]),t}(n.Component),T=(a(432),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={edit:!1},a.thisClient=function(){a.props.getClient(a.props.client)},a.showHideSettings=function(){a.setState({showBtn:!a.state.showBtn})},a.editClient=function(){a.setState({edit:!0})},a.closeEditWindow=function(){a.setState({edit:!1})},a.delClient=function(){window.confirm("Are you sure you wish to delete this item?")&&a.props.removeClient(a.props.id)},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.client,a=e.id,n=e.active,l=t.general,i=t.job,o="list-of-clients ".concat(n===t?"active-item":""," ").concat(""!==n?"no-active-item":"");return r.a.createElement(j.a.Item,{className:o,id:a},r.a.createElement(_.a,{avatar:!0,circular:!0,src:l.avatar?l.avatar:"",onClick:this.thisClient}),r.a.createElement(j.a.Content,{onClick:this.thisClient},r.a.createElement(j.a.Header,null,l.firstName?l.firstName:""," ",l.lastName?l.lastName:""),i.title?i.title:""),r.a.createElement(z.a,{compact:!0,circular:!0,size:"mini",icon:this.props.showHideItem?"angle up":"angle down",onClick:this.props.toggleOpenItem,className:"btn-angel"}),this.props.showHideItem?r.a.createElement("div",{className:"btns-settings"},r.a.createElement(x,null,r.a.createElement(G,{id:this.props.id,client:this.props.client,closeEditWindow:this.closeEditWindow})),r.a.createElement("div",null,r.a.createElement(z.a,{color:"red",size:"mini",fluid:!0,onClick:this.delClient},"Delete"))):null)}}]),t}(n.Component)),W=Object(u.b)(null,function(e){return{removeClient:function(t){return e((a=t,function(){var e=Object(S.a)(w.a.mark(function e(t){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:N.child(a).remove();case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()));var a}}})(T),Z=a(133),B=function(e){var t=e.client,a=t.general,n=t.job,l=t.contact,i=t.address;return r.a.createElement(I.a,null,r.a.createElement(I.a.Column,{width:4},r.a.createElement(_.a,{src:a.avatar})),r.a.createElement(I.a.Column,{width:12},r.a.createElement(L.a,{as:"h1"},a.firstName," ",a.lastName),r.a.createElement(j.a,{size:"big"},n.company&&r.a.createElement(j.a.Item,null,r.a.createElement("strong",null,"Company: ")," ",n.company),n.title&&r.a.createElement(j.a.Item,null,r.a.createElement("strong",null,"Profession: ")," ",n.title)),r.a.createElement(j.a,null,l.email&&r.a.createElement(j.a.Item,null,r.a.createElement(Z.a,{name:"envelope"}),l.email),l.phone&&r.a.createElement(j.a.Item,null,r.a.createElement(Z.a,{name:"phone"}),l.phone)),r.a.createElement(j.a,null,i.country&&r.a.createElement(j.a.Item,null,r.a.createElement("strong",null,"Country: "),i.country),i.city&&r.a.createElement(j.a.Item,null,r.a.createElement("strong",null,"City: ")," ",i.city),i.street&&r.a.createElement(j.a.Item,null,r.a.createElement("strong",null,"Street: ")," ",i.street),i.zipCode&&r.a.createElement(j.a.Item,null,r.a.createElement("strong",null,"ZipCode: ")," ",i.zipCode))))},M=a(449),Q=function(e){var t=e.searchHandle;return r.a.createElement(M.a,{icon:"search",placeholder:"Search clients...",fluid:!0,onChange:t})},J=a(457),K=a(450),V=function(){return r.a.createElement("div",null,r.a.createElement(y.a,null,r.a.createElement(J.a,{active:!0,inverted:!0},r.a.createElement(K.a,{size:"mini",inverted:!0}))))},q=a(141),X=a.n(q),Y=(a(434),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={progress:0,url:"https://s3.amazonaws.com/uifaces/faces/twitter/falconerie/128.jpg",firstName:"",lastName:"",email:"",phone:"",city:"",country:"",street:"",zipCode:"",company:"",title:""},a.handleChange=function(e){a.setState(Object(A.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){var e=a.state,t=e.url,n=e.firstName,r=e.lastName,l=e.email,i=e.phone,o={address:{city:e.city,country:e.country,street:e.street,zipCode:e.zipCode},contact:{email:l,phone:i},general:{avatar:t,firstName:n,lastName:r},job:{company:e.company,title:e.title}};""!==n||""!==r?a.props.addClient(o):alert("enter the name"),a.setState({firstName:"",lastName:"",email:"",phone:"",city:"",country:"",street:"",zipCode:"",company:"",title:"",url:"https://s3.amazonaws.com/uifaces/faces/twitter/falconerie/128.jpg",progress:"0"})},a.getUrl=function(e){a.setState({url:e})},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state,t=e.firstName,a=e.lastName,n=e.email,l=e.phone,i=e.company,o=e.title,c=e.city,s=e.country,u=e.zipCode,p=e.street;return r.a.createElement(U.a,null,r.a.createElement(R,{getUrl:this.getUrl,url:this.state.url,progress:this.state.progress}),r.a.createElement("hr",null),r.a.createElement(U.a.Group,{unstackable:!0,widths:2},r.a.createElement(U.a.Input,{label:"First name",placeholder:"First name",name:"firstName",value:t,onChange:this.handleChange}),r.a.createElement(U.a.Input,{label:"Last name",placeholder:"Last name",name:"lastName",value:a,onChange:this.handleChange})),r.a.createElement(U.a.Group,{widths:2},r.a.createElement(U.a.Input,{label:"Company",placeholder:"Company",name:"company",value:i,onChange:this.handleChange}),r.a.createElement(U.a.Input,{label:"Profession",placeholder:"Profession",name:"title",value:o,onChange:this.handleChange})),r.a.createElement(U.a.Group,{widths:2},r.a.createElement(U.a.Input,{label:"Email",placeholder:"Email",name:"email",value:n,onChange:this.handleChange}),r.a.createElement(U.a.Input,{label:"Phone",placeholder:"Phone",name:"phone",value:l,onChange:this.handleChange})),r.a.createElement(U.a.Group,{widths:2},r.a.createElement(U.a.Input,{label:"Country",placeholder:"Country",name:"country",value:s,onChange:this.handleChange}),r.a.createElement(U.a.Input,{label:"City",placeholder:"City",name:"city",value:c,onChange:this.handleChange})),r.a.createElement(U.a.Group,{widths:2},r.a.createElement(U.a.Input,{label:"Street",placeholder:"Street",name:"street",value:p,onChange:this.handleChange}),r.a.createElement(U.a.Input,{label:"ZipCode",placeholder:"ZipCode",name:"zipCode",value:u,onChange:this.handleChange})),r.a.createElement(z.a,{type:"submit",color:"green",onClick:this.handleSubmit},"Submit"))}}]),t}(n.Component)),$=Object(u.b)(null,function(e){return{addClient:function(t){return e((a=t,function(){var e=Object(S.a)(w.a.mark(function e(t){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:N.push().set(a);case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()));var a}}})(Y),ee=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},a.show=function(e){return function(){return a.setState({dimmer:e,open:!0})}},a.close=function(){return a.setState({open:!1})},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state.open;return r.a.createElement("div",null,r.a.createElement(z.a,{onClick:this.show("blurring"),circular:!0,color:"green",icon:"plus",size:"big",className:"btn-add-client"}),r.a.createElement(H.a,{open:e,onClose:this.close},r.a.createElement(L.a,{icon:"user outline",content:"Add new client"}),r.a.createElement(H.a.Content,{image:!0},r.a.createElement(H.a.Description,null,this.props.children)),r.a.createElement(H.a.Actions,null,r.a.createElement(z.a,{color:"red",icon:"close",labelPosition:"right",content:"Close",onClick:this.close}))))}}]),t}(n.Component);a(436);var te=function(e){return function(t){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(d.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(r)))).state={openItemId:null},t.toggleOpenItem=function(e){return function(){t.setState({openItemId:e===t.state.openItemId?null:e})}},t.openItemIdRefresh=function(){t.setState({openItemId:null})},t}return Object(g.a)(a,t),Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement(e,Object.assign({},this.props,this.state,{toggleOpenItem:this.toggleOpenItem,openItemIdRefresh:this.openItemIdRefresh}))}}]),a}(n.Component)},ae=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={clientsDetails:"",finded:""},a.searchHandle=function(e){a.setState({finded:e.target.value})},a.getClient=function(e){a.setState({clientsDetails:e}),null!==a.props.openItemId&&a.props.openItemIdRefresh()},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"displayClients",value:function(e){var t=this.state.finded.toLowerCase();return 0===this.state.finded.length?e:X.a.filter(e,function(e){if(null!==e){var a=e.props.client.general,n=a.firstName,r=a.lastName,l=e.props.client.job,i=l.company,o=l.title,c=e.props.client.contact,s=c.email,u=c.phone,p=e.props.client.address;return(n+r+i+o+s+u+p.street+p.city+p.zipCode+p.country).toLowerCase().includes(t)}})}},{key:"componentDidMount",value:function(){this.props.fetchClients()}},{key:"render",value:function(){var e=this,t=this.state.clientsDetails,a=this.props.clients,n=X.a.map(a,function(a,n){return a?r.a.createElement(W,{key:n,id:n,client:a,getClient:e.getClient,active:t,showHideItem:n===e.props.openItemId,toggleOpenItem:e.props.toggleOpenItem(n)}):null});return r.a.createElement(y.a,null,r.a.createElement(I.a,{divided:"vertically"},r.a.createElement(I.a.Column,{width:4},r.a.createElement(Q,{searchHandle:this.searchHandle}),r.a.createElement(j.a,{selection:!0,verticalAlign:"middle",className:"ul-clients-list"},""!==a?this.displayClients(n):r.a.createElement(V,null))),r.a.createElement(I.a.Column,{width:12},""!==t?r.a.createElement(B,{client:t}):"Select the customer from on the left list",r.a.createElement(ee,null,r.a.createElement($,null)))))}}]),t}(n.Component),ne=Object(u.b)(function(e){return{clients:e.clients,auth:e.auth}},function(e){return{fetchClients:function(){return e(function(){var e=Object(S.a)(w.a.mark(function e(t){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:N.on("value",function(e){t({type:"FETCH_CLIENTS",payload:e.val()})});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())}}})(te(ae)),re=a(142),le=a.n(re),ie=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={isSignedIn:!1},a.uiConfig={signInFlow:"popup",signInOptions:[v.a.auth.GoogleAuthProvider.PROVIDER_ID,v.a.auth.EmailAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(){return!1}}},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.auth().onAuthStateChanged(function(t){e.setState({isSignedIn:!!t})})}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.isSignedIn?r.a.createElement("div",{className:le.a["parent-auth"]},r.a.createElement("span",{className:le.a.auth},r.a.createElement("button",{onClick:function(){return v.a.auth().signOut()}},"Sign out!"),r.a.createElement("div",null,"Signed In!"),r.a.createElement("h3",null,"Welcome ",v.a.auth().currentUser.displayName),r.a.createElement("img",{alt:"profile avatar",src:v.a.auth().currentUser.photoURL})),v.a.auth().currentUser?r.a.createElement(ne,null):null):r.a.createElement(b.a,{uiConfig:this.uiConfig,firebaseAuth:v.a.auth()}))}}]),t}(n.Component),oe=Object(o.createStore)(c,Object(s.composeWithDevTools)(Object(o.applyMiddleware)(p.a)));i.a.render(r.a.createElement(u.a,{store:oe},r.a.createElement(ie,null)),document.getElementById("root"))},65:function(e,t,a){e.exports={uploadImg:"style_uploadImg__oDL1d","div-input-btn-progress":"style_div-input-btn-progress__2FORE","div-input-btn":"style_div-input-btn__1j5Fk","custom-file-input":"style_custom-file-input__3oGKg","div-progress-num":"style_div-progress-num__9pryh"}}},[[249,2,1]]]);
//# sourceMappingURL=main.5aaa92cb.chunk.js.map