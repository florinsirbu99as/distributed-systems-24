Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :examples  # Diese Route gibt es bereits
      resources :shopping_items  # Diese Route hinzufügen
    end
  end
end

