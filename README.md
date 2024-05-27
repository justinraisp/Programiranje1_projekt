# Skladovni avtomat

Projekt vsebuje implementacijo skladovnega avtomata, ki omogoča preverjanje pravilnega gnezdenja oklepajev. Skladovni avtomat deluje tako, da ob vsaki pojavitvi oklepaja, bodisi navadnega, zavitega ali oglatega, ta oklepaj naloži na vrh sklada. Ob vsaki pojavitvi zaklepaja pa odstrani vrhnji oklepaj. V primeru, da se viden zaklepaj in vrhnji oklepaj na skladu ne ujemata, se bo avtomat premaknil v nesprejemno stanje, kjer bo tudi ostal. V primeru, da pridemo do konca niza brez napak, pa avtomat glede na sklad niz bodisi zavrne, če je sklad poln, bodisi sprejme, če je sklad prazen. Avtomat sprejema le nize sestavljene iz oklepajev ter zaklepajev.

![Diagram avtomata](diagram/avtomat.png "Diagram avtomata za navadne oklepaje")

## Matematična definicija

Skladovni avtomat je definiran kot nabor $(\Sigma, Q, q_0, F, \delta, \Gamma)$, kjer so:

- $\Sigma$ množica simbolov oz. abeceda,
- $Q$ množica stanj,
- $q_0 \in Q$ začetno stanje,
- $F \subseteq Q$ množica sprejemnih stanj,
- $\delta : Q \times \Sigma \times \Gamma \to Q \times \Gamma^*$ prehodna funkcija,
- $\Gamma$ množica simbolov na skladu.

## Opis uporabljenih tipov in glavnih funkcij

### Tipi

- `type t = { avtomat : Avtomat.t; trak : Trak.t; stanje : Stanje.t; sklad : char Sklad.t }`
  - Glavni tip, ki predstavlja stanje skladovnega avtomata.
- `type 'a t = 'a list`
  - Tip, ki predstavlja sklad kot seznam elementov.

### Funkcije

#### V datoteki `ZagnaniAvtomat.ml`:

- `let pozeni avtomat trak = ...`
  - Inicializira skladovni avtomat z danim trakom.
- `let korak_naprej { avtomat; trak; stanje; sklad } = ...`
  - Izvede en korak avtomata glede na trenutni znak na traku.
- `let je_v_sprejemnem_stanju { avtomat; stanje; _ } = ...`
  - Preveri, ali je avtomat v sprejemnem stanju.
- `let sklad { sklad; _ } = sklad`
  - Vrne trenutni sklad avtomata.

#### V datoteki `Sklad.ml`:

- `let prazen_sklad = []`
  - Ustvari prazen sklad.
- `let dodaj x sklad = x :: sklad`
  - Doda element na vrh sklada.
- `let odstrani = function | [] -> [] | _ :: xs -> xs`
  - Odstrani vrhnji element s sklada.
- `let vrh = function | [] -> None | x :: _ -> Some x`
  - Vrne vrhnji element sklada.
- `let je_prazen = function | [] -> true | _ -> false`
  - Preveri, ali je sklad prazen.
- `let vsebuje sklad = sklad`
  - Vrne seznam vseh elementov v skladu.

#### V datoteki `Avtomat.ml`:
- `let prehodna_funkcija avtomat sklad stanje znak` 
    - povezuje druge datoteke skupaj in implementira delovanje avtomata. Funkcija preverja skladnost oklepajev in zaklepajev, vsebino sklada in na podlagi tega izvaja prehode med stanji.


```ocaml
let prehodna_funkcija avtomat sklad stanje znak =
  match List.find_opt
          (fun (stanje1, znak', _stanje2) -> stanje1 = stanje && znak = znak')
          avtomat.prehodi with
  | None -> 
      None
  | Some (_, _, stanje2) ->
    begin 
      match znak with
      | '(' | '{' | '[' -> 
        Some (stanje2, Sklad.dodaj znak sklad)
      | ')' | '}' | ']' -> 
          if Sklad.je_prazen sklad || Stanje.v_niz stanje = "q3" || Sklad.vrh sklad != ustrezni_odprti_oklepaj znak then 
            Some(Stanje.iz_niza "q3", sklad)
          else 
            Some (if Sklad.je_prazen (Sklad.odstrani sklad) then (Stanje.iz_niza "q2", Sklad.odstrani sklad) else (Stanje.iz_niza "q1", Sklad.odstrani sklad))
      | _ ->  
          None
    end
```

### Razlike glede na končne avtomate

Skladovni avtomati se razlikujejo od končnih avtomatov predvsem v tem, da imajo poleg stanj in prehodov tudi sklad, ki omogoča shranjevanje in dostopanje do vmesnih simbolov. V tej implementaciji skladovni avtomat uporablja sklad za shranjevanje oklepajev, kar omogoča preverjanje pravilnega gnezdenja oklepajev.

## Navodila za uporabo

Implementacija omogoča preverjanje pravilnega gnezdenja oklepajev. Na voljo sta dva vmesnika, tekstovni in grafični. Oba prevedemo z ukazom `dune build`, ki v korenskem imeniku ustvari datoteko `tekstovniVmesnik.exe`, v imeniku `html` pa JavaScript datoteko `spletniVmesnik.bc.js`, ki se izvede, ko v brskalniku odpremo `spletniVmesnik.html`.

### Tekstovni vmesnik

Če OCamla nimate nameščenega, lahko še vedno preizkusite tekstovni vmesnik prek ene od spletnih implementacij OCamla, na primer <http://ocaml.besson.link/>, ki podpira branje s konzole. V tem primeru si na vrh datoteke `tekstovniVmesnik.ml` dodajte še vrstice:

## Primeri uporabe skladovnega avtomata

### Niz: `()`

| Korak | Znak | Stanje | Sklad |
|-------|------|--------|-------|
| 1     | `(`  | `q1`   | `(`   |
| 2     | `)`  | `q2`   | ``    |
|       |      | **Sprejemno stanje:** `q2` | Niz je pravilno gnezden. |

### Niz: `((({[]})))`

| Korak | Znak | Stanje | Sklad           |
|-------|------|--------|-----------------|
| 1     | `(`  | `q1`   | `(`             |
| 2     | `(`  | `q1`   | `((`            |
| 3     | `(`  | `q1`   | `(((`           |
| 4     | `{`  | `q1`   | `{(((`          |
| 5     | `[`  | `q1`   | `[{(((`         |
| 6     | `]`  | `q1`   | `{(((`          |
| 7     | `}`  | `q1`   | `(((`           |
| 8     | `)`  | `q1`   | `((`            |
| 9     | `)`  | `q1`   | `(`             |
| 10    | `)`  | `q2`   | ``              |
|       |      | **Sprejemno stanje:** `q2` | Niz je pravilno gnezden. |

### Niz: `()[]{}`

| Korak | Znak | Stanje | Sklad |
|-------|------|--------|-------|
| 1     | `(`  | `q1`   | `(`   |
| 2     | `)`  | `q2`   | ``    |
| 3     | `[`  | `q1`   | `[`   |
| 4     | `]`  | `q2`   | ``    |
| 5     | `{`  | `q1`   | `{`   |
| 6     | `}`  | `q2`   | ``    |
|       |      | **Sprejemno stanje:** `q2` | Niz je pravilno gnezden. |

### Niz: `())({}`

| Korak | Znak | Stanje | Sklad |
|-------|------|--------|-------|
| 1     | `(`  | `q1`   | `(`   |
| 2     | `)`  | `q2`   | ``    |
| 3     | `)`  | `q3`   | ``    |
| 4     | `(`  | `q3`   | ``    |
| 5     | `{`  | `q3`   | ``    |
| 6     | `}`  | `q3`   | ``    |
|       |      | **Nesprejemno stanje:** `q3` | Niz ni pravilno gnezden. |

### Niz: `)(){}`

| Korak | Znak | Stanje | Sklad |
|-------|------|--------|-------|
| 1     | `)`  | `q3`   | ``    |
| 2     | `(`  | `q3`   | ``    |
| 3     | `)`  | `q3`   | ``    |
| 4     | `{`  | `q3`   | ``    |
| 5     | `}`  | `q3`   | ``    |
|       |      | **Nesprejemno stanje:** `q3` | Niz ni pravilno gnezden. |

### Niz: `((]]`

| Korak | Znak | Stanje | Sklad |
|-------|------|--------|-------|
| 1     | `(`  | `q1`   | `(`   |
| 2     | `(`  | `q1`   | `((`  |
| 3     | `]`  | `q3`   | `((`  |
| 4     | `]`  | `q3`   | `((`  |
|       |      | **Nesprejemno stanje:** `q3` | Niz ni pravilno gnezden. |

### Niz: `(()`

| Korak | Znak | Stanje | Sklad |
|-------|------|--------|-------|
| 1     | `(`  | `q1`   | `(`   |
| 2     | `(`  | `q1`   | `((`  |
| 3     | `)`  | `q1`   | `(`   |
|       |      | **Nesprejemno stanje:** `q1` | Niz ni pravilno gnezden. |