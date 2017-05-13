(ns math.geometry)

(defn polar->cartesian
 [radius radians]
 [(* radius (.cos js/Math radians))
  (* radius (.sin js/Math radians))])

(defn degrees->radians [degrees] (/ (* degrees (.-PI js/Math)) 180))
(defn radians->degrees [radians] (/ (* degrees 180) (.-PI js/Math)))
