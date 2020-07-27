let array_length = prompt("Enter length of array to be sorted")
let array = []
for(let k = 0; k < array_length; k++){
    array.push(Math.floor(Math.random()*10))
}
async function bubbleSort() {
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - 1; j++){
            if(array[j] > array[j+1]){
                await swapping(array,j,j+1)
                console.log(array)
                populateData()
            }
        }
    } //console.log(array)
   // depopulateData()
}

async function swapping(array,i,j) {
    
    let temp = array[i]
    array[i]= array[j]
    array[j] = temp
    await sleep(1000)
    
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}

function populateData() {
    document.getElementById("array").style.backgroundSize = 200
    document.getElementById("array").style.backgroundColor = "red"
    for(let a = 0; a < array_length; a++){
       //document.getElementById("array").append(array[a])
       document.getElementById("array").innerHTML = array
        
    }
}

// function depopulateData(){
//     for(let a = 0; a < array_length; a++){
//         document.getElementById("array").innerHTML = ""
        
//     }
// }
populateData()