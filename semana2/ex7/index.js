var data_atual = new Date()

var ano = data_atual.getFullYear()

var data_verao_init = new Date(ano, 11, 22)
var data_verao_end = new Date(ano, 02, 21)

var data_out_init = new Date(ano, 02, 22)
var data_out_end = new Date(ano, 05, 21)

var data_inv_init = new Date(ano, 02, 22)
var data_inv_end = new Date(ano, 08, 21)

var data_prim_init = new Date(ano, 08, 22)
var data_prim_end = new Date(ano, 11, 21)

if (data_verao_init <= data_atual 
    && 
    data_verao_end >= data_atual)
    {
        result = 'Verão'

    }
else if (data_out_init <= data_atual 
    && 
    data_out_end >= data_atual)
    {
        result = 'Outono'

    }
else if (data_inv_init <= data_atual 
    && 
    data_inv_end >= data_atual)
    {
        result = 'Inverno'

    }
    else if (data_prim_init <= data_atual 
    && 
    data_prim_end >= data_atual)
    {
        result = 'Primavera'

    }

alert(result)