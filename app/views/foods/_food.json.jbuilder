json.extract! food, :id, :name, :directions, :created_at, :updated_at
json.url food_url(food, format: :json)
