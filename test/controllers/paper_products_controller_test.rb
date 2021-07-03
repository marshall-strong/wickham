require "test_helper"

class PaperProductsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @paper_product = paper_products(:one)
  end

  test "should get index" do
    get paper_products_url
    assert_response :success
  end

  test "should get new" do
    get new_paper_product_url
    assert_response :success
  end

  test "should create paper_product" do
    assert_difference('PaperProduct.count') do
      post paper_products_url, params: { paper_product: { name: @paper_product.name } }
    end

    assert_redirected_to paper_product_url(PaperProduct.last)
  end

  test "should show paper_product" do
    get paper_product_url(@paper_product)
    assert_response :success
  end

  test "should get edit" do
    get edit_paper_product_url(@paper_product)
    assert_response :success
  end

  test "should update paper_product" do
    patch paper_product_url(@paper_product), params: { paper_product: { name: @paper_product.name } }
    assert_redirected_to paper_product_url(@paper_product)
  end

  test "should destroy paper_product" do
    assert_difference('PaperProduct.count', -1) do
      delete paper_product_url(@paper_product)
    end

    assert_redirected_to paper_products_url
  end
end
