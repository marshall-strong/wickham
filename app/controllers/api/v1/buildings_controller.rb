class Api::V1::BuildingsController < ApiController
  # @route GET /api/v1/buildings
  def index
    @buildings = Building.all
    render 'api/v1/buildings/index'
  end
end
