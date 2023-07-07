const e=document.querySelector(".feedback-form"),t={};e.addEventListener("input",function(e){if(e.preventDefault(),"email"===e.target.name||"message"===e.target.name){let a=e.target.name,n=e.target.value;t[a]=n,localStorage.setItem("feedback-form-state",JSON.stringify(t))}});
//# sourceMappingURL=03-feedback.cd7e9d71.js.map
