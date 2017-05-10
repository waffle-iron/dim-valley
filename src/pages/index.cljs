(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  colours.ui-gradients
  [hoplon.core :as h]
  hoplon.jquery
  fonts.google-fonts))

(h/html
 (h/head
  (h/link
   :href "https://necolas.github.io/normalize.css/latest/normalize.css"
   :rel "stylesheet"
   :type "text/css")
  (fonts.google-fonts/fonts
   [{:name "Playfair Display"
     :fallback "serif"}
    {:name "Raleway"
     :fallback "sans-serif"}])
  (h/link
   :href "/app.css"
   :rel "stylesheet"
   :type "text/css"))
 (h/body
  :css {:background (str "linear-gradient(to left, " (clojure.string/join ", " (colours.ui-gradients/stops "Day Tripper")) ")")
        :min-height "100vh"}
  (h/div
   :css {:margin "5vh 0 0 5vw"
         :padding "5vh 0 5vh 5vw"
         :background-color "white"
         :border-radius "20px"}
   (h/h1 "Dim valley pty. ltd.")
   (h/p
    "Lorem ipsum."))))
