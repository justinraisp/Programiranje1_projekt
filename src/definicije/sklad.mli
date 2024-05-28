type 'a t

val prazen_sklad : 'a t
val je_prazen : 'a t -> bool
val dodaj : 'a -> 'a t -> 'a t
val odstrani : 'a t -> 'a t
val vrh : 'a t -> 'a
val vsebuje : 'a t -> 'a list
