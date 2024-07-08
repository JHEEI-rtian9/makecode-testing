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

input.buttonA.onEvent(ButtonEvent.Click, function () {
    console.log("Temperature: " + input.temperature(TemperatureUnit.Celsius) + " at time: " + control.timer1.millis() + " milliseconds")
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    console.log("Sound Level: " + input.soundLevel() + " at time: " + control.timer1.millis() + " milliseconds")
})
input.buttonB.onEvent(ButtonEvent.Down, function() {
    presstime = control.timer1.millis()
    console.log("B Button Down")
})
input.buttonB.onEvent(ButtonEvent.Up, function(){
    presstime -= Math.abs(control.timer1.millis())
    console.log("B Button UP")
    console.log("Presstime: "+presstime)
})
control.timer1.reset()
let presstime = 0
