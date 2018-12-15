class SessionsController < ApplicationController

  def index

    if user_signed_in?
      render json: {
          email: current_user.email,
          username: 'test'
      }
    else
      render json: {
          email: '',
          username: ''
      }
    end

  end

  def new

    redirect_to root_path if user_signed_in?

  end


  def create

  end

end