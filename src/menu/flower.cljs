(ns menu.flower
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]))

; Based on https://codepen.io/jordanlachance/pen/yOJdRr

(defn polar->cartesian
 [radius radians]
 (prn radius radians)
 [(* radius (.cos js/Math radians))
  (* radius (.sin js/Math radians))])

(defn open-button
 [open? width]
 (let [open? (or open? (j/cell false))]
  (h/div
   :click #(swap! open? not)

   "X")))

(defn menu
 [items width]
 (let [open? (j/cell false)
       radians-per-item (j/cell= (/ (* 2 (.-PI js/Math)) (count items)))
       i-xy-item (j/cell=
                  (map-indexed
                   (fn [i item]
                    [i
                     (polar->cartesian 100 (* i radians-per-item))
                     item])
                   items))]
  (h/div
   :css {:position "relative"}
   (open-button open? width)
   (h/when-tpl open?
    (h/div
     (h/for-tpl [[i [x y] item] i-xy-item]
      (h/div item
       :css (j/cell= {:transform (str "translate(" x "px, " y "px)")
                      :position "absolute"
                      :left 0
                      :top 0}))))))))
