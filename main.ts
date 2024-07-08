input.buttonB.onEvent(ButtonEvent.Down, function () {
    presstime = control.timer1.millis()
    console.log("B Button Down")
})
// Limit of ButtonEvent.Click is 1 second, otherwise is ButtonEvent.LongClick
input.buttonA.onEvent(ButtonEvent.Click, function () {
    console.log("Temperature: " + input.temperature(TemperatureUnit.Celsius) + " at time: " + control.timer1.millis() + " milliseconds")
})
input.buttonB.onEvent(ButtonEvent.Up, function () {
    presstime += 0 - control.timer1.millis()
    console.log("B Button UP")
    console.log("Presstime: " + Math.abs(presstime))
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    console.log("Sound Level: " + input.soundLevel() + " at time: " + control.timer1.millis() + " milliseconds")
})
/**
 * Adafruit didn't update Makecode version, so you CANNOT use a github repo
 */
/**
 * Line above must be empty
 * 
 * Empty line between every line or else it concats to the previous line
 * 
 * Empty line below
 */
let presstime = 0
control.timer1.reset()
