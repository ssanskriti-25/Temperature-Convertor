const calculateTemp= ()=>{
    const numberTemp= document.getElementById('temp').value;
    const tempSelected= document.getElementById('temp_diff');
    const valueTemp= temp_diff.options[tempSelected.selectedIndex].value;


    const celToFah = (cel) =>{
        let f= Math.round((cel*9/5)+32);
        return f;
    }

    const fahToCel = (fah) =>{
        let c= Math.round((fah-32)*5/9);
        return c;
    }
    let result;
    if( valueTemp =='cel'){
        result= celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = ` = ${result} fahrenheit`;
    }
    else{
            result= fahToCel(numberTemp);
            document.getElementById('resultContainer').innerHTML=` = ${result} celcius`;
        }
    }