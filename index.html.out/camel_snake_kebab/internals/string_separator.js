// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('camel_snake_kebab.internals.string_separator');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
 * @interface
 */
camel_snake_kebab.internals.string_separator.StringSeparator = function(){};

/**
 * : StringSeparator -> String -> NonEmptySeq[String]
 */
camel_snake_kebab.internals.string_separator.split = (function camel_snake_kebab$internals$string_separator$split(this$,s){
if((!((this$ == null))) && (!((this$.camel_snake_kebab$internals$string_separator$StringSeparator$split$arity$2 == null)))){
return this$.camel_snake_kebab$internals$string_separator$StringSeparator$split$arity$2(this$,s);
} else {
var x__8478__auto__ = (((this$ == null))?null:this$);
var m__8479__auto__ = (camel_snake_kebab.internals.string_separator.split[goog.typeOf(x__8478__auto__)]);
if(!((m__8479__auto__ == null))){
return (m__8479__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8479__auto__.cljs$core$IFn$_invoke$arity$2(this$,s) : m__8479__auto__.call(null,this$,s));
} else {
var m__8479__auto____$1 = (camel_snake_kebab.internals.string_separator.split["_"]);
if(!((m__8479__auto____$1 == null))){
return (m__8479__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8479__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,s) : m__8479__auto____$1.call(null,this$,s));
} else {
throw cljs.core.missing_protocol("StringSeparator.split",this$);
}
}
}
});

RegExp.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$split$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.seq(s.split(this$__$1));
});

(camel_snake_kebab.internals.string_separator.StringSeparator["string"] = true);

(camel_snake_kebab.internals.string_separator.split["string"] = (function (this$,s){
return cljs.core.seq(s.split(this$));
}));
camel_snake_kebab.internals.string_separator.classify_char = (function camel_snake_kebab$internals$string_separator$classify_char(c){
var G__17941 = c;
switch (G__17941) {
case "0":
case "1":
case "2":
case "3":
case "4":
case "5":
case "6":
case "7":
case "8":
case "9":
return cljs.core.cst$kw$number;

break;
case "-":
case "_":
case " ":
case "\t":
case "\n":
case "\u000B":
case "\f":
case "\r":
return cljs.core.cst$kw$whitespace;

break;
case "a":
case "b":
case "c":
case "d":
case "e":
case "f":
case "g":
case "h":
case "i":
case "j":
case "k":
case "l":
case "m":
case "n":
case "o":
case "p":
case "q":
case "r":
case "s":
case "t":
case "u":
case "v":
case "w":
case "x":
case "y":
case "z":
return cljs.core.cst$kw$lower;

break;
case "A":
case "B":
case "C":
case "D":
case "E":
case "F":
case "G":
case "H":
case "I":
case "J":
case "K":
case "L":
case "M":
case "N":
case "O":
case "P":
case "Q":
case "R":
case "S":
case "T":
case "U":
case "V":
case "W":
case "X":
case "Y":
case "Z":
return cljs.core.cst$kw$upper;

break;
default:
return cljs.core.cst$kw$other;

}
});
camel_snake_kebab.internals.string_separator.generic_split = (function camel_snake_kebab$internals$string_separator$generic_split(ss){
var cs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(camel_snake_kebab.internals.string_separator.classify_char,ss);
var result = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var start = (0);
var current = (0);
while(true){
var next = (current + (1));
var result_PLUS_new = ((function (result,start,current,next,cs){
return (function (end){
if((end > start)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,ss.substring(start,end));
} else {
return result;
}
});})(result,start,current,next,cs))
;
if((current >= cljs.core.count(ss))){
var or__7760__auto__ = cljs.core.seq(cljs.core.persistent_BANG_(result_PLUS_new(current)));
if(or__7760__auto__){
return or__7760__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cs,current),cljs.core.cst$kw$whitespace)){
var G__17949 = result_PLUS_new(current);
var G__17950 = next;
var G__17951 = next;
result = G__17949;
start = G__17950;
current = G__17951;
continue;
} else {
if((function (){var vec__17946 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(cs,current);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17946,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17946,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17946,(2),null);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.cst$kw$upper)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,cljs.core.cst$kw$upper))) || ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.cst$kw$number)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,cljs.core.cst$kw$number))) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.cst$kw$upper)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,cljs.core.cst$kw$upper)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.cst$kw$lower)));
})()){
var G__17952 = result_PLUS_new(next);
var G__17953 = next;
var G__17954 = next;
result = G__17952;
start = G__17953;
current = G__17954;
continue;
} else {
var G__17955 = result;
var G__17956 = start;
var G__17957 = next;
result = G__17955;
start = G__17956;
current = G__17957;
continue;

}
}
}
break;
}
});
camel_snake_kebab.internals.string_separator.generic_separator = (function (){
if(typeof camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator17958 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {camel_snake_kebab.internals.string_separator.StringSeparator}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator17958 = (function (meta17959){
this.meta17959 = meta17959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator17958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17960,meta17959__$1){
var self__ = this;
var _17960__$1 = this;
return (new camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator17958(meta17959__$1));
});

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator17958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17960){
var self__ = this;
var _17960__$1 = this;
return self__.meta17959;
});

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator17958.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$ = cljs.core.PROTOCOL_SENTINEL;

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator17958.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$split$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return camel_snake_kebab.internals.string_separator.generic_split(s);
});

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator17958.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta17959], null);
});

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator17958.cljs$lang$type = true;

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator17958.cljs$lang$ctorStr = "camel-snake-kebab.internals.string-separator/t_camel_snake_kebab$internals$string_separator17958";

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator17958.cljs$lang$ctorPrWriter = (function (this__8417__auto__,writer__8418__auto__,opt__8419__auto__){
return cljs.core._write(writer__8418__auto__,"camel-snake-kebab.internals.string-separator/t_camel_snake_kebab$internals$string_separator17958");
});

camel_snake_kebab.internals.string_separator.__GT_t_camel_snake_kebab$internals$string_separator17958 = (function camel_snake_kebab$internals$string_separator$__GT_t_camel_snake_kebab$internals$string_separator17958(meta17959){
return (new camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator17958(meta17959));
});

}

return (new camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator17958(cljs.core.PersistentArrayMap.EMPTY));
})()
;
