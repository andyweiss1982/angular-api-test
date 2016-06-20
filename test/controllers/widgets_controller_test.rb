require 'test_helper'

class WidgetsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @widget = widgets(:one)
  end

  test "should get index" do
    get widgets_url
    assert_response :success
  end

  test "should create widget" do
    assert_difference('Widget.count') do
      post widgets_url, params: { widget: {  } }
    end

    assert_response 201
  end

  test "should show widget" do
    get widget_url(@widget)
    assert_response :success
  end

  test "should update widget" do
    patch widget_url(@widget), params: { widget: {  } }
    assert_response 200
  end

  test "should destroy widget" do
    assert_difference('Widget.count', -1) do
      delete widget_url(@widget)
    end

    assert_response 204
  end
end