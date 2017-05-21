(ns route.state
 (:require
  wheel.route.core
  [javelin.core :as j]))

(defonce history (wheel.route.core/history-cell))
