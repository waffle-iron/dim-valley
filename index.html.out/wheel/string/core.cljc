(ns wheel.string.core
 (:require
  clojure.string
  #?(:cljs [cljs.test :refer-macros [deftest is are]]
     :clj [clojure.test :refer [deftest is are]])))

(defn no-space
 [s]
 (-> s
  (clojure.string/split #"\s")
  clojure.string/join))

; TESTS

(deftest ??no-space
 (are [s e] (= e (no-space s))
  "a" "a"
  "a b" "ab"
  " ab" "ab"
  "ab " "ab"
  " ab " "ab"
  "a  b" "ab"
  " a b " "ab"
  "a\nb" "ab"))
