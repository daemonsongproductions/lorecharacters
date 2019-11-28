Rails.application.routes.draw do
  devise_for :users, :controllers => {

      :registrations => "users/registrations",
      :sessions => "users/sessions"

  }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/status', to: 'home#show', as: 'application_status'
  get '/sign_in', to: 'sign_in#show', as: 'sign_in'
  get 'me', to: 'me#show'
  get '/admin', to: 'admin#show'
  resources :players, only: [:index, :show, :create, :update]
  resources :characters, only: [:index, :show, :create, :update]


  resources :users, only: [:index]

  root 'home#index'
end
