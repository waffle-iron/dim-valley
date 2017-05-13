(ns pages.dim-valley
 (:require
  [hoplon.core :as h]
  layout.header-block
  layout.content-block
  mapbox.dom
  mapbox.api))

(defn dv-map
 []
 (let [ll (mapbox.api/lng-lat 144.995415 -37.826018)
       options {"center" ll
                "style" "mapbox://styles/thedavidmeister/cj2ll9ozt00282rqny3ozjigd"
                "zoom" 13
                "interactive" false
                "logoPosition" "bottom-right"}
       el (mapbox.dom/map :css {:width "100%"
                                :height "300px"
                                :margin "4px 0"}
                          :options options
                          :marker (h/div "fooooo"))]
  el))


(defn content []
 [
  (layout.header-block/header
   "Dim valley pty. ltd."
   ["A.B.N. 38 617 641 595"
    (h/br)
    "Modern business services"])
  (dv-map)
  (layout.content-block/content-inner
   "Lorem ipsum")])
