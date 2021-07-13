class Api::V1::PaperProductsController < ApiController
  # @route GET /api/v1/paper_products
  def index
    @paper_products = PaperProduct.all
    render 'api/v1/paper_products/index'
  end
end
