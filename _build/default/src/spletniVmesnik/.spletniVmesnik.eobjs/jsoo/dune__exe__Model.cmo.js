// Generated by js_of_ocaml
//# buildInfo:effects=false, kind=cmo, use-js-string=true, version=5.4.0

//# unitInfo: Provides: Dune__exe__Model
//# unitInfo: Requires: Definicije__Avtomat, Definicije__Trak, Definicije__ZagnaniAvtomat, Dune__exe__Vektor, Stdlib__List
(function
  (globalThis){
   "use strict";
   var runtime = globalThis.jsoo_runtime;
   function caml_call1(f, a0){
    return (f.l >= 0 ? f.l : f.l = f.length) == 1
            ? f(a0)
            : runtime.caml_call_gen(f, [a0]);
   }
   function caml_call2(f, a0, a1){
    return (f.l >= 0 ? f.l : f.l = f.length) == 2
            ? f(a0, a1)
            : runtime.caml_call_gen(f, [a0, a1]);
   }
   function caml_call3(f, a0, a1, a2){
    return (f.l >= 0 ? f.l : f.l = f.length) == 3
            ? f(a0, a1, a2)
            : runtime.caml_call_gen(f, [a0, a1, a2]);
   }
   var
    global_data = runtime.caml_get_global_data(),
    Definicije_ZagnaniAvtomat = global_data.Definicije__ZagnaniAvtomat,
    Stdlib_List = global_data.Stdlib__List,
    Definicije_Trak = global_data.Definicije__Trak,
    Definicije_Avtomat = global_data.Definicije__Avtomat,
    Dune_exe_Vektor = global_data.Dune__exe__Vektor;
   function init(sirina, visina, avtomat){
    var
     _h_ = caml_call1(Definicije_Avtomat[7], avtomat),
     _i_ = caml_call1(Stdlib_List[1], _h_),
     _j_ = caml_call3(Dune_exe_Vektor[8], _i_, sirina, visina),
     _k_ = caml_call1(Definicije_Avtomat[7], avtomat),
     polozaji = caml_call1(caml_call1(Stdlib_List[55], _k_), _j_);
    return [0,
            caml_call2
             (Definicije_ZagnaniAvtomat[1], avtomat, Definicije_Trak[1]),
            polozaji,
            0,
            sirina,
            visina];
   }
   function polozaj_stanja(model, q){
    return caml_call2(Stdlib_List[46], q, model[2]);
   }
   function update(model, param){
    if(typeof param === "number")
     switch(param){
       case 0:
        var match = caml_call1(Definicije_ZagnaniAvtomat[5], model[1]);
        if(! match) return model;
        var avtomat = match[1];
        return [0, avtomat, model[2], model[3], model[4], model[5]];
       case 1:
        return [0, model[1], model[2], 0, model[4], model[5]];
       default: return [0, model[1], model[2], 1, model[4], model[5]];
     }
    switch(param[0]){
      case 0:
       var q = param[1];
       return [0, model[1], model[2], [0, q], model[4], model[5]];
      case 1:
       var position = param[1], match$0 = model[3];
       if(typeof match$0 === "number") return model;
       var
        q$0 = match$0[1],
        _a_ = model[2],
        _b_ =
          function(param){
           var
            position$0 = param[2],
            q = param[1],
            position$1 = runtime.caml_equal(q$0, q) ? position : position$0;
           return [0, q, position$1];
          },
        polozaji = caml_call2(Stdlib_List[19], _b_, _a_);
       return [0, model[1], polozaji, model[3], model[4], model[5]];
      default:
       var
        vneseni_niz = param[1],
        _c_ = model[5],
        _d_ = model[4],
        _e_ = model[2],
        _f_ = caml_call1(Definicije_Trak[5], vneseni_niz),
        _g_ = caml_call1(Definicije_ZagnaniAvtomat[2], model[1]);
       return [0,
               caml_call2(Definicije_ZagnaniAvtomat[1], _g_, _f_),
               _e_,
               0,
               _d_,
               _c_];
    }
   }
   var Dune_exe_Model = [0, init, polozaj_stanja, update];
   runtime.caml_register_global(5, Dune_exe_Model, "Dune__exe__Model");
   return;
  }
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIuc3BsZXRuaVZtZXNuaWsuZW9ianMvanNvby9kdW5lX19leGVfX01vZGVsLmNtby5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6WyJpbml0Iiwic2lyaW5hIiwidmlzaW5hIiwiYXZ0b21hdCIsInBvbG96YWppIiwicG9sb3phal9zdGFuamEiLCJtb2RlbCIsInEiLCJ1cGRhdGUiLCJwb3NpdGlvbiIsInEkMCIsInBvc2l0aW9uJDAiLCJwb3NpdGlvbiQxIiwidm5lc2VuaV9uaXoiXSwic291cmNlcyI6WyIvd29ya3NwYWNlX3Jvb3Qvc3JjL3NwbGV0bmlWbWVzbmlrL21vZGVsLm1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Rzs7Ozs7Rzs7Ozs7Rzs7Ozs7Ozs7Ozs7O1lBWUlBLEtBQUtDLFFBQU9DLFFBQU9DO0lBQ3JCO0tBRWlCLE1BQUEsa0NBSElBO0tBR2pCLE1BQUE7S0FERixNQUFBLG9DQUZLRixRQUFPQztLQUtJLE1BQUEsa0NBTEdDO0tBQ2pCQyxXQUNGLFdBR0c7SUFFTDtZQUNZOzRDQVJTRDtZQUNqQkM7O1lBREdIO1lBQU9DO0dBYWI7WUFVQ0csZUFBZUMsT0FBTUM7SUFBSSxtQ0FBSkEsR0FBTkQ7R0FBcUM7WUFFcERFLE9BQU9GO0k7OztRQUVDLFlBQUEseUNBRkRBO29CQUdLLE9BSExBO1lBSUVIO1FBQVksV0FBWkEsU0FKRkcsVUFBQUEsVUFBQUEsVUFBQUE7O1FBaUJpQixXQWpCakJBLFVBQUFBLGFBQUFBLFVBQUFBO2dCQWtCVSxXQWxCVkEsVUFBQUEsYUFBQUEsVUFBQUE7Ozs7V0FLYUM7T0FBSyxXQUxsQkQsVUFBQUEsY0FLYUMsSUFMYkQsVUFBQUE7O09BTXNCLElBQVpHLHFCQUFZLFVBTnRCSDt1Q0FnQkUsT0FoQkZBO09BU0Q7UUFEaUJJO1FBQ2pCLE1BVENKOzs7V0FXRztZQUFVSztZQUFKSjtZQUxDSyxhQU1HLG1CQUpHRixLQUdQSCxLQUxDRSxXQUtHRTtXQUNSLFdBRElKLEdBTENLO1VBTXdDO1FBSC9DUixXQUNGO09BS0YsV0FmQ0UsVUFTR0YsVUFUSEUsVUFBQUEsVUFBQUE7O09BeUJDO1FBTkNPO2NBbkJGUDtjQUFBQTtjQUFBQTtRQXlCQyxNQUFBLCtCQU5DTztRQUtELE1BQUEseUNBeEJEUDtPQW9CTDtlQUdJOzs7Ozs7OzRCQWhETk4sTUF1QkFLLGdCQUVBRzs7O0UiLCJzb3VyY2VzQ29udGVudCI6WyJvcGVuIERlZmluaWNpamVcclxuXHJcbnR5cGUgbmFjaW4gPSBQcml2emV0TmFjaW4gfCBWbmFzYW5qZU5pemEgfCBQcmVtaWthbmplVm96bGlzY2Egb2YgU3RhbmplLnRcclxuXHJcbnR5cGUgbW9kZWwgPSB7XHJcbiAgYXZ0b21hdCA6IFphZ25hbmlBdnRvbWF0LnQ7XHJcbiAgcG9sb3phamkgOiAoU3RhbmplLnQgKiBWZWt0b3IudCkgbGlzdDtcclxuICBuYWNpbiA6IG5hY2luO1xyXG4gIHNpcmluYSA6IGZsb2F0O1xyXG4gIHZpc2luYSA6IGZsb2F0O1xyXG59XHJcblxyXG5sZXQgaW5pdCBzaXJpbmEgdmlzaW5hIGF2dG9tYXQgPVxyXG4gIGxldCBwb2xvemFqaSA9XHJcbiAgICBWZWt0b3Iua29yZW5pX2Vub3RlXHJcbiAgICAgIChMaXN0Lmxlbmd0aCAoQXZ0b21hdC5zZXpuYW1fc3RhbmogYXZ0b21hdCkpXHJcbiAgICAgIHNpcmluYSB2aXNpbmFcclxuICAgIHw+IExpc3QuY29tYmluZSAoQXZ0b21hdC5zZXpuYW1fc3RhbmogYXZ0b21hdClcclxuICBpblxyXG4gIHtcclxuICAgIGF2dG9tYXQgPSBaYWduYW5pQXZ0b21hdC5wb3plbmkgYXZ0b21hdCBUcmFrLnByYXplbjtcclxuICAgIHBvbG96YWppO1xyXG4gICAgbmFjaW4gPSBQcml2emV0TmFjaW47XHJcbiAgICBzaXJpbmE7XHJcbiAgICB2aXNpbmE7XHJcbiAgfVxyXG5cclxudHlwZSBtc2cgPVxyXG4gIHwgUHJlYmVyaU5hc2xlZG5qaVpuYWtcclxuICB8IFphY25pUHJlbWlrVm96bGlzY2Egb2YgU3RhbmplLnRcclxuICB8IFByZW1ha25pVm96bGlzY2Ugb2YgVmVrdG9yLnRcclxuICB8IEtvbmNhalByZW1pa1Zvemxpc2NhXHJcbiAgfCBaYWNuaVZub3NOaXphXHJcbiAgfCBWbmVzaU5peiBvZiBzdHJpbmdcclxuXHJcbmxldCBwb2xvemFqX3N0YW5qYSBtb2RlbCBxID0gTGlzdC5hc3NvYyBxIG1vZGVsLnBvbG96YWppXHJcblxyXG5sZXQgdXBkYXRlIG1vZGVsID0gZnVuY3Rpb25cclxuICB8IFByZWJlcmlOYXNsZWRuamlabmFrIC0+IChcclxuICAgICAgbWF0Y2ggWmFnbmFuaUF2dG9tYXQua29yYWtfbmFwcmVqIG1vZGVsLmF2dG9tYXQgd2l0aFxyXG4gICAgICB8IE5vbmUgLT4gbW9kZWxcclxuICAgICAgfCBTb21lIGF2dG9tYXQnIC0+IHsgbW9kZWwgd2l0aCBhdnRvbWF0ID0gYXZ0b21hdCcgfSlcclxuICB8IFphY25pUHJlbWlrVm96bGlzY2EgcSAtPiB7IG1vZGVsIHdpdGggbmFjaW4gPSBQcmVtaWthbmplVm96bGlzY2EgcSB9XHJcbiAgfCBQcmVtYWtuaVZvemxpc2NlIHBvc2l0aW9uIC0+IChcclxuICAgICAgbWF0Y2ggbW9kZWwubmFjaW4gd2l0aFxyXG4gICAgICB8IFByZW1pa2FuamVWb3psaXNjYSBxIC0+XHJcbiAgICAgICAgICBsZXQgcG9sb3phamkgPVxyXG4gICAgICAgICAgICBMaXN0Lm1hcFxyXG4gICAgICAgICAgICAgIChmdW4gKHEnLCBwb3NpdGlvbicpIC0+XHJcbiAgICAgICAgICAgICAgICAocScsIGlmIHEgPSBxJyB0aGVuIHBvc2l0aW9uIGVsc2UgcG9zaXRpb24nKSlcclxuICAgICAgICAgICAgICBtb2RlbC5wb2xvemFqaVxyXG4gICAgICAgICAgaW5cclxuICAgICAgICAgIHsgbW9kZWwgd2l0aCBwb2xvemFqaSB9XHJcbiAgICAgIHwgXyAtPiBtb2RlbClcclxuICB8IEtvbmNhalByZW1pa1Zvemxpc2NhIC0+IHsgbW9kZWwgd2l0aCBuYWNpbiA9IFByaXZ6ZXROYWNpbiB9XHJcbiAgfCBaYWNuaVZub3NOaXphIC0+IHsgbW9kZWwgd2l0aCBuYWNpbiA9IFZuYXNhbmplTml6YSB9XHJcbiAgfCBWbmVzaU5peiB2bmVzZW5pX25peiAtPlxyXG4gICAgICB7XHJcbiAgICAgICAgbW9kZWwgd2l0aFxyXG4gICAgICAgIGF2dG9tYXQgPVxyXG4gICAgICAgICAgWmFnbmFuaUF2dG9tYXQucG96ZW5pXHJcbiAgICAgICAgICAgIChaYWduYW5pQXZ0b21hdC5hdnRvbWF0IG1vZGVsLmF2dG9tYXQpXHJcbiAgICAgICAgICAgIChUcmFrLml6X25pemEgdm5lc2VuaV9uaXopO1xyXG4gICAgICAgIG5hY2luID0gUHJpdnpldE5hY2luO1xyXG4gICAgICB9XHJcbiJdfQ==