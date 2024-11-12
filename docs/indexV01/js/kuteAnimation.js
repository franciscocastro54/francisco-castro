const tween = KUTE.fromTo(
    '#blob1',
    { path: '#blob1'},
    { path: '#blob2'},
    {repeat: 999, duration: 3000, yoyo: true}
)

const tween2 = KUTE.fromTo(
    '#blob3',
    { path: '#blob3'},
    { path: '#blob4'},
    {repeat: 999, duration: 3000, yoyo: true}
)

const tween3 = KUTE.fromTo(
    '#blob5',
    { path: '#blob5'},
    { path: '#blob6'},
    {repeat: 999, duration: 3000, yoyo: true}
)

const tween4 = KUTE.fromTo(
    '#blob7',
    { path: '#blob7'},
    { path: '#blob8'},
    {repeat: 999, duration: 3000, yoyo: true}
)

tween4.start()
tween3.start()
tween2.start()
tween.start()