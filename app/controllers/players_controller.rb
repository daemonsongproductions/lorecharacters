class PlayersController < ApplicationController

  def show

  end

  def update
    player = Player.find(params[:player][:id])

    if player.update(player_params)
      respond_to do |format|
        format.json {
          render json: {player: player}
        }
      end
    else
      respond_to do |format|
        format.json {
          render json: {error: "Something went wrong"}
        }
      end
    end
  end

  private

  def player_params
    params.require(:player).permit(:name)
  end

end