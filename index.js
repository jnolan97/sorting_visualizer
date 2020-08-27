//let array_length = prompt("Enter length of array to be sorted")
let rangeslider = document.getElementById("sliderRange")
let output = document.getElementById("demo")
output.innerHTML = rangeslider.value;
let v = rangeslider.value;
let array = []
// for(let k = 0; k < array_length; k++){
//     array.push(Math.floor(Math.random()*10))
// }

rangeslider.oninput = function () {
    output.innerHTML = this.value;
    v = this.value;
    values = new Array(Number(v));
    for(let k = 0; k < values.length; k++){
        array.push(Math.floor(Math.random()*10))
    }
}
let array_length = array.length;


//*******************BUBBLE SORT***********************/
async function bubbleSort() {
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - 1; j++){
            if(array[j] > array[j+1]){
               removeDivs()
                setDivs()
                await swapping(array,j,j+1)
            }
        }
    } 
   removeDivs()
   setDivs()
}


async function swapping(array,i,j) {
    let temp = array[i]
    array[i]= array[j]
    array[j] = temp
    let elem = document.getElementById(`arraynums${i}`);
    let elem2 = document.getElementById(`arraynums${j}`);
    elem.style.backgroundColor = "black";
    elem2.style.backgroundColor = "black";
    await sleep(2000)

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


function removeDivs(){
    for(let j = 0; j < array_length; j++){
        let elem = document.getElementById(`arraynums${j}`);
        if(elem != null){
        elem.parentNode.removeChild(elem)
        }
        
    }
}


//*******************MERGE SORT***********************//

// async function mergeSort(array) {
//     var arrays = [array.slice()],
//     n = array.length,
//     array0 = array,
//     array1 = new Array(n);
//     for (var m = 1; m < n; m <<= 1) {
//       for (var i = 0; i < n; i += (m << 1)) {
//           merge(i, Math.min(i + m, n), Math.min(i + (m << 1), n));
//       }
//       arrays.push(array1.slice());
//       array = array0, array0 = array1, array1 = array;
//       await sleep(1000)
//       removeDivsMerge()
//       setDivsMerge()
//       await sleep(1000)
//       finalCheck(array0)
//     }


// async function finalCheck(array0){
//     for(let i = 0; i < array_length-1; i++){
//         let min = array0[i]
//         if (array0[i+1] < min){
//             await mergeSort(array0)            
//         }
//     }
//     removeDivsMerge()
//     setDivsMerge()
// }

/* async function mergeSort(array) {
    var arrays = [array.slice()],
    n = array.length,
    array0 = array,
    array1 = new Array(n);
    
    for (var m = 1; m < n; m <<= 1) {
      for (var i = 0; i < n; i += (m << 1)) {
          merge(i, Math.min(i + m, n), Math.min(i + (m << 1), n));
      }
      arrays.push(array1.slice());    
      setDivsMerge()
      array = array0, array0 = array1, array1 = array;
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
            // let temp = array[i]
            // array[i]= array[j]
            // array[j] = temp
            await sleep(1000)
        }
    }
    removeDivsMerge()
    setDivsMerge()
}
   */

function mergeHelper(){
    return mergeSort(array)
}

 async function mergeSort(array) {
    var arrays = [array.slice()]
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
       removeDivsMerge()
        setDivsMerge()
        finalCheck(array0)
}
    

 async function finalCheck(array0){
     
    isSorted = false
    while(isSorted == false){
        isSorted = true;
        removeDivsMerge()
        setDivsMerge()
    for(let i = 0; i < array_length-1; i++){
        let min = array0[i]
        if (array0[i+1] < min){
            isSorted = false
      await sleep(1000)
      finalCheck(array0)
    }
}
    }
    removeDivsMerge()
    setDivsMerge()
    console.log(array0)
} 


async function merge(left, right, end) {
    finalCheck(array0)
    removeDivsMerge()
    setDivsMerge()
}
  
  async function merge(left, right, end) {
    for (var i0 = left, i1 = right, j = left; j < end; ++j) {
      array1[j] = array0[i0 < right && (i1 >= end || array0[i0] <= array0[i1]) ? i0++ : i1++];
     }
   }
   finalCheck(array0)
   return arrays;
} 


function removeDivsMerge(){
    for(let j = 0; j < array_length; j++){
        let elem = document.getElementById(`arraynumsmerge${j}`);
        if (elem != null){
            elem.parentNode.removeChild(elem)
        }
    }
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


//*******************INSERTION SORT***********************//
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

    }
   setDivsInsertion()
        i = i + 1
    removeDivsInsertion()
    setDivsInsertion()
}


async function swaps(array,i,j) {
    let temp = array[i]
    array[i]= array[j]
    array[j] = temp
    await sleep(1000)
    removeDivsInsertion()

    //removeDivsInsertion()
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


function removeDivsInsertion(){
    for(let j = 0; j < array_length; j++){
        let elem = document.getElementById(`arraynumsinsert${j}`);
        if (elem != null){
        elem.parentNode.removeChild(elem)
        }
        //$(`<span id='arraynums${j}' />`).remove()
    }
}


//*******************QUICK SORT***********************//
async function quickSort(){
    quickSortHelper(array, 0 , (array_length) - 1)
}


async function quickSortHelper(array, start, end) {
    removeDivsQuick()
    setDivsQuickSort()
    await sleep(1000) 
  if (start >= end) return;
  //define pivot, start, end
  const pivot = start
  let left = pivot + 1
  let right = end
  while(right >= left){
    removeDivsQuick()
    setDivsQuickSort()
    await sleep(1000) 
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
    }
}


//*******************MISCELLANEOUS***********************//
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}