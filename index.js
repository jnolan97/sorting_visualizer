let array_length = prompt("Enter length of array to be sorted")
let array = []
for(let k = 0; k < array_length; k++){
    array.push(Math.floor(Math.random()*10))

    //$("<div class='arraynums' />").text(array[k]).appendTo('body');
}
async function bubbleSort() {
    
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - 1; j++){
            if(array[j] > array[j+1]){
                setDivs()
                await swapping(array,j,j+1)
                console.log(array)
                //populateData()
                
                //depopulateData()
            }
        }
    } //console.log(array)
   //depopulateData()
   setDivs()
}
function mergeHelper(){
    return mergeSort(array)
}
async function mergeSort(array) {
    var arrays = [array.slice()],
    n = array.length,
    array0 = array,
    array1 = new Array(n);
  
    for (var m = 1; m < n; m <<= 1) {
      for (var i = 0; i < n; i += (m << 1)) {
          merge(i, Math.min(i + m, n), Math.min(i + (m << 1), n));
      }
      arrays.push(array1.slice());
      array = array0, array0 = array1, array1 = array;
      await sleep(1000)
      console.log("display",arrays)
    }
  
  async function merge(left, right, end) {
    for (var i0 = left, i1 = right, j = left; j < end; ++j) {
      array1[j] = array0[i0 < right && (i1 >= end || array0[i0] <=    array0[i1]) ? i0++ : i1++];
     }
   }
//    console.log('mergesort',arrays)
   return arrays;
  } 
async function displayMerge(arrays){
    await sleep(1000)
    console.log("display",arrays)
} 
//  async function merge(array){
//     const middle = Math.floor(array.length / 2)
//     const left = array.slice(0,middle)
//     const right = array.slice(middle)
//    // console.log("right",left)
//     if(array.length <= 1){
//         return array
//     }

//    await mergeSort(merge(left),merge(right))
// }
// async function mergeSort(left,right){
//     let values = []
//     let leftIndex = 0
//     let rightIndex = 0
//     // if(array.length <= 1){
//     //     return values
//     // }
//     while (leftIndex <= left.length && rightIndex < right.length){
//         if (left[leftIndex] < right[rightIndex]){
//             values.push(left[leftIndex])
//           //  console.log("merging",values)
//             leftIndex++
//         } else {
//             values.push(right[rightIndex])
//           //  console.log("merging",values)
//             rightIndex++
//         }
//     }
//     // for(let j=0; j<left.length; j++){
//     //     values.push(left[j])
//     // }

//     // console.log("mergesort", left,right)
//     console.log("sorted",values)
//     // await sleep(1000)
//      values //.concat(left.length ? left:right)
//     .concat(left.slice(leftIndex))
//     .concat(right.slice(rightIndex))
//     for(let k=0; k<right.length; k++){
//         await values.push(right[k])
//     }
//     // return returnValues(values)
// }
// async function returnValues(values){
//     await sleep(1000)
//     console.log('values',values)
//     return values
// }
async function insertionSort() {
    
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - 1; j++){
            if(array[j] > array[j+1]){
                setDivsInsertion()
                await swap(array,j,j+1)
                console.log(array)
                //populateData()
                
                //depopulateData()
            }
        }
    } //console.log(array)
   //depopulateData()
   setDivsInsertion()
   
}
// async function swapping(array,i,j) {
// }
// async function bubbleSort() {
//     for(let i = 0; i < array.length; i++){
//         for(let j = 0; j < array.length - 1; j++){
//             if(array[j] > array[j+1]){
//                 await swapping(array,j,j+1)
//                 console.log(array)
//                 populateData()
//             }
//         }
//     } //console.log(array)
//    // depopulateData()
// }

async function swapping(array,i,j) {
    
    let temp = array[i]
    array[i]= array[j]
    array[j] = temp
    await sleep(1000)

    removeDivs()
}

async function swap(array,i,j) {
    
    let temp = array[i]
    array[i]= array[j]
    array[j] = temp
    await sleep(1000)

    removeDivsInsertion()
}

 function populateData() {
    document.getElementById("array").style.backgroundSize = 200
    document.getElementById("array").style.backgroundColor = "black"
    document.getElementById("array").style.color = "white"
    for(let a = 0; a < array_length; a++){
        document.getElementById("array").innerHTML = array
        $("<div class='arraynums' />").text(array[a]).appendTo('body');
    }
} 


function setDivs() {
    for(let x = 0; x < array_length; x++){
    $(`<span id='arraynums${x}' />`).text(array[x]).appendTo('body');
    let elem = document.getElementById(`arraynums${x}`);
    elem.style.height = array[x] + "10px";
    elem.style.width = "10px";
    elem.style.backgroundColor = "black"
    elem.style.padding = "10px"
    elem.style.color = "white"
    elem.style.display = "block"
    elem.style.margin = "5px"
    elem.style.float = "left"



    }
}
function setDivsInsertion() {
    for(let x = 0; x < array_length; x++){
    $(`<span id='arraynums2${x}' />`).text(array[x]).appendTo('body');
    let elem = document.getElementById(`arraynums2${x}`);
    elem.style.height = array[x] + "10px";
    elem.style.width = "10px";
    elem.style.backgroundColor = "black"
    elem.style.padding = "10px"
    elem.style.color = "white"
    elem.style.display = "block"
    elem.style.margin = "5px"
    elem.style.float = "right"
    }
}

function removeDivs(){
    for(let j = 0; j < array_length; j++){
        let elem = document.getElementById(`arraynums${j}`);
        elem.parentNode.removeChild(elem)
        //$(`<span id='arraynums${j}' />`).remove()
    }
}
function removeDivsInsertion(){
    for(let j = 0; j < array_length; j++){
        let elem = document.getElementById(`arraynums2${j}`);
        elem.parentNode.removeChild(elem)
        //$(`<span id='arraynums${j}' />`).remove()
    }
}



 function depopulateData(){
     for(let a = 0; a < array_length; a++){
         document.getElementById(`arraynums`).innerHTML = ""
        
     }
 }
//populateData()


function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}
// function populateData() {
//     document.getElementById("array").style.backgroundSize = 200
//     document.getElementById("array").style.backgroundColor = "red"
//     for(let a = 0; a < array_length; a++){
//        //document.getElementById("array").append(array[a])
//        document.getElementById("array").innerHTML = array
        
//     }
// }

// function depopulateData(){
//     for(let a = 0; a < array_length; a++){
//         document.getElementById("array").innerHTML = ""
        
//     }
// }
// populateData()