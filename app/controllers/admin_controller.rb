class AdminController < ApplicationController


  def show
    authorize! :manage, :admin, :message => "You are not authorized to perform this action."
  end

end