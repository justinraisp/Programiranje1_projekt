type stanje = Stanje.t
type 'a sklad = 'a Sklad.t

type t = {
  stanja : stanje list;
  zacetno_stanje : stanje;
  sprejemna_stanja : stanje list;
  prehodi : (stanje * char * stanje) list;
  sklad : char sklad;
}

val prazen_avtomat : stanje -> t
val dodaj_nesprejemno_stanje : stanje -> t -> t
val dodaj_sprejemno_stanje : stanje -> t -> t
val dodaj_prehod : stanje -> char -> stanje -> t -> t

val prehodna_funkcija :
  t -> char sklad -> stanje -> char -> (stanje * char sklad) option

val zacetno_stanje : t -> stanje
val seznam_stanj : t -> stanje list
val seznam_prehodov : t -> (stanje * char * stanje) list
val je_sprejemno_stanje : t -> stanje -> bool
val oklepaji : t
