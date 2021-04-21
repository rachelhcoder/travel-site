import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class RevealOnScroll {
    constructor(els, threshold){
        this.threshold = threshold;
        this.itemsToReveal = els;
        this.hideInit();
        this.browserHeight = window.innerHeight;
        this.scrollThrottle = throttle(this.calCaller, 200).bind(this);
        this.events();
    }
    events(){
        window.addEventListener('scroll', this.scrollThrottle)
        window.addEventListener('resize', debounce(() => {
            this.browserHeight=window.innerHeight;
        }, 333))
    }
    calCaller(){
        this.itemsToReveal.forEach(el => {
            if (el.isRevealed === false){
                this.calcScroll(el);
            }
        })
    }
    calcScroll(el){
     if (window.scrollY + this.browserHeight > el.offsetTop){
        let scrollPercent = (el.getBoundingClientRect().y / this.browserHeight) * 100;
        if (scrollPercent< this.threshold){
            el.classList.add('reveal-item--show');
            el.isRevealed = true;
            if (el.isLastItem){
                window.removeEventListener('scroll',this.scrollThrottle);
            }
        }
     }
    }
    hideInit(){
        this.itemsToReveal.forEach(el => {
            el.classList.add('reveal-item');
            el.isRevealed = false;
        });
        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
    }

}

export default RevealOnScroll;