json.paperProducts do
  @paper_products.each do |paper_product|
    json.set! paper_product.id do
      json.id paper_product.id
      json.name paper_product.name
    end
  end
end

# json.array! @paper_products, partial: "paper_products/paper_product", as: :paper_product
