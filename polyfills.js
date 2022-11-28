//Array.find 
/*
Find function returns the first element in the array that satisfies 
the provided testing function. 
*/
let array = [1,2,3,4,5,6];
Array.prototype.find = null;

if(Array.prototype.find == null){
    Array.prototype.find = function(testingFunction){
        for(let i=0;i<this.length;i++){
            if(testingFunction(this[i]))
                return this[i];
        }
        return undefined;
    }
}

console.log("First matching value: ",array.find(value => value > 4));

//Array.findIndex
/*
FindIndex function return the first element of the array that satisfies 
the provided testing function 
*/
Array.prototype.findIndex = null;

if(Array.prototype.findIndex == null){
    Array.prototype.findIndex = function(testingFunction){
        for(let i=0;i<this.length;i++){
            if(testingFunction(this[i]))
                return i;
        }
        return -1;
    }
}

console.log("Index of the first matching value:",array.findIndex(value => value > 4));