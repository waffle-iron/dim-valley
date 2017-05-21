// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('schema.spec.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('schema.utils');

/**
 * Specs are a common language for Schemas to express their structure.
 * These two use-cases aren't priveledged, just the two that are considered core
 * to being a Spec.
 * @interface
 */
schema.spec.core.CoreSpec = function(){};

/**
 * List all subschemas
 */
schema.spec.core.subschemas = (function schema$spec$core$subschemas(this$){
if((!((this$ == null))) && (!((this$.schema$spec$core$CoreSpec$subschemas$arity$1 == null)))){
return this$.schema$spec$core$CoreSpec$subschemas$arity$1(this$);
} else {
var x__8478__auto__ = (((this$ == null))?null:this$);
var m__8479__auto__ = (schema.spec.core.subschemas[goog.typeOf(x__8478__auto__)]);
if(!((m__8479__auto__ == null))){
return (m__8479__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8479__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8479__auto__.call(null,this$));
} else {
var m__8479__auto____$1 = (schema.spec.core.subschemas["_"]);
if(!((m__8479__auto____$1 == null))){
return (m__8479__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8479__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8479__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("CoreSpec.subschemas",this$);
}
}
}
});

/**
 * Create a function that takes [data], and either returns a walked version of data
 *   (by default, usually just data), or a utils/ErrorContainer containing value that looks
 *   like the 'bad' parts of data with ValidationErrors at the leaves describing the failures.
 * 
 *   params are: subschema-checker, return-walked?, and cache.
 * 
 *   params is a map specifying:
 *    - subschema-checker - a function for checking subschemas
 *    - returned-walked? - a boolean specifying whether to return a walked version of the data
 *      (otherwise, nil is returned which increases performance)
 *    - cache - a map structure from schema to checker, which speeds up checker creation
 *      when the same subschema appears multiple times, and also facilitates handling
 *      recursive schemas.
 */
schema.spec.core.checker = (function schema$spec$core$checker(this$,params){
if((!((this$ == null))) && (!((this$.schema$spec$core$CoreSpec$checker$arity$2 == null)))){
return this$.schema$spec$core$CoreSpec$checker$arity$2(this$,params);
} else {
var x__8478__auto__ = (((this$ == null))?null:this$);
var m__8479__auto__ = (schema.spec.core.checker[goog.typeOf(x__8478__auto__)]);
if(!((m__8479__auto__ == null))){
return (m__8479__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8479__auto__.cljs$core$IFn$_invoke$arity$2(this$,params) : m__8479__auto__.call(null,this$,params));
} else {
var m__8479__auto____$1 = (schema.spec.core.checker["_"]);
if(!((m__8479__auto____$1 == null))){
return (m__8479__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8479__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,params) : m__8479__auto____$1.call(null,this$,params));
} else {
throw cljs.core.missing_protocol("CoreSpec.checker",this$);
}
}
}
});

schema.spec.core._PLUS_no_precondition_PLUS_ = (function schema$spec$core$_PLUS_no_precondition_PLUS_(_){
return null;
});
/**
 * Helper for making preconditions.
 * Takes a schema, predicate p, and error function err-f.
 * If the datum passes the predicate, returns nil.
 * Otherwise, returns a validation error with description (err-f datum-description),
 * where datum-description is a (short) printable standin for the datum.
 */
schema.spec.core.precondition = (function schema$spec$core$precondition(s,p,err_f){
return (function (x){
var temp__6738__auto__ = (function (){try{if(cljs.core.truth_((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(x) : p.call(null,x)))){
return null;
} else {
return cljs.core.cst$sym$not;
}
}catch (e18592){if((e18592 instanceof Object)){
var e_SHARP_ = e18592;
return cljs.core.cst$sym$throws_QMARK_;
} else {
throw e18592;

}
}})();
if(cljs.core.truth_(temp__6738__auto__)){
var reason = temp__6738__auto__;
return schema.utils.error(schema.utils.make_ValidationError(s,x,(new cljs.core.Delay(((function (reason,temp__6738__auto__){
return (function (){
var G__18593 = schema.utils.value_name(x);
return (err_f.cljs$core$IFn$_invoke$arity$1 ? err_f.cljs$core$IFn$_invoke$arity$1(G__18593) : err_f.call(null,G__18593));
});})(reason,temp__6738__auto__))
,null)),reason));
} else {
return null;
}
});
});
/**
 * A helper to start a checking run, by setting the appropriate params.
 * For examples, see schema.core/checker or schema.coerce/coercer.
 */
schema.spec.core.run_checker = (function schema$spec$core$run_checker(f,return_walked_QMARK_,s){
var G__18597 = s;
var G__18598 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$subschema_DASH_checker,f,cljs.core.cst$kw$return_DASH_walked_QMARK_,return_walked_QMARK_,cljs.core.cst$kw$cache,(function (){var G__18599 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18599) : cljs.core.atom.call(null,G__18599));
})()], null);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18597,G__18598) : f.call(null,G__18597,G__18598));
});
schema.spec.core.with_cache = (function schema$spec$core$with_cache(cache,cache_key,wrap_recursive_delay,result_fn){
var temp__6736__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cache) : cljs.core.deref.call(null,cache)).call(null,cache_key);
if(cljs.core.truth_(temp__6736__auto__)){
var w = temp__6736__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema$spec$core_SLASH_in_DASH_progress,w)){
var G__18601 = (new cljs.core.Delay(((function (w,temp__6736__auto__){
return (function (){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cache) : cljs.core.deref.call(null,cache)).call(null,cache_key);
});})(w,temp__6736__auto__))
,null));
return (wrap_recursive_delay.cljs$core$IFn$_invoke$arity$1 ? wrap_recursive_delay.cljs$core$IFn$_invoke$arity$1(G__18601) : wrap_recursive_delay.call(null,G__18601));
} else {
return w;
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,cache_key,cljs.core.cst$kw$schema$spec$core_SLASH_in_DASH_progress);

var res = (result_fn.cljs$core$IFn$_invoke$arity$0 ? result_fn.cljs$core$IFn$_invoke$arity$0() : result_fn.call(null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,cache_key,res);

return res;
}
});
/**
 * Should be called recursively on each subschema in the 'checker' method of a spec.
 * Handles caching and error wrapping behavior.
 */
schema.spec.core.sub_checker = (function schema$spec$core$sub_checker(p__18602,p__18603){
var map__18608 = p__18602;
var map__18608__$1 = ((((!((map__18608 == null)))?((((map__18608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18608.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18608):map__18608);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18608__$1,cljs.core.cst$kw$schema);
var error_wrap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18608__$1,cljs.core.cst$kw$error_DASH_wrap);
var map__18609 = p__18603;
var map__18609__$1 = ((((!((map__18609 == null)))?((((map__18609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18609.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18609):map__18609);
var params = map__18609__$1;
var subschema_checker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18609__$1,cljs.core.cst$kw$subschema_DASH_checker);
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18609__$1,cljs.core.cst$kw$cache);
var sub = schema.spec.core.with_cache(cache,schema__$1,((function (map__18608,map__18608__$1,schema__$1,error_wrap,map__18609,map__18609__$1,params,subschema_checker,cache){
return (function (d){
return ((function (map__18608,map__18608__$1,schema__$1,error_wrap,map__18609,map__18609__$1,params,subschema_checker,cache){
return (function (x){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(d) : cljs.core.deref.call(null,d)).call(null,x);
});
;})(map__18608,map__18608__$1,schema__$1,error_wrap,map__18609,map__18609__$1,params,subschema_checker,cache))
});})(map__18608,map__18608__$1,schema__$1,error_wrap,map__18609,map__18609__$1,params,subschema_checker,cache))
,((function (map__18608,map__18608__$1,schema__$1,error_wrap,map__18609,map__18609__$1,params,subschema_checker,cache){
return (function (){
return (subschema_checker.cljs$core$IFn$_invoke$arity$2 ? subschema_checker.cljs$core$IFn$_invoke$arity$2(schema__$1,params) : subschema_checker.call(null,schema__$1,params));
});})(map__18608,map__18608__$1,schema__$1,error_wrap,map__18609,map__18609__$1,params,subschema_checker,cache))
);
if(cljs.core.truth_(error_wrap)){
return ((function (sub,map__18608,map__18608__$1,schema__$1,error_wrap,map__18609,map__18609__$1,params,subschema_checker,cache){
return (function (x){
var res = (sub.cljs$core$IFn$_invoke$arity$1 ? sub.cljs$core$IFn$_invoke$arity$1(x) : sub.call(null,x));
var temp__6736__auto__ = schema.utils.error_val(res);
if(cljs.core.truth_(temp__6736__auto__)){
var e = temp__6736__auto__;
return schema.utils.error((error_wrap.cljs$core$IFn$_invoke$arity$1 ? error_wrap.cljs$core$IFn$_invoke$arity$1(res) : error_wrap.call(null,res)));
} else {
return res;
}
});
;})(sub,map__18608,map__18608__$1,schema__$1,error_wrap,map__18609,map__18609__$1,params,subschema_checker,cache))
} else {
return sub;
}
});
