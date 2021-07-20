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
      post ncr_items_url, params: { ncr_item: { available_for_sale_on_pos: @ncr_item.available_for_sale_on_pos, available_for_sale_online: @ncr_item.available_for_sale_online, barcode: @ncr_item.barcode, category: @ncr_item.category, description: @ncr_item.description, external_id: @ncr_item.external_id, item_name: @ncr_item.item_name, modified_by_1: @ncr_item.modified_by_1, modified_by_2: @ncr_item.modified_by_2, modified_by_3: @ncr_item.modified_by_3, modified_by_4: @ncr_item.modified_by_4, modified_by_5: @ncr_item.modified_by_5, modifier_group_1_external_id: @ncr_item.modifier_group_1_external_id, modifier_group_2_external_id: @ncr_item.modifier_group_2_external_id, modifier_group_3_external_id: @ncr_item.modifier_group_3_external_id, modifier_group_4_external_id: @ncr_item.modifier_group_4_external_id, modifier_group_5_external_id: @ncr_item.modifier_group_5_external_id, online_item_name: @ncr_item.online_item_name, package_cost: @ncr_item.package_cost, price: @ncr_item.price, primary_vendor: @ncr_item.primary_vendor, prompt_for_price: @ncr_item.prompt_for_price, sold_by_weight_measure: @ncr_item.sold_by_weight_measure, tax_category: @ncr_item.tax_category, track_inventory: @ncr_item.track_inventory, unit_cost: @ncr_item.unit_cost, units_on_hand: @ncr_item.units_on_hand, units_per_package: @ncr_item.units_per_package, variation_types: @ncr_item.variation_types, variations: @ncr_item.variations } }
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
    patch ncr_item_url(@ncr_item), params: { ncr_item: { available_for_sale_on_pos: @ncr_item.available_for_sale_on_pos, available_for_sale_online: @ncr_item.available_for_sale_online, barcode: @ncr_item.barcode, category: @ncr_item.category, description: @ncr_item.description, external_id: @ncr_item.external_id, item_name: @ncr_item.item_name, modified_by_1: @ncr_item.modified_by_1, modified_by_2: @ncr_item.modified_by_2, modified_by_3: @ncr_item.modified_by_3, modified_by_4: @ncr_item.modified_by_4, modified_by_5: @ncr_item.modified_by_5, modifier_group_1_external_id: @ncr_item.modifier_group_1_external_id, modifier_group_2_external_id: @ncr_item.modifier_group_2_external_id, modifier_group_3_external_id: @ncr_item.modifier_group_3_external_id, modifier_group_4_external_id: @ncr_item.modifier_group_4_external_id, modifier_group_5_external_id: @ncr_item.modifier_group_5_external_id, online_item_name: @ncr_item.online_item_name, package_cost: @ncr_item.package_cost, price: @ncr_item.price, primary_vendor: @ncr_item.primary_vendor, prompt_for_price: @ncr_item.prompt_for_price, sold_by_weight_measure: @ncr_item.sold_by_weight_measure, tax_category: @ncr_item.tax_category, track_inventory: @ncr_item.track_inventory, unit_cost: @ncr_item.unit_cost, units_on_hand: @ncr_item.units_on_hand, units_per_package: @ncr_item.units_per_package, variation_types: @ncr_item.variation_types, variations: @ncr_item.variations } }
    assert_redirected_to ncr_item_url(@ncr_item)
  end

  test "should destroy ncr_item" do
    assert_difference('NcrItem.count', -1) do
      delete ncr_item_url(@ncr_item)
    end

    assert_redirected_to ncr_items_url
  end
end
