json.paperProducts do
  json.partial! 'api/v1/paper_products/paper_product', paper_product: @paper_product
end
