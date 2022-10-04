input.onButtonPressed(Button.A, function () {
    led.plot(0, 0)
    led.plot(input.lightLevel(), input.soundLevel())
})
basic.forever(function () {
	
})
