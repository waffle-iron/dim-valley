(ns menu.flower
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]))

; Based on https://codepen.io/jordanlachance/pen/yOJdRr

(defn open-button
 [open? width]
 (let [open? (or open? (j/cell false))]
  (h/div
   :click #(swap! open? not)

   "Menu")))

(defn menu
 [items width]
 (let [open? (j/cell false)]
  (h/div
   (open-button open? width)
   (h/when-tpl open?
    (h/div
     (h/for-tpl [item items]
      (h/div item)))))))
