'use strict';

(function () {
    const btn = document.querySelectorAll('.js-btn');
    const block = document.querySelectorAll('.js-block');

    btn.forEach(function (btnItem) {
        btnItem.addEventListener('click' , function() {
            var t = this;
            btn.forEach(function (item) {
                if (!(item === t)) {
                    item.classList.remove('js-btn-active');
                }
            });
            btnItem.classList.toggle('js-btn-active');
            block.forEach(function (blockItem) {
                if (btnItem.dataset.block === blockItem.dataset.block) {
                    blockItem.classList.toggle('js-block-inactive');
                } else {
                    blockItem.classList.add('js-block-inactive');
                }
            });
        });
    });

    const navLink = document.querySelectorAll('.nav__link');

    navLink.forEach(function(item){
        item.addEventListener('click',function(evt){
            evt.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ 
                behavior: 'smooth' 
            });
        })
    })
})();

