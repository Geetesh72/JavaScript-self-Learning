var c  = 20;
let a = 84;
if(1){
    let a = 4;
    const b  =41
    console.log("INNEER :",a )
    var c = 40

}
console.log(a)
// console.log(b)

// console.log(c)

// if var declare globally it can change the value of local scope be carefull 
function one(){
    const username = "geetesh"

        function two() {
            console.log(username)
        }
}


const addTwo = function(num){
    return num+4

}
console.log(addTwo(85))




