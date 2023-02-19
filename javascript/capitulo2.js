//Arrays;
// let variable = "contenido";
// frutas = ["bananas", "peras", "manzanas"];
// document.write(frutas);
// document.write(frutas[0]);

//Objetos
// let pc = {
//     nombre: "Victio",
//     procesador: "Intel Core i7",
//     ram: "16GB",
//     espacio: "1TB"
// };

// pc2 = ["Victio","Intel Core i7","16GB","1TB"];
// document.write("el procesador de mi pc es: " +"<b>" +pc["procesador"]+ "</b>" );

//Bucles con While();
// let num = 0;
// do {
//     num++;
//     document.write(num + "<br>")
// }while (num < 6)
// let num = 0;
// while(num < 1000) {
//     num++;
//     document.write(num);
//     if(num == 10) {
//         break;
//     }
// }


//Bucles for();
// for (let i = 0; i<6; i++){
//     document.write(i+1);
// }

//Bucles for in
// let animales = ["gato", 'perro', "tiranosaurio rex"];
// for (animal in animales){
//     document.write(animal + "<br>");
// }
// for (animal of animales){
//     document.write(animal+ "<br>");
// }

//label
array1 = ["maria","josefa","juana"];
array2 = ["pedro","marcelo",array1,"juan"];
forRancio:
for(array in array2){
    if(array == 2) {
        for (let array of array1){
            
            document.write(array + "<br>");
            break forRancio;
        }
    }else{
        document.write(array2[array] + "<br>");
    }
}