function InverterArray(array)
{
    let novoArray = [];
    
    for(let i = array.length - 1; i >= 0; i--)
    {
        novoArray.push(array[i]);
    }    

    return novoArray;
}

module.exports = InverterArray;