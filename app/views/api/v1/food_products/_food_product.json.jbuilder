json.extract! food_product, :id, :name, :created_at, :updated_at
json.url food_product_url(food_product, format: :json)
