class UsersController < ApplicationController

  def show

  end

  def new

    unless user_signed_in?
      render json: {
          can_register: true
      }
    else
      render json: {
          can_register: false,
          reason: 'signed_in'
      }
    end

  end

  def create

  end

end