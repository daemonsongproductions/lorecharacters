class MeController < ApplicationController

  def show

    if user_signed_in?
      player = Player.find_or_create_by(user_id: current_user.id)

      respond_to do |format|
        format.html
        format.json {
          render json: {
              id: player.try(:id),
              user_id: current_user.id,
              email: current_user.email,
              name: player.try(:name),
              available_event_points: player.try(:available_event_points),
              available_lore_points: player.try(:available_lore_points),
              signed_in: true
          }
        }
      end
    else
      respond_to do |format|
        format.html{redirect_to(sign_in_path)}
        format.json {
          render json: {
              signed_in: false
          }
        }
      end


    end
  end

end