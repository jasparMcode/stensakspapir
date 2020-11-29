let img = 0
input.onGesture(Gesture.Shake, function () {
    img = randint(0, 2)
    if (img == 0) {
        basic.showIcon(IconNames.Square)
    }
    if (img == 1) {
        basic.showLeds(`
            . # . . .
            # # # . .
            . # # # #
            . . . . .
            . . # . .
            `)
    }
    if (img == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
})
basic.forever(function () {
	
})
