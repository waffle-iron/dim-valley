// Compiled by ClojureScript 1.9.521 {}
goog.provide('mapbox.dom');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('mapbox.api');
goog.require('lib.mapbox');
/**
 * @param {...*} var_args
 */
mapbox.dom.map = (function() { 
var mapbox$dom$map__delegate = function (args__10227__auto__){
var vec__14715 = hoplon.core.parse_args.call(null,args__10227__auto__);
var map__14718 = cljs.core.nth.call(null,vec__14715,(0),null);
var map__14718__$1 = ((((!((map__14718 == null)))?((((map__14718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14718.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14718):map__14718);
var attributes = map__14718__$1;
var options = cljs.core.get.call(null,map__14718__$1,new cljs.core.Keyword(null,"options","options",99638489));
var marker = cljs.core.get.call(null,map__14718__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var marker_options = cljs.core.get.call(null,map__14718__$1,new cljs.core.Keyword(null,"marker-options","marker-options",127332870));
var children = cljs.core.nth.call(null,vec__14715,(1),null);
var el = hoplon.core.div.call(null,cljs.core.dissoc.call(null,attributes,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword(null,"marker-options","marker-options",127332870)),children);
mapbox.api.el__GT_map_BANG_.call(null,el,options);

var center_14720 = cljs.core.get.call(null,options,"center");
if(cljs.core.truth_((function (){var and__7748__auto__ = marker;
if(cljs.core.truth_(and__7748__auto__)){
return center_14720;
} else {
return and__7748__auto__;
}
})())){
mapbox.api.with_marker_BANG_.call(null,el,marker,center_14720,marker_options);
} else {
}

return el;
};
var mapbox$dom$map = function (var_args){
var args__10227__auto__ = null;
if (arguments.length > 0) {
var G__14721__i = 0, G__14721__a = new Array(arguments.length -  0);
while (G__14721__i < G__14721__a.length) {G__14721__a[G__14721__i] = arguments[G__14721__i + 0]; ++G__14721__i;}
  args__10227__auto__ = new cljs.core.IndexedSeq(G__14721__a,0);
} 
return mapbox$dom$map__delegate.call(this,args__10227__auto__);};
mapbox$dom$map.cljs$lang$maxFixedArity = 0;
mapbox$dom$map.cljs$lang$applyTo = (function (arglist__14722){
var args__10227__auto__ = cljs.core.seq(arglist__14722);
return mapbox$dom$map__delegate(args__10227__auto__);
});
mapbox$dom$map.cljs$core$IFn$_invoke$arity$variadic = mapbox$dom$map__delegate;
return mapbox$dom$map;
})()
;
mapbox.dom.stylesheet = (function mapbox$dom$stylesheet(){
return hoplon.core.link.call(null,new cljs.core.Keyword(null,"href","href",-793805698),"https://api.mapbox.com/mapbox-gl-js/v0.36.0/mapbox-gl.css",new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet");
});

//# sourceMappingURL=dom.js.map