/////////
///ISDI Coders Airlines/PRO --- PACO LEYVA




const flights = [
    { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
    { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
    { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
    { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
    { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
    { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
    { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
    { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
    { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
    { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];


let intoNewFlightScale;





const userOrAdmind = () => {
    let userAdmin;
    alert(`Hola, estás en ISDI CODERS AirlinesPro.`)
    //alert(`Hola, ha entrado en la aplicación de ISDI CODERS Airlines`);
    userAdmin = prompt(`¿Eres Administrador o Usuario?`, `ADMIN or USER`);

    if (userAdmin === '' || userAdmin === null) {
        userOrAdmind();

    } else if (userAdmin.toUpperCase() !== 'ADMIN' && userAdmin.toUpperCase() !== 'USER') {
        userOrAdmind();
    } else {

        return userAdmin.toUpperCase();
    }
}


const conexion = () => {
    const conexionUserAdmin = userOrAdmind();
    if (conexionUserAdmin === 'ADMIN') {
        createOrDeleteFlight();
    } else {
        user();
    }


}





const admin = () => {


   

    let optionDeleteErase = prompt(`¿Quieres borrar o crear vuelos?`, `DELETE or CREATE`);

    if (optionDeleteErase === '' ) {
        admin();
    } else if (optionDeleteErase === null) {

       

    } else if (optionDeleteErase.toUpperCase() !== 'DELETE' && optionDeleteErase.toUpperCase() !== 'CREATE') {
        admin();
    } else {

        return optionDeleteErase.toUpperCase();
    }
  
};


const user = () => {
   
    let choosePrice;

    do {
        choosePrice = prompt(`Elija un precio a consultar`);

        if(choosePrice <= 0){
            alert(`En este momento no existen vuelos gratuitos.`)
        }

    } while (choosePrice === null || choosePrice === '' ||
        Number.isNaN(+choosePrice)|| !(Number.isNaN(+choosePrice)) <= 0)



    console.log(`A continuación se muestran los precios acordes a su consulta: ${choosePrice}€`)
    console.log(` `);
    const downPrice = flights.filter((precio) => precio.cost <= choosePrice);
    if(choosePrice < 90){
        console.log(`Lo sentimos, no hay vuelos tan baratos.`);
    }else{
    downPrice.forEach(precioBajo => {

        console.log(`El vuelo con origen ${precioBajo.from} y destino 
    ${precioBajo.to}, tiene un coste de ${precioBajo.cost}€.`);
        console.log(` `);
    });
    }   

}



let adminOption;



const createOrDeleteFlight = () => {


    do {
        adminOption = admin()
        if (adminOption === 'CREATE') {

            let newFlight = {};


            

            newFlight.id = newFlightId()
            newFlight.to = newFlightTo()
            newFlight.from = newFlightFrom()
            newFlight.cost = newFlightCost()
            newFlight.scale = newFlightScale()
           
            if (newFlight.scale === 'Y') {
                newFlight.scale = true;
            } else {
                newFlight.scale = false;
            }

            flights.push(newFlight);
            console.log(` `)
            alert(`Un nuevo vuelo ha sido creado`);
            console.log(`------`)
            console.log(`El vuelo número ${flights.length} con origen: ${newFlight.from}, y destino: ${newFlight.to} 
tiene un coste de ${newFlight.cost}€.`);

            if (flights.length === 15) {
                alert(`No se pueden crear más vuelos.`)
                return visualFlights();
            }




        } else if (adminOption === undefined) {


            return visualFlights();
        } else {

            deleteFlight();


        }
    } while (adminOption !== null || flights.length === 15);
};


const deleteFlight = () => {
    let numberDelete;
    do {

        numberDelete = prompt(`Introduce un número de vuelo a borrar`);
        
        if (numberDelete > flights.length && numberDelete > 15 || numberDelete < 0) {
            alert(`Introduce un número referido a los vuelos que ves en pantalla.`);
        } else if (Number.isNaN(+numberDelete) || numberDelete === '') {
            alert(`Introduce un número referido a los vuelos que ves en pantalla.`);
        } else {
            const filterToDelete = flights.filter((numberToDelete, index) => index !== +numberDelete - 1);

            const filterDeleted = flights.filter((item, index) => index === +numberDelete - 1);



            
            filterDeleted.forEach(element => {
                
                console.log(`El vuelo número ${element.id + 1}, origen ${element.from} y destino ${element.to}, ha sido borrado`);
                console.log(`-------`)
            });

          

            flights.splice(numberDelete - 1, 1);

        }
    } while (numberDelete !== null && numberDelete <= flights.length)
}



const newFlightId = () => {

    let intoNewFlightId;
    alert(`estás creando vuelo número ${flights.length + 1}`)

    return flights.length;
  
}


const newFlightTo = () => {

    let intoNewFlightTo;

    do {
        intoNewFlightTo = prompt(`Introduce destino del vuelo`);

    } while (intoNewFlightTo === null && intoNewFlightTo === '' ||
        !(Number.isNaN(+intoNewFlightTo)))

    return intoNewFlightTo.toUpperCase();
}

const newFlightFrom = () => {

    let intoNewFlightFrom;

    do {
        intoNewFlightFrom = prompt(`Introduce origen del vuelo`);

    } while (intoNewFlightFrom === null && intoNewFlightFrom === '' ||
        !(Number.isNaN(+intoNewFlightFrom)))

    return intoNewFlightFrom.toUpperCase();
}

const newFlightScale = () => {



    do {

        intoNewFlightScale = prompt(`Introduce si el vuelo tiene escala o no.`, `Y or N`);
        if (intoNewFlightScale === null || intoNewFlightScale === '') {
            alert(`Esto no es una opción válida.`)
        } else if (intoNewFlightScale.toUpperCase() !== 'Y' && intoNewFlightScale.toUpperCase() !== 'N') {
            alert(`" ${intoNewFlightScale} ", no es una opción válida.`)
        } else {
            return intoNewFlightScale.toUpperCase();

        }
    } while (intoNewFlightScale !== 'null' && intoNewFlightScale !== '')



}


const newFlightCost = () => {

    let intoNewFlightCost;

    do {
        intoNewFlightCost = prompt(`Introduce el coste del vuelo`);

    } while (intoNewFlightCost === null || intoNewFlightCost === '' ||
        Number.isNaN(+intoNewFlightCost))

    return +intoNewFlightCost;
}





const visualFlights = () => {

    let escala;
    console.log(`      <<<<<<<<< <<<<<>>>>> >>>>>>>>>`);
    console.log(`<<<<<<<<<< ISDI CODERS AIRLINES >>>>>>>>>>`);
    console.log(`      <<<<<<<<< <<<<<>>>>> >>>>>>>>>`);
    console.log(` `);
    console.log(`>VUELOS PARA EL DÍA DE HOY /////////////`);
    console.log(` `);
    for (let i = 0; i < flights.length; i++) {
        if (flights[i].scale === false) {
            escala = 'no realiza escala'
        } else {
            escala = 'sí realiza escala'
        }
        console.log(`********************* << ${flights[i].id + 1} >> *********************`);
        console.log(`El vuelo con origen: ${flights[i].from}, y destino: ${flights[i].to} 
    tiene un coste de ${flights[i].cost}€ y ${escala}.`);
        console.log(` `);



    }


}


const mediaCostFlights = () => {
    let total = [];

    console.log(` `);
    console.log(`>COSTE MEDIO POR VUELO /////////////////`);
    console.log(`***************************************`);
    for (let i = 0; i < flights.length; i++) {
        total.push(flights[i].cost)
    }


    let sum = (total) => {
        let acc = 0;
        total.forEach((element, index) => {

            acc += element;
        });


        console.log(`El coste medio del vuelo es: ${acc / flights.length}€`);
        console.log(` `);

    }
    sum(total);
}

const scaleView = () => {
    let escalaSi = [];
    console.log(` `);
    console.log(`>VUELOS QUE HACEN ESCALA ///////////////`);
    console.log(`***************************************`);
    for (let i = 0; i < flights.length; i++) {
        if (flights[i].scale === true) {
            escalaSi.push(flights[i])


        } else {

        }
    }
    escalaSi.forEach((vueloEscala) => {
        console.log(` `);
        console.log(`El vuelo con origen: ${vueloEscala.from}, y destino: ${vueloEscala.to} 
    tiene un coste de ${vueloEscala.cost}€ y sí hace escala.`);
        console.log(`------`);
    });
}

const ultimosCincoVuelos = () => {
    console.log(` `);
    console.log(` `);
    console.log(`>ÚLTIMOS VUELOS DEL DÍA ////////////////`);
    console.log(`***************************************`);
    console.log(` `);

    const cincoUltimos = flights.slice(-5)
    console.log(`Estos destinos son los últimos del día:`)
    cincoUltimos.forEach((element, index) => {
        console.log(`${index + 1} >>>> Vuelo con origen ${element.from}, y destino ${element.to}.`);
        console.log(`------`);

    });

}







const IsdiCodersAirlines = () => {




    visualFlights()

    mediaCostFlights()

    scaleView()

    ultimosCincoVuelos()

    conexion()
  


}

IsdiCodersAirlines();