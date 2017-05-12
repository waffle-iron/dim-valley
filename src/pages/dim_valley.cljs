(ns pages.dim-valley
 (:require
  [hoplon.core :as h]
  layout.header-block
  layout.content-block
  maps.mapbox))

(defn content []
 [
  (maps.mapbox/assets)
  (layout.header-block/header
   "Dim valley pty. ltd."
   ["A.B.N. 38 617 641 595"
    (h/br)
    "Modern business services"])
  (maps.mapbox/map-el
   :width "100%"
   :height "300px"
   :style "mapbox://styles/mapbox/streets-v9")])
