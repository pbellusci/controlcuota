require "test_helper"

class CommonDataControllerTest < ActionDispatch::IntegrationTest
  setup do
    @common_datum = common_data(:one)
  end

  test "should get index" do
    get common_data_url, as: :json
    assert_response :success
  end

  test "should create common_datum" do
    assert_difference('CommonDatum.count') do
      post common_data_url, params: { common_datum: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show common_datum" do
    get common_datum_url(@common_datum), as: :json
    assert_response :success
  end

  test "should update common_datum" do
    patch common_datum_url(@common_datum), params: { common_datum: {  } }, as: :json
    assert_response 200
  end

  test "should destroy common_datum" do
    assert_difference('CommonDatum.count', -1) do
      delete common_datum_url(@common_datum), as: :json
    end

    assert_response 204
  end
end
