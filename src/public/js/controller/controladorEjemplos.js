class ControladorEjemplos {

	EjemploCondicionales() {
		return `task main()
{
  //Instancia de un objeto tipo Sensor
  const sensorLuz = new Sensor(A5)

  //Instancia de un relevador
  const relay = new Relay(2)

  while (true)
  {
    //Si el sensor detecta luz
    if (sensorLuz)
    {
      rele1.off
    }

    //Si el sensor no detecta luz
    else
    {
      rele1.on
    }
  }
}`
	}

	EjemploEstructuras() {
		return `task main()
{
  const motor = new Motor(5)

  var velocidad = 127
  var mensaje = 'Mensaje'

  while (true)
  {
    motor.run (255)
  }
}`
	}

	EjemploMetodos() {
		return `task main()
{
  //Instancias de un sensor, motor, relevador y servo
  const boton = new Sensor(A5)
  const motor1 = new Motor(5)
  const relay1 = new Relay(6)
  const servo1 = new Servo(7)

  while (true)
  {
    if (boton)
    {
      relay1.on
      servo1.position (180)
      motor1.run (255)
    }
    else
    {
      relay1.off
      servo1.position (0)
      motor1.run (0)
    }
  }
}`
	}

	EjemploFunciones() {
		return `task main()
{
  const motor1 = new Motor(5)
  const motor2 = new Motor(6)

  var tiempo = 2000

  function avanzar (velocidad)
  {
    motor1.run (velocidad)
    motor2.run (velocidad)
  }


  while (true)
  {
    avanzar (100)
  }
}`
	}

	EjemploTiempo() {
		return `task main()
{
  const motor1 = new Motor(5)

  while (true)
  {
    motor.run (255)
    wait1msec (1000)

    motor.run (0)
    wait1msec (1000)
  }
}`
	}
}

export default ControladorEjemplos