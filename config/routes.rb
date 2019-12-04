Rails.application.routes.draw do
  devise_for :users, :controllers => {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  }
  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
    get '/users/get_fat' => 'users/registrations#get_fat'
  end
  root 'tweets#index'
  resources :users, only: [:show, :edit, :update] do
    resources :works, only: [:index, :new] do
      member do
        post 'set_distance'
        get 'input_distance'
        patch 'save_distance'
      end
    end
  end
  resources :tweets , only: [:index, :new, :create, :show, :update, :destroy] do
    resources :comments, only: [:create]
  end
  post '/like/:tweet_id' => 'likes#like', as: 'like'
  delete '/like/:tweet_id' => 'likes#unlike', as: 'unlike'

end
