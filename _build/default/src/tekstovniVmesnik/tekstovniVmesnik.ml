open Definicije
open Avtomat

type stanje_vmesnika =
  | SeznamMoznosti
  | IzpisAvtomata
  | BranjeNiza
  | RezultatPrebranegaNiza
  | OpozoriloONapacnemNizu

type model = {
  avtomat : t;
  stanje_avtomata : Stanje.t;
  stanje_vmesnika : stanje_vmesnika;
  stanje_sklada : char Sklad.t;
}

type msg = PreberiNiz of string | ZamenjajVmesnik of stanje_vmesnika

let preberi_niz avtomat zacetek sklad niz =
  let zacetno_stanje = zacetek in
  let zacetni_sklad = sklad in
  (* Aux funkcija za obdelavo vhodnega niza *)
  let rec aux trenutno_stanje trenutni_sklad index =
    if index < String.length niz then
      let znak = String.get niz index in
      match Avtomat.prehodna_funkcija avtomat trenutni_sklad trenutno_stanje znak with
      | None -> None (* Napaka v prehodu *)
      | Some (nov_stanje, nov_sklad) ->
          aux nov_stanje nov_sklad (index + 1) (* Nadaljuj z naslednjim znakom *)
    else
      (* Po branju celotnega niza preverimo, ali je avtomat v sprejemnem stanju *)
      if je_sprejemno_stanje avtomat trenutno_stanje then
        Some trenutno_stanje (* Niz je bil sprejet *)
      else
        None (* Niz ni bil sprejet, ker avtomat ni v sprejemnem stanju *)
  in
  aux zacetno_stanje zacetni_sklad 0 

let update model = function
  | PreberiNiz str -> (
      match preberi_niz model.avtomat model.stanje_avtomata model.stanje_sklada str with
      | None -> { model with stanje_vmesnika = OpozoriloONapacnemNizu }
      | Some stanje_avtomata ->
          {
            model with
            stanje_avtomata;
            stanje_vmesnika = RezultatPrebranegaNiza;
          })
  | ZamenjajVmesnik stanje_vmesnika -> { model with stanje_vmesnika }

let rec izpisi_moznosti () =
  print_endline "1) izpiši avtomat";
  print_endline "2) preberi niz";
  print_string "> ";
  match read_line () with
  | "1" -> ZamenjajVmesnik IzpisAvtomata
  | "2" -> ZamenjajVmesnik BranjeNiza
  | _ ->
      print_endline "** VNESI 1 ALI 2 **";
      izpisi_moznosti ()

let izpisi_avtomat avtomat =
  let izpisi_stanje stanje =
    let prikaz = Stanje.v_niz stanje in
    let prikaz =
      if stanje = zacetno_stanje avtomat then "-> " ^ prikaz else prikaz
    in
    let prikaz =
      if je_sprejemno_stanje avtomat stanje then prikaz ^ " +" else prikaz
    in
    print_endline prikaz
  in
  List.iter izpisi_stanje (List.rev (seznam_stanj avtomat))

let beri_niz _model =
  print_string "Vnesi niz > ";
  let str = read_line () in
  PreberiNiz str

let izpisi_rezultat model =
  if je_sprejemno_stanje model.avtomat model.stanje_avtomata then
    print_endline "Niz je bil sprejet"
  else print_endline "Niz ni bil sprejet"

let view model =
  match model.stanje_vmesnika with
  | SeznamMoznosti -> izpisi_moznosti ()
  | IzpisAvtomata ->
      izpisi_avtomat model.avtomat;
      ZamenjajVmesnik SeznamMoznosti
  | BranjeNiza -> beri_niz model
  | RezultatPrebranegaNiza ->
      izpisi_rezultat model;
      ZamenjajVmesnik SeznamMoznosti
  | OpozoriloONapacnemNizu ->
      print_endline "Niz ni veljaven";
      ZamenjajVmesnik SeznamMoznosti

let init avtomat =
  {
    avtomat;
    stanje_avtomata = zacetno_stanje avtomat;
    stanje_vmesnika = SeznamMoznosti;
    stanje_sklada = Sklad.prazen_sklad;
  }

  let rec loop model =
  match model.stanje_vmesnika with
  | SeznamMoznosti ->
    let msg = izpisi_moznosti () in
    let model' = update model msg in
    loop model'
  | _ ->
    let msg = view model in
    let model' = update model msg in
    loop model'

let _ = loop(init oklepaji)