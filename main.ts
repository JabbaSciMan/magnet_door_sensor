input.onButtonPressed(Button.A, function () {
    radio.sendString("Make Noise")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Make Noise") {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    }
    basic.showNumber(input.magneticForce(Dimension.X))
})
music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
let baseline = input.magneticForce(Dimension.Strength)
radio.setGroup(1)
basic.forever(function () {
    if (Math.abs(input.magneticForce(Dimension.Strength) - baseline) > 100) {
        basic.showIcon(IconNames.No)
        radio.sendString("Make Noise")
    } else {
        basic.clearScreen()
    }
})
