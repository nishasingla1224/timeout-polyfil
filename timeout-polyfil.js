function asynchronise() {return new Promise((resolve) => {resolve("resolved");})}

function myTimeOut(cb,delay){
	asynchronise().then(()=>{
	let delayedTime = new Date().getTime() + delay ;
	while(delayedTime > new Date().getTime()){
		continue;
	} 
    cb();
  });
}
myTimeOut(() =>{console.log("I am async")},5000);
