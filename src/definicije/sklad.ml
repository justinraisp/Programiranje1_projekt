type 'a t = 'a list

let prazen_sklad = []
let je_prazen sklad = match sklad with [] -> true | _ :: _ -> false
let dodaj element sklad = element :: sklad

let odstrani sklad =
  match sklad with [] -> failwith "Sklad je prazen" | _ :: xs -> xs

let vrh sklad =
  match sklad with [] -> failwith "Sklad je prazen" | x :: _ -> x

let vsebuje sklad = sklad
