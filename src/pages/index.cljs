(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  colours.ui-gradients
  [hoplon.core :as h]
  hoplon.jquery))

(h/html
  (h/body
   :css {:background (str "linear-gradient(to left, " (clojure.string/join ", " (colours.ui-gradients/stops "Metallic Toad")) ")")
         :min-height "100vh"}
   (h/div
    "Hello worldz")))
