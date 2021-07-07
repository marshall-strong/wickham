class NcrDepartmentsController < ApplicationController
  before_action :set_ncr_department, only: %i[ show edit update destroy ]

  # GET /ncr_departments or /ncr_departments.json
  def index
    @ncr_departments = NcrDepartment.all
  end

  # GET /ncr_departments/1 or /ncr_departments/1.json
  def show
  end

  # GET /ncr_departments/new
  def new
    @ncr_department = NcrDepartment.new
  end

  # GET /ncr_departments/1/edit
  def edit
  end

  # POST /ncr_departments or /ncr_departments.json
  def create
    @ncr_department = NcrDepartment.new(ncr_department_params)

    respond_to do |format|
      if @ncr_department.save
        format.html { redirect_to @ncr_department, notice: "Ncr department was successfully created." }
        format.json { render :show, status: :created, location: @ncr_department }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @ncr_department.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /ncr_departments/1 or /ncr_departments/1.json
  def update
    respond_to do |format|
      if @ncr_department.update(ncr_department_params)
        format.html { redirect_to @ncr_department, notice: "Ncr department was successfully updated." }
        format.json { render :show, status: :ok, location: @ncr_department }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @ncr_department.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /ncr_departments/1 or /ncr_departments/1.json
  def destroy
    @ncr_department.destroy
    respond_to do |format|
      format.html { redirect_to ncr_departments_url, notice: "Ncr department was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ncr_department
      @ncr_department = NcrDepartment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def ncr_department_params
      params.require(:ncr_department).permit(:name)
    end
end
