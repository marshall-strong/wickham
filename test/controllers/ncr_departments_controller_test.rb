require "test_helper"

class NcrDepartmentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ncr_department = ncr_departments(:one)
  end

  test "should get index" do
    get ncr_departments_url
    assert_response :success
  end

  test "should get new" do
    get new_ncr_department_url
    assert_response :success
  end

  test "should create ncr_department" do
    assert_difference('NcrDepartment.count') do
      post ncr_departments_url, params: { ncr_department: { name: @ncr_department.name } }
    end

    assert_redirected_to ncr_department_url(NcrDepartment.last)
  end

  test "should show ncr_department" do
    get ncr_department_url(@ncr_department)
    assert_response :success
  end

  test "should get edit" do
    get edit_ncr_department_url(@ncr_department)
    assert_response :success
  end

  test "should update ncr_department" do
    patch ncr_department_url(@ncr_department), params: { ncr_department: { name: @ncr_department.name } }
    assert_redirected_to ncr_department_url(@ncr_department)
  end

  test "should destroy ncr_department" do
    assert_difference('NcrDepartment.count', -1) do
      delete ncr_department_url(@ncr_department)
    end

    assert_redirected_to ncr_departments_url
  end
end
