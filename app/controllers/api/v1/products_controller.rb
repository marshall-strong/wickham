class Api::V1::ProductsController < ApiController
  # @route GET /api/v1/products
  def index
    @products = Product.all
    render 'api/v1/products/index'
  end

  # @route GET /api/v1/products/:product_id
  def show
    @product = Product.find(params[:product_id])
    render 'api/v1/products/show'
  end
end
