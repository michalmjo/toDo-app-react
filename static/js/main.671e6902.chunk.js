(this["webpackJsonpto-do-app-react"]=this["webpackJsonpto-do-app-react"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(8),i=a.n(c),r=(a(13),a(6)),l=a(2),o=a(3),d=a(5),h=a(4),j=(a(14),a(0)),u=function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"popup",children:Object(j.jsx)("div",{className:"popup__message",children:Object(j.jsx)("p",{children:"You need type more that 2 letters"})})})})},p=(a(16),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).minDate=(new Date).toISOString().slice(0,10),e.allTask=[],e.state={text:"",typeTask:null,date:e.minDate,popup:!1},e.handleChangeDate=function(t){e.setState({date:t.target.value})},e.handleValueChange=function(t){e.setState({text:t.target.value})},e.handleChangePriority=function(t){var a=t.currentTarget.getAttribute("data-priority"),s=document.querySelector("[data-priority=".concat(a,"]"));e.allTask=document.querySelectorAll(".type__task-priority"),e.allTask.forEach((function(e){return e.classList.remove("active")})),("planned"===a||"priority"===a)&&(s.classList.add("active"),"type__task-priority"===s.className?e.setState({typeTask:""}):e.setState({typeTask:a}))},e.popupInput=function(){e.setState({popup:!0})},e.handleAddTask=function(){var t=e.state,a=t.text,s=t.typeTask,n=t.date;a.length>2&&a.trim(" ")?e.props.addTask(a,s,n)&&(e.allTask.forEach((function(e){return e.classList.remove("active")})),e.setState({text:"",typeTask:"",date:e.minDate})):(console.log("za malo znak\xf3w"),e.popupInput(),setTimeout((function(){e.setState({popup:!1})}),2500))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=1*this.minDate.slice(0,4)+1;return e+="-12-31",Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"task__add",children:[Object(j.jsx)("h2",{className:"task__add-header",children:"Create New Task"}),Object(j.jsx)("input",{className:"task__input",type:"text",placeholder:"Add task...",value:this.state.text,onChange:this.handleValueChange}),Object(j.jsx)("h3",{className:"task__add-header-choise",children:"Chose date"}),Object(j.jsxs)("div",{className:"date-area",children:[Object(j.jsxs)("div",{className:"calendar",children:[" ",Object(j.jsx)("i",{className:"far fa-calendar-alt"})]}),Object(j.jsx)("div",{className:"task__date",children:Object(j.jsx)("label",{htmlFor:"",children:Object(j.jsx)("input",{className:"task__input",type:"date",min:this.minDate,max:e,value:this.state.date,onChange:this.handleChangeDate})})})]}),Object(j.jsx)("h3",{className:"task__add-header-choise",children:"Task type"}),Object(j.jsxs)("div",{className:"type__task",children:[Object(j.jsx)("div",{onClick:this.handleChangePriority,className:"type__task-priority","data-priority":"planned",children:Object(j.jsx)("p",{children:"Planned"})}),Object(j.jsx)("div",{onClick:this.handleChangePriority,className:"type__task-priority","data-priority":"priority",children:Object(j.jsx)("p",{children:"Priority"})})]}),Object(j.jsx)("button",{onClick:this.handleAddTask,className:"btn-add",children:"Create Task"})]}),this.state.popup&&Object(j.jsx)(u,{})]})}}]),a}(s.Component)),x=p,b=(a(17),function(e){var t={color:"#35DF91"},a={color:"#F47960"},s=e.text,n=e.date,c=e.trash,i=e.doneTask,r=e.id,l=e.active,o=e.important,d=e.finishDate;if(l)return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"task",children:Object(j.jsxs)("div",{className:"task_area",children:[Object(j.jsxs)("div",{className:"text_area",children:[Object(j.jsx)("button",{onClick:i.bind(undefined,r),className:"btn_ico",children:Object(j.jsx)("i",{className:"fas fa-check"})})," ",Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:[" ",Object(j.jsx)("strong",{style:function(e){return"planned"===e?t:"priority"===e?a:null}(o),children:s})]}),Object(j.jsxs)("p",{children:[" ",Object(j.jsxs)("span",{children:["do ",n]})," "]})]})]}),Object(j.jsxs)("div",{className:"icon_area",children:[Object(j.jsx)("button",{onClick:function(){return c(r)},className:"btn_ico",children:Object(j.jsx)("i",{className:"fas fa-trash"})})," ",Object(j.jsx)("button",{onClick:function(t){return e.changeTask(t,r)},className:"btn_ico",children:Object(j.jsx)("i",{className:"fas fa-edit"})})]})]})})});var h=new Date(d).toLocaleString();return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"task",children:Object(j.jsxs)("div",{className:"task_area",children:[Object(j.jsx)("div",{className:"text_area",children:Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:[" ",Object(j.jsx)("strong",{children:s})]}),Object(j.jsxs)("p",{children:[" ",Object(j.jsxs)("span",{children:["do ",n]})," "]}),Object(j.jsxs)("p",{children:["Wykonano: ",h]})]})}),Object(j.jsx)("div",{className:"icon_area",children:Object(j.jsx)("button",{onClick:function(){return c(r)},className:"btn_ico",children:Object(j.jsx)("i",{className:"fas fa-trash"})})})]})})})}),O=(a(18),function(e){var t=e.tasks.filter((function(e){return e.active})),a=e.tasks.filter((function(e){return!e.active}));a.sort((function(e,t){return t.finishDate-e.finishDate})),t.sort((function(e,t){return t.text-e.text}));var s=t.map((function(t){return Object(j.jsx)(b,{text:t.text,date:t.date,id:t.id,important:t.important,active:t.active,trash:e.trash,doneTask:e.done,finishDate:t.finishDate,changeTask:e.changeTask},t.id)})),n=a.map((function(t){return Object(j.jsx)(b,{text:t.text,date:t.date,id:t.id,active:t.active,trash:e.trash,doneTask:e.done,important:t.important,finishDate:t.finishDate,changeTask:e.changeTask},t.id)}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"active",children:[Object(j.jsx)("h2",{children:"Task to do:"}),s.length>0?s:Object(j.jsx)("p",{className:"message",children:"There are no tasks to be performed"})]}),Object(j.jsxs)("div",{className:"done",children:[Object(j.jsxs)("h3",{children:["Done Task: ",Object(j.jsx)("span",{style:{color:"crimson"},children:a.length})," ",a.length>3&&Object(j.jsx)("p",{children:"Shows only 3 last tasks"})]}),n.length>0?n.slice(0,3):Object(j.jsx)("p",{className:"message",children:"List of done tasks"})]})]})}),m=(a(19),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={value:"",valuePop:e.props.editText},e.handleInputPop=function(t){e.setState({value:t.target.value})},e.handleSubmitPop=function(t){t.preventDefault(),e.props.changeTextInput(e.state.value)},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"popup__task",children:Object(j.jsx)("div",{className:"popup__task_input",children:Object(j.jsx)("form",{onSubmit:this.handleSubmitPop,children:Object(j.jsxs)("label",{children:[" ",Object(j.jsx)("input",{className:"changeText",onChange:this.handleInputPop,type:"text",placeholder:this.props.editText,value:this.state.value}),Object(j.jsx)("button",{className:"btn_save",children:"Save"})]})})})})})}}]),a}(n.a.Component)),v=m,f=(a(20),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={activeIndex:"",textPopup:"",isActive:!1,task:[{id:0,text:"to do 1 ",date:"2023-11-11",important:"planned",active:!0,finishDate:null},{id:1,text:"to do 3",date:"2023-11-14",important:"priority",active:!0,finishDate:null}]},e.currentId=2,e.deleteTask=function(t){var a=Object(r.a)(e.state.task),s=a.findIndex((function(e){return e.id===t}));a.splice(s,1),e.setState({task:a})},e.doneTask=function(t){console.log("changestatustaks "+t);var a=Object(r.a)(e.state.task);a.forEach((function(e){e.id===t&&(e.active=!1,e.finishDate=(new Date).getTime())})),e.setState({task:a})},e.showChangeArea=function(){e.setState({isActive:!e.state.isActive})},e.changeTextInput=function(t){var a=e.state.activeIndex,s=Object(r.a)(e.state.task);s.forEach((function(n){n.id===a&&(n.text=t),e.setState({task:s,isActive:!1})})),console.log(t)},e.handleChangeTask=function(t,a){var s=a;console.log(s),e.setState({activeIndex:s});var n=t.currentTarget.parentNode.closest(".task_area").querySelector("strong").textContent;e.showChangeArea(),e.setState({textPopup:n}),console.log(t.currentTarget.parentNode.closest(".task_area").querySelector("strong"))},e.addTask=function(t,a,s){console.log(t,a,s);var n={id:e.currentId,text:t,date:s,important:a,active:!0,finishDate:null};return e.currentId++,e.setState((function(e){return{task:[].concat(Object(r.a)(e.task),[n])}})),!0},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.task.filter((function(e){return e.active})),t=e.length?e.length:"Nie masz wi\u0119cej zada\u0144";return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)("div",{className:"circle",children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"330",height:"290",viewBox:"0 0 330 290",children:Object(j.jsx)("ellipse",{id:"Ellipse_1","data-name":"Ellipse 1",cx:"165",cy:"145",rx:"165",ry:"145",fill:"#5051e6"})})}),Object(j.jsx)("div",{className:"smallCircle_one"}),Object(j.jsx)("div",{className:"smallCircle_two"}),Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{children:"ToDoApp"}),Object(j.jsxs)("h2",{className:"header_title",children:[t>0?"You have ".concat(t," remaining task"):"You dont have any task"," "]})]}),Object(j.jsx)(x,{addTask:this.addTask}),Object(j.jsx)(O,{tasks:this.state.task,trash:this.deleteTask,done:this.doneTask,changeTask:this.handleChangeTask}),this.state.isActive?Object(j.jsx)(v,{editText:this.state.textPopup,changeTextInput:this.changeTextInput}):null]})})}}]),a}(s.Component)),k=f,g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root")),g()}],[[21,1,2]]]);
//# sourceMappingURL=main.671e6902.chunk.js.map