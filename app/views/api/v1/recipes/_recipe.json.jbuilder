json.set! recipe.id do
  json.extract! recipe, :id, :name, :directions, :prep_kitchen_id, :created_at, :updated_at
end
