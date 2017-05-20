(ns social.hoplon
 (:require
  icon.hoplon
  [hoplon.core :as h]))

(defn icon-links
 [& {:keys [linkedin github medium twitter]}]
 (for [[f h] [[icon.hoplon/linkedin linkedin]
              [icon.hoplon/github github]
              [icon.hoplon/medium medium]
              [icon.hoplon/twitter twitter]]]
  (h/div
   (h/div
    ; 12px = 1/2 width of 1 icon.
    :css {:margin-right "12px"
          :float "left"}
    (h/when-tpl h
     (wheel.link.hoplon/external h (f)))))))
