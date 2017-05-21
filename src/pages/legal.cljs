(ns pages.legal
 (:require
  [hoplon.core :as h]
  layout.content-block))

(defn content []
 (layout.content-block/content-inner
  (h/h1 "legal")))
