// measure brightness from a photoresistor and print the results to console!
// 27 AUG 15

/* MISC NOTES
 * 
 * The website shows red wires going on the positive vertical line of the
 * breadboard. I ignored this and wired directly from A0 to a socket with the
 * resistor. It worked.
 *
 * Compared to the recommended setup, I noticed that voltage readings were
 * slightly higher for my setup. This is logical; an extra wire means that
 * there's more resistance, and therefore less voltage. Science!
 */

// the basic setup lines
var five = require("johnny-five");
var board = new five.Board();

// const for the analog pin number connected to the photoresistor
var ANALOGPIN = 0;

// the meat of the prog
board.on("ready", function(){
        // read the voltage on the analog pin
        this.analogRead(ANALOGPIN, function(voltage) {
            // Actually log the voltage
            // the constant factor converts the input value (which takes
            // on one of 1024 values) to the actual voltage (which is
            // out of 5V)
            console.log(voltage * (5.0 / 1024.0));
        });
});
