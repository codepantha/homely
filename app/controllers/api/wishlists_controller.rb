module Api
  class WishlistsController < ApplicationController
    def create
      wishlist = Wishlist.new(wishlist_params)

      if wishlist.save
        render json: wishlist, status: :created
      else
        render json: { errors: wishlist.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def destroy
      wishlist = Wishlist.find(params[:id])
      wishlist.destroy

      head :no_content

    rescue ActiveRecord::RecordNotFound
      render json: { error: 'Wishlist not found' }, status: :not_found
    end

    private

    def wishlist_params
      params.permit(:user_id, :property_id)
    end
  end
end
