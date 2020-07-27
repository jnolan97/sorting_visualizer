let array = [5,4,1,2]
async function bubbleSort() {
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - 1; j++){
            if(array[j] > array[j+1]){
                await swapping(array,j,j+1)
                console.log(array)
            }
        }
    } //console.log(array)
}

async function swapping(array,i,j) {
    
    let temp = array[i]
    array[i]= array[j]
    array[j] = temp
    await sleep(2000)
    
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}