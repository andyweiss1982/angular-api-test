Rails.application.routes.draw do
  namespace :api do
    resources :widgets
  end
  get "*path", to: redirect('/')
end
