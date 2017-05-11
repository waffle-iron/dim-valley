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

(defn n->px [n] (str n "px"))

(defn open-button
 [open? radius]
 (let [open? (or open? (j/cell false))]
  (h/div
   :click #(swap! open? not)
   :css (j/cell= {:width radius
                  :height radius
                  :background-color "white"
                  :border-radius (n->px radius)})
   "X")))

(defn menu
 [items width]
 (let [open? (j/cell false)
       ; Total width of the element = 2x menu item radius + 2x menu item offset.
       ; Ratio = menu item radius / menu item offset.
       ; Width / 2 = radius + offset
       ; Width / 2 = (ratio x offset) + offset
       ; Width / 2 = (1 + ratio) x offset
       ; offset = Width / (2 x (1 + ratio))
       ratio 0.5
       offset (j/cell= (/ width (* 2 (+ 1 ratio))))
       radius (j/cell= (* ratio offset))

       radians-per-item (j/cell= (/ (* 2 (.-PI js/Math)) (count items)))
       i-xy-item (j/cell=
                  (map-indexed
                   (fn [i item]
                    [i
                     (polar->cartesian offset (* i radians-per-item))
                     item])
                   items))]
  (h/div
   :css {:position "relative"}
   (open-button open? radius)
   (h/when-tpl open?
    (h/div
     (h/for-tpl [[i [x y] item] i-xy-item]
      (h/div item
       :css (j/cell= {:transform (str "translate(" x "px, " y "px)")
                      :position "absolute"
                      :left 0
                      :top 0
                      :background-color "white"
                      :width radius
                      :height radius
                      :border-radius (n->px radius)}))))))))
