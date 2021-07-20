class NcrItemsController < ApplicationController
  before_action :set_ncr_item, only: %i[ show edit update destroy ]

  # GET /ncr_items or /ncr_items.json
  def index
    @ncr_items = NcrItem.all
  end

  # GET /ncr_items/1 or /ncr_items/1.json
  def show
  end

  # GET /ncr_items/new
  def new
    @ncr_item = NcrItem.new
  end

  # GET /ncr_items/1/edit
  def edit
  end

  # POST /ncr_items or /ncr_items.json
  def create
    @ncr_item = NcrItem.new(ncr_item_params)

    respond_to do |format|
      if @ncr_item.save
        format.html { redirect_to @ncr_item, notice: "Ncr item was successfully created." }
        format.json { render :show, status: :created, location: @ncr_item }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @ncr_item.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /ncr_items/1 or /ncr_items/1.json
  def update
    respond_to do |format|
      if @ncr_item.update(ncr_item_params)
        format.html { redirect_to @ncr_item, notice: "Ncr item was successfully updated." }
        format.json { render :show, status: :ok, location: @ncr_item }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @ncr_item.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /ncr_items/1 or /ncr_items/1.json
  def destroy
    @ncr_item.destroy
    respond_to do |format|
      format.html { redirect_to ncr_items_url, notice: "Ncr item was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ncr_item
      @ncr_item = NcrItem.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def ncr_item_params
      params.require(:ncr_item).permit(:external_id, :category, :item_name, :description, :variation_types, :variations, :barcode, :track_inventory, :prompt_for_price, :unit_cost, :price, :sold_by_weight_measure, :tax_category, :available_for_sale_on_pos, :available_for_sale_online, :online_item_name, :package_cost, :units_per_package, :primary_vendor, :units_on_hand, :modified_by_1, :modifier_group_1_external_id, :modified_by_2, :modifier_group_2_external_id, :modified_by_3, :modifier_group_3_external_id, :modified_by_4, :modifier_group_4_external_id, :modified_by_5, :modifier_group_5_external_id)
    end
end
