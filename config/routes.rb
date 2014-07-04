PictureGameCli::Application.routes.draw do
    root 'application#index'

    namespace :api, defaults: {format: 'json'} do
        namespace :v1 do
            resources :puzzles
        end
    end

    get '*foo', :to => 'application#index'
end
