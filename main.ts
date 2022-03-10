input.onButtonPressed(Button.A, function () {
    radio.sendString("Make Noise")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Make Noise") {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    }
    for (let index = 0; index < 2; index++) {
        basic.showNumber(input.magneticForce(Dimension.X))
    }
})
let baseline = input.magneticForce(Dimension.Strength)
radio.setGroup(1)
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.Yes)
}
basic.forever(function () {
    if (Math.abs(input.magneticForce(Dimension.Strength) - baseline) > 100) {
        basic.showIcon(IconNames.No)
        radio.sendString("Make Noise")
    } else {
        basic.clearScreen()
    }
    baseline = input.magneticForce(Dimension.Strength)
})
