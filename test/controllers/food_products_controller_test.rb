require "test_helper"

class FoodProductsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @food_product = food_products(:one)
  end

  test "should get index" do
    get food_products_url
    assert_response :success
  end

  test "should get new" do
    get new_food_product_url
    assert_response :success
  end

  test "should create food_product" do
    assert_difference('FoodProduct.count') do
      post food_products_url, params: { food_product: { name: @food_product.name } }
    end

    assert_redirected_to food_product_url(FoodProduct.last)
  end

  test "should show food_product" do
    get food_product_url(@food_product)
    assert_response :success
  end

  test "should get edit" do
    get edit_food_product_url(@food_product)
    assert_response :success
  end

  test "should update food_product" do
    patch food_product_url(@food_product), params: { food_product: { name: @food_product.name } }
    assert_redirected_to food_product_url(@food_product)
  end

  test "should destroy food_product" do
    assert_difference('FoodProduct.count', -1) do
      delete food_product_url(@food_product)
    end

    assert_redirected_to food_products_url
  end
end
