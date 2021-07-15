json.recipes do
  @recipes.each do |recipe|
    json.set! recipe.id do
      json.id recipe.id
      json.name recipe.name
      json.directions recipe.directions
      json.prepKitchenId recipe.prep_kitchen_id
    end
  end
end

# json.array! @recipes, partial: "recipes/recipe", as: :recipe
