(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  colours.ui-gradients
  [hoplon.core :as h]
  hoplon.jquery
  fonts.google-fonts))

(h/html
 (h/head
  (fonts.google-fonts/fonts
   [{:name "Playfair Display"
     :fallback "serif"}
    {:name "Raleway"
     :fallback "sans-serif"}]))
 (h/body
  :css {:background (str "linear-gradient(to left, " (clojure.string/join ", " (colours.ui-gradients/stops "Ash")) ")")
        :min-height "100vh"}
  (h/div
   "Hello worldz")))
