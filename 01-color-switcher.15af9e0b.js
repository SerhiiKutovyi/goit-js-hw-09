let t=null,e=!1;document.querySelector("button[data-start]").addEventListener("click",(()=>{e||(e=!0,t=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.backgroundColor=t}),1e3))})),document.querySelector("button[data-stop]").addEventListener("click",(()=>{clearInterval(t),e=!1}));
//# sourceMappingURL=01-color-switcher.15af9e0b.js.map
