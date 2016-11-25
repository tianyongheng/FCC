function convert(num) {
	var basicArr =[["","I","II","III","IV","V","VI","VII","VIII","IX"],
            	  ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
            	  ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
            	  ["","M","MM","MMM"]];
	var Thusounds = parseInt(num/1000);
		num = num-Thusounds*1000;
	var Hundreds = parseInt(num/100);
		num = num-Hundreds*100;
	var Tens = parseInt(num/10);
		Ones = num-Tens*10;
	Tones = basicArr[0][Ones];
	Ttens = basicArr[1][Tens];
	Thundreds=basicArr[2][Hundreds];
	Tthusounds=basicArr[3][Thusounds];
	str = Tthusounds+Thundreds+Ttens+Tones;
 return str;
}

convert(36);