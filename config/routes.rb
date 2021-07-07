Rails.application.routes.draw do
  resources :buildings
  resources :kitchens
  resources :recipes
  resources :ncrs
  resources :vendors
  resources :products
  resources :food_products
  resources :paper_products
  resources :invoices
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
