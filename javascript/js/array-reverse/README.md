# Array-reverse

## Problem Domain

write a function that accepts an array as input and outputs a reversed array, without utilizing any built-in methods
   * inputs: array
   * outputs: reversed array

## Algorithem

1. Initialize an empty list called `reversed_arr` to store the reversed elements.
2. Iterate over the input array from the last index to the first index.
3. Inside the loop, access the element at index **i** from the input array.
4. Append the accessed element to the `reversed_arr`.
   5 .After the loop completes, `reversed_arr` will contain the elements of the input array in reversed order.
5. Return `reversed_arr` as the output.

```javascript

pseudo code

function reverseArray(arr):
    reversed_arr = empty list

    for i from length(arr) - 1 to 0:
        element = arr[i]
        append element to reversed_arr

    return reversed_arr


```


