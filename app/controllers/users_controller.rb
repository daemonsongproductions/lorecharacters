class UsersController < ApplicationController

  def index

    if user_signed_in?
      render json: {
          email: current_user.email,
          signed_in: true
      }
    else
      render json: {
          signed_in: false
      }
    end
  end
end