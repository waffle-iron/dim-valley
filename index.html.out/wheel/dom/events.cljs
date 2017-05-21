(ns wheel.dom.events
 (:require
  wheel.dom.manipulation
  wheel.hoplon.on
  hoplon.jquery
  [hoplon.core :as h]
  [javelin.core :as j]
  [cljs.test :refer-macros [deftest is]]))

(defn ensure-original-object!
 [e]
 (if-not (aget e "originalEvent")
  (aset e "originalEvent" (js-obj))
  e))

(defn set-data!
 [e k v]
 (ensure-original-object! e)
 (-> e
  (aget "originalEvent")
  (aset k v))
 ; It is common to bind set-data! as an event handler. Return the event as it
 ; is truthy and won't cause the event handler to return false (which v might).
 e)

(defn get-data
 [e k]
 (if-let [original-event (aget e "originalEvent")]
  (aget original-event k)))

(defn make-bubblable! [el]
 (wheel.dom.manipulation/document-append! el))

; https://www.w3.org/TR/DOM-Level-3-Events/#events-Events-DocumentEvent-createEvent
(defn trigger-native!
 [el name]
 {:pre [(instance? js/Element el)]}
 (let [e (.createEvent js/document "UIEvents")]
  (.initEvent e name true true)
  (.dispatchEvent el e)))

(defn trigger-jq!
 ([el name] (trigger-jq! el name nil))
 ([el name properties]
  (let [e (js/jQuery.Event. name (clj->js properties))]
   (-> el js/jQuery (.trigger e)))))

; TESTS

(deftest ??events-set-get-data
 (let [result (j/cell nil)
       inner (h/div :input #(set-data! % :foo :bar))
       dom (h/div
            :input #(reset! result (get-data % :foo))
            inner)]
  (is (nil? @result))
  (trigger-jq! inner "input")
  (is (= :bar @result))))
