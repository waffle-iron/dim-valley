(ns fonts.config)

(def default-fallback "sans-serif")

(def playfair {:name "Playfair Display"
               :fallback "serif"})

(def raleway {:name "Raleway"
              :variants ["400" "700"]
              :fallback "sans-serif"})

(def fonts [playfair raleway])
