import React from "react";

const Temperatura = () => {
  const celsiusParaFahrenheit = (Celsius) => {
    return Celsius * 1.8 + 32;
  };

  const fahrenheitParaCelsius = (Fahrenheit) => {
    return (Fahrenheit - 32) / 1.8;
  };

  const kelvin = (kelvin) => {
    const c = kelvin - 273;
    const f = 1.8 * (kelvin - 273) + 32;
    return { celsius: c, fahrenheit: f };
  };

  return (
    <div>
      <h1>
        A temperatura de Celsius para Fahrenheit é: {celsiusParaFahrenheit(25)}
      </h1>
      <h1>
        {" "}
        A temperatura de Celsius para Fahrenheit é: {fahrenheitParaCelsius(77)}
      </h1>
      <h1> Kelvin para Celsius: {kelvin(273).celsius}</h1>
      <h1> Kelvin para Fahrenheit: {kelvin(273).fahrenheit}</h1>
    </div>
  );
};

export default Temperatura;
