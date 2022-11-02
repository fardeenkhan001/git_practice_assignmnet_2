function prime(number){
	let counter = 0;
	for(let i=0;i<=number;i++){
		if(number%i==0){
		counter++;
		}
	}
	if(counter==2){
		return true;
	}
	else{
		return false;
}


let a = prime(33);
console.log(a);