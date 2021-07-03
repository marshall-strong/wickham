class FoodProductsController < ApplicationController
  before_action :set_food_product, only: %i[ show edit update destroy ]

  # GET /food_products or /food_products.json
  def index
    @food_products = FoodProduct.all
  end

  # GET /food_products/1 or /food_products/1.json
  def show
  end

  # GET /food_products/new
  def new
    @food_product = FoodProduct.new
  end

  # GET /food_products/1/edit
  def edit
  end

  # POST /food_products or /food_products.json
  def create
    @food_product = FoodProduct.new(food_product_params)

    respond_to do |format|
      if @food_product.save
        format.html { redirect_to @food_product, notice: "Food product was successfully created." }
        format.json { render :show, status: :created, location: @food_product }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @food_product.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /food_products/1 or /food_products/1.json
  def update
    respond_to do |format|
      if @food_product.update(food_product_params)
        format.html { redirect_to @food_product, notice: "Food product was successfully updated." }
        format.json { render :show, status: :ok, location: @food_product }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @food_product.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /food_products/1 or /food_products/1.json
  def destroy
    @food_product.destroy
    respond_to do |format|
      format.html { redirect_to food_products_url, notice: "Food product was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_food_product
      @food_product = FoodProduct.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def food_product_params
      params.require(:food_product).permit(:name)
    end
end
