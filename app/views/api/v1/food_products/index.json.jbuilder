json.foodProducts do
  @food_products.each do |food_product|
    json.partial! 'api/v1/food_products/food_product', food_product: food_product
  end
end

# json.array! @food_products, partial: "food_products/food_product", as: :food_product
