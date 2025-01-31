function functionName(){
	const name=arguments.callee.name;
	alert(name)
}

functionName();
