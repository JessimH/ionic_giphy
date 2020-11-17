var macy = Macy({
  container: '#grid',
  trueOrder: true,
  waitForImages: false,
  margin: {
    x: 13,
    y: 3  
  },
  columns: 6,
  mobileFirst: true,
  breakAt: {
      1200: 6,
      940: 4,
      520: 3,
      400: 2
  }
});