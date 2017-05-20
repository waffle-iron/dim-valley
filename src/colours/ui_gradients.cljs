(ns colours.ui-gradients
 (:require
  camel-snake-kebab.core
  colours.config)
 (:require-macros wheel.slurp.core))

(defn stops
 ([] (stops colours.config/gradient-name))
 ([name]
  (let [parse (.-parse js/JSON)]
   (get
    (some->>
     (wheel.slurp.core/slurp "https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json")
     parse
     js->clj
     (filter #(= name (get % "name")))
     first)
    "colors"))))

(def base-colour (last (stops)))
(def secondary-colour (first (stops)))
