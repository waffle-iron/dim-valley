(ns route.config
 (:require wheel.route.core))

(def routes
 ["" {"dave" :dave
      "milly" :milly
      "legal" :legal
      "github" :github
      "contact" :contact}])

(assert (wheel.route.core/routes? routes))
