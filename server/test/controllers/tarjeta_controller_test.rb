require "test_helper"

class TarjetaControllerTest < ActionDispatch::IntegrationTest
  setup do
    @tarjetum = tarjeta(:one)
  end

  test "should get index" do
    get tarjeta_url, as: :json
    assert_response :success
  end

  test "should create tarjetum" do
    assert_difference('Tarjetum.count') do
      post tarjeta_url, params: { tarjetum: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show tarjetum" do
    get tarjetum_url(@tarjetum), as: :json
    assert_response :success
  end

  test "should update tarjetum" do
    patch tarjetum_url(@tarjetum), params: { tarjetum: {  } }, as: :json
    assert_response 200
  end

  test "should destroy tarjetum" do
    assert_difference('Tarjetum.count', -1) do
      delete tarjetum_url(@tarjetum), as: :json
    end

    assert_response 204
  end
end
