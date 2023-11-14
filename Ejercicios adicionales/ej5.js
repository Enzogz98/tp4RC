let cuentaBancaria = {
    saldo: 0,
    titular: "Nombre Titular",
    depositar: function (monto) {
      if (monto > 0) {
        this.saldo += monto;
        actualizarSaldoInfo();
      }
    },
    retirar: function (monto) {
      if (monto > 0 && monto <= this.saldo) {
        this.saldo -= monto;
        actualizarSaldoInfo();
      }
    }
  };

  function depositar() {
    cuentaBancaria.depositar(1000);
  }

  function retirar() {
    cuentaBancaria.retirar(500);
  }

  function actualizarSaldoInfo() {
    document.getElementById("saldoInfo").textContent = `Saldo: $${cuentaBancaria.saldo}`;
  }
