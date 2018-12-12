class UsersController < ApplicationController

  def show

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

    unless user_signed_in?
      render json: {
          can_register: true
      }
    else
      render json: {
          can_register: false,
          reason: 'signed_in',
          email: current_user.email,
          username: 'test'
      }
    end

  end

  def create

  end

end