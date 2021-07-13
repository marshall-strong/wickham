class Api::V1::RecipesController < ApiController
  # @route GET /api/v1/recipes
  def index
    @recipes = Recipe.all
    render 'api/v1/recipes/index'
  end
end
