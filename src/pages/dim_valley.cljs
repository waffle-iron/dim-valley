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
  (h/div
   :css {:margin "4px 0"}
   (maps.mapbox/map-el
    :width "100%"
    :height "300px"
    :center [144.995415 -37.826018]
    :marker (h/div "DIM VALLEY"
             :css {:background-color "white"
                   :border (str "4px solid " (last (colours.ui-gradients/stops)))
                   :border-radius "100px"
                   :height "100px"
                   :width "100px"})
    :options {"style" "mapbox://styles/thedavidmeister/cj2ll9ozt00282rqny3ozjigd"
              "zoom" 13
              "interactive" false
              "logoPosition" "bottom-right"}))

  (layout.content-block/content-inner
   "Lorem ipsum")])
