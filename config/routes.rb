Rails.application.routes.draw do
  resources :food_products
  resources :paper_products
  resources :ingredients
  resources :ncrs
  resources :kitchens
  resources :buildings
  resources :foods
  resources :products
  resources :invoices
  resources :vendors
  resources :measurements
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
