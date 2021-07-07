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
      params.require(:ncr_item).permit(:category_id, :item_name, :is_active_at_pos, :is_active_online, :description, :sales_price)
    end
end
