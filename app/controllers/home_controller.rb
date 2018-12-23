class HomeController < ApplicationController

  def index

  end

  def show
    render json: {
        status: 'green',
        time: Time.zone.now
    }
  end

end