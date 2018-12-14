require 'test_helper'

class ProfilesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get profiles_index_url
    assert_response :success
  end

  test "should get create" do
    get profiles_create_url
    assert_response :success
  end

end
