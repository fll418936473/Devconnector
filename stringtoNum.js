function chartoInt(i){
    var res=i*1;
    if(res==NaN){
        throw 'Can not convert!'
    }
    return res;
}

function stringToNum(str){
    var result =[];
    for(var i in str){
     result.push(chartoInt(i));
    }
    result.reverse();
    var finalResult=0;
    for(var j in result){
        finalResult += result[j]*10.power(j);
    }
    return finalResult;
}

