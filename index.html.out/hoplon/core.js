// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');



cljs.core.enable_console_print_BANG_();
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 *   the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
/**
 * This is an internal implementation detail, exposed for the convenience of
 *   the hoplon.core/static macro. Experimental.
 */
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__17469_SHARP_,p2__17470_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17469_SHARP_,p2__17470_SHARP_.getAttribute("static-id"),p2__17470_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Public helper.
 *   Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var args17471 = [];
var len__8981__auto___17476 = arguments.length;
var i__8982__auto___17477 = (0);
while(true){
if((i__8982__auto___17477 < len__8981__auto___17476)){
args17471.push((arguments[i__8982__auto___17477]));

var G__17478 = (i__8982__auto___17477 + (1));
i__8982__auto___17477 = G__17478;
continue;
} else {
}
break;
}

var G__17473 = args17471.length;
switch (G__17473) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17471.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__17474_17480 = init;
var G__17475_17481 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ref) : cljs.core.deref.call(null,ref));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17474_17480,G__17475_17481) : f.call(null,G__17474_17480,G__17475_17481));

cljs.core.add_watch(ref,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;

/**
 * Public helper.
 *   Experimental.
 */
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__17488 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var seq__17489 = cljs.core.seq(vec__17488);
var first__17490 = cljs.core.first(seq__17489);
var seq__17489__$1 = cljs.core.next(seq__17489);
var f = first__17490;
var more = seq__17489__$1;
var vec__17491 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17491,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17491,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("30f9fc87df454f0a8116266e3908b26f")].join(''),f2], null)))));
});
/**
 * Public helper.
 *   Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__17494_SHARP_){
return cljs.core.zipmap(p1__17494_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});
if(cljs.core.map_QMARK_(kvs)){
return kvs;
} else {
return __GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs)));
}
});
hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var or__7760__auto__ = (function (){var and__7748__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__7748__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__7748__auto__;
}
})();
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
var G__17495 = (i + (1));
var G__17496 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__17495;
ret = G__17496;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var args17497 = [];
var len__8981__auto___17500 = arguments.length;
var i__8982__auto___17501 = (0);
while(true){
if((i__8982__auto___17501 < len__8981__auto___17500)){
args17497.push((arguments[i__8982__auto___17501]));

var G__17502 = (i__8982__auto___17501 + (1));
i__8982__auto___17501 = G__17502;
continue;
} else {
}
break;
}

var G__17499 = args17497.length;
switch (G__17499) {
case 1:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17497.length)].join('')));

}
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1 = (function (tree){
return cljs.core.persistent_BANG_(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2(tree,cljs.core.transient$(cljs.core.PersistentVector.EMPTY)));
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2 = (function (tree,ret){
var l = cljs.core.count(tree);
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l)){
return ret;
} else {
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tree,i);
if(!(cljs.core.sequential_QMARK_(x))){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x);
} else {
hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2(x,ret);
}

var G__17504 = (i + (1));
i = G__17504;
continue;
}
break;
}
});

hoplon.core.vflatten.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
hoplon.core.INode = function(){};

hoplon.core.node = (function hoplon$core$node(this$){
if((!((this$ == null))) && (!((this$.hoplon$core$INode$node$arity$1 == null)))){
return this$.hoplon$core$INode$node$arity$1(this$);
} else {
var x__8478__auto__ = (((this$ == null))?null:this$);
var m__8479__auto__ = (hoplon.core.node[goog.typeOf(x__8478__auto__)]);
if(!((m__8479__auto__ == null))){
return (m__8479__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8479__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8479__auto__.call(null,this$));
} else {
var m__8479__auto____$1 = (hoplon.core.node["_"]);
if(!((m__8479__auto____$1 == null))){
return (m__8479__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8479__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8479__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("INode.node",this$);
}
}
}
});

(hoplon.core.INode["string"] = true);

(hoplon.core.node["string"] = (function (this$){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(this$) : hoplon.core.$text.call(null,this$));
}));
(hoplon.core.INode["number"] = true);

(hoplon.core.node["number"] = (function (this$){
var G__17505 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__17505) : hoplon.core.$text.call(null,G__17505));
}));
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.hoplon$core$INode$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(hoplon.core.INode,x):false)):cljs.core.native_satisfies_QMARK_(hoplon.core.INode,x))){
return hoplon.core.node(x);
} else {
return x;
}
});
hoplon.core.removeChild = Element.prototype.removeChild;
hoplon.core.appendChild = Element.prototype.appendChild;
hoplon.core.insertBefore = Element.prototype.insertBefore;
hoplon.core.replaceChild = Element.prototype.replaceChild;
hoplon.core.setAttribute = Element.prototype.setAttribute;
hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,_,new$){
var new$__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__17509_SHARP_,p2__17508_SHARP_){
if((p2__17508_SHARP_ == null)){
return p1__17509_SHARP_;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__17509_SHARP_,p2__17508_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(new$)));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__17536 = new$__$1;
var vec__17538 = G__17536;
var seq__17539 = cljs.core.seq(vec__17538);
var first__17540 = cljs.core.first(seq__17539);
var seq__17539__$1 = cljs.core.next(seq__17539);
var x = first__17540;
var xs = seq__17539__$1;
var G__17537 = hoplon.core.child_vec(this$);
var vec__17541 = G__17537;
var seq__17542 = cljs.core.seq(vec__17541);
var first__17543 = cljs.core.first(seq__17542);
var seq__17542__$1 = cljs.core.next(seq__17542);
var k = first__17543;
var ks = seq__17542__$1;
var kids = vec__17541;
var G__17536__$1 = G__17536;
var G__17537__$1 = G__17537;
while(true){
var vec__17544 = G__17536__$1;
var seq__17545 = cljs.core.seq(vec__17544);
var first__17546 = cljs.core.first(seq__17545);
var seq__17545__$1 = cljs.core.next(seq__17545);
var x__$1 = first__17546;
var xs__$1 = seq__17545__$1;
var vec__17547 = G__17537__$1;
var seq__17548 = cljs.core.seq(vec__17547);
var first__17549 = cljs.core.first(seq__17548);
var seq__17548__$1 = cljs.core.next(seq__17548);
var k__$1 = first__17549;
var ks__$1 = seq__17548__$1;
var kids__$1 = vec__17547;
if(cljs.core.truth_((function (){var or__7760__auto__ = x__$1;
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return k__$1;
}
})())){
var G__17550 = xs__$1;
var G__17551 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
hoplon.core.appendChild.call(this$,x__$1);

return ks__$2;
})():((cljs.core.not(x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_((new_QMARK_.cljs$core$IFn$_invoke$arity$1 ? new_QMARK_.cljs$core$IFn$_invoke$arity$1(k__$1) : new_QMARK_.call(null,k__$1)))){
} else {
hoplon.core.removeChild.call(this$,k__$1);
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
hoplon.core.insertBefore.call(this$,x__$1,k__$1);

return kids__$2;
})()
)));
G__17536__$1 = G__17550;
G__17537__$1 = G__17551;
continue;
} else {
return null;
}
break;
}
});
hoplon.core.ensure_kids_BANG_ = (function hoplon$core$ensure_kids_BANG_(this$){
var this$__$1 = this$;
if(cljs.core.truth_(this$__$1.hoplonKids)){
} else {
var kids_17554 = (function (){var G__17553 = hoplon.core.child_vec(this$__$1);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17553) : cljs.core.atom.call(null,G__17553));
})();
this$__$1.hoplonKids = kids_17554;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_17554,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.remove_all_kids_BANG_ = (function hoplon$core$remove_all_kids_BANG_(this$){
this$.hoplonKids = null;

return hoplon.core.merge_kids(this$,null,null);
});
/**
 * Returns true if elem is a native element. Native elements' children
 *   are not managed by Hoplon.
 */
hoplon.core.native_QMARK_ = (function hoplon$core$native_QMARK_(elem){
return ((elem instanceof Element)) && ((elem.hoplonKids == null));
});
/**
 * Returns true if elem is a managed element. Managed elements have
 *   their children managed by Hoplon.
 */
hoplon.core.managed_QMARK_ = (function hoplon$core$managed_QMARK_(elem){
return cljs.core.not(hoplon.core.native_QMARK_(elem));
});
/**
 * Appends `child` to `parent` for the case of `parent` being a
 *   managed element.
 */
hoplon.core.managed_append_child = (function hoplon$core$managed_append_child(parent,child,kidfn){
var child__$1 = child;
hoplon.core.ensure_kids_BANG_(parent);

var kids_17557 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(parent) : kidfn.call(null,parent));
var i_17558 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(kids_17557) : cljs.core.deref.call(null,kids_17557)));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(child__$1,((function (kids_17557,i_17558,child__$1){
return (function (p1__17556_SHARP_,p2__17555_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_17557,cljs.core.assoc,i_17558,p2__17555_SHARP_);
});})(kids_17557,i_17558,child__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_17557,cljs.core.assoc,i_17558,child__$1);
}

return child__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (child){
var this$__$1 = this;
if(cljs.core.truth_(child.parentNode)){
child.parentNode.removeChild(child);
} else {
}

if(cljs.core.truth_((function (){var and__7748__auto__ = hoplon.core.native_QMARK_(this$__$1);
if(cljs.core.truth_(and__7748__auto__)){
return cljs.core.not(javelin.core.cell_QMARK_(child));
} else {
return and__7748__auto__;
}
})())){
return hoplon.core.appendChild.call(this$__$1,child);
} else {
if(cljs.core.truth_((function (){var and__7748__auto__ = hoplon.core.native_QMARK_(this$__$1);
if(cljs.core.truth_(and__7748__auto__)){
return javelin.core.cell_QMARK_(child);
} else {
return and__7748__auto__;
}
})())){
return hoplon.core.managed_append_child(this$__$1,child,kidfn);
} else {
if(cljs.core.truth_(hoplon.core.managed_QMARK_(this$__$1))){
return hoplon.core.managed_append_child(this$__$1,child,kidfn);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected child type",new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$reason,cljs.core.cst$kw$hoplon$core_SLASH_unexpected_DASH_child_DASH_type,cljs.core.cst$kw$child,child,cljs.core.cst$kw$native_QMARK_,hoplon.core.native_QMARK_(child),cljs.core.cst$kw$managed_QMARK_,hoplon.core.managed_QMARK_(child),cljs.core.cst$kw$this,this$__$1], null));

}
}
}
});
});
hoplon.core.set_removeChild_BANG_ = (function hoplon$core$set_removeChild_BANG_(this$,kidfn){
return this$.removeChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__17559_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__17559_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_insertBefore_BANG_ = (function hoplon$core$set_insertBefore_BANG_(this$,kidfn){
return this$.insertBefore = (function (x,y){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

if(cljs.core.not(y)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),cljs.core.conj,x__$1);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,y)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__17560_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.array_seq([p1__17560_SHARP_], 0)));
});})(x__$1,this$__$1))
);
} else {
}
}

return x__$1;
});
});
hoplon.core.set_replaceChild_BANG_ = (function hoplon$core$set_replaceChild_BANG_(this$,kidfn){
return this$.replaceChild = (function (x,y){
var this$__$1 = this;
var y__$1 = y;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (y__$1,this$__$1){
return (function (p1__17561_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__17561_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_17562 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_17563 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__17564 = (function (){var and__7748__auto__ = attr_17563;
if(cljs.core.truth_(and__7748__auto__)){
return cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(attr_17563) : cljs.core.deref.call(null,attr_17563)),kk_17562);
} else {
return and__7748__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__17564)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_17563,cljs.core.assoc,kk_17562,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__17565_SHARP_){
return p1__17565_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__17566_SHARP_){
return p1__17566_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__17567_SHARP_){
return p1__17567_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__17568_SHARP_){
return p1__17568_SHARP_.hoplonKids;
}));

/**
 * @interface
 */
hoplon.core.ICustomElement = function(){};

hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__8478__auto__ = (((this$ == null))?null:this$);
var m__8479__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__8478__auto__)]);
if(!((m__8479__auto__ == null))){
return (m__8479__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8479__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8479__auto__.call(null,this$,kvs));
} else {
var m__8479__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__8479__auto____$1 == null))){
return (m__8479__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8479__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8479__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("ICustomElement.-set-attributes!",this$);
}
}
}
});

hoplon.core._set_styles_BANG_ = (function hoplon$core$_set_styles_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2(this$,kvs);
} else {
var x__8478__auto__ = (((this$ == null))?null:this$);
var m__8479__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__8478__auto__)]);
if(!((m__8479__auto__ == null))){
return (m__8479__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8479__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8479__auto__.call(null,this$,kvs));
} else {
var m__8479__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__8479__auto____$1 == null))){
return (m__8479__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8479__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8479__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("ICustomElement.-set-styles!",this$);
}
}
}
});

hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__8478__auto__ = (((this$ == null))?null:this$);
var m__8479__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__8478__auto__)]);
if(!((m__8479__auto__ == null))){
return (m__8479__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8479__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8479__auto__.call(null,this$,child));
} else {
var m__8479__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__8479__auto____$1 == null))){
return (m__8479__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8479__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8479__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("ICustomElement.-append-child!",this$);
}
}
}
});

hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__8478__auto__ = (((this$ == null))?null:this$);
var m__8479__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__8478__auto__)]);
if(!((m__8479__auto__ == null))){
return (m__8479__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8479__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8479__auto__.call(null,this$,child));
} else {
var m__8479__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__8479__auto____$1 == null))){
return (m__8479__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8479__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8479__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("ICustomElement.-remove-child!",this$);
}
}
}
});

hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__8478__auto__ = (((this$ == null))?null:this$);
var m__8479__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__8478__auto__)]);
if(!((m__8479__auto__ == null))){
return (m__8479__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8479__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8479__auto__.call(null,this$,new$,existing));
} else {
var m__8479__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__8479__auto____$1 == null))){
return (m__8479__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8479__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8479__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("ICustomElement.-replace-child!",this$);
}
}
}
});

hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__8478__auto__ = (((this$ == null))?null:this$);
var m__8479__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__8478__auto__)]);
if(!((m__8479__auto__ == null))){
return (m__8479__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8479__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8479__auto__.call(null,this$,new$,existing));
} else {
var m__8479__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__8479__auto____$1 == null))){
return (m__8479__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8479__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8479__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("ICustomElement.-insert-before!",this$);
}
}
}
});

hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var args17569 = [];
var len__8981__auto___17576 = arguments.length;
var i__8982__auto___17577 = (0);
while(true){
if((i__8982__auto___17577 < len__8981__auto___17576)){
args17569.push((arguments[i__8982__auto___17577]));

var G__17578 = (i__8982__auto___17577 + (1));
i__8982__auto___17577 = G__17578;
continue;
} else {
}
break;
}

var G__17575 = args17569.length;
switch (G__17575) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args17569.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq17570){
var G__17571 = cljs.core.first(seq17570);
var seq17570__$1 = cljs.core.next(seq17570);
var G__17572 = cljs.core.first(seq17570__$1);
var seq17570__$2 = cljs.core.next(seq17570__$1);
var G__17573 = cljs.core.first(seq17570__$2);
var seq17570__$3 = cljs.core.next(seq17570__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17571,G__17572,G__17573,seq17570__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var args17580 = [];
var len__8981__auto___17587 = arguments.length;
var i__8982__auto___17588 = (0);
while(true){
if((i__8982__auto___17588 < len__8981__auto___17587)){
args17580.push((arguments[i__8982__auto___17588]));

var G__17589 = (i__8982__auto___17588 + (1));
i__8982__auto___17588 = G__17589;
continue;
} else {
}
break;
}

var G__17586 = args17580.length;
switch (G__17586) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args17580.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq17581){
var G__17582 = cljs.core.first(seq17581);
var seq17581__$1 = cljs.core.next(seq17581);
var G__17583 = cljs.core.first(seq17581__$1);
var seq17581__$2 = cljs.core.next(seq17581__$1);
var G__17584 = cljs.core.first(seq17581__$2);
var seq17581__$3 = cljs.core.next(seq17581__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17582,G__17583,G__17584,seq17581__$3);
});

hoplon.core.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_(this$,child);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_(this$,child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_(this$,new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_(this$,new$,existing);
});

/**
 * @interface
 */
hoplon.core.ICustomAttribute = function(){};

hoplon.core._attr_BANG_ = (function hoplon$core$_attr_BANG_(this$,elem,value){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomAttribute$_attr_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomAttribute$_attr_BANG_$arity$3(this$,elem,value);
} else {
var x__8478__auto__ = (((this$ == null))?null:this$);
var m__8479__auto__ = (hoplon.core._attr_BANG_[goog.typeOf(x__8478__auto__)]);
if(!((m__8479__auto__ == null))){
return (m__8479__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8479__auto__.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__8479__auto__.call(null,this$,elem,value));
} else {
var m__8479__auto____$1 = (hoplon.core._attr_BANG_["_"]);
if(!((m__8479__auto____$1 == null))){
return (m__8479__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8479__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__8479__auto____$1.call(null,this$,elem,value));
} else {
throw cljs.core.missing_protocol("ICustomAttribute.-attr!",this$);
}
}
}
});

hoplon.core.attribute_QMARK_ = (function hoplon$core$attribute_QMARK_(this$){
if(!((this$ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$ICustomAttribute$))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(hoplon.core.ICustomAttribute,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(hoplon.core.ICustomAttribute,this$);
}
});
cljs.core.Keyword.prototype.hoplon$core$ICustomAttribute$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.hoplon$core$ICustomAttribute$_attr_BANG_$arity$3 = (function (this$,elem,value){
var this$__$1 = this;
if(cljs.core.truth_(javelin.core.cell_QMARK_(value))){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(value,((function (this$__$1){
return (function (p1__17594_SHARP_,p2__17593_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$__$1,p2__17593_SHARP_) : hoplon.core.do_BANG_.call(null,elem,this$__$1,p2__17593_SHARP_));
});})(this$__$1))
);
} else {
if(cljs.core.fn_QMARK_(value)){
return (hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$__$1,value) : hoplon.core.on_BANG_.call(null,elem,this$__$1,value));
} else {
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$__$1,value) : hoplon.core.do_BANG_.call(null,elem,this$__$1,value));

}
}
});
hoplon.core.is_ie8 = cljs.core.not(goog.object.get(window,"Node"));
hoplon.core._head_STAR_ = ((!(hoplon.core.is_ie8))?(function (p1__17595_SHARP_){
return p1__17595_SHARP_.head;
}):(function (p1__17596_SHARP_){
return p1__17596_SHARP_.documentElement.firstChild;
}));
hoplon.core.vector_QMARK__STAR_ = ((!(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__17597_SHARP_){
try{return cljs.core.vector_QMARK_(p1__17597_SHARP_);
}catch (e17598){if((e17598 instanceof Error)){
var _ = e17598;
return null;
} else {
throw e17598;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((!(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__17599_SHARP_){
try{return cljs.core.seq_QMARK_(p1__17599_SHARP_);
}catch (e17600){if((e17600 instanceof Error)){
var _ = e17600;
return null;
} else {
throw e17600;

}
}}));
/**
 * Like cljs.core/nth but returns nil or not found if the index is outside the coll
 */
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var args17601 = [];
var len__8981__auto___17605 = arguments.length;
var i__8982__auto___17606 = (0);
while(true){
if((i__8982__auto___17606 < len__8981__auto___17605)){
args17601.push((arguments[i__8982__auto___17606]));

var G__17607 = (i__8982__auto___17606 + (1));
i__8982__auto___17606 = G__17607;
continue;
} else {
}
break;
}

var G__17603 = args17601.length;
switch (G__17603) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17601.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e17604){if((e17604 instanceof Error)){
var _ = e17604;
return not_found;
} else {
throw e17604;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;

/**
 * Executes a fuction after a delay, if no delay is passed, 0 is used as a default.
 */
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var args17609 = [];
var len__8981__auto___17612 = arguments.length;
var i__8982__auto___17613 = (0);
while(true){
if((i__8982__auto___17613 < len__8981__auto___17612)){
args17609.push((arguments[i__8982__auto___17613]));

var G__17614 = (i__8982__auto___17613 + (1));
i__8982__auto___17613 = G__17614;
continue;
} else {
}
break;
}

var G__17611 = args17609.length;
switch (G__17611) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17609.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;

hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
var G__17635 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__17636 = (0);
return setTimeout(G__17635,G__17636);
} else {
var temp__6736__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__6736__auto__)){
var v = temp__6736__auto__;
return v.push(f);
} else {
var G__17637_17654 = this$;
var G__17638_17655 = "_hoplonWhenDom";
var G__17639_17656 = [f];
goog.object.set(G__17637_17654,G__17638_17655,G__17639_17656);

var G__17640 = ((function (temp__6736__auto__){
return (function (){
return ((function (temp__6736__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not(document.documentElement.contains(this$))){
var G__17648 = ((function (temp__6736__auto__){
return (function (){
return hoplon$core$when_dom_$_doit();
});})(temp__6736__auto__))
;
var G__17649 = (20);
return setTimeout(G__17648,G__17649);
} else {
var seq__17650_17657 = cljs.core.seq(goog.object.get(this$,"_hoplonWhenDom"));
var chunk__17651_17658 = null;
var count__17652_17659 = (0);
var i__17653_17660 = (0);
while(true){
if((i__17653_17660 < count__17652_17659)){
var f_17661__$1 = chunk__17651_17658.cljs$core$IIndexed$_nth$arity$2(null,i__17653_17660);
(f_17661__$1.cljs$core$IFn$_invoke$arity$0 ? f_17661__$1.cljs$core$IFn$_invoke$arity$0() : f_17661__$1.call(null));

var G__17662 = seq__17650_17657;
var G__17663 = chunk__17651_17658;
var G__17664 = count__17652_17659;
var G__17665 = (i__17653_17660 + (1));
seq__17650_17657 = G__17662;
chunk__17651_17658 = G__17663;
count__17652_17659 = G__17664;
i__17653_17660 = G__17665;
continue;
} else {
var temp__6738__auto___17666 = cljs.core.seq(seq__17650_17657);
if(temp__6738__auto___17666){
var seq__17650_17667__$1 = temp__6738__auto___17666;
if(cljs.core.chunked_seq_QMARK_(seq__17650_17667__$1)){
var c__8671__auto___17668 = cljs.core.chunk_first(seq__17650_17667__$1);
var G__17669 = cljs.core.chunk_rest(seq__17650_17667__$1);
var G__17670 = c__8671__auto___17668;
var G__17671 = cljs.core.count(c__8671__auto___17668);
var G__17672 = (0);
seq__17650_17657 = G__17669;
chunk__17651_17658 = G__17670;
count__17652_17659 = G__17671;
i__17653_17660 = G__17672;
continue;
} else {
var f_17673__$1 = cljs.core.first(seq__17650_17667__$1);
(f_17673__$1.cljs$core$IFn$_invoke$arity$0 ? f_17673__$1.cljs$core$IFn$_invoke$arity$0() : f_17673__$1.call(null));

var G__17674 = cljs.core.next(seq__17650_17667__$1);
var G__17675 = null;
var G__17676 = (0);
var G__17677 = (0);
seq__17650_17657 = G__17674;
chunk__17651_17658 = G__17675;
count__17652_17659 = G__17676;
i__17653_17660 = G__17677;
continue;
}
} else {
}
}
break;
}

return goog.object.set(this$,"_hoplonWhenDom",null);
}
});})(temp__6736__auto__))
.call(null);
});})(temp__6736__auto__))
;
var G__17641 = (0);
return setTimeout(G__17640,G__17641);
}
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__17694 = args;
var vec__17695 = G__17694;
var seq__17696 = cljs.core.seq(vec__17695);
var first__17697 = cljs.core.first(seq__17696);
var seq__17696__$1 = cljs.core.next(seq__17696);
var arg = first__17697;
var args__$1 = seq__17696__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__17694__$1 = G__17694;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__17698 = G__17694__$1;
var seq__17699 = cljs.core.seq(vec__17698);
var first__17700 = cljs.core.first(seq__17699);
var seq__17699__$1 = cljs.core.next(seq__17699);
var arg__$1 = first__17700;
var args__$2 = seq__17699__$1;
if(cljs.core.not((function (){var or__7760__auto__ = arg__$1;
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return args__$2;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__17701 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__17694__$1,attr__$2,kids__$2,vec__17698,seq__17699,first__17700,seq__17699__$1,arg__$1,args__$2,attr,kids,G__17694,vec__17695,seq__17696,first__17697,seq__17696__$1,arg,args__$1){
return (function (p1__17678_SHARP_,p2__17679_SHARP_,p3__17680_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__17678_SHARP_,p2__17679_SHARP_,p3__17680_SHARP_);
});})(attr__$1,kids__$1,G__17694__$1,attr__$2,kids__$2,vec__17698,seq__17699,first__17700,seq__17699__$1,arg__$1,args__$2,attr,kids,G__17694,vec__17695,seq__17696,first__17697,seq__17696__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__17702 = kids__$2;
var G__17703 = args__$2;
attr__$1 = G__17701;
kids__$1 = G__17702;
G__17694__$1 = G__17703;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(arg__$1))){
var G__17704 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__17705 = kids__$2;
var G__17706 = cljs.core.rest(args__$2);
attr__$1 = G__17704;
kids__$1 = G__17705;
G__17694__$1 = G__17706;
continue;
} else {
if(cljs.core.truth_((hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__17707 = attr__$2;
var G__17708 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__17709 = args__$2;
attr__$1 = G__17707;
kids__$1 = G__17708;
G__17694__$1 = G__17709;
continue;
} else {
if(cljs.core.truth_((hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__17710 = attr__$2;
var G__17711 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__17712 = args__$2;
attr__$1 = G__17710;
kids__$1 = G__17711;
G__17694__$1 = G__17712;
continue;
} else {
var G__17713 = attr__$2;
var G__17714 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__17715 = args__$2;
attr__$1 = G__17713;
kids__$1 = G__17714;
G__17694__$1 = G__17715;
continue;

}
}
}
}
}
break;
}
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
return cljs.core.reduce_kv((function (p1__17717_SHARP_,p2__17716_SHARP_,p3__17718_SHARP_){
hoplon.core._attr_BANG_(p2__17716_SHARP_,p1__17717_SHARP_,p3__17718_SHARP_);

return p1__17717_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__17719){
var vec__17727 = p__17719;
var seq__17728 = cljs.core.seq(vec__17727);
var first__17729 = cljs.core.first(seq__17728);
var seq__17728__$1 = cljs.core.next(seq__17728);
var child_cell = first__17729;
var _ = seq__17728__$1;
var kids = vec__17727;
var this$__$1 = this$;
var seq__17730_17734 = cljs.core.seq(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids));
var chunk__17731_17735 = null;
var count__17732_17736 = (0);
var i__17733_17737 = (0);
while(true){
if((i__17733_17737 < count__17732_17736)){
var x_17738 = chunk__17731_17735.cljs$core$IIndexed$_nth$arity$2(null,i__17733_17737);
var temp__6738__auto___17739 = hoplon.core.__GT_node(x_17738);
if(cljs.core.truth_(temp__6738__auto___17739)){
var x_17740__$1 = temp__6738__auto___17739;
hoplon.core.append_child_BANG_(this$__$1,x_17740__$1);
} else {
}

var G__17741 = seq__17730_17734;
var G__17742 = chunk__17731_17735;
var G__17743 = count__17732_17736;
var G__17744 = (i__17733_17737 + (1));
seq__17730_17734 = G__17741;
chunk__17731_17735 = G__17742;
count__17732_17736 = G__17743;
i__17733_17737 = G__17744;
continue;
} else {
var temp__6738__auto___17745 = cljs.core.seq(seq__17730_17734);
if(temp__6738__auto___17745){
var seq__17730_17746__$1 = temp__6738__auto___17745;
if(cljs.core.chunked_seq_QMARK_(seq__17730_17746__$1)){
var c__8671__auto___17747 = cljs.core.chunk_first(seq__17730_17746__$1);
var G__17748 = cljs.core.chunk_rest(seq__17730_17746__$1);
var G__17749 = c__8671__auto___17747;
var G__17750 = cljs.core.count(c__8671__auto___17747);
var G__17751 = (0);
seq__17730_17734 = G__17748;
chunk__17731_17735 = G__17749;
count__17732_17736 = G__17750;
i__17733_17737 = G__17751;
continue;
} else {
var x_17752 = cljs.core.first(seq__17730_17746__$1);
var temp__6738__auto___17753__$1 = hoplon.core.__GT_node(x_17752);
if(cljs.core.truth_(temp__6738__auto___17753__$1)){
var x_17754__$1 = temp__6738__auto___17753__$1;
hoplon.core.append_child_BANG_(this$__$1,x_17754__$1);
} else {
}

var G__17755 = cljs.core.next(seq__17730_17746__$1);
var G__17756 = null;
var G__17757 = (0);
var G__17758 = (0);
seq__17730_17734 = G__17755;
chunk__17731_17735 = G__17756;
count__17732_17736 = G__17757;
i__17733_17737 = G__17758;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
Element.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.call = (function() { 
var G__17797__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__17760 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17760,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17760,(1),null);
var G__17763 = this$;
hoplon.core.add_attributes_BANG_(G__17763,attr);

hoplon.core.add_children_BANG_(G__17763,kids);

return G__17763;
};
var G__17797 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__17798__i = 0, G__17798__a = new Array(arguments.length -  1);
while (G__17798__i < G__17798__a.length) {G__17798__a[G__17798__i] = arguments[G__17798__i + 1]; ++G__17798__i;}
  args = new cljs.core.IndexedSeq(G__17798__a,0);
} 
return G__17797__delegate.call(this,self__,args);};
G__17797.cljs$lang$maxFixedArity = 1;
G__17797.cljs$lang$applyTo = (function (arglist__17799){
var self__ = cljs.core.first(arglist__17799);
var args = cljs.core.rest(arglist__17799);
return G__17797__delegate(self__,args);
});
G__17797.cljs$core$IFn$_invoke$arity$variadic = G__17797__delegate;
return G__17797;
})()
;

Element.prototype.apply = (function (self__,args17759){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args17759)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__17800__delegate = function (args){
var this$ = this;
var vec__17764 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17764,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17764,(1),null);
var G__17767 = this$;
hoplon.core.add_attributes_BANG_(G__17767,attr);

hoplon.core.add_children_BANG_(G__17767,kids);

return G__17767;
};
var G__17800 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17801__i = 0, G__17801__a = new Array(arguments.length -  0);
while (G__17801__i < G__17801__a.length) {G__17801__a[G__17801__i] = arguments[G__17801__i + 0]; ++G__17801__i;}
  args = new cljs.core.IndexedSeq(G__17801__a,0);
} 
return G__17800__delegate.call(this,args);};
G__17800.cljs$lang$maxFixedArity = 0;
G__17800.cljs$lang$applyTo = (function (arglist__17802){
var args = cljs.core.seq(arglist__17802);
return G__17800__delegate(args);
});
G__17800.cljs$core$IFn$_invoke$arity$variadic = G__17800__delegate;
return G__17800;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__17768 = cljs.core.seq(kvs);
var chunk__17770 = null;
var count__17771 = (0);
var i__17772 = (0);
while(true){
if((i__17772 < count__17771)){
var vec__17774 = chunk__17770.cljs$core$IIndexed$_nth$arity$2(null,i__17772);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17774,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17774,(1),null);
var k_17803__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttribute(k_17803__$1);
} else {
e.setAttribute(k_17803__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_17803__$1:v));
}

var G__17804 = seq__17768;
var G__17805 = chunk__17770;
var G__17806 = count__17771;
var G__17807 = (i__17772 + (1));
seq__17768 = G__17804;
chunk__17770 = G__17805;
count__17771 = G__17806;
i__17772 = G__17807;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__17768);
if(temp__6738__auto__){
var seq__17768__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17768__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__17768__$1);
var G__17808 = cljs.core.chunk_rest(seq__17768__$1);
var G__17809 = c__8671__auto__;
var G__17810 = cljs.core.count(c__8671__auto__);
var G__17811 = (0);
seq__17768 = G__17808;
chunk__17770 = G__17809;
count__17771 = G__17810;
i__17772 = G__17811;
continue;
} else {
var vec__17777 = cljs.core.first(seq__17768__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17777,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17777,(1),null);
var k_17812__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttribute(k_17812__$1);
} else {
e.setAttribute(k_17812__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_17812__$1:v));
}

var G__17813 = cljs.core.next(seq__17768__$1);
var G__17814 = null;
var G__17815 = (0);
var G__17816 = (0);
seq__17768 = G__17813;
chunk__17770 = G__17814;
count__17771 = G__17815;
i__17772 = G__17816;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__17780 = cljs.core.seq(kvs);
var chunk__17781 = null;
var count__17782 = (0);
var i__17783 = (0);
while(true){
if((i__17783 < count__17782)){
var vec__17784 = chunk__17781.cljs$core$IIndexed$_nth$arity$2(null,i__17783);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17784,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17784,(1),null);
var G__17787_17817 = e.style;
var G__17788_17818 = cljs.core.name(k);
var G__17789_17819 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__17787_17817,G__17788_17818,G__17789_17819);

var G__17820 = seq__17780;
var G__17821 = chunk__17781;
var G__17822 = count__17782;
var G__17823 = (i__17783 + (1));
seq__17780 = G__17820;
chunk__17781 = G__17821;
count__17782 = G__17822;
i__17783 = G__17823;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__17780);
if(temp__6738__auto__){
var seq__17780__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17780__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__17780__$1);
var G__17824 = cljs.core.chunk_rest(seq__17780__$1);
var G__17825 = c__8671__auto__;
var G__17826 = cljs.core.count(c__8671__auto__);
var G__17827 = (0);
seq__17780 = G__17824;
chunk__17781 = G__17825;
count__17782 = G__17826;
i__17783 = G__17827;
continue;
} else {
var vec__17790 = cljs.core.first(seq__17780__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17790,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17790,(1),null);
var G__17793_17828 = e.style;
var G__17794_17829 = cljs.core.name(k);
var G__17795_17830 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__17793_17828,G__17794_17829,G__17795_17830);

var G__17831 = cljs.core.next(seq__17780__$1);
var G__17832 = null;
var G__17833 = (0);
var G__17834 = (0);
seq__17780 = G__17831;
chunk__17781 = G__17832;
count__17782 = G__17833;
i__17783 = G__17834;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(!(hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e17796){if((e17796 instanceof Error)){
var _ = e17796;
return null;
} else {
throw e17796;

}
}}
});

Element.prototype.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.removeChild(child);
});

Element.prototype.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.replaceChild(new$,existing);
});

Element.prototype.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.insertBefore(new$,existing);
});
hoplon.core.make_singleton_ctor = (function hoplon$core$make_singleton_ctor(elem){
return (function() { 
var G__17841__delegate = function (args){
var vec__17838 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17838,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17838,(1),null);
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_(elem);

return hoplon.core.add_children_BANG_(elem,kids);
} else {
return null;
}
};
var G__17841 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17842__i = 0, G__17842__a = new Array(arguments.length -  0);
while (G__17842__i < G__17842__a.length) {G__17842__a[G__17842__i] = arguments[G__17842__i + 0]; ++G__17842__i;}
  args = new cljs.core.IndexedSeq(G__17842__a,0);
} 
return G__17841__delegate.call(this,args);};
G__17841.cljs$lang$maxFixedArity = 0;
G__17841.cljs$lang$applyTo = (function (arglist__17843){
var args = cljs.core.seq(arglist__17843);
return G__17841__delegate(args);
});
G__17841.cljs$core$IFn$_invoke$arity$variadic = G__17841__delegate;
return G__17841;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
var mkelem = (function() { 
var G__17847__delegate = function (rest__17844_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),rest__17844_SHARP_);
};
var G__17847 = function (var_args){
var rest__17844_SHARP_ = null;
if (arguments.length > 0) {
var G__17848__i = 0, G__17848__a = new Array(arguments.length -  0);
while (G__17848__i < G__17848__a.length) {G__17848__a[G__17848__i] = arguments[G__17848__i + 0]; ++G__17848__i;}
  rest__17844_SHARP_ = new cljs.core.IndexedSeq(G__17848__a,0);
} 
return G__17847__delegate.call(this,rest__17844_SHARP_);};
G__17847.cljs$lang$maxFixedArity = 0;
G__17847.cljs$lang$applyTo = (function (arglist__17849){
var rest__17844_SHARP_ = cljs.core.seq(arglist__17849);
return G__17847__delegate(rest__17844_SHARP_);
});
G__17847.cljs$core$IFn$_invoke$arity$variadic = G__17847__delegate;
return G__17847;
})()
;
if(!(hoplon.core.is_ie8)){
return mkelem;
} else {
return ((function (mkelem){
return (function() { 
var G__17850__delegate = function (args){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mkelem,args);
}catch (e17846){if((e17846 instanceof Error)){
var _ = e17846;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((hoplon.core.make_elem_ctor.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.make_elem_ctor.cljs$core$IFn$_invoke$arity$1("div") : hoplon.core.make_elem_ctor.call(null,"div")),args);
} else {
throw e17846;

}
}};
var G__17850 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17851__i = 0, G__17851__a = new Array(arguments.length -  0);
while (G__17851__i < G__17851__a.length) {G__17851__a[G__17851__i] = arguments[G__17851__i + 0]; ++G__17851__i;}
  args = new cljs.core.IndexedSeq(G__17851__a,0);
} 
return G__17850__delegate.call(this,args);};
G__17850.cljs$lang$maxFixedArity = 0;
G__17850.cljs$lang$applyTo = (function (arglist__17852){
var args = cljs.core.seq(arglist__17852);
return G__17850__delegate(args);
});
G__17850.cljs$core$IFn$_invoke$arity$variadic = G__17850__delegate;
return G__17850;
})()
;
;})(mkelem))
}
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__8988__auto__ = [];
var len__8981__auto___17854 = arguments.length;
var i__8982__auto___17855 = (0);
while(true){
if((i__8982__auto___17855 < len__8981__auto___17854)){
args__8988__auto__.push((arguments[i__8982__auto___17855]));

var G__17856 = (i__8982__auto___17855 + (1));
i__8982__auto___17855 = G__17856;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){

return hoplon.core.add_attributes_BANG_(document.documentElement,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(hoplon.core.parse_args(args),(0)));
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq17853){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17853));
});

/**
 * Updates the document's `head` element in place.
 */
hoplon.core.head = hoplon.core.make_singleton_ctor((hoplon.core._head_STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core._head_STAR_.cljs$core$IFn$_invoke$arity$1(document) : hoplon.core._head_STAR_.call(null,document)));
/**
 * Updates the document's `body` element in place.
 */
hoplon.core.body = hoplon.core.make_singleton_ctor(document.body);
hoplon.core.a = hoplon.core.make_elem_ctor("a");
hoplon.core.abbr = hoplon.core.make_elem_ctor("abbr");
hoplon.core.address = hoplon.core.make_elem_ctor("address");
hoplon.core.area = hoplon.core.make_elem_ctor("area");
hoplon.core.article = hoplon.core.make_elem_ctor("article");
hoplon.core.aside = hoplon.core.make_elem_ctor("aside");
hoplon.core.audio = hoplon.core.make_elem_ctor("audio");
hoplon.core.b = hoplon.core.make_elem_ctor("b");
hoplon.core.base = hoplon.core.make_elem_ctor("base");
hoplon.core.bdi = hoplon.core.make_elem_ctor("bdi");
hoplon.core.bdo = hoplon.core.make_elem_ctor("bdo");
hoplon.core.blockquote = hoplon.core.make_elem_ctor("blockquote");
hoplon.core.br = hoplon.core.make_elem_ctor("br");
hoplon.core.button = hoplon.core.make_elem_ctor("button");
hoplon.core.canvas = hoplon.core.make_elem_ctor("canvas");
hoplon.core.caption = hoplon.core.make_elem_ctor("caption");
hoplon.core.cite = hoplon.core.make_elem_ctor("cite");
hoplon.core.code = hoplon.core.make_elem_ctor("code");
hoplon.core.col = hoplon.core.make_elem_ctor("col");
hoplon.core.colgroup = hoplon.core.make_elem_ctor("colgroup");
hoplon.core.data = hoplon.core.make_elem_ctor("data");
hoplon.core.datalist = hoplon.core.make_elem_ctor("datalist");
hoplon.core.dd = hoplon.core.make_elem_ctor("dd");
hoplon.core.del = hoplon.core.make_elem_ctor("del");
hoplon.core.details = hoplon.core.make_elem_ctor("details");
hoplon.core.dfn = hoplon.core.make_elem_ctor("dfn");
hoplon.core.dialog = hoplon.core.make_elem_ctor("dialog");
hoplon.core.div = hoplon.core.make_elem_ctor("div");
hoplon.core.dl = hoplon.core.make_elem_ctor("dl");
hoplon.core.dt = hoplon.core.make_elem_ctor("dt");
hoplon.core.em = hoplon.core.make_elem_ctor("em");
hoplon.core.embed = hoplon.core.make_elem_ctor("embed");
hoplon.core.fieldset = hoplon.core.make_elem_ctor("fieldset");
hoplon.core.figcaption = hoplon.core.make_elem_ctor("figcaption");
hoplon.core.figure = hoplon.core.make_elem_ctor("figure");
hoplon.core.footer = hoplon.core.make_elem_ctor("footer");
hoplon.core.form = hoplon.core.make_elem_ctor("form");
hoplon.core.h1 = hoplon.core.make_elem_ctor("h1");
hoplon.core.h2 = hoplon.core.make_elem_ctor("h2");
hoplon.core.h3 = hoplon.core.make_elem_ctor("h3");
hoplon.core.h4 = hoplon.core.make_elem_ctor("h4");
hoplon.core.h5 = hoplon.core.make_elem_ctor("h5");
hoplon.core.h6 = hoplon.core.make_elem_ctor("h6");
hoplon.core.header = hoplon.core.make_elem_ctor("header");
hoplon.core.hgroup = hoplon.core.make_elem_ctor("hgroup");
hoplon.core.hr = hoplon.core.make_elem_ctor("hr");
hoplon.core.i = hoplon.core.make_elem_ctor("i");
hoplon.core.iframe = hoplon.core.make_elem_ctor("iframe");
hoplon.core.img = hoplon.core.make_elem_ctor("img");
hoplon.core.input = hoplon.core.make_elem_ctor("input");
hoplon.core.ins = hoplon.core.make_elem_ctor("ins");
hoplon.core.kbd = hoplon.core.make_elem_ctor("kbd");
hoplon.core.keygen = hoplon.core.make_elem_ctor("keygen");
hoplon.core.label = hoplon.core.make_elem_ctor("label");
hoplon.core.legend = hoplon.core.make_elem_ctor("legend");
hoplon.core.li = hoplon.core.make_elem_ctor("li");
hoplon.core.link = hoplon.core.make_elem_ctor("link");
hoplon.core.main = hoplon.core.make_elem_ctor("main");
hoplon.core.html_map = hoplon.core.make_elem_ctor("map");
hoplon.core.mark = hoplon.core.make_elem_ctor("mark");
hoplon.core.menu = hoplon.core.make_elem_ctor("menu");
hoplon.core.menuitem = hoplon.core.make_elem_ctor("menuitem");
hoplon.core.html_meta = hoplon.core.make_elem_ctor("meta");
hoplon.core.meter = hoplon.core.make_elem_ctor("meter");
hoplon.core.multicol = hoplon.core.make_elem_ctor("multicol");
hoplon.core.nav = hoplon.core.make_elem_ctor("nav");
hoplon.core.noframes = hoplon.core.make_elem_ctor("noframes");
hoplon.core.noscript = hoplon.core.make_elem_ctor("noscript");
hoplon.core.html_object = hoplon.core.make_elem_ctor("object");
hoplon.core.ol = hoplon.core.make_elem_ctor("ol");
hoplon.core.optgroup = hoplon.core.make_elem_ctor("optgroup");
hoplon.core.option = hoplon.core.make_elem_ctor("option");
hoplon.core.output = hoplon.core.make_elem_ctor("output");
hoplon.core.p = hoplon.core.make_elem_ctor("p");
hoplon.core.param = hoplon.core.make_elem_ctor("param");
hoplon.core.picture = hoplon.core.make_elem_ctor("picture");
hoplon.core.pre = hoplon.core.make_elem_ctor("pre");
hoplon.core.progress = hoplon.core.make_elem_ctor("progress");
hoplon.core.q = hoplon.core.make_elem_ctor("q");
hoplon.core.rp = hoplon.core.make_elem_ctor("rp");
hoplon.core.rt = hoplon.core.make_elem_ctor("rt");
hoplon.core.rtc = hoplon.core.make_elem_ctor("rtc");
hoplon.core.ruby = hoplon.core.make_elem_ctor("ruby");
hoplon.core.s = hoplon.core.make_elem_ctor("s");
hoplon.core.samp = hoplon.core.make_elem_ctor("samp");
hoplon.core.script = hoplon.core.make_elem_ctor("script");
hoplon.core.section = hoplon.core.make_elem_ctor("section");
hoplon.core.select = hoplon.core.make_elem_ctor("select");
hoplon.core.shadow = hoplon.core.make_elem_ctor("shadow");
hoplon.core.small = hoplon.core.make_elem_ctor("small");
hoplon.core.source = hoplon.core.make_elem_ctor("source");
hoplon.core.span = hoplon.core.make_elem_ctor("span");
hoplon.core.strong = hoplon.core.make_elem_ctor("strong");
hoplon.core.style = hoplon.core.make_elem_ctor("style");
hoplon.core.sub = hoplon.core.make_elem_ctor("sub");
hoplon.core.summary = hoplon.core.make_elem_ctor("summary");
hoplon.core.sup = hoplon.core.make_elem_ctor("sup");
hoplon.core.table = hoplon.core.make_elem_ctor("table");
hoplon.core.tbody = hoplon.core.make_elem_ctor("tbody");
hoplon.core.td = hoplon.core.make_elem_ctor("td");
hoplon.core.template = hoplon.core.make_elem_ctor("template");
hoplon.core.textarea = hoplon.core.make_elem_ctor("textarea");
hoplon.core.tfoot = hoplon.core.make_elem_ctor("tfoot");
hoplon.core.th = hoplon.core.make_elem_ctor("th");
hoplon.core.thead = hoplon.core.make_elem_ctor("thead");
hoplon.core.html_time = hoplon.core.make_elem_ctor("time");
hoplon.core.title = hoplon.core.make_elem_ctor("title");
hoplon.core.tr = hoplon.core.make_elem_ctor("tr");
hoplon.core.track = hoplon.core.make_elem_ctor("track");
hoplon.core.u = hoplon.core.make_elem_ctor("u");
hoplon.core.ul = hoplon.core.make_elem_ctor("ul");
hoplon.core.html_var = hoplon.core.make_elem_ctor("var");
hoplon.core.video = hoplon.core.make_elem_ctor("video");
hoplon.core.wbr = hoplon.core.make_elem_ctor("wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__17857_SHARP_){
return document.createTextNode(p1__17857_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__17858_SHARP_){
return document.createComment(p1__17858_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
var G__17861 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__17862 = (0);
return setTimeout(G__17861,G__17862);
}));
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return document.dispatchEvent("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return document.addEventListener("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return document.body.addEventListener("submit",(function (p1__17863_SHARP_){
var e = p1__17863_SHARP_.target;
if(cljs.core.truth_((function (){var or__7760__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__17863_SHARP_.preventDefault();
}
}));
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__8791__auto__ = (function (){var G__17864 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17864) : cljs.core.atom.call(null,G__17864));
})();
var prefer_table__8792__auto__ = (function (){var G__17865 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17865) : cljs.core.atom.call(null,G__17865));
})();
var method_cache__8793__auto__ = (function (){var G__17866 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17866) : cljs.core.atom.call(null,G__17866));
})();
var cached_hierarchy__8794__auto__ = (function (){var G__17867 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17867) : cljs.core.atom.call(null,G__17867));
})();
var hierarchy__8795__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),((function (method_table__8791__auto__,prefer_table__8792__auto__,method_cache__8793__auto__,cached_hierarchy__8794__auto__,hierarchy__8795__auto__){
return (function (elem,key,val){
var temp__6736__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__6736__auto__)){
var n = temp__6736__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__8791__auto__,prefer_table__8792__auto__,method_cache__8793__auto__,cached_hierarchy__8794__auto__,hierarchy__8795__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__8795__auto__,method_table__8791__auto__,prefer_table__8792__auto__,method_cache__8793__auto__,cached_hierarchy__8794__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__17868 = elem;
var G__17869 = cljs.core.cst$kw$attr;
var G__17870 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__17868,G__17869,G__17870) : hoplon.core.do_BANG_.call(null,G__17868,G__17869,G__17870));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_styles_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__8791__auto__ = (function (){var G__17871 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17871) : cljs.core.atom.call(null,G__17871));
})();
var prefer_table__8792__auto__ = (function (){var G__17872 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17872) : cljs.core.atom.call(null,G__17872));
})();
var method_cache__8793__auto__ = (function (){var G__17873 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17873) : cljs.core.atom.call(null,G__17873));
})();
var cached_hierarchy__8794__auto__ = (function (){var G__17874 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17874) : cljs.core.atom.call(null,G__17874));
})();
var hierarchy__8795__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),((function (method_table__8791__auto__,prefer_table__8792__auto__,method_cache__8793__auto__,cached_hierarchy__8794__auto__,hierarchy__8795__auto__){
return (function (elem,key,val){
var temp__6736__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__6736__auto__)){
var n = temp__6736__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__8791__auto__,prefer_table__8792__auto__,method_cache__8793__auto__,cached_hierarchy__8794__auto__,hierarchy__8795__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__8795__auto__,method_table__8791__auto__,prefer_table__8792__auto__,method_cache__8793__auto__,cached_hierarchy__8794__auto__));
})();
}
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return elem.addEventListener(cljs.core.name(event),callback);
}));
}));
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return elem.addEventListener(cljs.core.name(event),callback);
}));
}));
/**
 * Given a cell items containing a seqable collection, constructs a cell that
 *   works like a fill vector. The template tpl is a function of one argument: the
 *   formula cell containing the ith item in items. The tpl function is called
 *   once (and only once) for each index in items. When the items collection
 *   shrinks the DOM element created by the template is not destroyed--it is only
 *   removed from the DOM and cached. When the items collection grows again those
 *   cached elements will be reinserted into the DOM at their original index.
 */
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = (function (){var G__17889 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17889) : cljs.core.atom.call(null,G__17889));
})();
var items_seq = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck){
return (function (G__17890,G__17891){
return (G__17890.cljs$core$IFn$_invoke$arity$1 ? G__17890.cljs$core$IFn$_invoke$arity$1(G__17891) : G__17890.call(null,G__17891));
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__17875_SHARP_){
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck,items_seq){
return (function (G__17893,G__17894,G__17892){
return (G__17892.cljs$core$IFn$_invoke$arity$2 ? G__17892.cljs$core$IFn$_invoke$arity$2(G__17893,G__17894) : G__17892.call(null,G__17893,G__17894));
});})(on_deck,items_seq))
).call(null,items_seq,p1__17875_SHARP_,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__17876_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__17876_SHARP_) : cljs.core.deref.call(null,p1__17876_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__17876_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count(old_items);
var new$ = cljs.core.count(new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__17895 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__17896 = null;
var count__17897 = (0);
var i__17898 = (0);
while(true){
if((i__17898 < count__17897)){
var i = chunk__17896.cljs$core$IIndexed$_nth$arity$2(null,i__17898);
var e_17901 = (function (){var or__7760__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
var G__17899 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__17899) : tpl.call(null,G__17899));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_17901);

var G__17902 = seq__17895;
var G__17903 = chunk__17896;
var G__17904 = count__17897;
var G__17905 = (i__17898 + (1));
seq__17895 = G__17902;
chunk__17896 = G__17903;
count__17897 = G__17904;
i__17898 = G__17905;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__17895);
if(temp__6738__auto__){
var seq__17895__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17895__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__17895__$1);
var G__17906 = cljs.core.chunk_rest(seq__17895__$1);
var G__17907 = c__8671__auto__;
var G__17908 = cljs.core.count(c__8671__auto__);
var G__17909 = (0);
seq__17895 = G__17906;
chunk__17896 = G__17907;
count__17897 = G__17908;
i__17898 = G__17909;
continue;
} else {
var i = cljs.core.first(seq__17895__$1);
var e_17910 = (function (){var or__7760__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
var G__17900 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__17900) : tpl.call(null,G__17900));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_17910);

var G__17911 = cljs.core.next(seq__17895__$1);
var G__17912 = null;
var G__17913 = (0);
var G__17914 = (0);
seq__17895 = G__17911;
chunk__17896 = G__17912;
count__17897 = G__17913;
i__17898 = G__17914;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__8781__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__8781__auto__)){
var e_17915 = cljs.core.peek((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current) : cljs.core.deref.call(null,current)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_17915);

var G__17916 = (_ + (1));
_ = G__17916;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(current,on_deck,items_seq,ith_item,shift_BANG_))
);

return current;
});
/**
 * Defines a cell whose value is the URI fragment.
 */
hoplon.core.route_cell = (function hoplon$core$route_cell(var_args){
var args__8988__auto__ = [];
var len__8981__auto___17927 = arguments.length;
var i__8982__auto___17928 = (0);
while(true){
if((i__8982__auto___17928 < len__8981__auto___17927)){
args__8988__auto__.push((arguments[i__8982__auto___17928]));

var G__17929 = (i__8982__auto___17928 + (1));
i__8982__auto___17928 = G__17929;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__17918){
var vec__17919 = p__17918;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17919,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,vec__17919,default$){
return (function (G__17922,G__17924,G__17923){
var or__7760__auto__ = (function (){var and__7748__auto__ = (G__17922.cljs$core$IFn$_invoke$arity$1 ? G__17922.cljs$core$IFn$_invoke$arity$1(G__17923) : G__17922.call(null,G__17923));
if(cljs.core.truth_(and__7748__auto__)){
return G__17923;
} else {
return and__7748__auto__;
}
})();
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return G__17924;
}
});})(c,vec__17919,default$))
).call(null,cljs.core.seq,default$,c);
window.addEventListener("hashchange",((function (_,c,vec__17919,default$){
return (function (){
var G__17925 = c;
var G__17926 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17925,G__17926) : cljs.core.reset_BANG_.call(null,G__17925,G__17926));
});})(_,c,vec__17919,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq17917){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17917));
});
