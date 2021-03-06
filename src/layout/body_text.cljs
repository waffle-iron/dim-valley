(ns layout.body-text
 (:require
  [hoplon.core :as h]))

(h/defelem p
 [attributes children]
 (h/p
  :css (merge {:width "66%"
               :max-width "600px"}
              (:css attributes))
  (dissoc attributes :css)
  children))
