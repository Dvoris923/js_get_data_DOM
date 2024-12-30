for(var e=document.querySelectorAll(".population"),t=0,o=0;o<e.length;o++){var n=e[o].textContent.replace(/,/g,"");isNaN(Number(n))||(t+=Number(n))}var r=t/e.length;document.querySelector(".total-population").textContent=t.toLocaleString("en-US"),document.querySelector(".average-population").textContent=r.toLocaleString("en-US");
//# sourceMappingURL=index.a220780a.js.map
