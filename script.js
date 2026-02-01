function calcularTinta() {
    const metros = document.getElementById('metros').value;
    const rendimento = 3; // Cada litro pinta 5m²
    const total = metros / rendimento;
    const campoResultado = document.getElementById('resultado');

    if (metros > 0) {
        campoResultado.innerHTML = `Você precisará de ${total.toFixed(1)} litros de tinta.`;
    } else {
        campoResultado.innerHTML = "Digite um valor maior que zero.";
    }
}


