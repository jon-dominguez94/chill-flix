Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resource :user, only: [:create]
    resources :profiles, only: [:index, :create, :update, :destroy]
    resources :movies, only: [:index, :show]
  end
  root to: 'static_pages#root'
end
