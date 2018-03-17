var eve = new Event('myevent');
dom.addEventListener('myevent',function () {
  console.log('haha')
})
dom.dispatchEvent('eve');
