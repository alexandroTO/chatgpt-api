(async()=>{var e=IS_DEVELOPMENT;const o="lazy";window.nopecha=[];var a={};async function t(e){var a=(document.querySelector("#game_children_text > h2")||document.querySelector("#game-header"))?.innerText?.trim(),t=(document.querySelector("img#game_challengeItem_image")||document.querySelector("#challenge-image"))?.src?.split(";base64,")[1];a&&t&&(a={task:a,image:t,index:e,url:(await BG.exec("Tab.info"))?.url},o.startsWith("l")&&window.parent.postMessage({nopecha:!0,action:"append",data:a},"*"),o.startsWith("e"))&&await Net.fetch("https://api.nopecha.com/upload",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})}var n=window.addEventListener?"addEventListener":"attachEvent";for(window[n]("attachEvent"==n?"onmessage":"message",async e=>{e=e[e.message?"message":"data"];e&&!0===e.nopecha&&("append"===e.action?window.nopecha.push(e.data):"clear"===e.action?window.nopecha=[]:"reload"===e.action&&(window.parent.postMessage({nopecha:!0,action:"reload"},"*"),window.location.reload(!0)))},!1);;){await Time.sleep(1e3);try{if(document.querySelector("body.victory")){var i=[];for(const s of window.nopecha){var c=Net.fetch("https://api.nopecha.com/upload",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});i.push(c)}await Promise.all(i),window.nopecha=[],e&&(window.parent.postMessage({nopecha:!0,action:"reload"},"*"),window.location.reload(!0))}"block"===document.querySelector("#timeout_widget")?.style?.display&&(window.parent.postMessage({nopecha:!0,action:"reload"},"*"),window.location.reload(!0));var r=document.querySelectorAll("#game_children_challenge ul > li > a");for(const l in r){var d=r[l];l in a&&d.removeEventListener("click",a[l]),a[l]=t.bind(this,parseInt(l)),d.addEventListener("click",a[l])}}catch(e){}}})();