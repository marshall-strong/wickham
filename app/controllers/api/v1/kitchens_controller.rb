class Api::V1::KitchensController < ApiController
  # @route GET /api/v1/kitchens
  def index
    @kitchens = Kitchen.all
    render 'api/v1/kitchens/index'
  end

  # @route GET /api/v1/kitchens/:kitchen_id
  def show
    @kitchen = Kitchen.find(params[:kitchen_id])
    render 'api/v1/kitchens/show'
  end
end
