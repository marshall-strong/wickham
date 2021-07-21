class Api::V1::NcrItemsController < ApiController
  # @route GET /api/v1/ncr_items
  def index
    @ncr_items = NcrItem.all
    render 'api/v1/ncr_items/index'
  end

  # @route GET /api/v1/ncr_items/:ncr_item_id
  def show
    @ncr_item = NcrItem.find(params[:ncr_item_id])
    render 'api/v1/ncr_items/show'
  end
end
