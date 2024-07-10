
function salary(bs,benefits){
    totalTaxbleIncome = bs+benefits;
//calculating payee
    let payee;
    if(totalTaxbleIncome <= 24000){
        payee = 10/100 * totalTaxbleIncome
        console.log('payee:',payee)
    } else if(totalTaxbleIncome > 24000 && totalTaxbleIncome<= 32333){
        payee = 25/100 * totalTaxbleIncome;
        console.log('payee:',payee)
    } else if(totalTaxbleIncome > 32333 && totalTaxbleIncome <= 500000){
        payee = 30/100 * totalTaxbleIncome;
        console.log('payee:',payee);
    } else if (totalTaxbleIncome > 500000 && totalTaxbleIncome <= 800000){
        payee = 32.5/100 * totalTaxbleIncome;
        console.log('payee:',payee)
    } else if(totalTaxbleIncome > 800000){
        payee = 35/100 * totalTaxbleIncome;
        console.log('payee:', payee)
    } else{
        console.log('You are not under any tax bracket')
    }

//NHIF DEDEUCTIONS
    let NHIF;
if(totalTaxbleIncome <= 5999){
    NHIF = 150;
    console.log('Total NHIF Deductions:',NHIF);
} else if(totalTaxbleIncome > 5999 && totalTaxbleIncome <= 7999){
    NHIF = 300;
    console.log('Total NHIF Deductions:',NHIF)
} else if(totalTaxbleIncome > 7999 && totalTaxbleIncome <= 11999){
    NHIF = 400
    console.log('Total NHIF Deductions:',NHIF)
} else if(totalTaxbleIncome > 11999 && totalTaxbleIncome <= 14999){
    NHIF = 500
    console.log('Total NHIF Deductions:',NHIF)
} else if(totalTaxbleIncome > 14999 && totalTaxbleIncome <= 19999){
    NHIF = 600
    console.log('Total NHIF Deductions:',NHIF)
} else if(totalTaxbleIncome > 19999 && totalTaxbleIncome <= 24999){
    NHIF = 750
    console.log('Total NHIF Deductions:',NHIF)
} else if(totalTaxbleIncome > 24999 && totalTaxbleIncome <= 29999){
    NHIF = 850
    console.log('Total NHIF Deductions:',NHIF)
} else if(totalTaxbleIncome > 29999 && totalTaxbleIncome <= 34999){
    NHIF = 900
    console.log('Total NHIF Deductions:',NHIF)
} else if(totalTaxbleIncome > 34999 && totalTaxbleIncome <= 39999){
    NHIF = 950
    console.log('Total NHIF Deductions:',NHIF)
} else if(totalTaxbleIncome > 39999 && totalTaxbleIncome <= 44999){
    NHIF = 1000
    console.log('Total NHIF Deductions:',NHIF)
} else if(totalTaxbleIncome > 44999 && totalTaxbleIncome <= 49999){
    NHIF = 1100
    console.log('Total NHIF Deductions:',NHIF)
} else if(totalTaxbleIncome > 49999 && totalTaxbleIncome <= 59999){
    NHIF = 1200
    console.log('Total NHIF Deductions:',NHIF)
} else if(totalTaxbleIncome > 59999 && totalTaxbleIncome <= 69999){
    NHIF = 1300
    console.log('Total NHIF Deductions:',NHIF)
} else if(totalTaxbleIncome > 69999){
    NHIF = 1400
    console.log('Total NHIF Deductions:',NHIF)
}
//NSSF DEDUCTIONS
    let NSSF;
    NSSF = 6/100 * bs;
    console.log('Total NSSF Deductions:',NSSF)

    //GROSS SALARY
    GS = totalTaxbleIncome;
    console.log('Gross salary:', GS)

    //NET SALARY
    netSalary = GS-NSSF-NHIF
    console.log('Your Net Salary:', netSalary)
};


salary(70000,5000)
