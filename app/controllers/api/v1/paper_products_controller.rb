class Api::V1::PaperProductsController < ApiController
  # @route GET /api/v1/paper_products
  def index
    @paper_products = PaperProduct.all
    render 'api/v1/paper_products/index'
  end

  # @route GET /api/v1/paper_products/:paper_product_id
  def show
    @paper_product = PaperProduct.find(params[:paper_product_id])
    render 'api/v1/paper_products/show'
  end
end
