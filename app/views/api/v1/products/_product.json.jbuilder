json.set! product.id do
  json.extract! product, :id, :name, :description, :part_no, :vendor_id, :created_at, :updated_at
end
