    
//Register plugin :
    $trukture.addPlugin({
     	name: "Goget-from-github",
     	show : function(code){
               console.log(code);
     		return  ( !code.includes("\n") &&  code.includes("github.com")  )
     	},
     	exec : function(code){
     			var formatstring = code.replace('"', '').replace('"', '').replace(/\s/g,'');
     		 	$trukture.exec("go get " + formatstring,function(success, log){
     		 		if (success !== false){
     		 			//	alert(formatstring + " fetched!")
     		 		} else {
     		 			alert("Error running commmand! " + log)
     		 		}
     		 	})
     		   return  code + " //fetched :)";
     	}
     })
