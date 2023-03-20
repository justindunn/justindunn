Rails.application.routes.draw do
  resources :chats
  devise_for :users
  root to: 'chats#index'
  # devise_scope :user do
  #   root to: "devise/sessions#new"
  # end
end
