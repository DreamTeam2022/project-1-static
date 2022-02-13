function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight'
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100
}
const
	 parent = document.querySelector('.outerHeight'),
	els = document.querySelectorAll('.sectin-one-sunset  .section-one-dashboard .section-one-background .section-two-graph section-two-card .section-two-whitesunset'),
	tl = anime.timeline({ autoplay: false })
    t2 = anime.timeline({ autoplay: false })
    t3 = anime.timeline({ autoplay: false })
    t4 = anime.timeline({ autoplay: false })
    t21 = anime.timeline({ autoplay: false })
    t22 = anime.timeline({ autoplay: false })
    t23 = anime.timeline({ autoplay: false })
    t24 = anime.timeline({ autoplay: false })

        tl.add({
            targets: ' .section-one-dashboard',
            translateX: -300,
            translateY: -300,
            opacity: ['0.0', '0.9'],
            
            duration: 1700,      
        autoplay: false
            

        }); 

        t2.add({
            targets: '.section-one-background',
            translateX: 410,
            translateY: -780,
            scale: ['0.4','0.9'],
            easing: "linear",
            offset: 0
        }); 

        t3.add({
            targets: '.section-one-sunset',
        translateX: -50,
        translateY: 40,
        /*  delay: function(el, i) { return i * 100; }, */ 
        /* delay: 100, */
       /*  elasticity: 100,  */
        easing: 'easeInOutSine',
        /* scale: 1.7,  */ 
        duration: 5000,      
        autoplay: false
        }); 

        t4.add({
            targets: '.section-one-sunset',
       /*  translateX: -50, */
        translateY: 640,
        /*  delay: function(el, i) { return i * 100; }, */ 
        /* delay: 100, */
       /*  elasticity: 100,  */
        easing: 'easeInOutSine',
        scale: 1.7,  
       /*  duration: 5000,   */    
        autoplay: false
        }); 



        t21.add({
            targets: '.section-two-graph',
        translateX: 70,
        translateY: -30,
        easing: 'easeInOutSine',
        scale: ['0.1', '1.3'],  
        opacity: ['0', '1'],
        duration: 2000,      
        autoplay: false
        });

        t22.add({
            targets: '.section-two-card',
        translateX: -150,
        translateY: 60,
        easing: 'easeInOutSine',
        scale: ['0.1', '1.3'],  
        opacity: ['0', '1'],
        duration: 2000,      
        autoplay: false
        });

        t23.add({
            targets: '.section-two-cartoon',
        translateX: -150,
        translateY: -50,
        easing: 'easeInOutSine',
        scale: ['0.1', '1.3'],  
        opacity: ['0', '1'],
        duration: 2000,      
        autoplay: false
        }); 
        t24.add({
            targets: '.section-two-whitesunset',
        translateY: ['-600', '1'],
        /* translateY: -50, */
        easing: 'easeInOutSine',
        /* scale: ['0.1', '1.3'],  */ 
        /* opacity: ['0', '1'], */
        duration: 2000,      
        autoplay: false
        }); 


  




window.addEventListener('scroll', () => {
	const persentage = getScrollPercent()
	tl.seek(tl.duration * (persentage* 0.02)) 
    t2.seek(t2.duration * (persentage/100))   
    t3.seek(tl.duration * (persentage/100)) 
    t4.seek(tl.duration * (persentage/90)) 
   /*  t4.seek(t3.duration * (persentage /200))   */
  

   t21.seek(t2.duration * (persentage* 0.02))
   t22.seek(t2.duration * (persentage* 0.02))
   t23.seek(t2.duration * (persentage* 0.02))
   t24.seek(t2.duration * (persentage* 0.02))

     /* tl.seek(tl.duration * (persentage /300)) */
})