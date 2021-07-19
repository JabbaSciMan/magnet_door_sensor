radio.onReceivedString(function (receivedString) {
    if (receivedString == "Make Noise") {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    }
})
let strip = neopixel.create(DigitalPin.P8, 37, NeoPixelMode.RGB)
music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
let baseline = input.magneticForce(Dimension.Strength)
radio.setGroup(1)
strip.setBrightness(10)
strip.showRainbow(1, 360)
basic.forever(function () {
    if (Math.abs(input.magneticForce(Dimension.Strength) - baseline) > 100) {
        basic.showIcon(IconNames.No)
        radio.sendString("Make Noise")
    } else {
        basic.clearScreen()
    }
    serial.writeLine("Magnetic Force is:  " + input.magneticForce(Dimension.Strength))
})
