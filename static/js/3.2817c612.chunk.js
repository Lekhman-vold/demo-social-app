(this.webpackJsonpreact_kama=this.webpackJsonpreact_kama||[]).push([[3],{296:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(35),o=a(36),r=a(39),s=a(38),l=a(0),i=a.n(l),c=a(7),u=a(15),p=function(e){return{isAuth:e.auth.isAuth}},m=function(e){var t=function(t){Object(r.a)(l,t);var a=Object(s.a)(l);function l(){return Object(n.a)(this,l),a.apply(this,arguments)}return Object(o.a)(l,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(c.b,null,i.a.createElement(c.a,{to:"/login"}))}}]),l}(i.a.Component);return Object(u.b)(p)(t)}},297:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__DQf26",textBold:"ProfileInfo_textBold__2-nqF",contact:"ProfileInfo_contact__1SE5p"}},298:function(e,t,a){e.exports=a.p+"static/media/User.987d4a2e.svg"},299:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__2oa27",posts:"MyPosts_posts__1Rgsv"}},300:function(e,t,a){e.exports={item:"Post_item__2ual9",likes:"Post_likes__37GKx"}},301:function(e,t,a){"use strict";a.r(t);var n=a(35),o=a(36),r=a(39),s=a(38),l=a(0),i=a.n(l),c=a(98),u=a(297),p=a.n(u),m=a(66),f=a(298),d=a.n(f),b=function(e){var t=Object(l.useState)(!1),a=Object(c.a)(t,2),n=a[0],o=a[1],r=Object(l.useState)(e.status),s=Object(c.a)(r,2),u=s[0],p=s[1];Object(l.useEffect)((function(){p(e.status)}),[e.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",null,"Status: ",i.a.createElement("span",{onDoubleClick:function(){o(!0)}},e.status||"-----")),n&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(e){p(e.currentTarget.value)},onBlur:function(){o(!1),e.updateStatus(u)},value:u,autoFocus:!0})))},h=a(41),v=a(132),E=a(49),g=a.n(E),k=Object(v.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=(e.profile,e.error);return i.a.createElement("form",{onSubmit:t},i.a.createElement("div",null,i.a.createElement("button",{className:"btn btn-dark"},"save")),a&&i.a.createElement("div",{className:g.a.formErrorControl},a),i.a.createElement("div",{className:p.a.textBold},i.a.createElement("div",null," FullName: ",Object(h.c)("Full name","fullName",[],h.a)),i.a.createElement("div",null,"Looking for a job:",Object(h.c)("","lookingForAJob",[],h.a,{type:"checkbox"})),i.a.createElement("div",null,"My professional skills:",Object(h.c)("My professional skills","lookingForAJobDescription",[],h.b)),i.a.createElement("div",null,"About me:",Object(h.c)("About me","aboutMe",[],h.b))))})),O=function(e){var t=e.profile,a=e.isOwner,n=e.gotoEditMode;return i.a.createElement("div",{className:p.a.textBold},a&&i.a.createElement("div",null,i.a.createElement("button",{onClick:n,className:"btn btn-dark"},"edit")),i.a.createElement("div",null," FullName: ",t.fullName),i.a.createElement("div",null,"Looking for a job: ",t.lookingForAJob?"Yes":"No"),t.lookingForAJob&&i.a.createElement("div",null,"My professional skills: ",t.lookingForAJobDescription),i.a.createElement("div",null,"About me: ",t.aboutMe))},P=function(e){var t=Object(l.useState)(!1),a=Object(c.a)(t,2),n=a[0],o=a[1];if(!e.profile)return i.a.createElement(m.a,null);return i.a.createElement("div",null,i.a.createElement("div",{className:p.a.descriptionBlock},i.a.createElement("img",{src:e.profile.photos.large||d.a}),i.a.createElement(b,{status:e.status,updateStatus:e.updateStatus}),n?i.a.createElement(k,{initialValues:e.profile,profile:e.profile,onSubmit:function(t){e.saveProfile(t).then((function(){o(!1)}))}}):i.a.createElement(O,{profile:e.profile,isOwner:e.isOwner,gotoEditMode:function(){o(!0)}}),e.isOwner&&i.a.createElement("input",{className:"form-control bg-dark",type:"file",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}})))},j=a(97),_=a(299),S=a.n(_),w=a(300),y=a.n(w),N=function(e){return i.a.createElement("div",{className:y.a.item},i.a.createElement("img",{src:"https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"}),e.message,i.a.createElement("div",{className:y.a.likes},i.a.createElement("img",{src:"https://www.freepnglogos.com/uploads/heart-png/emoji-heart-33.png"}),i.a.createElement("span",null,e.like)))},A=a(90),x=a(43),B=Object(x.a)(20),F=Object(x.b)(8),I=Object(v.a)({form:"ProfileAddNewPostForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(A.a,{component:h.b,name:"newPostText",placeholder:"Add text",validate:[x.c,B,F]})),i.a.createElement("div",null,i.a.createElement("button",{className:"btn btn-dark"},"Add post")))})),M=i.a.memo((function(e){var t=e.posts.map((function(e){return i.a.createElement(N,{key:e.id,message:e.message,like:e.like})}));return i.a.createElement("div",{className:S.a.postsBlock},i.a.createElement("h3",null,"my post"),i.a.createElement(I,{onSubmit:function(t){e.addPost(t.newPostText)}}),i.a.createElement("div",{className:S.a.posts},t))})),C=a(15),J=Object(C.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(j.a)(t))}}}))(M),D=function(e){return i.a.createElement("div",null,i.a.createElement(P,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,saveProfile:e.saveProfile,updateStatus:e.updateStatus}),i.a.createElement(J,null))},U=a(7),T=a(8),z=a(296),L=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement(D,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),a}(i.a.Component);t.default=Object(T.d)(Object(C.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:j.d,getStatus:j.c,updateStatus:j.g,savePhoto:j.e,saveProfile:j.f}),U.g,z.a)(L)}}]);
//# sourceMappingURL=3.2817c612.chunk.js.map