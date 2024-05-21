# Skladovn avtomat

Projekt vsebuje implementacijo skladovnih avtomatov, ki omogočajo preverjanje pravilnega gnezdenja oklepajev. Skladovni avtomat deluje tako, da preverja, ali se oklepaji pravilno odpirajo in zapirajo ter s tem omogoča karakterizacijo nizov.

![Diagram avtomata](avtomat.pdf)

## Matematična definicija

Skladovni avtomat je definiran kot nabor $(\Sigma, Q, q_0, F, \delta, \Gamma)$, kjer so:

- $\Sigma$ množica simbolov oz. abeceda,
- $Q$ množica stanj,
- $q_0 \in Q$ začetno stanje,
- $F \subseteq Q$ množica sprejemnih stanj,
- $\delta : Q \times \Sigma \times \Gamma \to Q \times \Gamma^*$ prehodna funkcija,
- $\Gamma$ množica simbolov na skladu.


## Navodila za uporabo

Implementacija omogoča preverjanje pravilnega gnezdenja oklepajev. Na voljo je tekstovni vmesnik, ki ga prevedemo z ukazom `dune build`, in se ustvari datoteka `tekstovniVmesnik.exe`.

Če OCamla nimate nameščenega, lahko še vedno preizkusite tekstovni vmesnik prek ene od spletnih implementacij OCamla, na primer <http://ocaml.besson.link/>, ki podpira branje s konzole. V tem primeru si na vrh datoteke `tekstovniVmesnik.ml` dodajte še vrstice:

```ocaml
module Avtomat = struct
    (* celotna vsebina datoteke avtomat.ml *)
end
