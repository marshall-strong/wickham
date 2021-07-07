class NcrCategoriesController < ApplicationController
  before_action :set_ncr_category, only: %i[ show edit update destroy ]

  # GET /ncr_categories or /ncr_categories.json
  def index
    @ncr_categories = NcrCategory.all
  end

  # GET /ncr_categories/1 or /ncr_categories/1.json
  def show
  end

  # GET /ncr_categories/new
  def new
    @ncr_category = NcrCategory.new
  end

  # GET /ncr_categories/1/edit
  def edit
  end

  # POST /ncr_categories or /ncr_categories.json
  def create
    @ncr_category = NcrCategory.new(ncr_category_params)

    respond_to do |format|
      if @ncr_category.save
        format.html { redirect_to @ncr_category, notice: "Ncr category was successfully created." }
        format.json { render :show, status: :created, location: @ncr_category }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @ncr_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /ncr_categories/1 or /ncr_categories/1.json
  def update
    respond_to do |format|
      if @ncr_category.update(ncr_category_params)
        format.html { redirect_to @ncr_category, notice: "Ncr category was successfully updated." }
        format.json { render :show, status: :ok, location: @ncr_category }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @ncr_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /ncr_categories/1 or /ncr_categories/1.json
  def destroy
    @ncr_category.destroy
    respond_to do |format|
      format.html { redirect_to ncr_categories_url, notice: "Ncr category was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ncr_category
      @ncr_category = NcrCategory.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def ncr_category_params
      params.require(:ncr_category).permit(:name, :department_id)
    end
end
