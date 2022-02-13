function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight'
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100
}
const
	 parent = document.querySelector('.outerHeight'),
	els = document.querySelectorAll('.sectin-two-card  .section-two-graph .section-two-cartoon .section-two-whitesunset'),
	t21 = anime.timeline({ autoplay: false })
    t22 = anime.timeline({ autoplay: false })
    t23 = anime.timeline({ autoplay: false })
    t24 = anime.timeline({ autoplay: false })

        t21.add({
            targets: ' .sectin-two-card',
        translateX: 140,
        translateY: 40, 
        /*  delay: function(el, i) { return i * 100; }, */ 
        /* delay: 100, */
       /*  elasticity: 100,  */
        easing: 'easeInOutSine',
        scale: 1.4,        
        autoplay: false
        }); 

        t22.add({
            targets: '.section-one-background',
        translateX: 150,
        translateY: -80,
        /*  delay: function(el, i) { return i * 100; }, */ 
        /* delay: 100, */
       /*  elasticity: 100,  */
        easing: 'easeInOutSine',
        scale: 1.3,        
        autoplay: false
        }); 

        t23.add({
            targets: '.section-one-sunset',
        translateX: -50,
        translateY: 640,
        /*  delay: function(el, i) { return i * 100; }, */ 
        /* delay: 100, */
       /*  elasticity: 100,  */
        easing: 'easeInOutSine',
        scale: 1.7,  
        duration: 5000,      
        autoplay: false
        });
        t24.add({
            targets: '.section-one-sunset',
        translateX: -50,
        translateY: 640,
        /*  delay: function(el, i) { return i * 100; }, */ 
        /* delay: 100, */
       /*  elasticity: 100,  */
        easing: 'easeInOutSine',
        scale: 1.7,  
        duration: 5000,      
        autoplay: false
        });  

  




window.addEventListener('scroll', () => {
	const persentage = getScrollPercent()
	t21.seek(tl.duration * (persentage * 0.02)) 
    t22.seek(t2.duration * (persentage * 0.02))
    t23.seek(tl.duration * (persentage/17)) 
    t24.seek(tl.duration * (persentage/17))
   /*  t4.seek(t3.duration * (persentage /200))   */
  
     /* tl.seek(tl.duration * (persentage /300)) */
})