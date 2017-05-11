(ns menu.flower
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]))

; Hoplonified from https://codepen.io/jordanlachance/pen/yOJdRr

(defn polar->cartesian
 [radius radians]
 [(* radius (.cos js/Math radians))
  (* radius (.sin js/Math radians))])

(defn n->px [n] (str n "px"))

(defn outer-wrapper
 [offset outer-radius item-radius & children]
 (prn outer-radius)
 (h/div
  :css (j/cell= {:position "fixed"
                 :left (n->px outer-radius)
                 :bottom (n->px outer-radius)
                 :overflow "visible"})
  children))

(defn open-button
 [open? radius]
 (let [open? (or open? (j/cell false))]
  (h/div
   :click #(swap! open? not)
   :css (j/cell= {; We give a couple px buffer to avoid antialiasing artefacts
                  ; when the circles are stacked in the z-axis.
                  :width (* radius 2)
                  :height (* radius 2)
                  :border-radius (n->px radius)
                  :position "absolute"
                  :left (n->px (- radius))
                  :bottom (n->px (- radius))
                  :z-index 1
                  :cursor "pointer"
                  :background-color "white"
                  :opacity 0.1}))))

(defn menu
 [items radius]
 (let [open? (j/cell false)
       ; Outer radius of the element = item radius + item offset.
       ; Ratio = item radius / item offset.
       ; Outer radius = radius + offset
       ; Outer radius = (ratio x offset) + offset
       ; Outer radius = (1 + ratio) x offset
       ; offset = Outer radius / (1 + ratio)
       ratio 0.3
       offset (j/cell= (/ radius (+ 1 ratio)))
       item-radius (j/cell= (* ratio offset))

       radians-per-item (j/cell= (/ (* 2 (.-PI js/Math)) (count items)))
       i-xy-item (j/cell=
                  (map-indexed
                   (fn [i item]
                    [i
                     (polar->cartesian offset (* i radians-per-item))
                     item])
                   items))
       total-transition-length 0.6
       base-transition-length (j/cell= (/ total-transition-length (count items)))]
  (outer-wrapper
   0
   radius
   item-radius

   (h/div
    :css {:position "relative"
          :z-index 1}
    (open-button open? item-radius))
   (h/div
    :css {:z-index 0}
    (h/for-tpl [[i [x y] item] i-xy-item]
     (h/div
      :css (j/cell= (merge
                     {:position "absolute"
                      :left (n->px (- item-radius))
                      :bottom (n->px (- item-radius))
                      :background-color "white"
                      :width (* 2 item-radius)
                      :height (* 2 item-radius)
                      :border-radius (n->px item-radius)
                      :transition (let [transition-delay (if open?
                                                          (* i base-transition-length)
                                                          0)]
                                   (str "transform " total-transition-length "s ease " transition-delay "s"))
                      :cursor "pointer"}
                     {:transform (if open? (str "translate(" x "px, " y "px)")
                                           "translate(0, 0)")}))))))))
