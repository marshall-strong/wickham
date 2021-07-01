class NcrsController < ApplicationController
  before_action :set_ncr, only: %i[ show edit update destroy ]

  # GET /ncrs or /ncrs.json
  def index
    @ncrs = Ncr.all
  end

  # GET /ncrs/1 or /ncrs/1.json
  def show
  end

  # GET /ncrs/new
  def new
    @ncr = Ncr.new
  end

  # GET /ncrs/1/edit
  def edit
  end

  # POST /ncrs or /ncrs.json
  def create
    @ncr = Ncr.new(ncr_params)

    respond_to do |format|
      if @ncr.save
        format.html { redirect_to @ncr, notice: "Ncr was successfully created." }
        format.json { render :show, status: :created, location: @ncr }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @ncr.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /ncrs/1 or /ncrs/1.json
  def update
    respond_to do |format|
      if @ncr.update(ncr_params)
        format.html { redirect_to @ncr, notice: "Ncr was successfully updated." }
        format.json { render :show, status: :ok, location: @ncr }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @ncr.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /ncrs/1 or /ncrs/1.json
  def destroy
    @ncr.destroy
    respond_to do |format|
      format.html { redirect_to ncrs_url, notice: "Ncr was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ncr
      @ncr = Ncr.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def ncr_params
      params.require(:ncr).permit(:name)
    end
end
