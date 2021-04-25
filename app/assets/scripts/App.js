import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import Sticky from './modules/Sticky'
if (module.hot){
    module.hot.accept();
}
new MobileMenu();
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60);
new Sticky();
/*LESSON EXAMPLE CODE BELOW THIS LINE */

