!function(){var e=document.querySelector(".feedback-form"),t={};e.addEventListener("input",function(e){if(e.preventDefault(),"email"===e.target.name||"message"===e.target.name){var a=e.target.name,r=e.target.value;t[a]=r,localStorage.setItem("feedback-form-state",JSON.stringify(t))}})}();
//# sourceMappingURL=03-feedback.273fc1a1.js.map
