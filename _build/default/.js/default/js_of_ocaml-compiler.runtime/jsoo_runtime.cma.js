// Generated by js_of_ocaml
//# buildInfo:effects=false, kind=cma, use-js-string=true, version=5.4.0

//# unitInfo: Provides: Jsoo_runtime__
(function
  (globalThis){
   "use strict";
   var
    runtime = globalThis.jsoo_runtime,
    Jsoo_runtime = [0],
    Jsoo_runtime$0 = [0, Jsoo_runtime];
   runtime.caml_register_global(0, Jsoo_runtime$0, "Jsoo_runtime__");
   return;
  }
  (globalThis));

//# unitInfo: Provides: Jsoo_runtime__Runtime_version
(function(globalThis){
   "use strict";
   var
    runtime = globalThis.jsoo_runtime,
    s = "5.4.0",
    git_version = "",
    Jsoo_runtime_Runtime_version = [0, s, git_version];
   runtime.caml_register_global
    (2, Jsoo_runtime_Runtime_version, "Jsoo_runtime__Runtime_version");
   return;
  }
  (globalThis));

//# unitInfo: Provides: Jsoo_runtime
//# unitInfo: Requires: Jsoo_runtime__Runtime_version, Stdlib__Callback
(function
  (globalThis){
   "use strict";
   var runtime = globalThis.jsoo_runtime;
   function caml_call2(f, a0, a1){
    return (f.l >= 0 ? f.l : f.l = f.length) == 2
            ? f(a0, a1)
            : runtime.caml_call_gen(f, [a0, a1]);
   }
   var
    global_data = runtime.caml_get_global_data(),
    Jsoo_runtime_Runtime_version = global_data.Jsoo_runtime__Runtime_version,
    Stdlib_Callback = global_data.Stdlib__Callback,
    Js = [0],
    Config = [0],
    version = Jsoo_runtime_Runtime_version[1],
    git_version = Jsoo_runtime_Runtime_version[2],
    Sys = [0, Config, version, git_version],
    Exn = [248, "Jsoo_runtime.Error.Exn", runtime.caml_fresh_oo_id(0)];
   caml_call2(Stdlib_Callback[2], "jsError", [0, Exn, [0]]);
   function raise(exn){throw exn;}
   var
    Error =
      [0,
       raise,
       runtime.caml_exn_with_js_backtrace,
       runtime.caml_js_error_option_of_exception,
       Exn],
    For_compatibility_only = [0],
    Bigstring = [0],
    Typed_array = [0, Bigstring],
    Int64 = [0],
    Jsoo_runtime =
      [0, Js, Sys, Error, For_compatibility_only, Typed_array, Int64];
   runtime.caml_register_global(5, Jsoo_runtime, "Jsoo_runtime");
   return;
  }
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJqc29vX3J1bnRpbWUuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbInZlcnNpb24iLCJnaXRfdmVyc2lvbiIsInJhaXNlIl0sInNvdXJjZXMiOlsiL2hvbWUvb3BhbS8ub3BhbS80LjE0L2xpYi9qc19vZl9vY2FtbC1jb21waWxlci9ydW50aW1lL2pzb29fcnVudGltZV9fLm1sIiwiL2hvbWUvb3BhbS8ub3BhbS80LjE0L2xpYi9qc19vZl9vY2FtbC1jb21waWxlci9ydW50aW1lL2pzb29fcnVudGltZS5tbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztHQUt3Qjs7SUFBQTs7OztFOzs7Ozs7Ozs7Ozs7OztFOzs7Ozs7Ozs7Rzs7Ozs7R0NMWjs7OztJQUFBO0lBNEdNO0lBTVpBO0lBRUFDO0lBNUJPLGtCQTBCUEQsU0FFQUM7SUE0Qko7R0FFUTtHQUVlLFNBQW5CQyxXLFU7R0FQQTtJQUFBOztPQU9BQTs7OztJQVMwQjtJQW9DWDtJQWxCQTtJQWlDTjs7Ozs7RSIsInNvdXJjZXNDb250ZW50IjpbIigqIGdlbmVyYXRlZCBieSBkdW5lICopXG5cbigqKiBAY2Fub25pY2FsIEpzb29fcnVudGltZS5SdW50aW1lX3ZlcnNpb24gKilcbm1vZHVsZSBSdW50aW1lX3ZlcnNpb24gPSBKc29vX3J1bnRpbWVfX1J1bnRpbWVfdmVyc2lvblxuXG5tb2R1bGUgSnNvb19ydW50aW1lX18gPSBzdHJ1Y3QgZW5kXG5bQEBkZXByZWNhdGVkIFwidGhpcyBtb2R1bGUgaXMgc2hhZG93ZWRcIl1cbiIsIm1vZHVsZSBKcyA9IHN0cnVjdFxuICB0eXBlIHRcblxuICB0eXBlICdhIGpzX2FycmF5ID0gdFxuXG4gIHR5cGUgKCdhLCAnYikgbWV0aF9jYWxsYmFjayA9IHRcblxuICBleHRlcm5hbCBzdHJpbmcgOiBzdHJpbmcgLT4gdCA9IFwiY2FtbF9qc3N0cmluZ19vZl9zdHJpbmdcIlxuXG4gIGV4dGVybmFsIHRvX3N0cmluZyA6IHQgLT4gc3RyaW5nID0gXCJjYW1sX3N0cmluZ19vZl9qc3N0cmluZ1wiXG5cbiAgZXh0ZXJuYWwgYnl0ZXN0cmluZyA6IHN0cmluZyAtPiB0ID0gXCJjYW1sX2pzYnl0ZXNfb2Zfc3RyaW5nXCJcblxuICBleHRlcm5hbCB0b19ieXRlc3RyaW5nIDogdCAtPiBzdHJpbmcgPSBcImNhbWxfc3RyaW5nX29mX2pzYnl0ZXNcIlxuXG4gIGV4dGVybmFsIGJvb2wgOiBib29sIC0+IHQgPSBcImNhbWxfanNfZnJvbV9ib29sXCJcblxuICBleHRlcm5hbCB0b19ib29sIDogdCAtPiBib29sID0gXCJjYW1sX2pzX3RvX2Jvb2xcIlxuXG4gIGV4dGVybmFsIGFycmF5IDogJ2EgYXJyYXkgLT4gdCA9IFwiY2FtbF9qc19mcm9tX2FycmF5XCJcblxuICBleHRlcm5hbCB0b19hcnJheSA6IHQgLT4gJ2EgYXJyYXkgPSBcImNhbWxfanNfdG9fYXJyYXlcIlxuXG4gIGV4dGVybmFsIG51bWJlcl9vZl9mbG9hdCA6IGZsb2F0IC0+IHQgPSBcImNhbWxfanNfZnJvbV9mbG9hdFwiXG5cbiAgZXh0ZXJuYWwgZmxvYXRfb2ZfbnVtYmVyIDogdCAtPiBmbG9hdCA9IFwiY2FtbF9qc190b19mbG9hdFwiXG5cbiAgZXh0ZXJuYWwgdHlwZW9mIDogdCAtPiB0ID0gXCJjYW1sX2pzX3R5cGVvZlwiXG5cbiAgZXh0ZXJuYWwgaW5zdGFuY2VvZiA6IHQgLT4gdCAtPiBib29sID0gXCJjYW1sX2pzX2luc3RhbmNlb2ZcIlxuXG4gIGV4dGVybmFsIGRlYnVnZ2VyIDogdW5pdCAtPiB1bml0ID0gXCJkZWJ1Z2dlclwiXG5cbiAgZXh0ZXJuYWwgZ2V0IDogdCAtPiB0IC0+IHQgPSBcImNhbWxfanNfZ2V0XCJcblxuICBleHRlcm5hbCBzZXQgOiB0IC0+IHQgLT4gdCAtPiB1bml0ID0gXCJjYW1sX2pzX3NldFwiXG5cbiAgZXh0ZXJuYWwgZGVsZXRlIDogdCAtPiB0IC0+IHVuaXQgPSBcImNhbWxfanNfZGVsZXRlXCJcblxuICBleHRlcm5hbCBjYWxsIDogdCAtPiB0IC0+IHQgYXJyYXkgLT4gdCA9IFwiY2FtbF9qc19jYWxsXCJcblxuICBleHRlcm5hbCBmdW5fY2FsbCA6IHQgLT4gdCBhcnJheSAtPiB0ID0gXCJjYW1sX2pzX2Z1bl9jYWxsXCJcblxuICBleHRlcm5hbCBtZXRoX2NhbGwgOiB0IC0+IHN0cmluZyAtPiB0IGFycmF5IC0+IHQgPSBcImNhbWxfanNfbWV0aF9jYWxsXCJcblxuICBleHRlcm5hbCBuZXdfb2JqIDogdCAtPiB0IGFycmF5IC0+IHQgPSBcImNhbWxfanNfbmV3XCJcblxuICBleHRlcm5hbCBuZXdfb2JqX2FyciA6IHQgLT4gdCBqc19hcnJheSAtPiB0ID0gXCJjYW1sX29qc19uZXdfYXJyXCJcblxuICBleHRlcm5hbCBvYmogOiAoc3RyaW5nICogdCkgYXJyYXkgLT4gdCA9IFwiY2FtbF9qc19vYmplY3RcIlxuXG4gIGV4dGVybmFsIGVxdWFscyA6IHQgLT4gdCAtPiBib29sID0gXCJjYW1sX2pzX2VxdWFsc1wiXG5cbiAgZXh0ZXJuYWwgcHVyZV9leHByIDogKHVuaXQgLT4gJ2EpIC0+ICdhID0gXCJjYW1sX2pzX3B1cmVfZXhwclwiXG5cbiAgZXh0ZXJuYWwgZXZhbF9zdHJpbmcgOiBzdHJpbmcgLT4gJ2EgPSBcImNhbWxfanNfZXZhbF9zdHJpbmdcIlxuXG4gIGV4dGVybmFsIGpzX2V4cHIgOiBzdHJpbmcgLT4gJ2EgPSBcImNhbWxfanNfZXhwclwiXG5cbiAgZXh0ZXJuYWwgcHVyZV9qc19leHByIDogc3RyaW5nIC0+ICdhID0gXCJjYW1sX3B1cmVfanNfZXhwclwiXG5cbiAgZXh0ZXJuYWwgY2FsbGJhY2sgOiAoJ2IgLT4gJ2EpIC0+ICgnYiwgJ2EpIG1ldGhfY2FsbGJhY2tcbiAgICA9IFwiY2FtbF9qc193cmFwX2NhbGxiYWNrX3Vuc2FmZVwiXG5cbiAgZXh0ZXJuYWwgY2FsbGJhY2tfd2l0aF9hcmd1bWVudHMgOlxuICAgICh0IGpzX2FycmF5IC0+ICdiKSAtPiAoJ2MsIHQganNfYXJyYXkgLT4gJ2IpIG1ldGhfY2FsbGJhY2tcbiAgICA9IFwiY2FtbF9qc193cmFwX2NhbGxiYWNrX2FyZ3VtZW50c1wiXG5cbiAgZXh0ZXJuYWwgY2FsbGJhY2tfd2l0aF9hcml0eSA6IGludCAtPiAoJ2EgLT4gJ2IpIC0+ICgnYywgJ2EgLT4gJ2IpIG1ldGhfY2FsbGJhY2tcbiAgICA9IFwiY2FtbF9qc193cmFwX2NhbGxiYWNrX3N0cmljdFwiXG5cbiAgZXh0ZXJuYWwgbWV0aF9jYWxsYmFjayA6ICgnYiAtPiAnYSkgLT4gKCdiLCAnYSkgbWV0aF9jYWxsYmFja1xuICAgID0gXCJjYW1sX2pzX3dyYXBfbWV0aF9jYWxsYmFja191bnNhZmVcIlxuXG4gIGV4dGVybmFsIG1ldGhfY2FsbGJhY2tfd2l0aF9hcml0eSA6IGludCAtPiAoJ2IgLT4gJ2EpIC0+ICgnYiwgJ2EpIG1ldGhfY2FsbGJhY2tcbiAgICA9IFwiY2FtbF9qc193cmFwX21ldGhfY2FsbGJhY2tfc3RyaWN0XCJcblxuICBleHRlcm5hbCBtZXRoX2NhbGxiYWNrX3dpdGhfYXJndW1lbnRzIDpcbiAgICAoJ2IgLT4gdCBqc19hcnJheSAtPiAnYSkgLT4gKCdiLCB0IGpzX2FycmF5IC0+ICdhKSBtZXRoX2NhbGxiYWNrXG4gICAgPSBcImNhbWxfanNfd3JhcF9tZXRoX2NhbGxiYWNrX2FyZ3VtZW50c1wiXG5cbiAgZXh0ZXJuYWwgd3JhcF9jYWxsYmFjayA6ICgnYSAtPiAnYikgLT4gKCdjLCAnYSAtPiAnYikgbWV0aF9jYWxsYmFja1xuICAgID0gXCJjYW1sX2pzX3dyYXBfY2FsbGJhY2tcIlxuXG4gIGV4dGVybmFsIHdyYXBfbWV0aF9jYWxsYmFjayA6ICgnYSAtPiAnYikgLT4gKCdhLCAnYikgbWV0aF9jYWxsYmFja1xuICAgID0gXCJjYW1sX2pzX3dyYXBfbWV0aF9jYWxsYmFja1wiXG5lbmRcblxubW9kdWxlIFN5cyA9IHN0cnVjdFxuICB0eXBlICdhIGNhbGxiYWNrID0gJ2FcblxuICBleHRlcm5hbCBjcmVhdGVfZmlsZSA6IG5hbWU6c3RyaW5nIC0+IGNvbnRlbnQ6c3RyaW5nIC0+IHVuaXQgPSBcImNhbWxfY3JlYXRlX2ZpbGVcIlxuXG4gIGV4dGVybmFsIHJlYWRfZmlsZSA6IG5hbWU6c3RyaW5nIC0+IHN0cmluZyA9IFwiY2FtbF9yZWFkX2ZpbGVfY29udGVudFwiXG5cbiAgZXh0ZXJuYWwgc2V0X2NoYW5uZWxfb3V0cHV0JyA6IG91dF9jaGFubmVsIC0+IChqc19zdHJpbmc6SnMudCAtPiB1bml0KSBjYWxsYmFjayAtPiB1bml0XG4gICAgPSBcImNhbWxfbWxfc2V0X2NoYW5uZWxfb3V0cHV0XCJcblxuICBleHRlcm5hbCBzZXRfY2hhbm5lbF9pbnB1dCcgOiBpbl9jaGFubmVsIC0+ICh1bml0IC0+IHN0cmluZykgY2FsbGJhY2sgLT4gdW5pdFxuICAgID0gXCJjYW1sX21sX3NldF9jaGFubmVsX3JlZmlsbFwiXG5cbiAgZXh0ZXJuYWwgbW91bnRfcG9pbnQgOiB1bml0IC0+IHN0cmluZyBsaXN0ID0gXCJjYW1sX2xpc3RfbW91bnRfcG9pbnRcIlxuXG4gIGV4dGVybmFsIG1vdW50X2F1dG9sb2FkIDogc3RyaW5nIC0+IChzdHJpbmcgLT4gc3RyaW5nIC0+IHN0cmluZyBvcHRpb24pIGNhbGxiYWNrIC0+IHVuaXRcbiAgICA9IFwiY2FtbF9tb3VudF9hdXRvbG9hZFwiXG5cbiAgZXh0ZXJuYWwgdW5tb3VudCA6IHN0cmluZyAtPiB1bml0ID0gXCJjYW1sX3VubW91bnRcIlxuXG4gIG1vZHVsZSBDb25maWcgPSBzdHJ1Y3RcbiAgICBleHRlcm5hbCB1c2VfanNfc3RyaW5nIDogdW5pdCAtPiBib29sID0gXCJjYW1sX2pzb29fZmxhZ3NfdXNlX2pzX3N0cmluZ1wiXG5cbiAgICBleHRlcm5hbCBlZmZlY3RzIDogdW5pdCAtPiBib29sID0gXCJjYW1sX2pzb29fZmxhZ3NfZWZmZWN0c1wiXG4gIGVuZFxuXG4gIGxldCB2ZXJzaW9uID0gUnVudGltZV92ZXJzaW9uLnNcblxuICBsZXQgZ2l0X3ZlcnNpb24gPSBSdW50aW1lX3ZlcnNpb24uZ2l0X3ZlcnNpb25cbmVuZFxuXG5tb2R1bGUgRXJyb3IgOiBzaWdcbiAgdHlwZSB0XG5cbiAgdmFsIHJhaXNlXyA6IHQgLT4gJ2FcblxuICB2YWwgYXR0YWNoX2pzX2JhY2t0cmFjZSA6IGV4biAtPiBmb3JjZTpib29sIC0+IGV4blxuICAoKiogQXR0YWNoIGEgSmF2YXNTY3JpcHQgZXJyb3IgdG8gYW4gT0NhbWwgZXhjZXB0aW9uLiAgaWYgW2ZvcmNlID0gZmFsc2VdIGFuZCBhXG4gICAgSmF2YXNTY3JpcHQgZXJyb3IgaXMgYWxyZWFkeSBhdHRhY2hlZCwgaXQgd2lsbCBkbyBub3RoaW5nLiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWZ1bCB0b1xuICAgIHN0b3JlIGFuZCByZXRyaWV2ZSBpbmZvcm1hdGlvbiBhYm91dCBKYXZhU2NyaXB0IHN0YWNrIHRyYWNlcy5cblxuICAgIEF0dGFjaGluZyBKYXZhc1NjcmlwdCBlcnJvcnMgd2lsbCBoYXBwZW4gYXV0b21hdGljYWxseSB3aGVuIGNvbXBpbGluZyB3aXRoXG4gICAgWy0tZW5hYmxlIHdpdGgtanMtZXJyb3JdLiAqKVxuXG4gIHZhbCBvZl9leG4gOiBleG4gLT4gdCBvcHRpb25cbiAgKCoqIEV4dHJhY3QgYSBKYXZhU2NyaXB0IGVycm9yIGF0dGFjaGVkIHRvIGFuIE9DYW1sIGV4Y2VwdGlvbiwgaWYgYW55LiAgVGhpcyBpcyB1c2VmdWwgdG9cbiAgICAgIGluc3BlY3QgYW4gZXZlbnR1YWwgc3RhY2sgc3RyYWNlLCBlc3BlY2lhbGx5IHdoZW4gc291cmNlbWFwIGlzIGVuYWJsZWQuICopXG5cbiAgZXhjZXB0aW9uIEV4biBvZiB0XG4gICgqKiBUaGUgW0Vycm9yXSBleGNlcHRpb24gd3JhcCBqYXZhc2NyaXB0IGV4Y2VwdGlvbnMgd2hlbiBjYXVnaHQgYnkgT0NhbWwgY29kZS5cbiAgICAgIEluIGNhc2UgdGhlIGphdmFzY3JpcHQgZXhjZXB0aW9uIGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBqYXZhc2NyaXB0IFtFcnJvcl0sXG4gICAgICBpdCB3aWxsIGJlIHNlcmlhbGl6ZWQgYW5kIHdyYXBwZWQgaW50byBhIFtGYWlsdXJlXSBleGNlcHRpb24uXG4gICopXG5lbmQgPSBzdHJ1Y3RcbiAgdHlwZSB0XG5cbiAgZXhjZXB0aW9uIEV4biBvZiB0XG5cbiAgbGV0IF8gPSBDYWxsYmFjay5yZWdpc3Rlcl9leGNlcHRpb24gXCJqc0Vycm9yXCIgKEV4biAoT2JqLm1hZ2ljIFt8fF0pKVxuXG4gIGxldCByYWlzZV8gOiB0IC0+ICdhID0gSnMuanNfZXhwciBcIihmdW5jdGlvbiAoZXhuKSB7IHRocm93IGV4biB9KVwiXG5cbiAgZXh0ZXJuYWwgb2ZfZXhuIDogZXhuIC0+IHQgb3B0aW9uID0gXCJjYW1sX2pzX2Vycm9yX29wdGlvbl9vZl9leGNlcHRpb25cIlxuXG4gIGV4dGVybmFsIGF0dGFjaF9qc19iYWNrdHJhY2UgOiBleG4gLT4gZm9yY2U6Ym9vbCAtPiBleG4gPSBcImNhbWxfZXhuX3dpdGhfanNfYmFja3RyYWNlXCJcbmVuZFxuXG5bQEBAb2NhbWwud2FybmluZyBcIi0zMi02MFwiXVxuXG5tb2R1bGUgRm9yX2NvbXBhdGliaWxpdHlfb25seSA9IHN0cnVjdFxuICAoKiBBZGQgcHJpbWl0aXZlcyBmb3IgY29tcGF0aWJpbGl0eSByZWFzb25zLiBFeGlzdGluZyB1c2VycyBtaWdodFxuICAgICBkZXBlbmQgb24gaXQgKGUuZy4gZ2VuX2pzX2FwaSksIHdlIGRvbnQgd2FudCB0aGUgb2NhbWwgY29tcGlsZXJcbiAgICAgdG8gY29tcGxhaW4gYWJvdXQgdGhlc2VzIG1pc3NpbmcgcHJpbWl0aXZlcy4gKilcblxuICBleHRlcm5hbCBjYW1sX2pzX2Zyb21fc3RyaW5nIDogc3RyaW5nIC0+IEpzLnQgPSBcImNhbWxfanNfZnJvbV9zdHJpbmdcIlxuXG4gIGV4dGVybmFsIGNhbWxfanNfdG9fYnl0ZV9zdHJpbmcgOiBKcy50IC0+IHN0cmluZyA9IFwiY2FtbF9qc190b19ieXRlX3N0cmluZ1wiXG5cbiAgZXh0ZXJuYWwgY2FtbF9qc190b19zdHJpbmcgOiBKcy50IC0+IHN0cmluZyA9IFwiY2FtbF9qc190b19zdHJpbmdcIlxuXG4gIGV4dGVybmFsIGNhbWxfbGlzdF9vZl9qc19hcnJheSA6ICdhIEpzLmpzX2FycmF5IC0+ICdhIGxpc3QgPSBcImNhbWxfbGlzdF9vZl9qc19hcnJheVwiXG5cbiAgZXh0ZXJuYWwgY2FtbF9saXN0X3RvX2pzX2FycmF5IDogJ2EgbGlzdCAtPiAnYSBKcy5qc19hcnJheSA9IFwiY2FtbF9saXN0X3RvX2pzX2FycmF5XCJcblxuICBleHRlcm5hbCB2YXJpYWJsZSA6IHN0cmluZyAtPiAnYSA9IFwiY2FtbF9qc192YXJcIlxuZW5kXG5cbm1vZHVsZSBUeXBlZF9hcnJheSA9IHN0cnVjdFxuICB0eXBlICgnYSwgJ2IpIHR5cGVkQXJyYXkgPSBKcy50XG5cbiAgdHlwZSBhcnJheUJ1ZmZlciA9IEpzLnRcblxuICB0eXBlIHVpbnQ4QXJyYXkgPSBKcy50XG5cbiAgZXh0ZXJuYWwga2luZCA6ICgnYSwgJ2IpIHR5cGVkQXJyYXkgLT4gKCdhLCAnYikgQmlnYXJyYXkua2luZFxuICAgID0gXCJjYW1sX2JhX2tpbmRfb2ZfdHlwZWRfYXJyYXlcIlxuXG4gIGV4dGVybmFsIGZyb21fZ2VuYXJyYXkgOlxuICAgICgnYSwgJ2IsIEJpZ2FycmF5LmNfbGF5b3V0KSBCaWdhcnJheS5HZW5hcnJheS50IC0+ICgnYSwgJ2IpIHR5cGVkQXJyYXlcbiAgICA9IFwiY2FtbF9iYV90b190eXBlZF9hcnJheVwiXG5cbiAgZXh0ZXJuYWwgdG9fZ2VuYXJyYXkgOlxuICAgICgnYSwgJ2IpIHR5cGVkQXJyYXkgLT4gKCdhLCAnYiwgQmlnYXJyYXkuY19sYXlvdXQpIEJpZ2FycmF5LkdlbmFycmF5LnRcbiAgICA9IFwiY2FtbF9iYV9mcm9tX3R5cGVkX2FycmF5XCJcblxuICBtb2R1bGUgQmlnc3RyaW5nID0gc3RydWN0XG4gICAgdHlwZSB0ID0gKGNoYXIsIEJpZ2FycmF5LmludDhfdW5zaWduZWRfZWx0LCBCaWdhcnJheS5jX2xheW91dCkgQmlnYXJyYXkuQXJyYXkxLnRcblxuICAgIGV4dGVybmFsIHRvX2FycmF5QnVmZmVyIDogdCAtPiBhcnJheUJ1ZmZlciA9IFwiYmlnc3RyaW5nX3RvX2FycmF5X2J1ZmZlclwiXG5cbiAgICBleHRlcm5hbCB0b191aW50OEFycmF5IDogdCAtPiB1aW50OEFycmF5ID0gXCJiaWdzdHJpbmdfdG9fdHlwZWRfYXJyYXlcIlxuXG4gICAgZXh0ZXJuYWwgb2ZfYXJyYXlCdWZmZXIgOiBhcnJheUJ1ZmZlciAtPiB0ID0gXCJiaWdzdHJpbmdfb2ZfYXJyYXlfYnVmZmVyXCJcblxuICAgIGV4dGVybmFsIG9mX3VpbnQ4QXJyYXkgOiB1aW50OEFycmF5IC0+IHQgPSBcImJpZ3N0cmluZ19vZl90eXBlZF9hcnJheVwiXG4gIGVuZFxuXG4gIGV4dGVybmFsIG9mX3VpbnQ4QXJyYXkgOiB1aW50OEFycmF5IC0+IHN0cmluZyA9IFwiY2FtbF9zdHJpbmdfb2ZfYXJyYXlcIlxuZW5kXG5cbm1vZHVsZSBJbnQ2NCA9IHN0cnVjdFxuICBleHRlcm5hbCBjcmVhdGVfaW50NjRfbG9fbWlfaGkgOiBpbnQgLT4gaW50IC0+IGludCAtPiBJbnQ2NC50XG4gICAgPSBcImNhbWxfaW50NjRfY3JlYXRlX2xvX21pX2hpXCJcbmVuZFxuIl19