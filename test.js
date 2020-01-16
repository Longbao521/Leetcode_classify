var moveZeroes = function(nums) {
    var result=[];
    var count=0;
    for(let elem of nums){
        if(elem){
            result.push(elem);
        }else{
            count++;
        }
    }
    for(let i=0;i<count;i++){
        result.push(0);
    }
    return result;
 };
console.log(moveZeroes([0,1,0,3,12]));