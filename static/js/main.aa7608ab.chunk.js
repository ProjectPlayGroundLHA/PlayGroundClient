(this.webpackJsonpPlayGroundClient=this.webpackJsonpPlayGroundClient||[]).push([[0],{110:function(e,t,n){},161:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(39),o=n.n(s),c=(n(101),n(54),n(44)),i=n(10),l=n(11),d=n(13),h=n(12),u=n(16),j=n(170),b=n(2),p=n(3),m=n(1),O=["user","component","render"],g=function(e){var t=e.user,n=e.component,r=e.render,a=Object(p.a)(e,O);return t&&r?Object(m.jsx)(u.b,Object(b.a)(Object(b.a)({},a),{},{render:r})):Object(m.jsx)(u.b,Object(b.a)(Object(b.a)({},a),{},{render:function(e){return t?Object(m.jsx)(n,Object(b.a)({},e)):Object(m.jsx)(u.a,{to:"/"})}}))},x=n(79),f=(n(110),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).handleClose=function(){return r.setState({show:!1})},r.state={show:!0},r.timeoutId=null,r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,n=e.heading,r=e.message,a=e.deleteAlert,s=e.id;return this.state.show||setTimeout((function(){a(s)}),300),Object(m.jsx)(x.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(x.a.Heading,{children:n}),Object(m.jsx)("p",{className:"alert-body",children:r})]})})}}]),n}(a.a.Component)),w=n(94),v=n(61),C=n(169),y=n(21),k=n(8),S="https://mysterious-plains-31294.herokuapp.com",A="http://localhost:4741",P="localhost"===window.location.hostname?A:S,D=n(23),L=n.n(D),M=function(e){return L()({url:P+"/sign-in/",method:"POST",data:{credentials:{username:e.username,password:e.password}}})},T=n(6),I=n(15),F=n(9),G=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).handleClose=function(){return r.setState({show:!1})},r.handleShow=function(){return r.setState({show:!0})},r.handleChange=function(e){return r.setState(Object(k.a)({},e.target.name,e.target.value))},r.onSignIn=function(e){e.preventDefault(),console.log("props in sign in: ",r.props);var t=r.props,n=t.history,a=t.setUser;M(r.state).then((function(e){console.log("this is res in sign in ",e),a(e.data.user)})).then((function(){return n.push("/map")})).catch((function(e){r.setState({username:"",password:""}),console.log(e)}))},r.state={username:"",password:"",show:!1},r}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(I.a,{style:{backgroundColor:"#273238",borderColor:"transparent",color:"white"},onClick:this.handleShow,children:" Sign In"}),Object(m.jsxs)(F.a,{"aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:this.state.show,onHide:this.handleClose,children:[Object(m.jsx)(F.a.Header,{closeButton:!0,children:Object(m.jsx)(F.a.Title,{children:"Sign In"})}),Object(m.jsx)(F.a.Body,{children:Object(m.jsxs)(T.a,{onSubmit:this.onSignIn,children:[Object(m.jsxs)(T.a.Group,{controlId:"username",children:[Object(m.jsx)(T.a.Label,{children:"Username"}),Object(m.jsx)(T.a.Control,{required:!0,type:"username",name:"username",value:t,placeholder:"Enter username",onChange:this.handleChange})]}),Object(m.jsxs)(T.a.Group,{controlId:"password",children:[Object(m.jsx)(T.a.Label,{children:"Password"}),Object(m.jsx)(T.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(m.jsx)("br",{}),Object(m.jsx)(I.a,{style:{backgroundColor:"#273238",borderColor:"transparent",color:"white"},type:"submit",children:"Submit"})]})}),Object(m.jsx)(F.a.Footer,{children:Object(m.jsx)(I.a,{variant:"secondary",onClick:this.handleClose,children:"Close"})})]})]})}}]),n}(r.Component),N=Object(u.f)(G),U=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).handleClose=function(){return r.setState({show:!1})},r.handleShow=function(){return r.setState({show:!0})},r.handleChange=function(e){return r.setState(Object(k.a)({},e.target.name,e.target.value))},r.onSignUp=function(e){e.preventDefault();var t,n=r.props,a=n.msgAlert,s=n.history,o=n.setUser;(t=r.state,L()({method:"POST",url:P+"/sign-up/",data:{credentials:{username:t.username,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return M(r.state)})).then((function(e){return o(e.data.user)})).then((function(){return s.push("/map")})).catch((function(e){r.setState({username:"",password:"",passwordConfirmation:""}),a({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match. ",variant:"danger"})}))},r.state={username:"",password:"",passwordConfirmation:"",show:!1},r}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password,r=e.passwordConfirmation;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(I.a,{style:{backgroundColor:"#273238",borderColor:"#273238",color:"white"},onClick:this.handleShow,children:"Sign Up"}),Object(m.jsxs)(F.a,{"aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:this.state.show,onHide:this.handleClose,children:[Object(m.jsx)(F.a.Header,{closeButton:!0,children:Object(m.jsx)(F.a.Title,{children:"Sign Up"})}),Object(m.jsx)(F.a.Body,{children:Object(m.jsxs)(T.a,{onSubmit:this.onSignUp,children:[Object(m.jsxs)(T.a.Group,{controlId:"username",children:[Object(m.jsx)(T.a.Label,{children:"Username"}),Object(m.jsx)(T.a.Control,{required:!0,type:"text",name:"username",value:t,placeholder:"Enter username",onChange:this.handleChange})]}),Object(m.jsxs)(T.a.Group,{controlId:"password",children:[Object(m.jsx)(T.a.Label,{children:"Password"}),Object(m.jsx)(T.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(m.jsxs)(T.a.Group,{controlId:"passwordConfirmation",children:[Object(m.jsx)(T.a.Label,{children:"Password Confirmation"}),Object(m.jsx)(T.a.Control,{required:!0,name:"passwordConfirmation",value:r,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(m.jsx)(I.a,{variant:"primary",type:"submit",children:"Submit"})]})}),Object(m.jsxs)(F.a.Footer,{children:[Object(m.jsx)("br",{}),Object(m.jsx)(I.a,{style:{backgroundColor:"#273238",borderColor:"transparent",color:"white"},onClick:this.handleClose,children:"Close"})]})]})]})}}]),n}(r.Component),z=Object(u.f)(U),H=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).handleClose=function(){return r.setState({show:!1})},r.handleShow=function(){return r.setState({show:!0})},r.state={show:!1},r}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(I.a,{style:{backgroundColor:"#273238",borderColor:"transparent",color:"white"},onClick:this.handleShow,children:"About"}),Object(m.jsxs)(F.a,{"aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:this.state.show,onHide:this.handleClose,children:[Object(m.jsx)(F.a.Header,{closeButton:!0,children:Object(m.jsxs)(F.a.Title,{children:["The world is your ",Object(m.jsx)("i",{children:"Playground"}),"."]})}),Object(m.jsx)(F.a.Body,{children:Object(m.jsxs)("p",{children:["This app was built with the vision of connecting people across the world, sharing experiences and locations with each other, despite their distance. This is inspired by the founders, based in York and Israel.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"This is a full stack, interactive app with a Mapbox integration. We invite you to contribute to the project by visiting our open source repository ",Object(m.jsx)("a",{href:"https://github.com/ProjectPlayGroundLHA",children:"linked here"}),".",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("i",{children:"Please note that Playground currently optimized for desktop interaction. Mobile interactions are still in development and should be ready shortly."})]})})]})]})}}]),n}(r.Component),B=Object(u.f)(H),J=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).handleClose=function(){return r.setState({show:!1})},r.handleShow=function(){return r.setState({show:!0})},r.handleChange=function(e){return r.setState(Object(k.a)({},e.target.name,e.target.value))},r.onChangePassword=function(e){e.preventDefault();var t=r.props,n=t.msgAlert,a=t.history,s=t.user;(function(e,t){return L()({url:P+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(r.state,s).then((function(){return n({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return a.push("/map")})).catch((function(e){r.setState({oldPassword:"",newPassword:""}),n({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again. ",variant:"danger"})}))},r.state={oldPassword:"",newPassword:"",show:!1},r}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,n=e.newPassword;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(I.a,{style:{backgroundColor:"#273238",borderColor:"transparent",color:"white"},onClick:this.handleShow,children:"Change Password"}),Object(m.jsxs)(F.a,{"aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:this.state.show,onHide:this.handleClose,children:[Object(m.jsx)(F.a.Header,{closeButton:!0,children:Object(m.jsx)(F.a.Title,{children:"Change Password"})}),Object(m.jsx)(F.a.Body,{children:Object(m.jsxs)(T.a,{onSubmit:this.onChangePassword,children:[Object(m.jsxs)(T.a.Group,{controlId:"oldPassword",children:[Object(m.jsx)(T.a.Label,{children:"Old password"}),Object(m.jsx)(T.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(m.jsxs)(T.a.Group,{controlId:"newPassword",children:[Object(m.jsx)(T.a.Label,{children:"New Password"}),Object(m.jsx)(T.a.Control,{required:!0,name:"newPassword",value:n,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(m.jsx)(I.a,{backgroundColor:"#273238",type:"submit",children:"Submit"})]})}),Object(m.jsxs)(F.a.Footer,{children:[Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(I.a,{variant:"secondary",onClick:this.handleClose,children:"Close"})]})]})]})}}]),n}(r.Component),q=Object(u.f)(J),E=function(e){var t=e.user,n=e.setUser,a=e.msgAlert;return Object(m.jsxs)(v.a,{color:"white",expand:"md",children:[Object(m.jsx)(v.a.Brand,{children:Object(m.jsx)(y.b,{to:"/map",style:{color:"white",textDecoration:"none",textTransform:"uppercase",padding:"10 10px",fontSize:"2em"},children:"Playground"})}),Object(m.jsx)(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(m.jsx)(v.a.Collapse,{id:"basic-navbar-nav",children:Object(m.jsx)(w.a,{className:"ml-auto",children:t?Object(m.jsxs)(r.Fragment,{children:[Object(m.jsx)(B,{}),Object(m.jsxs)(C.a,{title:"Account",id:"basic-nav-dropdown",children:[Object(m.jsx)(q,{user:t,msgAlert:a,style:{color:"white"}}),Object(m.jsx)(y.c,{style:{color:"white"},to:"/sign-out",className:"nav-link",children:" Sign Out"})]})]}):Object(m.jsxs)(r.Fragment,{children:[Object(m.jsx)(N,{user:t,setUser:n,msgAlert:a}),Object(m.jsx)(z,{user:t,setUser:n,msgAlert:a})]})})})]})},W=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.history,n=e.clearUser;(function(e){return L()({url:P+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})})(e.user).finally((function(){return t.push("/")})).finally((function(){return n()}))}},{key:"render",value:function(){return""}}]),n}(r.Component),Y=Object(u.f)(W),Z=function(e){return L()({method:"GET",url:P+"/locations",headers:{Authorization:"Bearer ".concat(e.token)}})},_=function(e,t){return L()({method:"GET",url:"".concat(P,"/locations/").concat(e),headers:{Authorization:"Bearer ".concat(t.token)}})},V=function(e,t){return L()({url:P+"/locations/"+e,method:"DELETE",headers:{Authorization:"Bearer ".concat(t.token)}})},R=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).handleDelete=function(e){var t=r.props,n=t.match,a=t.user,s=t.history;V(n.params.id,a).then((function(){return s.push("/map/locations")})).catch((function(e){return console.log(e)}))},r.state={location:null},r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.match,r=t.user,a=t.msgAlert;_(n.params.id,r).then((function(t){return e.setState({location:t.data.location})})).catch((function(e){return a({heading:"Show location failed :(",message:"could not display locations. sorry... "+e.message,variant:"danger"})}))}},{key:"render",value:function(){if(null===this.state.location)return"Loading...";var e=this.state.location,t=e.location,n=e.description,r=e.owner,a=this.props,s=a.user,o=a.history,c=a.match;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h3",{children:"Show One Location"}),Object(m.jsx)("h5",{children:t}),Object(m.jsxs)("p",{children:["Where? Here - ",n]}),s._id===r&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(I.a,{onClick:this.handleDelete,children:"Delete"}),Object(m.jsx)(I.a,{onClick:function(){return o.push("/map/locations/".concat(c.params.id,"/edit"))},children:"Update"})]})]})}}]),n}(r.Component),K=Object(u.f)(R),Q=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).handleClose=function(){return r.setState({show:!1})},r.handleShow=function(){return r.setState({show:!0})},r.handleChange=function(e){var t=Object(k.a)({},e.target.name,e.target.value);r.setState((function(e){return{location:Object(b.a)(Object(b.a)({},e.location),t)}}))},r.handleUpdateSubmit=function(e){e.preventDefault();var t=r.props,n=t.user,a=t.msgAlert;(function(e,t){return L()({url:P+"/locations/"+e.id,method:"PATCH",data:{location:e},headers:{Authorization:"Bearer ".concat(t.token)}})})(r.state.location,n).then((function(){return console.log("this is user in update popup: ",n)})).then((function(){return r.setState({location:{id:"",description:""}})})).then((function(){return Z(n.token)})).then((function(){a({heading:"updated!",variant:"success"})})).catch((function(e){return console.log(e)})),Z(n)},r.handleDeleteSubmit=function(e){e.preventDefault();var t=r.props,n=t.user,a=t.msgAlert,s=r.state.location;V(s.id,n).then((function(){return r.setState({location:{id:""}})})).then((function(){a({heading:"Deleted!",variant:"success"})})).catch((function(e){a({heading:"Unable to delete location",message:e.message,variant:"danger"})}))},r.state={location:{id:"",description:"",show:!1}},r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.match,r=t.user;_(n.params.id,r).then((function(t){return e.setState({location:t.data.location})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(I.a,{style:{backgroundColor:"#273238",borderColor:"transparent",color:"white"},onClick:this.handleShow,children:"Edit"}),Object(m.jsx)("div",{style:{paddingBottom:"4em"}}),Object(m.jsxs)(F.a,{"aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:this.state.show,onHide:this.handleClose,children:[Object(m.jsx)(F.a.Header,{closeButton:!0,children:Object(m.jsx)(F.a.Title,{children:"Update Location"})}),Object(m.jsx)(F.a.Body,{children:Object(m.jsxs)(T.a,{onSubmit:this.handleUpdateSubmit,children:[Object(m.jsxs)(T.a.Group,{controlId:"id",children:[Object(m.jsx)(T.a.Label,{children:"ID"}),Object(m.jsx)(T.a.Control,{required:!0,name:"id",type:"text",placeholder:"Copy the ID the location you would like to update",onChange:this.handleChange})]}),Object(m.jsxs)(T.a.Group,{controlId:"description",children:[Object(m.jsx)(T.a.Label,{children:"Description"}),Object(m.jsx)(T.a.Control,{required:!0,name:"description",type:"text",placeholder:"Type in your new description",onChange:this.handleChange})]}),Object(m.jsx)("br",{}),Object(m.jsx)(I.a,{backgroundColor:"#273238",type:"submit",onClick:this.handleClose,children:"Update"})]})}),Object(m.jsx)(F.a.Header,{children:Object(m.jsx)(F.a.Title,{children:"or Delete Location"})}),Object(m.jsx)(F.a.Body,{children:Object(m.jsxs)(T.a,{onSubmit:this.handleDeleteSubmit,children:[Object(m.jsxs)(T.a.Group,{controlId:"id",children:[Object(m.jsx)(T.a.Label,{children:"ID"}),Object(m.jsx)(T.a.Control,{required:!0,name:"id",type:"text",placeholder:"Copy the ID the location you would like to update",onChange:this.handleChange})]}),Object(m.jsx)("br",{}),Object(m.jsx)(I.a,{backgroundColor:"#273238",type:"submit",onClick:this.handleClose,children:"Delete"})]})})]})]})}}]),n}(r.Component),X=Object(u.f)(Q),$=n(26),ee=n.n($);ee.a.accessToken="pk.eyJ1IjoibGF1cmFhbHlzb24iLCJhIjoiY2tzcDJleWVkMDF0NjMxcGhwMzM1Mm1tMiJ9.27PwqNrg2-gZnMmuS1vOww";var te=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={},r.mapContainer=a.a.createRef(),r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=new ee.a.Map({container:this.mapContainer.current,style:"mapbox://styles/lauraalyson/ckuj0d93d323s17rwaujvd8go",center:[-70.9,42.35],zoom:1});t.on("move",(function(){e.setState({lng:t.getCenter().lng.toFixed(4),lat:t.getCenter().lat.toFixed(4),zoom:t.getZoom().toFixed(2)})}))}},{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)("div",{ref:this.mapContainer,className:"map-container"})})}}]),n}(r.Component),ne=n(45),re=n(93),ae=n.n(re),se="https://api.mapbox.com/geocoding/v5/mapbox.places/",oe=".json?access_token=pk.eyJ1IjoibGF1cmFhbHlzb24iLCJhIjoiY2tzcDJleWVkMDF0NjMxcGhwMzM1Mm1tMiJ9.27PwqNrg2-gZnMmuS1vOww",ce=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).handleChange=function(e){return r.setState({location:r.props.address,description:e.target.value,coordinates:[r.props.lng,r.props.lat]})},r.onCreateLocation=function(e){e.preventDefault();var t=r.props,n=t.user,a=t.msgAlert,s=t.setAddress;(function(e,t){return console.log(e,t),L()({method:"POST",url:P+"/locations",headers:{Authorization:"Bearer ".concat(t.token)},data:{location:e}})})(r.state,n).then((function(){return r.setState({description:""})})).then(s()).then((function(e){return console.log("this is res in create location \n",e)})).catch((function(e){a({heading:"Location creation failed :(",message:"Failed to pin location )=  try again soon. "+e.message,variant:"danger"}),r.setState({description:""})}))},r.state={location:"",description:"",coordinates:[]},r}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.lat,n=e.lng,r=e.address,a=e.user,s=e.msgAlert,o=this.state.description;return Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-sm-10 col-sm-8 mx-auto mt-5",children:Object(m.jsxs)(T.a,{onSubmit:this.onCreateLocation,children:[Object(m.jsx)("h2",{children:"Create Location"}),Object(m.jsxs)("p",{className:"lat-long",children:["Longitude: ",n,Object(m.jsx)("br",{}),"Latitude: ",t]}),Object(m.jsxs)(T.a.Group,{controlId:"location",children:[Object(m.jsx)(T.a.Label,{children:"Drag and drop your pin to set a location."}),Object(m.jsx)(T.a.Control,{size:"sm",required:!0,type:"text",name:"location",value:r,placeholder:"Location",onChange:this.handleChange})]}),Object(m.jsxs)(T.a.Group,{controlId:"description",children:[Object(m.jsx)("br",{}),Object(m.jsx)(T.a.Label,{variant:"primary",children:"What makes this place so great?"}),Object(m.jsx)(T.a.Control,{size:"sm",required:!0,name:"description",value:o,type:"text",placeholder:"Description",onChange:this.handleChange})]}),Object(m.jsx)("br",{}),Object(m.jsx)(I.a,{style:{backgroundColor:"#273238",borderColor:"transparent",color:"white"},type:"submit",children:"Add"})," \xa0",Object(m.jsx)(X,{style:{color:"white"},user:a,msgAlert:s})]})})})}}]),n}(r.Component),ie=Object(u.f)(ce),le=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).handleClose=function(){return r.setState({show:!1})},r.state={show:!0},r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(F.a,{"aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:this.state.show,onHide:this.handleClose,children:[Object(m.jsx)(F.a.Header,{closeButton:!0,children:Object(m.jsxs)(F.a.Title,{children:["The world is your ",Object(m.jsx)("i",{children:"Playground"}),"."]})}),Object(m.jsx)(F.a.Body,{children:Object(m.jsxs)("p",{children:["This app was built with the vision of connecting people across the world, sharing experiences and locations with each other, despite their distance. This is inspired by the founders, based in York and Israel.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"This is a full stack, interactive app with a Mapbox integration. We invite you to contribute to the project by visiting our open source repository ",Object(m.jsx)("a",{href:"https://github.com/ProjectPlayGroundLHA",children:"linked here"}),".",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("i",{children:"Please note that Playground currently optimized for desktop interaction. Mobile interactions are still in development and should be ready shortly."})]})})]})})}}]),n}(r.Component),de=Object(u.f)(le);ee.a.accessToken="pk.eyJ1IjoibGF1cmFhbHlzb24iLCJhIjoiY2tzcDJleWVkMDF0NjMxcGhwMzM1Mm1tMiJ9.27PwqNrg2-gZnMmuS1vOww";var he=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).setAddress=function(){r.setState({address:""})},r.state={lng:"",lat:"",zoom:"",address:"",color:"",center:{},locations:"",time:Date.now()},r.mapContainer=a.a.createRef(),r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=new ee.a.Map({container:this.mapContainer.current,style:"mapbox://styles/lauraalyson/ckuj0d93d323s17rwaujvd8go",center:[-29,32],zoom:2});this.interval=setInterval((function(){return e.setState({time:Date.now()})}),1e3),this.setState({mapStore:t});var n=this.state.color;Z(this.props.user).then((function(e){console.log("This is the response\n",e);var n,r=Object(ne.a)(e.data.locations);try{for(r.s();!(n=r.n()).done;){var a=n.value,s=a.coordinates,o=a.location,c=a.description,i=a._id;new ee.a.Marker({draggable:!1,color:"#D0E0F1"}).setLngLat(s).setPopup(new ee.a.Popup({offset:25}).setHTML("\n              <div>\n              <h4>".concat(o,"</h4>\n              <h6>").concat(c,"</h6>\n              <p>ID: ").concat(i,"</p>\n              </div>\n              "))).addTo(t)}}catch(l){r.e(l)}finally{r.f()}})).then((function(t){return e.setState({locations:t.data.locations})})).catch((function(e){return console.log(e)}));var r=new ee.a.Marker({color:n,draggable:!0}).setLngLat([t.getCenter().lng,t.getCenter().lat]).addTo(t);t.on("moveend",(function(){r.remove(),r.setLngLat([t.getCenter().lng,t.getCenter().lat]).addTo(t)})),r.on("click",(function(e){console.log("this has been clicked \n",e)}));r.on("dragend",(function(n){var a,s,o=r.getLngLat();e.setState({lng:o.lng,lat:o.lat,zoom:t.getZoom().toFixed(2)}),(a=o.lng,s=o.lat,L()({method:"GET",url:se+a+","+s+oe})).then((function(t){console.log(t.data),e.setState({address:t.data.features[1].text})})).catch((function(t){return e.setState({address:"Ooops, that is the ocean! Pick somewhere on land."})})),Z(e.props.user).then((function(e){console.log(e);var n,r=Object(ne.a)(e.data.locations);try{for(r.s();!(n=r.n()).done;){var a=n.value,s=a.coordinates,o=a.location,c=a.description,i=a._id;new ee.a.Marker({draggable:!1,color:"#D0E0F1"}).setPopup(new ee.a.Popup({offset:25}).setHTML("\n                    <div>\n                    <h5>".concat(o,"</h5>\n                    <h6>").concat(c,"</h6>\n                    <p>ID: ").concat(i,"</p>\n                    </div>\n                  "))).setLngLat(s).addTo(t)}}catch(l){r.e(l)}finally{r.f()}})).catch((function(e){return console.log("second index location failed \n",e)}))}));var a=new ae.a({accessToken:ee.a.accessToken});t.addControl(a)}},{key:"render",value:function(){var e=this.state,t=e.lng,n=e.lat,r=e.address,a=this.props,s=a.user,o=a.msgAlert;return Object(m.jsxs)("div",{children:[Object(m.jsx)(de,{}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-lg-4 col-md-4 mb-sm-0 gutter-form",children:[Object(m.jsx)(ie,{lng:t,lat:n,msgAlert:o,user:s,address:r,setAddress:this.setAddress}),Object(m.jsx)("div",{children:Object(m.jsx)("p",{children:this.state.locations})})]}),Object(m.jsx)("div",{className:"col-lg-8 col-md-8 mb-sm-0",children:Object(m.jsx)("div",{ref:this.mapContainer,className:"map-container"})})]})]})}}]),n}(r.Component),ue=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={},r}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsx)("section",{children:Object(m.jsxs)("footer",{className:"text-white row",children:[Object(m.jsx)("div",{className:"row"}),Object(m.jsxs)("div",{className:"text-left col-6 hover-text",children:[Object(m.jsx)("h5",{children:"Discover"}),Object(m.jsx)("a",{className:"text-white",href:"https://www.mapbox.com/",children:"Mapbox"}),Object(m.jsx)("br",{}),Object(m.jsx)("a",{className:"text-white",href:"https://github.com/ProjectPlayGroundLHA/PlayGroundClient/blob/main/ApiDocumentation.md",children:"Documentation"})]}),Object(m.jsxs)("div",{className:"text-right col-6 hover-text",children:[Object(m.jsx)("h5",{children:"About"}),Object(m.jsx)("a",{className:"text-white",href:"https://github.com/ProjectPlayGroundLHA",children:"Github"}),Object(m.jsx)("br",{}),Object(m.jsx)("a",{className:"text-white",href:"https://github.com/ProjectPlayGroundLHA/PlayGroundClient",children:"Source Code"}),Object(m.jsx)("br",{}),Object(m.jsx)("a",{className:"text-white",href:"https://github.com/ProjectPlayGroundLHA/PlayGroundApi",children:"API"}),Object(m.jsx)("br",{})]})]})})}}]),n}(r.Component),je=Object(u.f)(ue);ee.a.accessToken="pk.eyJ1IjoibGF1cmFhbHlzb24iLCJhIjoiY2tzcDJleWVkMDF0NjMxcGhwMzM1Mm1tMiJ9.27PwqNrg2-gZnMmuS1vOww";var be=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).setUser=function(e){return r.setState({user:e})},r.clearUser=function(){return r.setState({user:null})},r.deleteAlert=function(e){r.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},r.msgAlert=function(e){var t=e.heading,n=e.message,a=e.variant,s=Object(j.a)();r.setState((function(e){return{msgAlerts:[].concat(Object(c.a)(e.msgAlerts),[{heading:t,message:n,variant:a,id:s}])}}))},r.state={user:null,msgAlerts:[]},r}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.msgAlerts,a=t.user;return Object(m.jsxs)(r.Fragment,{children:[n.map((function(t){return Object(m.jsx)(f,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(m.jsxs)(E,{msgAlert:this.msgAlert,setUser:this.setUser,user:a,className:"container-fluid",children:[Object(m.jsx)(u.b,{path:"/sign-up",render:function(){return Object(m.jsx)(z,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(m.jsx)(u.b,{path:"/sign-in",render:function(){return Object(m.jsx)(N,{msgAlert:e.msgAlert,setUser:e.setUser})}})]}),Object(m.jsxs)("main",{className:"container-fluid",children:[Object(m.jsx)(u.b,{exact:!0,path:"/",render:function(){return Object(m.jsx)(te,{})}}),Object(m.jsx)(g,{user:a,path:"/sign-out",render:function(){return Object(m.jsx)(Y,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:a})}}),Object(m.jsx)(g,{user:a,path:"/change-password",render:function(){return Object(m.jsx)(q,{msgAlert:e.msgAlert,user:a})}}),Object(m.jsx)(g,{msgAlert:this.msgAlert,user:a,exact:!0,path:"/map/locations/:id",render:function(){return Object(m.jsx)(K,{msgAlert:e.msgAlert,user:a})}}),Object(m.jsx)(g,{msgAlert:this.msgAlert,user:a,path:"/map/locations/:id/edit",render:function(){return Object(m.jsx)(X,{msgAlert:e.msgAlert,user:a})}}),Object(m.jsx)(g,{render:function(){return Object(m.jsx)(B,{})}}),Object(m.jsx)(g,{user:a,path:"/map",render:function(){return Object(m.jsx)(he,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:a})}}),Object(m.jsx)(u.b,{path:"/",render:function(){return Object(m.jsx)(je,{})}})]})]})}}]),n}(r.Component),pe=Object(m.jsx)(y.a,{basename:"/PlayGroundClient",children:Object(m.jsx)(be,{})});o.a.render(pe,document.getElementById("root"))},54:function(e,t,n){}},[[161,1,2]]]);
//# sourceMappingURL=main.aa7608ab.chunk.js.map