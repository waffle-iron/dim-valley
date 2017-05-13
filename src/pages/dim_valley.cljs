(ns pages.dim-valley
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  colours.ui-gradients
  layout.header-block
  layout.content-block
  mapbox.dom
  mapbox.api
  [unit.conversion :as u]))

(defn dv-marker [width]
 (let [base-css (j/cell= {:width (u/n->px width)
                          :height (u/n->px (/ width 6))
                          :background-color colours.ui-gradients/base-colour})]
  (h/div
   ;line 1
   (h/div
    :css (j/cell= (merge base-css
                         {:transform "rotate(45deg)"})))

   (h/div
    :css (j/cell= (merge base-css
                         {:transform "rotate(-45deg)"}))))))

  ; line 2

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
                          :marker (dv-marker 20))]
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
