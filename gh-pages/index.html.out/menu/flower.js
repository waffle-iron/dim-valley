// Compiled by ClojureScript 1.9.293 {}
goog.provide('menu.flower');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('fonts.hoplon');
goog.require('fonts.config');
goog.require('colours.ui_gradients');
menu.flower.easing = "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
menu.flower.polar__GT_cartesian = (function menu$flower$polar__GT_cartesian(radius,radians){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(radius * Math.cos(radians)),(radius * Math.sin(radians))], null);
});
menu.flower.n__GT_px = (function menu$flower$n__GT_px(n){
return [cljs.core.str(n),cljs.core.str("px")].join('');
});
menu.flower.outer_wrapper = (function menu$flower$outer_wrapper(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9668 = arguments.length;
var i__7951__auto___9669 = (0);
while(true){
if((i__7951__auto___9669 < len__7950__auto___9668)){
args__7957__auto__.push((arguments[i__7951__auto___9669]));

var G__9670 = (i__7951__auto___9669 + (1));
i__7951__auto___9669 = G__9670;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((3) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((3)),(0),null)):null);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7958__auto__);
});

menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic = (function (offset,outer_radius,item_radius,children){
cljs.core.prn.call(null,outer_radius);

return hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,(function (G__9667,G__9666){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),G__9666.call(null,G__9667),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),G__9666.call(null,G__9667),new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible"], null);
})).call(null,outer_radius,menu.flower.n__GT_px),children);
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (3);

menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq9662){
var G__9663 = cljs.core.first.call(null,seq9662);
var seq9662__$1 = cljs.core.next.call(null,seq9662);
var G__9664 = cljs.core.first.call(null,seq9662__$1);
var seq9662__$2 = cljs.core.next.call(null,seq9662__$1);
var G__9665 = cljs.core.first.call(null,seq9662__$2);
var seq9662__$3 = cljs.core.next.call(null,seq9662__$2);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__9663,G__9664,G__9665,seq9662__$3);
});

menu.flower.open_button = (function menu$flower$open_button(open_QMARK_,radius,transition_length){
var open_QMARK___$1 = (function (){var or__6842__auto__ = open_QMARK_;
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return javelin.core.cell.call(null,false);
}
})();
var transition_length__$1 = (transition_length / (2));
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"click","click",1912301393),((function (open_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.swap_BANG_.call(null,open_QMARK___$1,cljs.core.not);
});})(open_QMARK___$1,transition_length__$1))
,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (open_QMARK___$1,transition_length__$1){
return (function (G__9707,G__9708){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),(G__9707 * (2)),new cljs.core.Keyword(null,"height","height",1025178622),(G__9707 * (2)),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),G__9708.call(null,G__9707),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),G__9708.call(null,(- G__9707)),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),G__9708.call(null,(- G__9707)),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null);
});})(open_QMARK___$1,transition_length__$1))
).call(null,radius,menu.flower.n__GT_px),(function (){var width = javelin.core.formula.call(null,((function (open_QMARK___$1,transition_length__$1){
return (function (G__9709){
return (G__9709 / (2));
});})(open_QMARK___$1,transition_length__$1))
).call(null,radius);
var rotated_offset = javelin.core.formula.call(null,((function (width,open_QMARK___$1,transition_length__$1){
return (function (G__9710){
return ((G__9710 * Math.sin((Math.PI / (4)))) / (2));
});})(width,open_QMARK___$1,transition_length__$1))
).call(null,width);
var height = javelin.core.formula.call(null,((function (width,rotated_offset,open_QMARK___$1,transition_length__$1){
return (function (G__9711){
return (G__9711 / (12));
});})(width,rotated_offset,open_QMARK___$1,transition_length__$1))
).call(null,radius);
var left = javelin.core.formula.call(null,((function (width,rotated_offset,height,open_QMARK___$1,transition_length__$1){
return (function (G__9713,G__9712){
return (G__9712 + (- (G__9713 / (2))));
});})(width,rotated_offset,height,open_QMARK___$1,transition_length__$1))
).call(null,width,radius);
var top = javelin.core.formula.call(null,((function (width,rotated_offset,height,left,open_QMARK___$1,transition_length__$1){
return (function (G__9715,G__9714){
return (G__9714 + (- (G__9715 / (2))));
});})(width,rotated_offset,height,left,open_QMARK___$1,transition_length__$1))
).call(null,height,radius);
var color = javelin.core.formula.call(null,((function (width,rotated_offset,height,left,top,open_QMARK___$1,transition_length__$1){
return (function (G__9716,G__9717){
return G__9716.call(null,G__9717.call(null));
});})(width,rotated_offset,height,left,top,open_QMARK___$1,transition_length__$1))
).call(null,cljs.core.last,colours.ui_gradients.stops);
var default_css = javelin.core.formula.call(null,((function (width,rotated_offset,height,left,top,color,open_QMARK___$1,transition_length__$1){
return (function (G__9720,G__9721,G__9722,G__9719,G__9723,G__9718){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),G__9718.call(null,G__9719),new cljs.core.Keyword(null,"height","height",1025178622),G__9718.call(null,G__9720),new cljs.core.Keyword(null,"left","left",-399115937),G__9718.call(null,G__9721),new cljs.core.Keyword(null,"background-color","background-color",570434026),G__9722,new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"transition","transition",765692007),[cljs.core.str("transform "),cljs.core.str(G__9723),cljs.core.str("s ease, "),cljs.core.str("background-color "),cljs.core.str(G__9723),cljs.core.str("s ease")].join('')], null);
});})(width,rotated_offset,height,left,top,color,open_QMARK___$1,transition_length__$1))
).call(null,height,left,color,width,transition_length__$1,menu.flower.n__GT_px);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (width,rotated_offset,height,left,top,color,default_css,open_QMARK___$1,transition_length__$1){
return (function (G__9730,G__9728,G__9725,G__9727,G__9724,G__9729,G__9726){
return G__9724.call(null,G__9725,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),G__9726.call(null,(G__9727 - ((2) * G__9728))),new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate3d(0px, "),cljs.core.str((cljs.core.truth_(G__9729)?G__9730:(0))),cljs.core.str("px, 0px)"),cljs.core.str("rotate("),cljs.core.str((cljs.core.truth_(G__9729)?"45deg":"0deg")),cljs.core.str(") ")].join('')], null),(cljs.core.truth_(G__9729)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"white"], null):null));
});})(width,rotated_offset,height,left,top,color,default_css,open_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,top,cljs.core.merge,open_QMARK___$1,menu.flower.n__GT_px)),hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (width,rotated_offset,height,left,top,color,default_css,open_QMARK___$1,transition_length__$1){
return (function (G__9732,G__9734,G__9731,G__9735,G__9733){
return G__9731.call(null,G__9732,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),G__9733.call(null,G__9734),new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("scale("),cljs.core.str((cljs.core.truth_(G__9735)?(0):(1))),cljs.core.str(")")].join('')], null));
});})(width,rotated_offset,height,left,top,color,default_css,open_QMARK___$1,transition_length__$1))
).call(null,default_css,top,cljs.core.merge,open_QMARK___$1,menu.flower.n__GT_px)),hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (width,rotated_offset,height,left,top,color,default_css,open_QMARK___$1,transition_length__$1){
return (function (G__9742,G__9740,G__9737,G__9739,G__9736,G__9741,G__9738){
return G__9736.call(null,G__9737,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),G__9738.call(null,(G__9739 + ((2) * G__9740))),new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate3d(0px, -"),cljs.core.str((cljs.core.truth_(G__9741)?G__9742:(0))),cljs.core.str("px, 0px)"),cljs.core.str("rotate("),cljs.core.str((cljs.core.truth_(G__9741)?"-45deg":"0deg")),cljs.core.str(") ")].join('')], null),(cljs.core.truth_(G__9741)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"white"], null):null));
});})(width,rotated_offset,height,left,top,color,default_css,open_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,top,cljs.core.merge,open_QMARK___$1,menu.flower.n__GT_px))], null);
})());
});
menu.flower.menu = (function menu$flower$menu(items,radius){
var open_QMARK_ = javelin.core.cell.call(null,false);
var ratio = 0.4;
var offset = javelin.core.formula.call(null,((function (open_QMARK_,ratio){
return (function (G__9798,G__9799){
return (G__9798 / ((1) + G__9799));
});})(open_QMARK_,ratio))
).call(null,radius,ratio);
var item_radius = javelin.core.formula.call(null,((function (open_QMARK_,ratio,offset){
return (function (G__9801,G__9800){
return (G__9800 * G__9801);
});})(open_QMARK_,ratio,offset))
).call(null,offset,ratio);
var radians_per_item = javelin.core.formula.call(null,((function (open_QMARK_,ratio,offset,item_radius){
return (function (G__9803,G__9802){
return (((2) * Math.PI) / G__9802.call(null,G__9803));
});})(open_QMARK_,ratio,offset,item_radius))
).call(null,items,cljs.core.count);
var i_xy_item = javelin.core.formula.call(null,((function (open_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__9808,G__9804,G__9806,G__9805,G__9807){
return G__9804.call(null,((function (open_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,G__9805.call(null,G__9806,(i * G__9807)),item], null);
});})(open_QMARK_,ratio,offset,item_radius,radians_per_item))
,G__9808);
});})(open_QMARK_,ratio,offset,item_radius,radians_per_item))
).call(null,items,cljs.core.map_indexed,offset,menu.flower.polar__GT_cartesian,radians_per_item);
var total_transition_length = 0.4;
var base_transition_length = javelin.core.formula.call(null,((function (open_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__9811,G__9809,G__9810){
return (G__9809 / G__9810.call(null,G__9811));
});})(open_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
).call(null,items,total_transition_length,cljs.core.count);
return menu.flower.outer_wrapper.call(null,(0),radius,item_radius,hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null),menu.flower.open_button.call(null,open_QMARK_,item_radius,total_transition_length)),hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(0)], null),hoplon.core.loop_tpl_STAR_.call(null,i_xy_item,((function (open_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__8758__auto__){
var vec__9824 = javelin.core.cell_map.call(null,cljs.core.identity,javelin.core.formula.call(null,((function (open_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__9827){
var vec__9828 = p__9827;
var i = cljs.core.nth.call(null,vec__9828,(0),null);
var vec__9831 = cljs.core.nth.call(null,vec__9828,(1),null);
var x = cljs.core.nth.call(null,vec__9831,(0),null);
var y = cljs.core.nth.call(null,vec__9831,(1),null);
var item = cljs.core.nth.call(null,vec__9828,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(open_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item__8758__auto__));
var x = cljs.core.nth.call(null,vec__9824,(0),null);
var i = cljs.core.nth.call(null,vec__9824,(1),null);
var y = cljs.core.nth.call(null,vec__9824,(2),null);
var item = cljs.core.nth.call(null,vec__9824,(3),null);
var transition_delay = javelin.core.formula.call(null,((function (vec__9824,x,i,y,item,open_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__9836,G__9835,G__9834){
if(cljs.core.truth_(G__9834)){
return (G__9835 * G__9836);
} else {
return (0);
}
});})(vec__9824,x,i,y,item,open_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,base_transition_length,i,open_QMARK_);
var url = javelin.core.formula.call(null,((function (transition_delay,vec__9824,x,i,y,item,open_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__9837){
return new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__9837);
});})(transition_delay,vec__9824,x,i,y,item,open_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var text = javelin.core.formula.call(null,((function (transition_delay,url,vec__9824,x,i,y,item,open_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__9838){
return new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(G__9838);
});})(transition_delay,url,vec__9824,x,i,y,item,open_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
return hoplon.core.div.call(null,(function (){var con__8766__auto__ = (new cljs.core.Delay(((function (transition_delay,url,text,vec__9824,x,i,y,item,open_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return hoplon.core.table.call(null,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null),hoplon.core.tr.call(null,hoplon.core.td.call(null,new cljs.core.Keyword(null,"valign","valign",1485197511),"center",new cljs.core.Keyword(null,"css","css",1135045163),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null),fonts.hoplon.font_map__GT_css_map.call(null,fonts.config.playfair)),text)));
});})(transition_delay,url,text,vec__9824,x,i,y,item,open_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__8767__auto__ = (new cljs.core.Delay(((function (con__8766__auto__,transition_delay,url,text,vec__9824,x,i,y,item,open_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__8766__auto__,transition_delay,url,text,vec__9824,x,i,y,item,open_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__8768__auto__ = ((function (con__8766__auto__,alt__8767__auto__,transition_delay,url,text,vec__9824,x,i,y,item,open_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__8769__auto__){
return cljs.core.deref.call(null,(function (){var or__6842__auto__ = (cljs.core.truth_(p__8769__auto__)?con__8766__auto__:alt__8767__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return cljs.core.atom.call(null);
}
})());
});})(con__8766__auto__,alt__8767__auto__,transition_delay,url,text,vec__9824,x,i,y,item,open_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
return javelin.core.formula.call(null,tpl__8768__auto__).call(null,text);
})(),hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (transition_delay,url,text,vec__9824,x,i,y,item,open_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__9841,G__9840,G__9839,G__9842){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"background-color","background-color",570434026),"white",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"transition","transition",765692007),[cljs.core.str("opacity "),cljs.core.str(G__9839),cljs.core.str("s "),cljs.core.str(G__9840),cljs.core.str(" "),cljs.core.str(G__9841),cljs.core.str("s")].join(''),new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(G__9842)?(0):(1))], null);
});})(transition_delay,url,text,vec__9824,x,i,y,item,open_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,transition_delay,menu.flower.easing,total_transition_length,open_QMARK_)),new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (transition_delay,url,text,vec__9824,x,i,y,item,open_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__9851,G__9852,G__9845,G__9848,G__9847,G__9843,G__9846,G__9850,G__9844,G__9849){
return G__9843.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"background-repeat","background-repeat",-387201191),new cljs.core.Keyword(null,"background-position","background-position",1112702746),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"background-size","background-size",-1248630243),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],[G__9844.call(null,(- G__9845)),[cljs.core.str("transform "),cljs.core.str(G__9846),cljs.core.str("s "),cljs.core.str(G__9847),cljs.core.str(" "),cljs.core.str(G__9848),cljs.core.str("s")].join(''),"hidden","white",((2) * G__9845),"pointer",(cljs.core.truth_(G__9849)?[cljs.core.str("url('"),cljs.core.str(G__9849),cljs.core.str("')")].join(''):null),"absolute","no-repeat","center","4px solid",G__9844.call(null,G__9845),"contain",((2) * G__9845),G__9844.call(null,(- G__9845))]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),(cljs.core.truth_(G__9850)?[cljs.core.str("translate("),cljs.core.str(G__9851),cljs.core.str("px, "),cljs.core.str(G__9852),cljs.core.str("px)")].join(''):"translate(0, 0)")], null));
});})(transition_delay,url,text,vec__9824,x,i,y,item,open_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,x,y,item_radius,transition_delay,menu.flower.easing,cljs.core.merge,total_transition_length,open_QMARK_,menu.flower.n__GT_px,url));
});})(open_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
)));
});

//# sourceMappingURL=flower.js.map