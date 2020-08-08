let array_length = prompt("Enter length of array to be sorted")
let array = []
for(let k = 0; k < array_length; k++){
    array.push(Math.floor(Math.random()*10))
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

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}