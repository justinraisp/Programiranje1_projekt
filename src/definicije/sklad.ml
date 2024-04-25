type 'a t = 'a list

let prazen_sklad = []

let je_prazen sklad = 
  match sklad with 
    | [] -> true
    | x :: _ -> false

let dodaj element sklad = element :: sklad

let odstrani sklad = 
  match sklad with 
    | [] -> failwith "Sklad je prazen"
    | x :: xs -> xs

let vrh sklad = 
  match sklad with 
    | [] -> failwith "Sklad je prazen"
    | x :: xs -> x

