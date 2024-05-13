type stanje = Stanje.t
type 'a sklad = 'a Sklad.t

type t = {
  stanja : stanje list;
  zacetno_stanje : stanje;
  sprejemna_stanja : stanje list;
  prehodi : (stanje * char * stanje) list;
  sklad : char sklad;
}

let prazen_avtomat zacetno_stanje =
  {
    stanja = [ zacetno_stanje ];
    zacetno_stanje;
    sprejemna_stanja = [];
    prehodi = [];
    sklad = Sklad.prazen_sklad;
  }

let dodaj_nesprejemno_stanje stanje avtomat =
  { avtomat with stanja = stanje :: avtomat.stanja }

let dodaj_sprejemno_stanje stanje avtomat =
  {
    avtomat with
    stanja = stanje :: avtomat.stanja;
    sprejemna_stanja = stanje :: avtomat.sprejemna_stanja;
  }

let dodaj_prehod stanje1 znak stanje2 avtomat =
  { avtomat with prehodi = (stanje1, znak, stanje2) :: avtomat.prehodi }

let prehodna_funkcija avtomat sklad stanje znak =
  match List.find_opt
          (fun (stanje1, znak', _stanje2) -> stanje1 = stanje && znak = znak')
          avtomat.prehodi with
  | None -> 
      Printf.printf "Napaka: Ni ustreznega prehoda za stanje %s in znak %c\n" (Stanje.v_niz stanje) znak;
      None
  | Some (_, _, stanje2) ->
    begin 
      match znak with
      | '(' -> 
          Printf.printf "Prehod: %s -> %s (Push %c)\n" (Stanje.v_niz stanje) (Stanje.v_niz stanje2) znak;
          Some (stanje2, Sklad.dodaj '(' sklad)
      | ')' -> 
          Printf.printf "Prehod: %s -> %s (Pop %c)\n" (Stanje.v_niz stanje) (Stanje.v_niz stanje2) znak;
          if Sklad.je_prazen sklad then 
            None
          else 
            Some (if Sklad.je_prazen (Sklad.odstrani sklad) then (Stanje.iz_niza "q2", Sklad.odstrani sklad) else (Stanje.iz_niza "q1", Sklad.odstrani sklad))
      | _ ->  
          Printf.printf "Prehod: %s -> %s (Noben učinek za znak %c)\n" (Stanje.v_niz stanje) (Stanje.v_niz stanje2) znak;
          None
    end

    
let zacetno_stanje avtomat = avtomat.zacetno_stanje
let seznam_stanj avtomat = avtomat.stanja
let seznam_prehodov avtomat = avtomat.prehodi

let je_sprejemno_stanje avtomat stanje =
  List.mem stanje avtomat.sprejemna_stanja

let oklepaji = 
  let q0 = Stanje.iz_niza "q0"
  and q1 = Stanje.iz_niza "q1"
  and q2 = Stanje.iz_niza "q2" in
  prazen_avtomat q0 |> dodaj_sprejemno_stanje q2
  |> dodaj_nesprejemno_stanje q1
  |> dodaj_prehod q0 '(' q1 |> dodaj_prehod q1 '(' q1
  |> dodaj_prehod q1 ')' q1 |> dodaj_prehod q1 ')' q2
  |> dodaj_prehod q2 '(' q1 