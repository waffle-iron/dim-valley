(ns layout.body-text
 (:require
  [hoplon.core :as h]))

(h/defelem p
 [{:keys [css measured-width] :as attributes} children]
 (h/p
  :css (j/cell= (merge {:width (if (< 600 measured-width) "66%" "100%")
                        :max-width "600px"}
                       css))
  (dissoc attributes :css :measured-width)
  children))
