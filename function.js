var accexample="123456789"
    var pin="";
    var ter;
    var tre;
    var money;
function main(params) {
    
	if(params.type === "activateCard"){
	    return {
	        result: "Please Enter your account number (123456789)"
	    }
	}
	else if(params.type === "accNum"){
	    if(accexample==params.accnum){
	        return {
	            result: "Your card will be activated for that please enter a 6-digit pin"
	        }
	    }
	    else{
	        return {
	            result: "No such account present. Entering current account. Enter a 6-digit pin"
	        }
	    }
	}
	else if(params.type === "pin"){
	    pin=params.pin
	    return {
	        result: "Confirm your pin to set it and activate your card"
	    }
	}
	else if(params.type=== "confirmPin"){
	    if(params.cpin==pin){
	        return {
	            result: "Pin confirmed. Card activated"
	        }
	    }
	    else {
	        return {
	            result: "Pins do not match. Previous pin confirmed as default"
	        }
	    }
	}
	else if(params.type==="cancelCard"){
	    return {
	        result: "Enter your account number (123456789)"
	    }
	}
	else if(params.type==="accnum1"){
	    if(params.accnum1==accexample){
	        return {
	            result: "Please enter your 6-digit pin"
	        }
	    }
	    else {
	        return {
	            result: "No such account. Entering current account. Enter your 6-digit pin"
	        }
	    }
	}
	else if(params.type==="pin1"){
	    if(params.pin1==pin){
	        return{
	            result:"Card Deactivated"
	        }
	    }
	    else{
	        return {
	            result:"Wrong pin"
	        }
	    }
	}
	else if(params.type==="checkbookrequest"){
	    return {
	        result:"Enter your account number"
	    }
	}
	else if(params.type==="checkbookacnum"){
	    return {
	        result: "Checkbook request stored for account:- "+params.acnum
	    }
	}
	else if(params.type==="transfer"){
	    return {
	        result: "Enter your account number"
	    }
	}
	else if(params.type==="teraccount"){
	    ter=params.teraccount;
	    return {
	        result:"Enter receivers account number"
	    }
	}
	else if(params.type==="treaccount"){
	    tre=params.treaccount;
	    return {
	        result:"Enter the ammount to transfer"
	    }
	}
	else if(params.type==="tmoney"){
	    return {
	        result: params.tmoney+" transfered to "+tre+" from "+ter
	    }
	}
}
