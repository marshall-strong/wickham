require "test_helper"

class NcrItemsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ncr_item = ncr_items(:one)
  end

  test "should get index" do
    get ncr_items_url
    assert_response :success
  end

  test "should get new" do
    get new_ncr_item_url
    assert_response :success
  end

  test "should create ncr_item" do
    assert_difference('NcrItem.count') do
      post ncr_items_url, params: { ncr_item: { category_id: @ncr_item.category_id, description: @ncr_item.description, is_active_at_pos: @ncr_item.is_active_at_pos, is_active_online: @ncr_item.is_active_online, item_name: @ncr_item.item_name, sales_price: @ncr_item.sales_price } }
    end

    assert_redirected_to ncr_item_url(NcrItem.last)
  end

  test "should show ncr_item" do
    get ncr_item_url(@ncr_item)
    assert_response :success
  end

  test "should get edit" do
    get edit_ncr_item_url(@ncr_item)
    assert_response :success
  end

  test "should update ncr_item" do
    patch ncr_item_url(@ncr_item), params: { ncr_item: { category_id: @ncr_item.category_id, description: @ncr_item.description, is_active_at_pos: @ncr_item.is_active_at_pos, is_active_online: @ncr_item.is_active_online, item_name: @ncr_item.item_name, sales_price: @ncr_item.sales_price } }
    assert_redirected_to ncr_item_url(@ncr_item)
  end

  test "should destroy ncr_item" do
    assert_difference('NcrItem.count', -1) do
      delete ncr_item_url(@ncr_item)
    end

    assert_redirected_to ncr_items_url
  end
end
