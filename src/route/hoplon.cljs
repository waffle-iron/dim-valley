(ns route.hoplon
 (:require
  [hoplon.core :as h]
  route.state
  route.config
  wheel.route.hoplon))

(h/defelem link
 [attributes children]
 (wheel.route.hoplon/link
  (merge
   {:history route.state/history
    :routes route.config/routes}
   attributes)
  children))
