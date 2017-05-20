// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('wheel.dom.traversal');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('wheel.dom.events');
wheel.dom.traversal.is_QMARK_ = (function wheel$dom$traversal$is_QMARK_(el,sel){
return jQuery(el).is(sel);
});
wheel.dom.traversal.find = (function wheel$dom$traversal$find(el,sel){
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(jQuery(el).find(sel));
});
wheel.dom.traversal.contains_QMARK_ = (function wheel$dom$traversal$contains_QMARK_(el,sel){
return !((wheel.dom.traversal.find(el,sel) == null));
});
wheel.dom.traversal.children = (function wheel$dom$traversal$children(el){
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(jQuery(el).children());
});
wheel.dom.traversal.exists_QMARK_ = (function wheel$dom$traversal$exists_QMARK_(el,sel){
return ((0) < cljs.core.count(wheel.dom.traversal.find(el,sel)));
});
wheel.dom.traversal.contains_attrs_QMARK_ = (function wheel$dom$traversal$contains_attrs_QMARK_(el,attrs,vals){
var _PERCENT_ = ((!(cljs.core.coll_QMARK_(attrs)))?(function (){var G__20657 = el;
var G__20658 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null);
var G__20659 = vals;
return (wheel.dom.traversal.contains_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3 ? wheel.dom.traversal.contains_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3(G__20657,G__20658,G__20659) : wheel.dom.traversal.contains_attrs_QMARK_.call(null,G__20657,G__20658,G__20659));
})():((!(cljs.core.coll_QMARK_(vals)))?(function (){var G__20660 = el;
var G__20661 = attrs;
var G__20662 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null);
return (wheel.dom.traversal.contains_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3 ? wheel.dom.traversal.contains_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3(G__20660,G__20661,G__20662) : wheel.dom.traversal.contains_attrs_QMARK_.call(null,G__20660,G__20661,G__20662));
})():cljs.core.every_QMARK_(cljs.core.true_QMARK_,(function (){var iter__8622__auto__ = (function wheel$dom$traversal$contains_attrs_QMARK__$_iter__20663(s__20664){
return (new cljs.core.LazySeq(null,(function (){
var s__20664__$1 = s__20664;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__20664__$1);
if(temp__6738__auto__){
var xs__7294__auto__ = temp__6738__auto__;
var attr = cljs.core.first(xs__7294__auto__);
var iterys__8618__auto__ = ((function (s__20664__$1,attr,xs__7294__auto__,temp__6738__auto__){
return (function wheel$dom$traversal$contains_attrs_QMARK__$_iter__20663_$_iter__20665(s__20666){
return (new cljs.core.LazySeq(null,((function (s__20664__$1,attr,xs__7294__auto__,temp__6738__auto__){
return (function (){
var s__20666__$1 = s__20666;
while(true){
var temp__6738__auto____$1 = cljs.core.seq(s__20666__$1);
if(temp__6738__auto____$1){
var s__20666__$2 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20666__$2)){
var c__8620__auto__ = cljs.core.chunk_first(s__20666__$2);
var size__8621__auto__ = cljs.core.count(c__8620__auto__);
var b__20668 = cljs.core.chunk_buffer(size__8621__auto__);
if((function (){var i__20667 = (0);
while(true){
if((i__20667 < size__8621__auto__)){
var val = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8620__auto__,i__20667);
cljs.core.chunk_append(b__20668,!((wheel.dom.traversal.find(el,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(val),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('')) == null)));

var G__20674 = (i__20667 + (1));
i__20667 = G__20674;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20668),wheel$dom$traversal$contains_attrs_QMARK__$_iter__20663_$_iter__20665(cljs.core.chunk_rest(s__20666__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20668),null);
}
} else {
var val = cljs.core.first(s__20666__$2);
return cljs.core.cons(!((wheel.dom.traversal.find(el,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(val),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('')) == null)),wheel$dom$traversal$contains_attrs_QMARK__$_iter__20663_$_iter__20665(cljs.core.rest(s__20666__$2)));
}
} else {
return null;
}
break;
}
});})(s__20664__$1,attr,xs__7294__auto__,temp__6738__auto__))
,null,null));
});})(s__20664__$1,attr,xs__7294__auto__,temp__6738__auto__))
;
var fs__8619__auto__ = cljs.core.seq(iterys__8618__auto__(vals));
if(fs__8619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8619__auto__,wheel$dom$traversal$contains_attrs_QMARK__$_iter__20663(cljs.core.rest(s__20664__$1)));
} else {
var G__20675 = cljs.core.rest(s__20664__$1);
s__20664__$1 = G__20675;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8622__auto__(attrs);
})())
));
if(cljs.core.boolean_QMARK_(_PERCENT_)){
} else {
throw (new Error("Assert failed: (boolean? %)"));
}

return _PERCENT_;
});
wheel.dom.traversal.attr = (function wheel$dom$traversal$attr(el,attr_name){
return jQuery(el).attr(attr_name);
});
wheel.dom.traversal.find_attr = (function wheel$dom$traversal$find_attr(el,sel,attr_name){
var _PERCENT_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20676_SHARP_){
return wheel.dom.traversal.attr(p1__20676_SHARP_,attr_name);
}),wheel.dom.traversal.find(el,sel));
if(cljs.core.seq_QMARK_(_PERCENT_)){
} else {
throw (new Error("Assert failed: (seq? %)"));
}

return _PERCENT_;
});
wheel.dom.traversal.text = (function wheel$dom$traversal$text(el){
return jQuery(el).text();
});
wheel.dom.traversal.find_text = (function wheel$dom$traversal$find_text(el,sel){
var _PERCENT_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.text,wheel.dom.traversal.find(el,sel));
if(cljs.core.seq_QMARK_(_PERCENT_)){
} else {
throw (new Error("Assert failed: (seq? %)"));
}

return _PERCENT_;
});
wheel.dom.traversal.val = (function wheel$dom$traversal$val(el){
return jQuery(el).val();
});
wheel.dom.traversal.find_val = (function wheel$dom$traversal$find_val(el,sel){
var _PERCENT_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.val,wheel.dom.traversal.find(el,sel));
if(cljs.core.seq_QMARK_(_PERCENT_)){
} else {
throw (new Error("Assert failed: (seq? %)"));
}

return _PERCENT_;
});
/**
 * Sets the val of el to the given v, but also triggers input, which is often necessary for tests.
 */
wheel.dom.traversal.input_val_BANG_ = (function wheel$dom$traversal$input_val_BANG_(el,v){
return jQuery(el).val(v).trigger("input");
});
wheel.dom.traversal.find_fn_input_val_BANG_ = (function wheel$dom$traversal$find_fn_input_val_BANG_(var_args){
var args20677 = [];
var len__8981__auto___20681 = arguments.length;
var i__8982__auto___20682 = (0);
while(true){
if((i__8982__auto___20682 < len__8981__auto___20681)){
args20677.push((arguments[i__8982__auto___20682]));

var G__20683 = (i__8982__auto___20682 + (1));
i__8982__auto___20682 = G__20683;
continue;
} else {
}
break;
}

var G__20679 = args20677.length;
switch (G__20679) {
case 3:
return wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20677.length)].join('')));

}
});

wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (el,f,v){
return wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$4(el,"input",f,v);
});

wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (el,sel,f,v){
var target = (function (){var G__20680 = wheel.dom.traversal.find(jQuery(el),sel);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20680) : f.call(null,G__20680));
})();
if(cljs.core.truth_(target)){
} else {
throw (new Error("Assert failed: target"));
}

return wheel.dom.traversal.input_val_BANG_(target,v);
});

wheel.dom.traversal.find_fn_input_val_BANG_.cljs$lang$maxFixedArity = 4;

wheel.dom.traversal.input_val_first_BANG_ = (function wheel$dom$traversal$input_val_first_BANG_(var_args){
var args20685 = [];
var len__8981__auto___20688 = arguments.length;
var i__8982__auto___20689 = (0);
while(true){
if((i__8982__auto___20689 < len__8981__auto___20688)){
args20685.push((arguments[i__8982__auto___20689]));

var G__20690 = (i__8982__auto___20689 + (1));
i__8982__auto___20689 = G__20690;
continue;
} else {
}
break;
}

var G__20687 = args20685.length;
switch (G__20687) {
case 2:
return wheel.dom.traversal.input_val_first_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return wheel.dom.traversal.input_val_first_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20685.length)].join('')));

}
});

wheel.dom.traversal.input_val_first_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (el,v){
return wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$3(el,cljs.core.first,v);
});

wheel.dom.traversal.input_val_first_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (el,sel,v){
return wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$4(el,sel,cljs.core.first,v);
});

wheel.dom.traversal.input_val_first_BANG_.cljs$lang$maxFixedArity = 3;

wheel.dom.traversal.css = (function wheel$dom$traversal$css(el,k){
return jQuery(el).css(k);
});
/**
 * Use jQuery to trigger the given event on the first match of sel
 */
wheel.dom.traversal.trigger_first_BANG_ = (function wheel$dom$traversal$trigger_first_BANG_(el,sel,e){
var target = cljs.core.first(wheel.dom.traversal.find(el,sel));
if(cljs.core.truth_(target)){
} else {
throw (new Error("Assert failed: target"));
}

return wheel.dom.events.trigger_jq_BANG_.cljs$core$IFn$_invoke$arity$2(target,e);
});