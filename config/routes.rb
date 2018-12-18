Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/status', to: 'home#show', as: 'application_status'
  get '/sign_in', to: 'sign_in#show', as: 'sign_in'

  devise_for :users, :controllers => {

      :registrations => "users/registrations",
      :sessions => "users/sessions"

  }

  resources :users, only: [:show, :new, :create]

  root 'home#index'
end
