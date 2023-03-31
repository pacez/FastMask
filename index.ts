/**
 *  FastMask Code snippets
 *  Author: pace_zhong@foxmail.com
 */

export default class FastMask {
    constructor() {
        this.init();
    }

    styles:Partial<CSSStyleDeclaration> = {
        position: 'fixed',
        zIndex: '999',
        width: '100%',
        height: '100%',
        top: '0', 
        left: '0',
        background: 'rgba(255,255,255,0)',
    }

    $mask = document.createElement('div');

    init = () => {
        const { styles } = this;
        for (let name in styles) {
            this.$mask.style[name] = styles[name]!;
        }
    }

    show = () => {
        document.body.appendChild(this.$mask);
    }
    
    hidden = () => {
        document.body.removeChild(this.$mask);
    }

    destroy = () => {
        this.hidden();
        this.$mask = null; 
    }
}
