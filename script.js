var operand1 = null;
var operand2=null;
var operator = null;
// var number = null;
var display = document.getElementById('display');
var button = document.getElementsByClassName('btn');

for(var i =0; i<button.length ; i++)
{
	button[i].addEventListener('click',function()
	{
		var value = this.getAttribute('data-value');
		if(value == '+')
		{
			operator = '+';
			operand1 = parseFloat(display.textContent);
			display.innerText = '';
		}

		else if(value == '-')
		{
			operator = '-';
			operand1 = parseFloat(display.textContent);
			display.innerText = '';
		}

		else if(value == '/')
		{
			operator = '/';
			operand1 = parseFloat(display.textContent);
			display.innerText = '';
		}

		else if(value == '*')
		{
			operator = '*';
			operand1 = parseFloat(display.textContent);
			display.innerText = '';
		}

		else if(value == '%')
		{
			operator = '%';
			operand1 =operand1+ parseFloat(display.textContent);
			display.innerText = '';
		}

		else if(value == '=-')
		{
			operand1 = parseFloat(display.textContent);
			display.innerText = '-' + operand1;
		}

		else if(value == 'ac')
		{
			//operand1 = parseFloat(display.textContent);
			display.innerText = '';
			operand1 = null;
			operand2 = null;
		}


		else if(value == '=')
		{


			operand2 = parseFloat(display.textContent);
			// if(operand1==null)
			// {
			// 	display.innerText = 'Error!';
			// 	return;
			// }
			
            if(operator=='%')
			{
				operand1 = operand1/100;
				operator = '*';
			}
			if(operator == '/' && operand2 == '0')
			{
				display.innerText = 'Error!';
				return;
			}

			// if(operand1 == null && operand2 == null)
			// {
			// 	display.innerText = 'Error!';
			// 	return;
			// }

			var result = eval(operand1+ " " + operator + " " + operand2);
			display.innerText = result;
			operand1 = null;
			operand2 = null;
			return;
		}
		else {
			display.innerText += value;
		}
	});
	




}






























// function clicked(num)
// {


//     if(num == '+')
// 	{
// 		operator = '+';
// 		operand1=number;
// 		display.innerText= "";
// 	}

// 	if(num == '-')
// 	{
// 		operator = '-';
// 		operand1=number;
// 	}

// 	if(num == '*')
// 	{
// 		operator = '*';
// 		operand1=number;
// 	}

// 	if(num == '/')
// 	{
// 		operator = '/';
// 		operand1=number;
// 	}

// 	if(num == '%')
// 	{
// 		operator = '%';
// 		operand1=number;
// 	}



    
//      if(num == '=')
// 	{
// 		operand2 = number;
// 		var result = eval(operand1 + " "+ operator + " " + operand2);
// 		display.innerText = result;
// 		console.log(result);
// 	}
	






// 	if(num==1)
// 	{
// 		var one =1;
// 		number = 1;
// 		display.innerText+= one + '';
// 	}

// 	if(num==2)
// 	{
// 		var two =2;
// 		number = 2;
// 		display.innerText+=two+'';
// 	}
// 	if(num==3)
// 	{
// 		var three=3;
// 		number = 3;
// 		display.innerText+= three+'';
// 	}
// 	if(num==4)
// 	{
// 		var four = 4;
// 		number = 4;
// 		display.innerText+= four+'';
// 	}
// 	if(num==5)
// 	{
// 		var five=5;
// 		number = 5;
// 		display.innerText+= five+'';
// 	}
// 	if(num==6)
// 	{
// 		var six=6;
// 		number = 6;
// 		display.innerText+= six+'';
// 	}
// 	if(num==7)
// 	{
// 		var seven=7;
// 		number = 7;
// 		display.innerText+= seven+'';
// 	}
// 	if(num==8)
// 	{
// 		var eight=8;
// 		number = 8;
// 		display.innerText+= eight+'';
// 	}
// 	if(num==9)
// 	{
// 		var nine=9;
// 		number = 9;
// 		display.innerText+= nine+'';
// 	}
// 	if(num==0)
// 	{
// 		var z=0;
// 		number = 0;
// 		display.innerText+= z+'';
// 	}
    
// }


