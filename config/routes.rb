Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/status', to: 'home#show', as: 'application_status'

  root 'home#index'
end
