json.set! vendor.id do
  json.extract! vendor, :id, :name, :created_at, :updated_at
end
