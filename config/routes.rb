RipVanWafels::Application.routes.draw do
  root :to => "home#index"

  match '/wafel', :to => "pages#wafel", :as => "wafel"
  match '/store', :to => "pages#store", :as => "store"
  match '/wholesale', :to => "pages#wholesale", :as => "wholesale"
  match '/about', :to => "pages#about", :as => "about"
end
