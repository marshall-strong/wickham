json.food_products do
  json.partial! 'api/v1/food_products/food_product', food_product: @food_product
end
