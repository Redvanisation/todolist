!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r,o,i=(r=2,{initiateMain:function(){o.setItem("Main",JSON.stringify([{description:"Do a couple of code reviews",status:!1,id:0},{description:"Finish up with the current project",status:!1,id:1},{description:"Work on a bunch of coding challenges",status:!1,id:2}]))},projectList:o=window.localStorage,addProjects:function(e){o.setItem(e,[])},addTaskList:function(e,t){r+=1,t.id=r;var n=JSON.parse(o[e]);return n.push(t),o.setItem(e,JSON.stringify(n)),o[e]}}),c={createTodo:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{description:e,status:t}}};(function(){document.querySelector(".content");var e=document.querySelector("#newproject-button"),t=document.querySelector("#clear-button"),n=document.querySelector(".task-list"),r=(document.createElement("button"),document.createElement("li").classList.add("li-task"),document.querySelector(".li-task"),function(e){JSON.parse(i.projectList.getItem(i.projectList.key(e))).forEach((function(e){document.querySelector(".task-list").insertAdjacentHTML("beforeend",'\n    <li class="li-task">\n    <div class="task-row">\n        <i class="fas fa-check-square"></i>\n         <p>'.concat(e.description,'</p>\n         <i class="far fa-times-circle"></i>\n    </div>\n    </li>'))}))}),o=function(){n.innerHTML=""};return{startApp:function(){0===i.projectList.length&&i.initiateMain(),r(0),e.addEventListener("click",(function(){document.querySelector(".new-project-form").style.display="block"})),t.addEventListener("click",(function(){o(),i.projectList.clear()})),document.querySelector("#input-task").addEventListener("keypress",(function(e){if(13===(e.which||e.keyCode)){var t=c.createTodo(document.querySelector("#input-task").value);i.addTaskList("Main",t),o(),r(0)}}))},newProject:function(){}}})().startApp()}]);