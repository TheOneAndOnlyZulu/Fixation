const e=e=>{const n=document.querySelector('#'+e),o=n.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'),l=o[0],a=o[o.length-1];l&&l.focus(),n.addEventListener('keydown',t,!1),n.firstFocusableEl=l,n.lastFocusableEl=a},t=e=>{const t=e.currentTarget.firstFocusableEl,n=e.currentTarget.lastFocusableEl;'Tab'!==e.key&&9!==e.keyCode||(e.shiftKey?document.activeElement===t&&(n.focus(),e.preventDefault()):document.activeElement===n&&(t.focus(),e.preventDefault()))},n=e=>{document.getElementById(e).removeEventListener('keydown',t)};export{e as initFixation,n as removeFocusTrap};
