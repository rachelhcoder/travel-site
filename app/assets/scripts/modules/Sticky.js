import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';
class Sticky{
    constructor(){
        this.siteHeader = document.querySelector('.site-header');
        this.pageSections = document.querySelectorAll('.page-section');
        this.browserHeight = window.innerHeight;
        this.prevScrollY = window.scrollY;
        this.events();
    }
    events(){
        window.addEventListener('scroll', throttle(() => this.runOnScroll(), 200));
        window.addEventListener('resize', debounce(() => {
            this.browserHeight=window.innerHeight;
        }, 333))
    }

    runOnScroll(){
        this.determineScrollDirection();
        if (window.scrollY>60){
            this.siteHeader.classList.add('site-header--dark');
        } else {
            this.siteHeader.classList.remove('site-header--dark');
        }
        this.pageSections.forEach(el => this.calcSection(el));
    }
    determineScrollDirection(){
        if (window.scrollY > this.prevScrollY){
            this.scrollDirection = 'down';
        } else {
            this.scrollDirection = 'up';
        }
        this.prevScrollY = window.scrollY;
    }
    calcSection(el){
        if (window.scrollY + this.browserHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight){
            let scrollPercent = el.getBoundingClientRect().y / this.browserHeight * 100;
            if (scrollPercent < 18 && scrollPercent > -0.1 && this.scrollDirection == 'down' || this.scrollDirection == 'up'){
                let lnk = el.getAttribute('data-target');
                document.querySelectorAll(`.primary-nav a:not(${lnk})`).forEach(el => el.classList.remove('current'));
                document.querySelector('#'+lnk).classList.add('current');
            }
        }
    }
}

export default Sticky;