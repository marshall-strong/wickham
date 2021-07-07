require "test_helper"

class NcrCategoriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ncr_category = ncr_categories(:one)
  end

  test "should get index" do
    get ncr_categories_url
    assert_response :success
  end

  test "should get new" do
    get new_ncr_category_url
    assert_response :success
  end

  test "should create ncr_category" do
    assert_difference('NcrCategory.count') do
      post ncr_categories_url, params: { ncr_category: { department_id: @ncr_category.department_id, name: @ncr_category.name } }
    end

    assert_redirected_to ncr_category_url(NcrCategory.last)
  end

  test "should show ncr_category" do
    get ncr_category_url(@ncr_category)
    assert_response :success
  end

  test "should get edit" do
    get edit_ncr_category_url(@ncr_category)
    assert_response :success
  end

  test "should update ncr_category" do
    patch ncr_category_url(@ncr_category), params: { ncr_category: { department_id: @ncr_category.department_id, name: @ncr_category.name } }
    assert_redirected_to ncr_category_url(@ncr_category)
  end

  test "should destroy ncr_category" do
    assert_difference('NcrCategory.count', -1) do
      delete ncr_category_url(@ncr_category)
    end

    assert_redirected_to ncr_categories_url
  end
end
