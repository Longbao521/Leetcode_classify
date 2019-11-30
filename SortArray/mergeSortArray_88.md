# 88.合并两个有序数组
>>给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
说明:
初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
示例:
输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3
输出: [1,2,2,3,5,6]
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

***有效信息***
1.两个有序数组,且限定大小为m和n，并不是全部
2.nums2合并到nums1,变为一个有序数组，且nums有足够的大小（大于m+n)

***思路***
1.采用插入排序，将nums2中每个元素都插入到nums1中，核心是插入排序函数
2.根据这道题，又能联想到归并排序，只是归并排序是创建一个新的数组，而非在原数组上操作。下面就是归并排序的具体代码
```javascript
function mergeSort(nums1,nums2){
   var result=[];
   while(nums1.length||nums2.length){
       if(!nums1.length){
           result.push(nums2.shift());//shift()会更改原数组，unshift(...arg)用来将元素添加到开头
           continue;
       }
       if(!nums2.length){
           result.push(nums1.shift());
           continue;
       }
       result.push(nums1[0]>nums2[0] ? nums2.shift():nums1.shift());
   }
   while(nums1.length){
       result.push(nums1.shift());
   }
   while(nums2.length){
       result.push(nums2.shift());
   }
   return result;
}
```

3.由于nums1后面预留了位置，所以我们可以设置一个指针resPointer指向m+n-1的位置，这是第一个元素要插入的位置
4.那这个位置应该放哪个元素？应该为nums1与nums2的最大值，显然就是Math.max(nums1[nums1.length-1],nums2[nums2.length-1];
5.由上可得，我们应该从后往前遍历两个数组，选取最大值，放在resPointer的位置


```javascript
var merge=function(nums1,m,nums2,n){
    var resPointer=m+n-1;
    while(resPointer>=0){
        if(n===0) return;//nums2为空数组
        if(m<1){//当nums1已经遍历完
            nums1[resPoniter--]=nums2[--n];
            continue;
        }
        if(n<1){
            nums1[resPointer--]=nums1[--m];
            continue;
        }
        nums1[resPointer--]=nums1[m-1]>nums2[n-1] ? nums1[--m]:nums2[--n];
    }
}
```

