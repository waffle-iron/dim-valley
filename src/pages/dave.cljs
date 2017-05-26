(ns pages.dave
 (:require
  [hoplon.core :as h]
  layout.content-block
  layout.header-block
  layout.body-text
  image.hoplon
  social.hoplon
  wheel.abn.core
  wheel.link.hoplon))

(h/defelem content
 [{:keys [measured-width]} children]
 (let [p (partial layout.body-text/p :measured-width measured-width)]
  [
   (image.hoplon/cropped
    :src "https://s3-ap-southeast-2.amazonaws.com/dim-valley-public/dave-photo.jpg"
    :width "100%"
    :height "400px"
    :css {:margin-bottom "4px"})

   (layout.content-block/content-inner
    (layout.spacer/vertical-spacer)
    (social.hoplon/icon-links
     :linkedin "https://www.linkedin.com/in/dmeister/"
     :github "https://github.com/thedavidmeister"
     :medium "https://medium.com/@thedavidmeister"
     :twitter "https://twitter.com/thedavidmeister"))

   (layout.header-block/header
    "David Meister (Dave)"
    "Owner and CTO at Dim Valley pty. ltd. and Nice Feature pty. ltd.")

   (layout.content-block/content-inner
    (h/h2 "I believe...")
    (p "Simple beats complex.")
    (p "Quality is a process.")
    (p "Machines are better machines than humans.")
    (p "Effective systems are composed from effective parts."))

   (layout.content-block/content-inner
    (h/h2 "Experience")

    (h/h3 "Commercial")
    (p (h/strong "10+ years total") " professional web experience.")
    (p (h/strong "Started out") " making cool MySpace pages for local indie bands.")
    (p (h/strong "3 years building") " " (wheel.link.hoplon/external "http://furstmedia.com.au/" "Furst Media's") " publishing platform (10% MoM growth).")
    (p (h/strong "5 years owning and operating") " my previous digital agency, " (wheel.link.hoplon/external (wheel.abn.core/abr-search-url "58147061121") "Godel") ".")
    (p (h/strong "2 years as chief solutions architect") " at " (wheel.link.hoplon/external "http://equiem.com.au/" "Equiem") " " (wheel.link.hoplon/external "http://equiem.com.au/2016" "(100% YoY growth)") ".")
    (p (h/strong "Current owner and CTO") " of Dim Valley and Nice Feature.")

    (h/h3 "Open source")
    (p
     (h/strong (wheel.link.hoplon/external "http://drupalcores.com/countries.html" "6th in Australia"))
     " for contributions to " (wheel.link.hoplon/external "https://www.drupal.org/" "Drupal") " core.")

    (p
     (h/strong "Fully automated " (wheel.link.hoplon/external "https://github.com/thedavidmeister/radiant-brook" "bitcoin trading bot"))
     " written in " (wheel.link.hoplon/external "https://symfony.com/" "PHP/Symfony") ".")


    (p
     (h/strong (wheel.link.hoplon/external "http://xoroshiro.di.unimi.it/" "Xoroshiro128+") " pseudorandom number generator")
     " implemented " (wheel.link.hoplon/external "https://github.com/thedavidmeister/xoroshiro128" "in clojure") ".")

    (p
     (h/strong "The " (wheel.link.hoplon/external "https://hoplon.io/" "Hoplon") " web framework")
     ", contributing to development, support and documentation.")

    (p
     (h/strong (wheel.link.hoplon/external "https://github.com/thedavidmeister/dim-valley" "This website"))
     " built in " (wheel.link.hoplon/external "https://hoplon.io/" "Hoplon") ", leveraging a ton of " (wheel.link.hoplon/external "https://github.com/thedavidmeister/wheel" "my own intellectual property") "."))

   (layout.content-block/content-inner
    (h/h2 "Availability")
    (p
     "Building " (wheel.link.hoplon/external "https://estimate-work.com/" "Estimate Work") " is currently my primary focus, limiting my overall availability, but I am happy to provide services to new and existing clients on an ad-hoc basis.")

    (p
     "I am available " (h/strong "up to 3 days per week") " to contract on projects with a clearly defined scope and deliverables.")

    (p
     "My preference is for most or all project work to be " (h/strong "conducted remotely") ", using common telecommute technologies such as Google Hangouts, Slack, Flowdock, etc. to stay connected and in sync."))

   (layout.content-block/content-inner
    (h/h2 "Rate card")
    (p
     "1 hour = $AUD 120 + GST"
     (h/br)
     "1 day (prebooked) = $AUD 800 + GST"))

   (layout.content-block/content-inner
    (h/h2 "Case studies")
    (h/h3 "Estimate Work")
    (p
     "Estimate Work is a project planning tool designed to assist small teams working with hard deadlines, limited resources and significant risks to quantify and manage their " (wheel.link.hoplon/external "https://en.wikipedia.org/wiki/Project_management_triangle" "iron triangle") ".")
    (p
     "The Estimate Work product is being bootstrapped by Milly and myself and is 100% self-funded. Many key features are still in planning or active development stages. Regardless, our experience with the chosen tech stack and early feedback from the target market are both positive.")
    (p
     (h/ul (h/h4 "Estimate Work's tech stack:")
      (h/li (wheel.link.hoplon/external "https://clojure.org/" "Clojure") " + " (wheel.link.hoplon/external "https://clojurescript.org/" "ClojureScript") " for server and client side programming")
      (h/li (wheel.link.hoplon/external "https://blog.estimate-work.com/a-new-world-writing-css-in-clojurescript-and-life-after-sass-bdf5bc80a24f" "Garden CSS preprocessor/abstraction"))
      (h/li (wheel.link.hoplon/external "http://hoplon.io/" "Hoplon") " web framework")
      (h/li (wheel.link.hoplon/external "https://github.com/tonsky/datascript" "Datascript") " as a client-side database")
      (h/li (wheel.link.hoplon/external "https://www.rethinkdb.com/" "RethinkDB") " as a back-end data persistence layer")
      (h/li (wheel.link.hoplon/external "https://auth0.com/" "Auth0") " for authentiation/SSO")
      (h/li (wheel.link.hoplon/external "https://stripe.com/au" "Stripe") " as payment gateway")
      (h/li (wheel.link.hoplon/external "https://github.com/ptaoussanis/sente" "AJAX + WebSockets") " for client/server communication"))))]))
