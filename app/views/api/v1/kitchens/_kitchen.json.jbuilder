json.set! kitchen.id do
  json.extract! kitchen, :id, :name, :building_id, :created_at, :updated_at
end
