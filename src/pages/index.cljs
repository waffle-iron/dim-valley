(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  colours.ui-gradients
  [hoplon.core :as h]
  [javelin.core :as j]
  hoplon.jquery
  fonts.config
  wheel.font.google.hoplon
  layout.config
  layout.spacer
  layout.middle-right
  menu.flower
  menu.drawers
  pages.milly
  pages.dim-valley
  pages.legal
  pages.github
  pages.dave
  styles.core
  mapbox.dom))

(h/html
 (h/head
  (wheel.font.google.hoplon/link fonts.config/fonts)
  (styles.core/style)
  (mapbox.dom/stylesheet))
 (h/body
  :css {:background (str "linear-gradient(to left, " (clojure.string/join ", " (colours.ui-gradients/stops)) ")")
        :min-height "100vh"
        :width "100vw"
        :overflow-x "hidden"}

  (let [items [{:text "dim valley pty. ltd." :f pages.dim-valley/content :handler :contact}
               {:text "legal" :f pages.legal/content :handler :legal}
               {:url "octocat.jpg" :f pages.github/content :handler :github}
               {:url "dave.png" :f pages.dave/content :handler :dave}
               {:url "milly.png" :f pages.milly/content :handler :milly}]]
   [
    (menu.flower/menu
     items
     200)

    (layout.middle-right/middle-right
     (menu.drawers/drawers
      (h/for-tpl [item items]
       (menu.drawers/drawer
        (j/cell= (= route.state/history (wheel.route.core/bidi->path route.config/routes (:handler item))))
        "calc(75vw + 4px)"

        (layout.content-block/content-outer
         (h/div
          {:css {:width "cacl(60vw - 4px)"}}
          (h/div (j/cell= ((:f item))))))))))])))
