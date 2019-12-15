var hammingWeight = function(n) {
    var result=0;
    for(let i=0;i<32;i++){
        if(n&1){
            result++;
        }
        n=n>>>1
    }
    return result;
};
hammingWeight(00000000000000000000000000001011);