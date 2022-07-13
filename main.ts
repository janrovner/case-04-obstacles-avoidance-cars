let vzdalenost = 0
basic.showNumber(7)
wuKong.setAllMotor(-100, -100)
basic.forever(function () {
    vzdalenost = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
    if (vzdalenost < 40 && vzdalenost > 0) {
        wuKong.setAllMotor(-100, 100)
        basic.pause(500)
    } else {
        wuKong.setAllMotor(-100, -100)
    }
})
