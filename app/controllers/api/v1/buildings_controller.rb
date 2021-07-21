class Api::V1::BuildingsController < ApiController
  # @route GET /api/v1/buildings
  def index
    @buildings = Building.all
    render 'api/v1/buildings/index'
  end

  # @route GET /api/v1/buildings/:building_id
  def show
    @building = Building.find(params[:building_id])
    render 'api/v1/buildings/show'
  end
end
