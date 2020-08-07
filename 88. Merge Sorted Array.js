/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
*/
/*
nums1 = [1,2,3,9,0,0,0,0]
nums2 = [2,3,6,8,]

Procedure:
Using Sort(): Add nums2 to nums1 by replacing the ending 0s, then sort array
Using inplace replacement:
  -Use 3 pointers, 2 points at the end of the 2 arrays, one points to the correctly sorted insert position
  -Ignore trailing 0s within nums1
  -compare last elements of nums2 and nums1, then insert
*/
var merge = function(nums1, m, nums2, n) {
    let idx1 = m-1, idx2 = n-1, idx3 = m+n-1;
    let a = 3;
    while (idx2 >= 0 && a>=0) {
        if (nums1[idx1] > nums2[idx2]) {
            nums1[idx3--] = nums1[idx1--];
            
        } else {
            nums1[idx3--] = nums2[idx2--];//idx2 minus 1, and return its original value, since nums1[-1]==false, while loop enters here
            console.log(2)
        }
        a--;
    }
    
    console.log(idx1,idx2,idx3,a)
};
