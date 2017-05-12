(ns maps.mapbox
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  lib.mapbox))

(def access-token "pk.eyJ1IjoidGhlZGF2aWRtZWlzdGVyIiwiYSI6ImNqMmxqeG42ejAwZDgzM253YW10OXZqNXcifQ.LsGB_IECkvcxIPoeXv2hpw")
(defn init [token]
 (aset js/mapboxgl "accessToken" token))
(init access-token)

; https://www.mapbox.com/install/js/cdn-install/
(defn assets []
 (h/link :href "https://api.mapbox.com/mapbox-gl-js/v0.36.0/mapbox-gl.css" :rel "stylesheet"))

(defn map-el [& {:keys [width height style]}]
 (let [id (random-uuid)
       options {"container" (str id)
                "style" style}]
  (j/with-let [el (h/div :id id
                         :css (j/cell= {:width width
                                        :height height}))]
   (h/with-dom el
    (js/mapboxgl.Map. (clj->js options))))))
