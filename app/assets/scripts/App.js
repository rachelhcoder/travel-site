import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import Sticky from './modules/Sticky'
if (module.hot){
    module.hot.accept()
}
new MobileMenu()
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75)
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60)
new Sticky()
let modal;
document.querySelectorAll('.open-modals').forEach(el =>{
    el.addEventListener('click', e =>{
        e.preventDefault();
       if (typeof modal == 'undefined'){
            import(/* webpackChunkName:  "modal" */'./modules/Modal').then( x => {
                modal =new x.default();
                setTimeout( () => modal.openTheModal(), 20)
            }).catch(() => console.log('there was a problem'))
       } else {
           modal.openTheModal();
       }
    })
})
/*LESSON EXAMPLE CODE BELOW THIS LINE */

