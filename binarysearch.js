function mergeSort (arr){
    if(arr.length<2){
        return arr;
    }
    const middle = Math.floor(arr.length /2);
    const leftIndex = arr.slice(0,middle);
    const rightIndex = arr.slice(middle);

    return mergeSort(mergeSort(leftIndex),mergeSort(rightIndex));

}
function merge (leftIndex,rightIndex){

}
function merge(leftIndex,rightIndex){
    let b= 0;
    let a= 0;
    const result = [];


    while(b <leftIndex.length && a < rightIndex.length){
        if(leftIndex[x]< rightIndex[y]){
            result.push(leftIndex[x]);
            b++
        }
    }
    return result.concat(leftIndex.slice(b)).concat(rightIndex.slice(b));
}
Function searching(arr,target){
    let leftIndex = 0;
    let rightIndex = arr.length -1;

    while(leftIndex<= rightIndex ) {
        const middle = Math.floor((leftIndex+rightIndex)/2);


        if(arr[middle]===target){
            return middle;
        }
        else if(arr[middle]<target){
            leftIndex = middle +1;
        }
        else{
            rightIndex = middle  -1;
        }
    }
    return null;
}
let num = [45,12,6,89,2,5];
let target = 6;
const soetedNum = mergeSort(num);
const index1 = searching(sortedNum,target);

console.log(index1);

function mergeSort(arr){
    if(arr .length < 2){
        return arr;
    }
    const inter = Math.floor(arr.length /2);
    const left = arr.slice(0, inter);
    const right = arr.slice(inter);



    return merge(mergeSort(left), mergeSort(right));
}
function merge(left , right) {
    let k = 0;
    let l = 0;
    const result = [];

    while (k < left.length && l<right.length){
        if (left[k]>right[l]){
            result.push(left[k]);
            k++

        }else{
            result.push(right[l]);
            l++;
        }
    }
    return result.concat(left.slice(k)).concat(right.slice(l));

}
let arr = [123,89,5,23,9,56];

const SortedArr2 = mergeSort(arr);
console.log(sortedArr2);




function mergeZ(arr) {
    if(arr.length <2) {
        return arr;

    }
    const mid =Math.floor(arr.length/2);
    const left =arr.slice(0,mid);
    const right = arr.slice(mid);
      
    return mergeZ(mergeSort)
}