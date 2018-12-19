require "rails_helper"

RSpec.describe "User registration", :type => :request do

  it "successfully registers a user" do
    post "/users.json", :params => { :user => {:email => 'test@test.com', :password => 'password', :password_confirmation => 'password'} }
    expect(response.content_type).to eq("application/json")
    expect(response).to have_http_status(:created)
    expect(json_response["user_id"]).to be_an(Integer)
  end

  it "rejects a registration for mismatched passwords" do
    post "/users.json", :params => { :user => {:email => 'test@test.com', :password => 'password', :password_confirmation => 'wrong'} }
    expect(response.content_type).to eq("application/json")
    expect(response).to have_http_status(:unauthorized)
    expect(json_response["message"]).to include("Password confirmation doesn't match Password")
  end

  it "rejects a registration for invalid email" do
    post "/users.json", :params => { :user => {:email => 'test', :password => 'password', :password_confirmation => 'password'} }
    expect(response.content_type).to eq("application/json")
    expect(response).to have_http_status(:unauthorized)
    expect(json_response["message"]).to include("Email is invalid")
  end


  def json_response
    JSON.parse(response.body)
  end

end