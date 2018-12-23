require "rails_helper"

RSpec.describe "Sign in", :type => :request do

  let(:user) { FactoryBot.create(:user) }

  it "user successfully signs in" do
    post "/users/sign_in.json", :params => { :user => {:email => user.email, :password => 'password'} }
    expect(response.content_type).to eq("application/json")
    expect(response).to have_http_status(:ok)
  end

  it "user unsuccessfully signs in" do
    post "/users/sign_in.json", :params => { :user => {:email => 'test@test.com', :password => 'password1'} }
    expect(response.content_type).to eq("application/json")
    expect(response).to have_http_status(:unauthorized)
    expect(json_response["error"]).to include("Invalid Email or password")
  end


  def json_response
    JSON.parse(response.body)
  end

end