/* 
    # accept three arguments(arr, startingIndex, endEndex)
    # Select the first element as the pivot
    # Store the index of the pivot on a new variable(pivotIndex)
    # Loop through each array element from start to end
                # if there is un elemnt less than the pivot, 
                   Increment the pivot index and swap the element with the element at the pivot index;
    # swap the pivotElement with the element at the pivot index;
    #return the pivot index;
*/

function quickSortHelper(arr, start, end){
    var pivotIndex = start;
    var pivot = arr[start]
  
    for(let i = start; i<=end; i++){
        if(arr[i]<pivot){
            pivotIndex++;
            [arr[i],arr[pivotIndex]] = [arr[pivotIndex],arr[i]]
        }
    }
   [arr[start],arr[pivotIndex]] = [arr[pivotIndex],arr[start]];
   return pivotIndex;
}
myArray= [12,3,56,32,14,23,5,43,9];
// console.log(quickSortHelper(myArray,0,myArray.length));
// console.log(myArray);

function quickSort(arr, left =0, right = arr.length-1){
    if(left <right){
        var pivotIndex = quickSortHelper(arr,left,right);
        quickSort(arr,left,pivotIndex-1);
        quickSort(arr, pivotIndex+1, right)
    }
    
 return arr;
}
 console.log(quickSort(myArray));
/* 
    [12,3,56,32,14,23,5,43,9]
     [9, 3, 5] [12]  14, 23, 56, 43, 32]



*/


/* 
    # has a space complaxity of O(logn) Since the smallest sub-array is always 
        less than half the size of the entire array, 
        the recursive call stack then becomes a guaranteed 𝑂(log𝑛).
    # Average time Complexity of O(nlogn) since there are O(n) comparisen for each sub array
      and O(logn) decomposition
    # Worst case time Complexity of O(n^2) if the array is ordered array
*/