#View original : https://github.com/plataformatec/devise/blob/master/app/controllers/devise/registrations_controller.rb

class Users::RegistrationsController < Devise::RegistrationsController

  respond_to :json

  # POST /resource
  def create
    build_resource(sign_up_params)

    resource.save
    yield resource if block_given?
    if resource.persisted?
      if resource.active_for_authentication?
        set_flash_message :notice, :signed_up if is_flashing_format?
        #find_message is devise method. We used for json response
        msg = find_message(:signed_up, {})
        sign_up(resource_name, resource)
        respond_with(resource) do |format|
          format.json { render json: {user_id: resource.id}, status: 201 }
        end
      else
        set_flash_message :notice, :"signed_up_but_#{resource.inactive_message}" if is_flashing_format?
        #find_message is devise method. We used for json response
        msg = find_message(:"signed_up_but_#{resource.inactive_message}", {})
        expire_data_after_sign_in!
        respond_with(resource) do |format|
          format.json { render json: {message: msg,url: after_inactive_sign_up_path_for(resource)}, status: 200 }
        end
      end
    else
      clean_up_passwords resource
      #passing block to handle error in signup for json
      #http://edgeapi.rubyonrails.org/classes/ActionController/Responder.html
      respond_with(resource) do |format|
        msg = resource.errors.full_messages.join("<br>").html_safe
        format.json { render json: {message: msg}, status: 401 }
      end
    end
  end

  private


end