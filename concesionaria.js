// Etapa 2

let autosImportados = require("./autos.js");

let concesionaria = {
    autos: autosImportados,
    // Etapa 3
    buscarAuto: function(patenteAuto){
        // CON EL FOR OF
       // for (let auto of this.autos) {
       //     if (patenteAuto == auto.patente){
       //         return auto
       //     }
       // }
       // return null;

       // CON EL FIND
       let autoEncontrado = this.autos.find(function(auto){
            return auto.patente == patenteAuto
       })
       return autoEncontrado ? autoEncontrado : null;
    },
    // Etapa 4
    venderAuto: function(patente){
        let autoEncontrado = this.buscarAuto(patente);
        autoEncontrado ? autoEncontrado.vendido = true : "";
    },
    // Etapa 5
    autosParaLaVenta: function(){
        let autoParaLaVenta = this.autos.filter(function(auto){
            // return !(auto.vendido) -> OTRA OPCIÓN
            if (auto.vendido == false){
                return auto;
            }
        })
        return autoParaLaVenta;
    },
    // Etapa 6
    autosNuevos: function(){
        let autoNuevo = this.autosParaLaVenta().filter(function(auto){
            return auto.km < 100
        })
        return autoNuevo
    },
    // Etapa 7
    listaDeVentas: function(){
        let autosVendidos = this.autos.filter(function(auto){
            return auto.vendido;
        })
        let preciosAutosVendidos = autosVendidos.map(function(auto){
            return auto.precio;
        });
        return preciosAutosVendidos;
    },
    // Etapa 8
    totalDeVentas: function(){
        let preciosAutosVendidos = this.listaDeVentas()
        let totalVentas = preciosAutosVendidos.reduce(function(suma, precio){
            return suma + precio;
            },0)
        return totalVentas;
    },
    // Etapa 9
    puedeComprar: function(auto, persona){
        let capPagoCuotas = persona.capacidadDePagoEnCuotas;
        let capPagoTotal = persona.capacidadDePagoTotal;
        let precioTotal = auto.precio;
        let numeroDeCuotas = auto.cuotas;
        let valorCuota = precioTotal/numeroDeCuotas;
        return ((capPagoCuotas>valorCuota)&&(capPagoTotal>precioTotal));
    },
    // Etapa 10
    autosQuePuedeComprar: function(persona){
        let paraLaVenta = this.autosParaLaVenta();
        let autosComprar = paraLaVenta.filter(function(auto){
            let valorCuota = auto.precio/auto.cuotas;
            return ((persona.capacidadDePagoEnCuotas>valorCuota)&&(persona.capacidadDePagoTotal>auto.precio));
            // return this.puedeComprar(auto, persona);
        })
        return autosComprar;
    }
};


console.log(totalDeVentas().totalVentas);


// console.log(concesionaria.buscarAuto("JJK116"));
