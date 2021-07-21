class Api::V1::FoodProductsController < ApiController
  # @route GET /api/v1/food_products
  def index
    @food_products = FoodProduct.all
    render 'api/v1/food_products/index'
  end

  # @route GET /api/v1/food_products/:food_product_id
  def show
    @food_product = FoodProduct.find(params[:food_product_id])
    render 'api/v1/food_products/show'
  end
end
