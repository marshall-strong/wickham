json.extract! ingredient, :id, :name, :quantity, :storage_temp, :cook_temp, :created_at, :updated_at
json.url ingredient_url(ingredient, format: :json)
