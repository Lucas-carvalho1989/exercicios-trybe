n = 5

for(indexLinha = 1; indexLinha <= n; indexLinha += 1){

 let linhaAsterisco = "";

 for (indexColum = 1; indexColum <= n; indexColum +=1){

    if(indexColum <= (n - indexLinha))
    {
        linhaAsterisco += " "
    }
    else {
        linhaAsterisco += "*"
    }

 };
 console.log(linhaAsterisco);
};