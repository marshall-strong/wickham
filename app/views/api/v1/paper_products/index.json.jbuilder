json.paperProducts do
  @paper_products.each do |paper_product|
    json.partial! 'api/v1/paper_products/paper_product', paper_product: paper_product
  end
end
