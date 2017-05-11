(ns menu.flower
 (:require [hoplon.core :as h]))

; Based on https://codepen.io/jordanlachance/pen/yOJdRr

(defn menu
 [items width]
 (h/for-tpl [item items]
  (h/div item)))
