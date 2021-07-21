json.set! food_product.id do
  json.extract! food_product, :id, :name, :product_id, :recipe_id, :created_at, :updated_at
end
