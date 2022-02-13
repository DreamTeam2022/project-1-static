function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight'
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100
}
const
	 parent = document.querySelector('.outerHeight'),
	els = document.querySelectorAll('.el'),
	tl = anime.timeline({ autoplay: false })

    


  /*   var animation = anime({
        targets: '.el',
        translateX: 270,
        delay: function(el, i) { return i * 100; },
        elasticity: 200,
        easing: 'easeInOutSine',
        autoplay: false
        }); */

        tl.add({
            targets: '.el',
        translateX: -70,
        translateY: 40,
       /*  delay: function(el, i) { return i * 100; }, */
        elasticity: 100,
        easing: 'easeInOutSine',
        scale: 1.4,
        autoplay: false
        });

/* _.map(els, el => {
	anime.set(el, {
		top: anime.random(0, 150) + 'vh',
		left: anime.random(0, 100) + 'vw'
	})
	tl.add({
		targets: el,
		translateX: anime.random(-500, 500) + '%',
		translateY: anime.random(-500, 500) + '%',
		scale: anime.random(0.3, 1.7),
		rotate: anime.random(-365, 365) + 'deg',
		duration: anime.random(500, 5000), easing: 'easeInOutCirc',
	}, 0)
}) */

// new AnimePlayer({ add: tl })

window.addEventListener('scroll', () => {
	const persentage = getScrollPercent()
	tl.seek(tl.duration * (persentage * 0.01)) 
     /* tl.seek(tl.duration * (persentage /300)) */
})