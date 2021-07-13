class Api::V1::FoodProductsController < ApiController
  # @route GET /api/v1/food_products
  def index
    @food_products = FoodProduct.all
    render 'api/v1/food_products/index'
  end
end
