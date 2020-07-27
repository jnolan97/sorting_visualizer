const bubbleSort = (array) => {
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - 1; j++){
            if(array[j] > array[j+1]){
                swapping(array,j,j+1)
            }
        }
    }console.log(array)
}

const swapping = (array,i,j) => {
    let temp = array[i]
    array[i]= array[j]
    array[j] = temp
    
}
