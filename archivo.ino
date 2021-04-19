#include <Servo.h>
Servo servoX;
int c = 0;
void setup() {
pinMode(5, OUTPUT);
}
void loop() {
if(c==0){
analogWrite(5, 255);
delay(1000);
analogWrite(5, 0);
delay(1000);
analogWrite(5, 255);
delay(1000);
analogWrite(5, 0);
delay(1000);
c++;
}
}