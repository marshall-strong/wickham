class Api::V1::RecipesController < ApiController
  # @route GET /api/v1/recipes
  def index
    @recipes = Recipe.all
    render 'api/v1/recipes/index'
  end

  # @route GET /api/v1/recipes/:recipe_id
  def show
    @recipe = Recipe.find(params[:recipe_id])
    render 'api/v1/recipes/show'
  end
end
