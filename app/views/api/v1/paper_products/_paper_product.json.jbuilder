json.set! paper_product.id do
  json.extract! paper_product, :id, :name, :product_id, :recipe_id, :created_at, :updated_at
end
