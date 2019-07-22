(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{258:function(e,a,t){e.exports=t(334)},334:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(16),l=t.n(o),i=t(22),c=t(45),s=t(86),m=t(30),u=t(209),d=t(214),g=t(181),p=t(96),E=t(19),f=t(253),b=t(252),v=t(250),h=t(251),k=t(31),C=t.n(k),O=t(210),y=t(211),j=t(212),S=t(213),w=t(95),I=t(206),F=t(242),B=t.n(F),R=t(198),T=t(203),$=t(204),U=t(179),x=t(194),P=t(205),z=function(e){var a=e.open,t=e.handleClose,n=e.signIn,o=e.error,l=r.a.useState(""),c=Object(i.a)(l,2),s=c[0],m=c[1],u=r.a.useState(""),d=Object(i.a)(u,2),g=d[0],p=d[1],E=function(){return n({variables:{username:s,password:g}})};if(o){var f=o.message.split(":");o=f[f.length-1]}return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{open:a,onClose:t,"aria-labelledby":"signin-form"},r.a.createElement(T.a,{id:"signin-form"},"Sign in"),o&&r.a.createElement($.a,null,r.a.createElement("p",{style:{color:"red",margin:0,padding:0}},o)),r.a.createElement("form",null,r.a.createElement($.a,null,r.a.createElement(U.a,{htmlFor:"username",shrink:!0},"Username"),r.a.createElement(x.a,{style:{marginBottom:"1rem"},autoFocus:!0,margin:"dense",id:"username",name:"Username",type:"text",value:s,fullWidth:!0,required:!0,autoComplete:"username",onChange:function(e){var a=e.target.value;return m(a)}}),r.a.createElement(U.a,{htmlFor:"password",shrink:!0},"Password"),r.a.createElement(x.a,{margin:"dense",id:"password",name:"Password",type:"password",value:g,fullWidth:!0,required:!0,autoComplete:"current-password",onChange:function(e){var a=e.target.value;return p(a)},onKeyUp:function(e){13===e.keyCode&&E()}})),r.a.createElement(P.a,null,r.a.createElement(I.a,{onClick:t,color:"primary"},"Cancel"),r.a.createElement(I.a,{onClick:E,color:"primary"},"Sign in")))))};function N(){var e=Object(m.a)(["\n  mutation signIn($username: String!, $password: String!) {\n    signIn(username: $username, password: $password) {\n      token\n    }\n  }\n"]);return N=function(){return e},e}var A=C()(N()),q=function(e){var a=e.open,t=e.handleClose;return r.a.createElement(E.a,null,function(e){return r.a.createElement(E.c,{mutation:A,onCompleted:function(a){t(),localStorage.setItem("x-token",a.signIn.token),e.resetStore()},onError:function(e){}},function(e,n){var o=n.loading,l=n.error;return o?r.a.createElement(u.a,{disableShrink:!0,size:30,thickness:2,variant:"indeterminate",style:{position:"absolute",left:"50%",marginTop:"5rem"}}):r.a.createElement(z,{open:a,handleClose:t,signIn:e,error:l})})})},W=function(e){localStorage.removeItem("x-token"),e.resetStore()},L=function(){return r.a.createElement(E.a,null,function(e){return r.a.createElement(I.a,{color:"inherit",variant:"outlined",style:{marginLeft:"auto"},onClick:function(){return W(e)}},"Sign out")})},D=function(e){var a=e.open,t=e.handleClose,n=e.signUp,o=e.error,l=r.a.useState(""),c=Object(i.a)(l,2),m=c[0],u=c[1],d=r.a.useState(""),g=Object(i.a)(d,2),p=g[0],E=g[1],f=r.a.useState(""),b=Object(i.a)(f,2),v=b[0],h=b[1];if(o){var k=o.message.split(":");o=k[k.length-1]}return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{open:a,onClose:t,"aria-labelledby":"signup-form"},r.a.createElement(T.a,{id:"signup-form"},"Sign Up"),o&&r.a.createElement($.a,null,r.a.createElement("p",{style:{color:"red",margin:0,padding:0}},o)),r.a.createElement("form",null,r.a.createElement($.a,null,r.a.createElement(U.a,{htmlFor:"username",shrink:!0},"Username"),r.a.createElement(x.a,{style:{marginBottom:"1rem"},autoFocus:!0,margin:"dense",id:"username",name:"Username",type:"text",value:m,fullWidth:!0,required:!0,autoComplete:"username",onChange:function(e){var a=e.target.value;return u(a)}}),r.a.createElement(U.a,{htmlFor:"password",shrink:!0},"Password"),r.a.createElement(x.a,{style:{marginBottom:"1rem"},margin:"dense",id:"password",name:"Password",type:"password",value:p,fullWidth:!0,required:!0,autoComplete:"new-password",onChange:function(e){var a=e.target.value;return E(a)}}),r.a.createElement(U.a,{htmlFor:"email",shrink:!0},"Email"),r.a.createElement(x.a,{margin:"dense",id:"email",name:"Email",type:"email",value:v,fullWidth:!0,onChange:function(e){var a=e.target.value;return h(a)}})),r.a.createElement(P.a,null,r.a.createElement(I.a,{onClick:t,color:"primary"},"Cancel"),r.a.createElement(I.a,{onClick:function(){var e={username:m,password:p};v&&(e=Object(s.a)({},e,{email:v})),n({variables:e})},color:"primary"},"Sign UP")))))};function M(){var e=Object(m.a)(["\n  mutation signUp($username: String!, $password: String!, $email: String) {\n    signUp(\n      userInput: { username: $username, password: $password, email: $email }\n    ) {\n      token\n    }\n  }\n"]);return M=function(){return e},e}var Y=C()(M()),Q=function(e){var a=e.open,t=e.handleClose;return r.a.createElement(E.a,null,function(e){return r.a.createElement(E.c,{mutation:Y,onCompleted:function(a){t(),localStorage.setItem("x-token",a.signUp.token),e.resetStore()},onError:function(e){}},function(e,n){var o=n.loading,l=n.error;return o?r.a.createElement(u.a,{disableShrink:!0,size:40,thickness:2,variant:"indeterminate",style:{position:"relative",left:"50%",marginTop:"5rem"}}):r.a.createElement(D,{open:a,handleClose:t,signUp:e,error:l})})})};function J(){var e=Object(m.a)(["\n  mutation deleteUser {\n    deleteUser\n  }\n"]);return J=function(){return e},e}var K=C()(J()),V=function(e){var a=e.user,t=e.handleClose;return r.a.createElement(E.a,null,function(e){return r.a.createElement(E.c,{mutation:K,onCompleted:function(a){a&&(t(),W(e))},onError:function(e){return console.log(e)}},function(e,t){var n=t.loading,o=t.error;return n?r.a.createElement(u.a,{disableShrink:!0,size:40,thickness:2,variant:"indeterminate",style:{position:"relative",left:"50%",marginTop:"5rem"}}):(o&&console.log(o),r.a.createElement(I.a,{color:"secondary",variant:"contained",size:"small",onClick:e,disabled:"test"===a.username},"DELETE USER"))})})},H=function(e){var a=e.user,t=e.open,n=e.handleClose,o=e.editUser,l=e.error,c=r.a.useState(a.username),m=Object(i.a)(c,2),u=m[0],d=m[1],g=r.a.useState(""),p=Object(i.a)(g,2),E=p[0],f=p[1],b=r.a.useState(a.email||""),v=Object(i.a)(b,2),h=v[0],k=v[1];if(l){var C=l.message.split(":");l=C[C.length-1]}return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{open:t,onClose:n,"aria-labelledby":"edituser-form",disablePortal:!0},r.a.createElement(T.a,{id:"edituser-form"},"Edit user data"),l&&r.a.createElement($.a,null,r.a.createElement("p",{style:{color:"red",margin:0,padding:0}},l)),r.a.createElement("form",null,r.a.createElement($.a,null,r.a.createElement(U.a,{htmlFor:"username",shrink:!0},"New username"),r.a.createElement(x.a,{style:{marginBottom:"1rem"},autoFocus:!0,margin:"dense",id:"username",name:"Username",type:"text",value:u,fullWidth:!0,required:!0,autoComplete:"username",onChange:function(e){var a=e.target.value;return d(a)}}),r.a.createElement(U.a,{htmlFor:"password",shrink:!0},"New password or confirm old password"),r.a.createElement(x.a,{style:{marginBottom:"1rem"},margin:"dense",id:"password",name:"Password",type:"password",value:E,fullWidth:!0,required:!0,autoComplete:"new-password",onChange:function(e){var a=e.target.value;return f(a)}}),r.a.createElement(U.a,{htmlFor:"email",shrink:!0},"New email"),r.a.createElement(x.a,{margin:"dense",id:"email",name:"Email",type:"email",value:h,fullWidth:!0,onChange:function(e){var a=e.target.value;return k(a)}})),r.a.createElement(P.a,null,r.a.createElement(V,{handleClose:n,user:a}),r.a.createElement(I.a,{onClick:n,color:"primary"},"Cancel"),r.a.createElement(I.a,{onClick:function(){var e={username:u,password:E};h&&(e=Object(s.a)({},e,{email:h})),o({variables:e})},color:"primary",disabled:"test"===a.username},"Save Changes")))))};function X(){var e=Object(m.a)(["\n  mutation editUser($username: String!, $password: String!, $email: String) {\n    editUser(\n      userInput: { username: $username, password: $password, email: $email }\n    ) {\n      token\n    }\n  }\n"]);return X=function(){return e},e}var _=C()(X()),G=function(e){var a=e.user,t=e.open,n=e.handleClose;return r.a.createElement(E.a,null,function(e){return r.a.createElement(E.c,{mutation:_,onCompleted:function(a){n(),localStorage.setItem("x-token",a.editUser.token),e.resetStore()},onError:function(e){return console.log(e)}},function(e,o){var l=o.loading,i=o.error;return l?r.a.createElement(u.a,{disableShrink:!0,size:40,thickness:2,variant:"indeterminate",style:{position:"relative",left:"50%",marginTop:"5rem"}}):(i&&console.log(i),r.a.createElement(H,{user:a,open:t,handleClose:n,editUser:e,error:i}))})})},Z=function(e){var a=e.user,t=Object(n.useState)(!1),o=Object(i.a)(t,2),l=o[0],c=o[1],s=Object(n.useState)(!1),m=Object(i.a)(s,2),u=m[0],d=m[1],g=Object(n.useState)(!1),p=Object(i.a)(g,2),E=p[0],f=p[1],b=a?a.username:null;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,null),r.a.createElement(y.a,{id:"nav-bar",position:"fixed",style:{backgroundColor:B.a[300],padding:"0.375rem 0"}},r.a.createElement(j.a,null,r.a.createElement(S.a,{container:!0,spacing:3,alignItems:"center",alignContent:"center",justify:"space-around"},r.a.createElement(S.a,{item:!0},r.a.createElement(w.a,{variant:"h6",align:"center"},"Book reading list app")),b&&r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{item:!0,xs:12,sm:"auto"},r.a.createElement(G,{user:a,open:E,handleClose:function(){return f(!1)}}),r.a.createElement(w.a,{variant:"body2",align:"center"},"Username:"," ",r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{style:{textTransform:"none"},color:"primary",variant:"contained",size:"small",onClick:function(){f(!0)}},b))," ",a.bookCount," books on Your list")),r.a.createElement(S.a,{item:!0},r.a.createElement(L,null))),!b&&r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{item:!0},r.a.createElement(q,{open:l,handleClose:function(){return c(!1)}}),r.a.createElement(I.a,{color:"inherit",variant:"outlined",onClick:function(){c(!0)},style:{margin:"0 0.5rem"}},"Sign in"),r.a.createElement(Q,{open:u,handleClose:function(){return d(!1)}}),r.a.createElement(I.a,{color:"primary",variant:"outlined",onClick:function(){d(!0)},style:{margin:"0 0.5rem"}},"Sign UP")))))))},ee=t(148),ae=t(94),te=t(71),ne=t.n(te),re=t(218),oe=t(215),le=t(236),ie=function(e){var a=e.selectedValue,t=e.handleChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement(re.a,{style:{justifyContent:"center",marginTop:"2rem"},"aria-label":"select",name:"select",value:a,onChange:t,row:!0},r.a.createElement(oe.a,{style:{margin:"0rem 1rem 0rem 2rem"},value:"users",control:r.a.createElement(le.a,{color:"primary",checked:"users"===a,name:"users"}),label:"Users",labelPlacement:"end"}),r.a.createElement(oe.a,{style:{margin:"0rem 1rem 0rem 2rem"},value:"all",control:r.a.createElement(le.a,{color:"primary",checked:"all"===a,name:"all"}),label:"Books",labelPlacement:"end"}),r.a.createElement(oe.a,{style:{margin:"0rem 1rem 0rem 2rem"},value:"list",control:r.a.createElement(le.a,{color:"primary",checked:"list"===a,name:"list"}),label:"Your reading list",labelPlacement:"end"})))};function ce(){var e=Object(m.a)(["\n  {\n    Users {\n      id\n      username\n      bookCount\n    }\n  }\n"]);return ce=function(){return e},e}var se=C()(ce()),me=function(){var e={pageSize:10,pageSizeOptions:[5,10],padding:"dense",search:!1};return r.a.createElement(E.d,{query:se},function(a){var t=a.loading,n=a.error,o=a.data;return t?r.a.createElement(u.a,{disableShrink:!0,size:50,thickness:3,variant:"indeterminate",style:{position:"relative",left:"50%",marginTop:"5rem"}}):(n&&console.log(n.message),r.a.createElement(r.a.Fragment,null,o.Users&&r.a.createElement(ne.a,{title:"All registered users",columns:[{title:"Username",field:"username",defaultSort:"asc"},{title:"Book count",field:"bookCount",type:"numeric"}],data:o.Users,options:e})))})},ue=t(219),de=t(192),ge=t(182),pe=t(350),Ee=t(351),fe=Object(g.a)(function(e){return{error:{backgroundColor:e.palette.primary.light,marginTop:"8rem"},icon:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}}),be=function(e){var a=e.info,t=e.handleClose,n=fe();return r.a.createElement(ue.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:a.open,autoHideDuration:1e3,onClose:t},r.a.createElement(de.a,{className:n.error,"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"info-snackbar",className:n.message},r.a.createElement(pe.a,{className:n.icon}),a.msg),action:r.a.createElement(ge.a,{key:"close",color:"inherit",onClick:t},r.a.createElement(Ee.a,null))}))};function ve(){var e=Object(m.a)(["\n  mutation removeBookFromList($bookId: ID!) {\n    removeBookFromList(bookId: $bookId) {\n      id\n      avgRating\n      readCount\n    }\n  }\n"]);return ve=function(){return e},e}var he=C()(ve()),ke=function(e){var a=e.info,t=e.setInfo;return r.a.createElement(E.c,{mutation:he},function(e,n){var o=n.loading,l=n.error;return o?r.a.createElement(u.a,{disableShrink:!0,size:40,thickness:3,variant:"indeterminate",style:{position:"relative",left:"50%",marginTop:"8rem"}}):(l&&(console.log("REMOVEBOOKFROMLIST ERROR OBJECT "),console.log(l)),r.a.createElement(be,{info:a,handleClose:function(){e({variables:{bookId:a.bookId},refetchQueries:[{query:Ye}]}),t({open:!1,msg:"",bookId:0})}}))})},Ce=function(e){var a=Object(n.useState)({open:!1,msg:"",bookId:0}),t=Object(i.a)(a,2),o=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne.a,Object.assign({},e,{actions:[{icon:"delete",iconProps:{style:{color:"red"}},tooltip:"Remove book from list",onClick:function(e,a){l({open:!0,msg:"".concat(a.title," removed from Your list"),bookId:a.id})}}]})),r.a.createElement(ke,{info:o,setInfo:l}))},Oe=t(118),ye=t(217);function je(){var e=Object(m.a)(["\n  mutation addRating($bookId: ID!, $rating: Int!) {\n    addRating(id: $bookId, rating: $rating) {\n      id\n      title\n      author\n      avgRating\n      readCount\n    }\n  }\n"]);return je=function(){return e},e}var Se=C()(je()),we=function(e){var a=e.bookId,t=e.anchorEl,n=e.setAnchorEl;return r.a.createElement(E.c,{mutation:Se},function(e,o){var l=o.loading,i=o.error,c=function(t){t.target.value&&e({variables:{bookId:a,rating:t.target.value}}),n(null)};return l?r.a.createElement(u.a,{disableShrink:!0,size:30,thickness:2,variant:"indeterminate",style:{position:"relative",left:"50%",marginTop:"8rem"}}):(i&&console.log(i),r.a.createElement(Oe.a,{id:"simple-menu",anchorEl:t,keepMounted:!0,open:Boolean(t),onClose:c},r.a.createElement(ye.a,{onClick:c,value:1},"1"),r.a.createElement(ye.a,{onClick:c,value:2},"2"),r.a.createElement(ye.a,{onClick:c,value:3},"3"),r.a.createElement(ye.a,{onClick:c,value:4},"4"),r.a.createElement(ye.a,{onClick:c,value:5},"5")))})},Ie=function(e){var a=e.open,t=e.handleClose,o=e.createBook,l=e.error,c=Object(n.useState)(""),s=Object(i.a)(c,2),m=s[0],u=s[1],d=Object(n.useState)(""),g=Object(i.a)(d,2),p=g[0],E=g[1],f=Object(n.useState)(1),b=Object(i.a)(f,2),v=b[0],h=b[1];if(l){var k=l.message.split(":");l=k[k.length-1]}return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{open:a,onClose:t,"aria-labelledby":"create-book-form",disablePortal:!0},r.a.createElement(T.a,{id:"create-book-form"},"Add Book"),l&&r.a.createElement($.a,null,r.a.createElement("p",{style:{color:"red",margin:0,padding:0}},l)),r.a.createElement("form",null,r.a.createElement($.a,null,r.a.createElement(U.a,{htmlFor:"title",shrink:!0},"Title"),r.a.createElement(x.a,{style:{marginBottom:"1rem"},autoFocus:!0,margin:"dense",id:"title",name:"title",type:"text",value:m,fullWidth:!0,required:!0,autoComplete:"title",onChange:function(e){var a=e.target.value;return u(a)}}),r.a.createElement(U.a,{htmlFor:"author",shrink:!0},"Author"),r.a.createElement(x.a,{style:{marginBottom:"1rem"},margin:"dense",id:"author",name:"author",type:"text",value:p,fullWidth:!0,required:!0,autoComplete:"new-author",onChange:function(e){var a=e.target.value;return E(a)}}),r.a.createElement(U.a,{htmlFor:"rating",shrink:!0},"Rating"),r.a.createElement(x.a,{margin:"dense",id:"rating",name:"rating",type:"number",inputProps:{min:1,max:5},value:v,fullWidth:!0,required:!0,onChange:function(e){var a=e.target.value;return h(a)}})),r.a.createElement(P.a,null,r.a.createElement(I.a,{onClick:t,color:"primary"},"Cancel"),r.a.createElement(I.a,{onClick:function(){o({variables:{title:m,author:p,rating:+v},refetchQueries:[{query:ze}]})},color:"primary"},"Save Book")))))};function Fe(){var e=Object(m.a)(["\n  mutation createBook($title: String!, $author: String!, $rating: Int!) {\n    createBook(bookInput: { title: $title, author: $author, rating: $rating }) {\n      id\n      title\n      author\n      avgRating\n      readCount\n    }\n  }\n"]);return Fe=function(){return e},e}var Be=C()(Fe()),Re=function(e){var a=e.open,t=e.handleClose;return r.a.createElement(E.a,null,function(e){return r.a.createElement(E.c,{mutation:Be,onCompleted:t,onError:function(){}},function(e,n){var o=n.loading,l=n.error;return o?r.a.createElement(u.a,{disableShrink:!0,size:40,thickness:2,variant:"indeterminate",style:{position:"absolute",left:"50%",marginTop:"5rem"}}):(l&&console.log(l),r.a.createElement(Ie,{open:a,handleClose:t,createBook:e,error:l}))})})};function Te(){var e=Object(m.a)(["\n  mutation addBookToList($bookId: ID!) {\n    addBookToList(bookId: $bookId) {\n      id\n      avgRating\n      readCount\n    }\n  }\n"]);return Te=function(){return e},e}var $e=C()(Te()),Ue=function(e){var a=e.info,t=e.setInfo;return r.a.createElement(E.c,{mutation:$e},function(e,n){var o=n.loading,l=n.error;return o?r.a.createElement(u.a,{disableShrink:!0,size:40,thickness:3,variant:"indeterminate",style:{position:"relative",left:"50%",marginTop:"8rem"}}):(l&&(console.log("ADDBOOKTOLIST ERROR OBJECT "),console.log(l)),r.a.createElement(be,{info:a,handleClose:function(){e({variables:{bookId:a.bookId},refetchQueries:[{query:Ye}]}),t({open:!1,msg:"",bookId:0})}}))})},xe=function(e){var a=Object(n.useContext)(Me).setWarning,t=Object(n.useState)(null),o=Object(i.a)(t,2),l=o[0],c=o[1],s=Object(n.useState)(null),m=Object(i.a)(s,2),u=m[0],d=m[1],g=Object(n.useState)(!1),p=Object(i.a)(g,2),E=p[0],f=p[1],b=Object(n.useState)({open:!1,msg:"",bookId:0}),v=Object(i.a)(b,2),h=v[0],k=v[1],C=e.user.books;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne.a,Object.assign({},e,{actions:[{icon:"add",tooltip:"Add book to reading list",onClick:function(e,t){C.map(function(e){return e.id}).includes(t.id)?a({open:!0,msg:"Already on list",reload:!1}):k({open:!0,msg:"".concat(t.title," added to Your list"),bookId:t.id})}},{icon:"star_rate",iconProps:{style:{color:"orange"}},tooltip:"Rate book",onClick:function(e,a){return function(e,a){d(a.id),c(e.currentTarget)}(e,a)}},{icon:"add_circle",iconProps:{color:"primary",style:{fontSize:30}},tooltip:"Add new book to database",isFreeAction:!0,onClick:function(){f(!0)}}]})),r.a.createElement(we,{bookId:u,anchorEl:l,setAnchorEl:c}),r.a.createElement(Re,{open:E,handleClose:function(){return f(!1)}}),r.a.createElement(Ue,{info:h,setInfo:k}))};function Pe(){var e=Object(m.a)(["\n  {\n    Books {\n      id\n      title\n      author\n      avgRating\n      readCount\n    }\n  }\n"]);return Pe=function(){return e},e}var ze=C()(Pe()),Ne=Object(g.a)(function(e){var a,t;return{root:(a={width:"80%"},Object(c.a)(a,e.breakpoints.down("sm"),{width:"100%"}),Object(c.a)(a,"height","90%"),Object(c.a)(a,"margin","2rem auto"),Object(c.a)(a,"overflowX","auto"),Object(c.a)(a,"overflowY","auto"),a),users:(t={width:"40%"},Object(c.a)(t,e.breakpoints.down("sm"),{width:"60%"}),Object(c.a)(t,e.breakpoints.down("xs"),{width:"100%"}),Object(c.a)(t,"height","90%"),Object(c.a)(t,"margin","2rem auto"),Object(c.a)(t,"overflowX","auto"),Object(c.a)(t,"overflowY","auto"),t),title:{marginTop:"0.5rem"},table:{minWidth:650},cell:{fontSize:"0.95rem"}}}),Ae=function(e){var a=e.user,t=r.a.useState("all"),o=Object(i.a)(t,2),l=o[0],c=o[1],s=Object(n.useContext)(Me).setWarning,m=function(e){c(e.target.value)},d=Ne(),g={pageSize:10,pageSizeOptions:[5,10],padding:"dense",actionsColumnIndex:-1,grouping:!1,headerStyle:{backgroundColor:"lightblue"}},p=[{title:"Title",field:"title",defaultSort:"asc"},{title:"Author",field:"author",cellStyle:{padding:0}},{title:"Rating",field:"avgRating",type:"numeric",editable:"never",cellStyle:{padding:0}},{title:"Read count",field:"readCount",type:"numeric",editable:"never"}];return r.a.createElement(E.d,{query:ze},function(e){var t=e.loading,n=e.error,o=e.data,i=o.Books&&Object(ee.a)(o.Books);return a&&(i="all"===l?o.Books&&Object(ee.a)(o.Books):a.books&&Object(ee.a)(a.books)),t?r.a.createElement(u.a,{disableShrink:!0,size:50,thickness:3,variant:"indeterminate",style:{position:"relative",left:"50%",marginTop:"5rem"}}):(n&&(console.log("DATA COMPONENT ERROR  ====  "+n.message),s({open:!0,msg:n.message,reload:!1})),r.a.createElement(r.a.Fragment,null,!a&&r.a.createElement(w.a,{className:d.title,variant:"body1",align:"center",gutterBottom:!0},"You can sign in with username: test and password: test"),a&&r.a.createElement(ie,{selectedValue:l,handleChange:m}),r.a.createElement(ae.a,{className:"users"===l?d.users:d.root},"users"===l&&r.a.createElement(me,null),"all"===l&&!a&&r.a.createElement(ne.a,{className:d.table,title:"All books in database",columns:p,data:i,options:g}),"all"===l&&a&&r.a.createElement(xe,{user:a,className:d.table,title:"All books in database",columns:p,data:i,options:g}),"list"===l&&r.a.createElement(Ce,{className:d.table,title:"Your reading list",columns:p,data:i,options:g}))))})},qe=t(352),We=Object(g.a)(function(e){return{error:{backgroundColor:e.palette.error.dark,marginTop:"8rem"},icon:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}}),Le=function(){var e=We(),a=Object(n.useContext)(Me),t=a.warning,o=a.setWarning,l=function(e){t.reload?(o({open:!1,msg:"",reload:!1}),e.resetStore()):o({open:!1,msg:"",reload:!1})};return r.a.createElement(E.a,null,function(a){return r.a.createElement(ue.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:t.open,autoHideDuration:2e3,onClose:function(){return l(a)}},r.a.createElement(de.a,{className:e.error,"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"client-snackbar",className:e.message},r.a.createElement(qe.a,{className:e.icon}),t.msg),action:r.a.createElement(ge.a,{key:"close",color:"inherit",onClick:function(){return l(a)}},r.a.createElement(Ee.a,null))}))})};function De(){var e=Object(m.a)(["\n  {\n    Me {\n      id\n      username\n      email\n      bookCount\n      books {\n        id\n        title\n        author\n        avgRating\n        readCount\n      }\n    }\n  }\n"]);return De=function(){return e},e}var Me=Object(n.createContext)(null),Ye=C()(De()),Qe=Object(f.a)({uri:"/graphql"}),Je=Object(v.a)(function(e,a){var t=a.headers,n=localStorage.getItem("x-token");return n&&(t=Object(s.a)({},t,{Authentication:"Bearer "+n})),{headers:t}}),Ke=Object(h.a)(function(e){var a=e.graphQLErrors,t=e.networkError;a&&a.forEach(function(e){var a=e.message;e.locations,e.path;console.log("GraphQL error",a),"Session expired, sign in again."===a.split(":")[1]&&W(Ve)}),t&&(console.log("Network error",t),400===t.statusCode&&W(Ve))}),Ve=new p.c({link:Ke.concat(Je.concat(Qe)),cache:new b.a}),He=Object(g.a)(function(e){return{root:Object(c.a)({paddingTop:"8rem"},e.breakpoints.down("sm"),{margin:"2rem 0"}),progres:{position:"relative",left:"50%",marginTop:"5rem"}}});l.a.render(r.a.createElement(function(){var e=Object(n.useState)({open:!1,msg:"",reload:!1}),a=Object(i.a)(e,2),t=a[0],o=a[1],l=He();return r.a.createElement(E.b,{client:Ve},r.a.createElement(E.d,{query:Ye,fetchPolicy:"cache-and-network"},function(e){var a=e.loading,n=e.error,i=e.data;return a?r.a.createElement(u.a,{disableShrink:!0,size:50,thickness:3,variant:"indeterminate",className:l.progres}):(n&&(console.log("APP COMPONENT ERROR   ====  "),console.log(n)),r.a.createElement(r.a.Fragment,null,r.a.createElement(Me.Provider,{value:{warning:t,setWarning:o}},r.a.createElement(Le,null),i&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,{user:i.Me}),r.a.createElement(d.a,{className:l.root},r.a.createElement(Ae,{user:i.Me}))))))}))},null),document.getElementById("root"))}},[[258,1,2]]]);
//# sourceMappingURL=main.dd41564e.chunk.js.map