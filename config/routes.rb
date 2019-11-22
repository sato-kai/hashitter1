Rails.application.routes.draw do
  devise_for :users, :controllers => {
    :registrations => 'users/registrations',
    :sessions => 'users/sessions'
  }
  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end
  root 'tweets#index'
  resources :users, only: [:show, :edit, :update]
  resources :tweets do
    resources :comments #, only: [:create]
  end
  post '/like/:tweet_id' => 'likes#like', as: 'like'
  delete '/like/:tweet_id' => 'likes#unlike', as: 'unlike'

end
