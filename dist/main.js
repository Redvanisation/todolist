!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(){var e=2,t=window.localStorage;0===t.length&&t.setItem("main",JSON.stringify([]));return{projectList:t,addProjects:function(e){t.setItem(e,[])},addTaskList:function(n,r){0===t.length&&t.setItem("main",JSON.stringify([])),e+=1,r.id=e;var o=JSON.parse(t.getItem("main"));o.push(r),t.setItem("main",JSON.stringify(o))}}}(),o={createTodo:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{description:e,status:t}}},i=(n(1),function(){document.querySelector(".content");var e=document.querySelector("#newproject-button"),t=document.querySelector("#clear-button"),n=document.querySelector(".task-list");document.createElement("button"),document.createElement("li").classList.add("li-task"),document.querySelector(".li-task");return{startApp:function(){var i;i="main",null!==JSON.parse(r.projectList.getItem(r.projectList.key(i)))&&JSON.parse(r.projectList.getItem(r.projectList.key(i))).forEach((function(e){document.querySelector(".task-list").insertAdjacentHTML("beforeend",'\n          <li class="li-task">\n          <div class="task-row">\n              <i class="fas fa-check-square"></i>\n              <p>'.concat(e.description,'</p>\n              <i class="far fa-times-circle"></i>\n          </div>\n          </li>'))})),e.addEventListener("click",(function(){document.querySelector(".new-project-form").style.display="block"})),t.addEventListener("click",(function(){n.innerHTML="",r.projectList.clear()})),document.querySelector("#input-task").addEventListener("keypress",(function(e){if(13===(e.which||e.keyCode)){var t=o.createTodo(document.querySelector("#input-task").value);console.log(t),r.addTaskList("main",t),function(e){var t=JSON.parse(r.projectList.getItem(r.projectList.key(e))),n=t[t.length-1];document.querySelector(".task-list").insertAdjacentHTML("beforeend",'\n   <li class="li-task">\n   <div class="task-row">\n       <i class="fas fa-check-square"></i>\n       <p>'.concat(n.description,'</p>\n       <i class="far fa-times-circle"></i>\n   </div>\n   </li>'))}("main")}}))}}}());i.render,i.startApp()},function(e,t){t.endianness=function(){return"LE"},t.hostname=function(){return"undefined"!=typeof location?location.hostname:""},t.loadavg=function(){return[]},t.uptime=function(){return 0},t.freemem=function(){return Number.MAX_VALUE},t.totalmem=function(){return Number.MAX_VALUE},t.cpus=function(){return[]},t.type=function(){return"Browser"},t.release=function(){return"undefined"!=typeof navigator?navigator.appVersion:""},t.networkInterfaces=t.getNetworkInterfaces=function(){return{}},t.arch=function(){return"javascript"},t.platform=function(){return"browser"},t.tmpdir=t.tmpDir=function(){return"/tmp"},t.EOL="\n",t.homedir=function(){return"/"}}]);