json.foodProducts do
  @food_products.each do |food_product|
    json.set! food_product.id do
      json.id food_product.id
      json.name food_product.name
    end
  end
end

# json.array! @food_products, partial: "food_products/food_product", as: :food_product
