let Value = 0
basic.forever(function () {
    Value = pins.analogReadPin(AnalogPin.P1)
    basic.showNumber(Value)
    if (pins.analogReadPin(AnalogPin.P1) > 500) {
        basic.showIcon(IconNames.Happy)
    }
    if (pins.analogReadPin(AnalogPin.P1) < 500) {
        basic.showIcon(IconNames.No)
    }
})
