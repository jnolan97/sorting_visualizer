let array_length = prompt("Enter length of array to be sorted")
let array = []
for(let k = 0; k < array_length; k++){
    array.push(Math.floor(Math.random()*10))
}
async function bubbleSort() {
    
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - 1; j++){
            if(array[j] > array[j+1]){
               removeDivs()
                setDivs()
                await swapping(array,j,j+1)
                console.log(array)
            }
        }
    } //console.log(array)
   //depopulateData()
   removeDivs()
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
      removeDivsMerge()
      setDivsMerge()
      await sleep(1000)
      finalCheck(array0)
    }
async function finalCheck(array0){
    for(let i = 0; i < array_length-1; i++){
        let min = array0[i]
        if (array0[i+1] < min){
            let temp = array0[i]
            array0[i] = array0[i+1]
            array0[i+1] = temp
            await sleep(1000)
        }
    }
    removeDivsMerge()
    setDivsMerge()
}
  
  async function merge(left, right, end) {
    for (var i0 = left, i1 = right, j = left; j < end; ++j) {
      array1[j] = array0[i0 < right && (i1 >= end || array0[i0] <=    array0[i1]) ? i0++ : i1++];
     }
   }
//    console.log('mergesort',arrays)
//setDivsMerge()

   return arrays;
  
  } 




async function insertionSort() {
    let i = 1;
    while (i < array_length){
        let j = i
        while(j > 0){
            if(array[j-1] > array[j]){
                removeDivsInsertion()
                setDivsInsertion()
                await swap(array,array[j],array[j-1])
                await sleep(1000)
            }
           j = j - 1
        }
        i = i + 1
    }
    removeDivsInsertion()
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

}

async function swap(array,i,j) {
    
    let temp = array[i]
    array[i]= array[j]
    array[j] = temp
    await sleep(1000)

    //removeDivsInsertion()
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
    $(`<span id='arraynums${x}' />`).text(array[x]).appendTo('#bubble');
    let elem = document.getElementById(`arraynums${x}`);
    elem.style.height = array[x] + "10px";
    elem.style.backgroundColor = "pink"
    elem.style.padding = "20px"
    elem.style.color = "white"
    elem.style.display = "block"
    elem.style.margin = "5px"
    elem.style.float = "left"
    }
}

function setDivsInsertion() {
    for(let x = 0; x < array_length; x++){
    $(`<span id='arraynumsinsert${x}' />`).text(array[x]).appendTo('#insertion');
    let elem = document.getElementById(`arraynumsinsert${x}`);
    elem.style.height = array[x] + "10px";
    elem.style.backgroundColor = "black"
    elem.style.padding = "20px"
    elem.style.color = "white"
    elem.style.display = "block"
    elem.style.margin = "5px"
    elem.style.float = "left"
    }
}

function setDivsQuickSort() {
    for(let x = 0; x < array_length; x++){
    $(`<span id='arraynumsquick${x}' />`).text(array[x]).appendTo('#quick');
    let elem = document.getElementById(`arraynumsquick${x}`);
    elem.style.height = array[x] + "10px";
    elem.style.backgroundColor ="green"
    elem.style.padding = "20px"
    elem.style.color = "white"
    elem.style.display = "block"
    elem.style.margin = "5px"
    elem.style.float = "left"
    }
}

function removeDivs(){
    for(let j = 0; j < array_length; j++){
        let elem = document.getElementById(`arraynums${j}`);
        if(elem != null){
        elem.parentNode.removeChild(elem)
        }
        //$(`<span id='arraynums${j}' />`).remove()
    }
}
function removeDivsInsertion(){
    for(let j = 0; j < array_length; j++){
        let elem = document.getElementById(`arraynumsinsert${j}`);
        if (elem != null){
        elem.parentNode.removeChild(elem)
        }
        //$(`<span id='arraynums${j}' />`).remove()
    }
}

function removeDivsMerge(){
    for(let j = 0; j < array_length; j++){
        let elem = document.getElementById(`arraynumsmerge${j}`);
        if (elem != null){
            elem.parentNode.removeChild(elem)
        }
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

function setDivsMerge() {
    for(let x = 0; x < array_length; x++){
    $(`<span id='arraynumsmerge${x}' />`).text(array[x]).appendTo('#merge');
    let elem = document.getElementById(`arraynumsmerge${x}`);
    elem.style.height = array[x] + "10px";
    elem.style.backgroundColor = "blue"
    elem.style.padding = "20px"
    elem.style.color = "white"
    elem.style.display = "block"
    elem.style.margin = "5px"
    elem.style.float = "left"
    }
}


async function quickSort(){
    quickSortHelper(array, 0 , (array_length) - 1)
}

async function quickSortHelper(array, start, end) {
    removeDivsQuick()
    setDivsQuickSort()
    await sleep(1000)
    
    
console.log(array)
  if (start >= end) return;
  //define pivot, start, end
  const pivot = start
  let left = pivot + 1
  let right = end
  
  while(right >= left){
    if (array[left] > array[pivot] && array[right] < array[pivot]){
    swap(left,right,array);
    }
    if (array[left] <= array[pivot])  left++;
    if (array[right] >= array[pivot]) right--;
    }
    swap(pivot,right,array);
    const leftSubarrayIsSmaller = right - 1 - start < end - (right + 1);
    if (leftSubarrayIsSmaller) {
        quickSortHelper(array,start,right-1);
        quickSortHelper(array, right+1, end);
    } else{
        quickSortHelper(array, right + 1, end);
        quickSortHelper(array, start, right -1);
    }
  }


async function swap(i,j,array) {
    let temp = array[j]
    array[j] = array[i]
    array[i] = temp
    console.log(array)
  }

  

  function setDivsQuickSort() {
    for(let x = 0; x < array_length; x++){
    $(`<span id='arraynumsquick${x}' />`).text(array[x]).appendTo('#quick');
    let elem = document.getElementById(`arraynumsquick${x}`);
    elem.style.height = array[x] + "10px";
    elem.style.backgroundColor ="green"
    elem.style.padding = "20px"
    elem.style.color = "white"
    elem.style.display = "block"
    elem.style.margin = "5px"
    elem.style.float = "left"
    }
}



function removeDivsQuick(){
    for(let j = 0; j < array_length; j++){
        let elem = document.getElementById(`arraynumsquick${j}`);
        if (elem != null){
            elem.parentNode.removeChild(elem)
        }
        //$(`<span id='arraynums${j}' />`).remove()
    }
}