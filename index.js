// Suponha que a taxa de câmbio de dólar para euro seja 0.85
const dollarToEuroExchangeRate = 0.85;

function calculateCost() {
  const countrySelect = document.getElementById('country');
  const areaCodeInput = document.getElementById('areaCode');
  const durationInput = document.getElementById('duration');
  const resultDiv = document.getElementById('result');

  const country = countrySelect.options[countrySelect.selectedIndex].text;
  const areaCode = areaCodeInput.value;
  const duration = parseFloat(durationInput.value);

  // Adicione lógica para obter dados de DDD, códigos de área e outros fatores, se necessário

  // Suponha que o custo base por minuto em dólar seja 0.05
  const baseCostPerMinute = 0.05;

  // Lógica de cálculo do custo em dólares
  const costInDollars = baseCostPerMinute * duration;

  // Converta o custo de dólares para euros
  const costInEuros = costInDollars * dollarToEuroExchangeRate;

  // Exiba o resultado
  resultDiv.innerHTML = `País: ${country}<br>Custo em Dólares: $${costInDollars.toFixed(2)}<br>Custo em Euros: €${costInEuros.toFixed(2)}`;