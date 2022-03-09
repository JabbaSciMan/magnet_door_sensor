def on_received_string(receivedString):
    if receivedString == "Make Noise":
        music.start_melody(music.built_in_melody(Melodies.DADADADUM),
            MelodyOptions.ONCE)
radio.on_received_string(on_received_string)

strip = neopixel.create(DigitalPin.P8, 37, NeoPixelMode.RGB)
music.start_melody(music.built_in_melody(Melodies.DADADADUM),
    MelodyOptions.ONCE)
baseline = input.magnetic_force(Dimension.STRENGTH)
radio.set_group(1)
strip.set_brightness(10)
strip.show_rainbow(1, 360)

def on_forever():
    if abs(input.magnetic_force(Dimension.STRENGTH) - baseline) > 100:
        basic.show_icon(IconNames.NO)
        radio.send_string("Make Noise")
    else:
        basic.clear_screen()
    serial.write_line("Magnetic Force is:  " + str(input.magnetic_force(Dimension.STRENGTH)))
basic.forever(on_forever)
