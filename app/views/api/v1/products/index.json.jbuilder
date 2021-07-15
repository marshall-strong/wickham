json.products do
  @products.each do |product|
    json.set! product.id do
      json.id product.id
      json.name product.name
      json.description product.description
      json.partNo product.part_no
      json.vendorId product.vendor_id
    end
  end
end

# json.array! @products, partial: "products/product", as: :product
