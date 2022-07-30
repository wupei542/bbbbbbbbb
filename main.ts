function right () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    55
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    50
    )
}
function FR () {
    frontright()
    basic.pause(200)
    go()
    basic.pause(400)
    right()
    basic.pause(500)
    stop()
}
function back () {
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    135
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    90
    )
}
function FL () {
    frontleft()
    basic.pause(200)
    go()
    basic.pause(400)
    left()
    basic.pause(400)
    stop()
}
function left () {
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    60
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    50
    )
}
function stop () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    0
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    0
    )
}
input.onButtonPressed(Button.A, function () {
    left()
    basic.pause(650)
    stop()
})
function backleft () {
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    40
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    250
    )
}
function left2 () {
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    0
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    40
    )
}
function backright () {
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    250
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    40
    )
}
function frontright () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    250
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    40
    )
}
function TB () {
    left()
    basic.pause(900)
    stop()
}
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # # # .
        `)
    basic.pause(200)
    basic.clearScreen()
    AAA = 0
    BBB = 0
    go()
    basic.pause(600)
    stop()
    while (AAA == 0) {
        if (!(pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 1)) {
            if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 0) {
                go()
            }
            if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 1) {
                right2()
            }
            if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 0) {
                left2()
            }
        } else {
            back()
            basic.pause(100)
            stop()
            basic.pause(100)
            AAA = 1
        }
    }
    if (AAA == 1) {
        go()
        basic.pause(200)
        stop()
        basic.pause(100)
        AAA = 2
    }
    while (AAA == 2) {
        if (!(pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 1)) {
            if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 0) {
                go()
            }
            if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 1) {
                right2()
            }
            if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 0) {
                left2()
            }
        } else {
            back()
            basic.pause(100)
            stop()
            basic.pause(100)
            AAA = 3
        }
    }
    if (AAA == 3) {
        go()
        basic.pause(300)
        stop()
        basic.pause(100)
        basic.showNumber(0)
        AAA = 4
    }
    while (AAA == 4) {
        if (!(pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 1)) {
            if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 0) {
                go()
            }
            if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 1) {
                right2()
            }
            if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 0) {
                left2()
            }
        } else {
            back()
            basic.pause(100)
            stop()
            basic.pause(100)
            AAA = 5
        }
    }
    if (AAA == 5) {
        go()
        basic.pause(100)
        stop()
        basic.pause(100)
        basic.showNumber(1)
        AAA = 6
    }
    while (AAA == 6) {
        if (!(pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 1)) {
            if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 0) {
                go()
            }
            if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 1) {
                right2()
            }
            if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 0) {
                left2()
            }
        } else {
            back()
            basic.pause(100)
            stop()
            basic.pause(100)
            AAA = 7
        }
    }
    if (AAA == 7) {
        go()
        basic.pause(600)
        right()
        basic.pause(700)
        stop()
        basic.pause(100)
        go()
        basic.pause(500)
        stop()
        AAA = 8
    }
    while (AAA == 8) {
        if (!(pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 1)) {
            back()
        } else {
            stop()
            AAA = 9
        }
    }
    if (AAA == 9) {
        go()
        basic.pause(525)
        left()
        basic.pause(600)
        stop()
        AAA = 10
    }
    while (AAA == 10) {
        if (!(pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 1)) {
            if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 0) {
                go()
            }
            if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 1) {
                right2()
            }
            if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 0) {
                left2()
            }
        } else {
            back()
            basic.pause(100)
            stop()
            basic.pause(100)
            AAA = 11
        }
    }
    if (AAA == 11) {
        go()
        basic.pause(500)
        left()
        basic.pause(650)
        back()
        basic.pause(600)
        go()
        basic.pause(200)
        stop()
        AAA = 12
    }
    while (AAA == 12) {
        if (!(pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 1)) {
            if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 0) {
                go()
            }
            if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 1) {
                right2()
            }
            if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 0) {
                left2()
            }
        } else {
            back()
            basic.pause(100)
            stop()
            basic.pause(100)
            AAA = 13
        }
    }
    if (AAA == 13) {
        go()
        basic.pause(600)
        stop()
    }
})
function BL () {
    right()
    basic.pause(500)
    back()
    basic.pause(400)
    backleft()
    basic.pause(300)
    stop()
}
function frontleft () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    40
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    250
    )
}
function right2 () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    80
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    0
    )
}
function BR () {
    left()
    basic.pause(400)
    back()
    basic.pause(500)
    backright()
    basic.pause(200)
    stop()
}
function go () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    125
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    100
    )
}
let BBB = 0
let AAA = 0
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
AAA = 0
BBB = 0
let CCC = 0
let DDD = 0
basic.forever(function () {
	
})
