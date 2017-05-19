(ns image.hoplon
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]))

(h/defelem cropped
 "An image cropped around its center. Uses background images."
 [{:keys [src height width css] :as attributes}]
 (h/div
  :css (j/cell= (merge {:height height
                        :width width
                        :background-image (str "url(\"" src "\")")
                        :background-repeat "no-repeat"
                        :background-size "cover"
                        :background-position "center"}
                       css))
  (dissoc attributes :src :height :width :css)))
