json.products do
  @products.each do |product|
    json.set! product.id do
      json.id product.id
      json.name product.name
    end
  end
end

# json.array! @products, partial: "products/product", as: :product
