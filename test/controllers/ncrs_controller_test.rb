require "test_helper"

class NcrsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ncr = ncrs(:one)
  end

  test "should get index" do
    get ncrs_url
    assert_response :success
  end

  test "should get new" do
    get new_ncr_url
    assert_response :success
  end

  test "should create ncr" do
    assert_difference('Ncr.count') do
      post ncrs_url, params: { ncr: { name: @ncr.name } }
    end

    assert_redirected_to ncr_url(Ncr.last)
  end

  test "should show ncr" do
    get ncr_url(@ncr)
    assert_response :success
  end

  test "should get edit" do
    get edit_ncr_url(@ncr)
    assert_response :success
  end

  test "should update ncr" do
    patch ncr_url(@ncr), params: { ncr: { name: @ncr.name } }
    assert_redirected_to ncr_url(@ncr)
  end

  test "should destroy ncr" do
    assert_difference('Ncr.count', -1) do
      delete ncr_url(@ncr)
    end

    assert_redirected_to ncrs_url
  end
end
