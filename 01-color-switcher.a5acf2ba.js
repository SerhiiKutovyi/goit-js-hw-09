!function(){var t={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]")},o=null,n=!1;t.start.addEventListener("click",(function(){n||(n=!0,o=setInterval((function(){randomColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),document.body.style.backgroundColor=randomColor}),1e3))})),t.stop.addEventListener("click",(function(){clearInterval(o),n=!1}))}();
//# sourceMappingURL=01-color-switcher.a5acf2ba.js.map
