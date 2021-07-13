class Api::V1::ProductsController < ApiController
  # @route GET /api/v1/products
  def index
    @products = Product.all
    render 'api/v1/products/index'
  end
end
'
