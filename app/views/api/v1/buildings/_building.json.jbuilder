json.set! building.id do
  json.extract! building, :id, :name, :created_at, :updated_at
end
