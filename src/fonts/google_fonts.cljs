(ns fonts.google-fonts
 (:require
  [hoplon.core :as h]))

; All the functions in this document work with hash maps representing a font
; definition as per Google Fonts.
; The keys are as follows:
; :name = Human readable name exactly as it appears in Google Fonts (required).
; :variants = A collection of variant strings, e.g. ["400" "400i" "900"].
; :fallback = The fallback font to use. Most commonly "serif" or "sans-serif".

(defn font->uri-str
 "Given a font hash map, returns a string suitable in a Google Fonts URI"
 [{:keys [name variants]}]
 (let [name-uri (clojure.string/replace name " " "+")
       variants-uri (when variants
                     (str ":" (clojure.string/join "," variants)))]
  (str name-uri variants-uri)))

(defn fonts
 [fs]
 (let [name->uri-name #(clojure.string/replace % " " "+")
       family-string (clojure.string/join "|" (map font->uri-str fs))
       f->style-string #(str "font-family: '" (:name %) "', " (:fallback %) ";")]
  (h/link
   :href (str "https://fonts.googleapis.com/css?family=" family-string)
   :rel "stylesheet"
   :type "text/css")))
