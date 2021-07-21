json.recipes do
  @recipes.each do |recipe|
    json.partial! 'api/v1/recipes/recipe', recipe: recipe
  end
end
