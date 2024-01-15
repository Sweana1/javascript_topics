function washDress(){
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const washDress=true
            if(washDress){
                resolve("you wash dress")
            }
            else{
                reject("you didnt wash dress")
            }

        },1500);
        
    });
}

function cleanRoom(){
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const cleanRoom=true
            if(cleanRoom){
                resolve("you clean room")
            }
            else{
                reject("you didnt clean room")
            }
            
        },1500);
        
        
    })
}

function eatBreakfast(){
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const eatBreakfast=false
            if(eatBreakfast){
                resolve("you eat breakfast")
            }
            else{
                reject("you didnt eat breakfast")
            }
            
        },1500);
        
    })
}

washDress().then(message=>{console.log(message); return cleanRoom()})
           .then(message=>{console.log(message); return eatBreakfast()})
           .then(message=>{console.log(message); return console.log("completed all chores")})
           .catch(error=>{console.log(error)})