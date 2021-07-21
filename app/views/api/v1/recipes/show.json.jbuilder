json.recipes do
  json.partial! 'api/v1/recipes/recipe', recipe: @recipe
end
