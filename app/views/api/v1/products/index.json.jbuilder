json.products do
  @products.each do |product|
    json.partial! 'api/v1/products/product', product: product
  end
end
