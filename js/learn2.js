function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight'
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100
}
const
	 parent = document.querySelector('.outerHeight'),
	els = document.querySelectorAll('.el-1 '),
	tl = anime.timeline({ autoplay: false })


        tl.add({
            targets: '.el-1',
        translateX: -70,
        translateY: 40,
        /* delay: function(el, i) { return i * 100; },  */
        elasticity: 100,
        easing: 'easeInOutSine',
        scale: 1.4,
        autoplay: false
        }); 




window.addEventListener('scroll', () => {
	const persentage = getScrollPercent()
	tl.seek(tl.duration * (persentage * 0.01)) 
  
     /* tl.seek(tl.duration * (persentage /300)) */
})