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
            translateX: -20,
            translateY: -20,
            easing: 'easeInOutSine',
            scale: ['0.6', '1'],  
            opacity: ['0.5', '1'],
            duration: 1000,      
            autoplay: false        

        }); 

        t2.add({
            targets: '.section-one-background',
            translateX: 120,
            translateY: ['100','-80'], 
            easing: 'easeInOutSine',
            scale: ['0.6', '1'],  
            opacity: ['0.3', '1.5'],
            duration: 1000,      
            autoplay: false 
        }); 

 


        t4.add({
        targets: '.section-one-sunset',
        translateY: ['-90', '520'],        
        easing: 'easeInOutSine',
        duration: 4000,      
        autoplay: false
        }); 





        t21.add({
            targets: '.section-two-graph',
        translateX: 100,
        translateY: -100,
        easing: 'easeInOutSine',
        scale: ['0.1', '1.3'],  
        opacity: ['0.1', '1'],
        duration: 1100,      
        autoplay: false
        });

        t22.add({
            targets: '.section-two-card',
        translateX: -150,
        translateY: 130,
        easing: 'easeInOutSine',
        scale: ['0.1', '1.3'],  
        opacity: ['0.1', '0.9'],
        duration: 1100,      
        autoplay: false
        });

        t23.add({
            targets: '.section-two-cantoon',
        translateX: -150,
        translateY: -50,
        easing: 'easeInOutSine',
        scale: ['0.1', '1.3'],  
        opacity: ['0.5', '1'],
        duration: 1100,      
        autoplay: false
        }); 
        t24.add({
            targets: '.section-two-whitesunset',
        translateY: ['-950', '1'],
        /* translateY: -50, */
        easing: 'easeInOutSine',
        /* scale: ['0.1', '1.3'],  */ 
        /* opacity: ['0', '1'], */
        duration: 2100,      
        autoplay: false
        }); 


  




window.addEventListener('scroll', () => {
	const persentage = getScrollPercent()
/* 	tl.seek(tl.duration * (persentage/200)) 
    t2.seek(t2.duration * (persentage/300))   
    t3.seek(tl.duration * (persentage/400)) 
    t4.seek(tl.duration * (persentage/90))  */
    tl.seek(tl.duration * (persentage* 0.02)) 
    t2.seek(t2.duration * (persentage* 0.02)) 
    t3.seek(tl.duration * (persentage* 0.01)) 
    t4.seek(tl.duration * (persentage* 0.1)) 
   
    




   /*  t4.seek(t3.duration * (persentage /200))   */
  

   t21.seek(t2.duration * (persentage* 0.02))
   t22.seek(t2.duration * (persentage* 0.02))
   t23.seek(t2.duration * (persentage* 0.02))
   t24.seek(t2.duration * (persentage* 0.04))
  /*  t24.seek(t2.duration * (persentage/200)) */

     /* tl.seek(tl.duration * (persentage /300)) */
})