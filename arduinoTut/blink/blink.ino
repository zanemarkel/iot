/* Blink
    based on public domain code
    from www.arduino.cc/en/Tutorial/Blink

    Zane Markel
    27 AUG 15
*/

// LED will be on pin 13
int led = 13;

// setup - a builtin function that runs at the beginning of the program "sketch"
// a setup function is always needed in order to initialize whatever needs
// initialization
void setup() {
    // set the LED to output mode
    pinMode(led, OUTPUT);
}

// loop for on and off - a built in function that loops continually
// this function needs to be defined for all sketches in order to specify what
// actually needs to be done
void loop() {
    digitalWrite(led, HIGH); // turn it on
    delay(1000);             // wait a second
    digitalWrite(led, LOW);  // turn it off
    delay(1000);             // wait a second
}
