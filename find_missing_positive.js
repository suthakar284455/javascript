var array = [-4,-4,-100,-1,-1000,-99,10,-50,999,4,4,2,2,0]

var temp = array.filter((item) =>{
    return item>=0
})

Array.prototype.sort =  function(){
    for(var i=0;i<this.length;i++){
        for(var j=(i+1);j<=this.length;j++){
            if(this[i]>this[j]){
                let temp = this[j];
                this[j] = this[i];
                this[i] = temp;
            }
        }
    }
}

Array.prototype.removeDuplicate = function(){
    var previous = this[0];
    var array = [];
    array.push(previous);
    for(var i=1;i<this.length;i++){
        if(previous != this[i]){
            array.push(this[i]);
            previous = this[i];
        }
    }
    temp = array;
}

Array.prototype.findMissingPositive = function(){
    let missing = 0;
    for(let i=0; i<this.length;i++){
        if(missing != this[i]){
            break;
            return missing;
        }
        missing++;
    }

    return missing;
}

temp.sort()
temp.removeDuplicate();
let missing_number = temp.findMissingPositive();

console.log(missing_number)