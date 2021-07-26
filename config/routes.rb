Rails.application.routes.draw do

  resources :ncr_items
  namespace :api, defaults: { format: :json } do
    namespace :v1 do

      get '/buildings', to: 'buildings#index'
      get '/buildings/:building_id', to: 'buildings#show'

      get '/food_products', to: 'food_products#index'
      get '/food_products/:food_product_id', to: 'food_products#show'

      get '/invoices', to: 'invoices#index'
      get '/invoices/:invoice_id', to: 'invoices#show'

      get '/kitchens', to: 'kitchens#index'
      get '/kitchens/:kitchen_id', to: 'kitchens#show'

      get '/ncr_items', to: 'ncr_items#index'
      get '/ncr_items/:ncr_item_id', to: 'ncr_items#show'

      get '/paper_products', to: 'paper_products#index'
      get '/paper_products/:paper_product_id', to: 'paper_products#show'

      get '/products', to: 'products#index'
      get '/products/:product_id', to: 'products#show'

      get '/recipes', to: 'recipes#index'
      get '/recipes/:recipe_id', to: 'recipes#show'

      get '/vendors', to: 'vendors#index'
      get '/vendors/:vendor_id', to: 'vendors#show'
    end
  end

  # # if no routes match the request, fallback to returning client/public/index.html
  # # This should fix the error that happen when the frontend route is somehow
  # #  sent to the backend, causing an error like "no route matches /albums/undefined"
  # get '*path', to: "application#fallback_index_html", constraints: ->(request) do
  #   !request.xhr? && request.format.html?
  # end

end
