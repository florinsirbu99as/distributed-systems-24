module Api
    module V1
      class ShoppingItemsController < ApplicationController
        def index
          render json: { message: "Shopping Items API is working" }
        end
      end
    end
  end
  