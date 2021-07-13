Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      get '/buildings', to: 'buildings#index'
      get '/kitchens', to: 'kitchens#index'
      get '/products', to: 'products#index'
    end
  end

  # # if no routes match the request, fallback to returning client/public/index.html
  # # This should fix the error that happen when the frontend route is somehow
  # #  sent to the backend, causing an error like "no route matches /albums/undefined"
  # get '*path', to: "application#fallback_index_html", constraints: ->(request) do
  #   !request.xhr? && request.format.html?
  # end

  # resources :ncr_items
  # resources :ncr_categories
  # resources :ncr_departments
  # resources :buildings
  # resources :kitchens
  # resources :recipes
  # resources :ncrs
  # resources :vendors
  # resources :products
  # resources :food_products
  # resources :paper_products
  # resources :invoices
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
