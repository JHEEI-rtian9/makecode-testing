input.buttonA.onEvent(ButtonEvent.Click, function () {
    console.log("Temperature: " + input.temperature(TemperatureUnit.Celsius) + " at time: " + control.timer1.millis() + " milliseconds")
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    console.log("Sound Level: " + input.soundLevel() + " at time: " + control.timer1.millis() + " milliseconds")
})
control.timer1.reset()
