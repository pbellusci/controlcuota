Rails.application.routes.draw do
  devise_for :users,
             controllers: {
                 sessions: 'users/sessions',
                 registrations: 'users/registrations'
             }
  resources :gastos
  resources :tarjetas
  namespace :common_data do
    get 'all', action: 'index'
    get 'bancos'
    get 'tipos_tarjeta'
  end

  resources :categories
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
