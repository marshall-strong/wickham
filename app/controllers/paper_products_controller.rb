class PaperProductsController < ApplicationController
  before_action :set_paper_product, only: %i[ show edit update destroy ]

  # GET /paper_products or /paper_products.json
  def index
    @paper_products = PaperProduct.all
  end

  # GET /paper_products/1 or /paper_products/1.json
  def show
  end

  # GET /paper_products/new
  def new
    @paper_product = PaperProduct.new
  end

  # GET /paper_products/1/edit
  def edit
  end

  # POST /paper_products or /paper_products.json
  def create
    @paper_product = PaperProduct.new(paper_product_params)

    respond_to do |format|
      if @paper_product.save
        format.html { redirect_to @paper_product, notice: "Paper product was successfully created." }
        format.json { render :show, status: :created, location: @paper_product }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @paper_product.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /paper_products/1 or /paper_products/1.json
  def update
    respond_to do |format|
      if @paper_product.update(paper_product_params)
        format.html { redirect_to @paper_product, notice: "Paper product was successfully updated." }
        format.json { render :show, status: :ok, location: @paper_product }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @paper_product.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /paper_products/1 or /paper_products/1.json
  def destroy
    @paper_product.destroy
    respond_to do |format|
      format.html { redirect_to paper_products_url, notice: "Paper product was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_paper_product
      @paper_product = PaperProduct.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def paper_product_params
      params.require(:paper_product).permit(:name)
    end
end
