class SignInController < ApplicationController

  def show
    redirect_to root_path if user_signed_in?
  end

end