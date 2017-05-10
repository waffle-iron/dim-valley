(ns colours.ui-gradients
 (:require camel-snake-kebab.core)
 (:require-macros macros.slurp))

(defn stops
 [name]
 (prn name)
 (let [parse (.-parse js/JSON)]
  (get
   (some->>
    (macros.slurp/slurp "https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json")
    parse
    js->clj
    (filter #(= name (get % "name")))
    first)
   "colors")))

; let [stops (get
;                                (inkspot.macros/ui-gradients "https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json")
;                                "Metallic Toad")]
