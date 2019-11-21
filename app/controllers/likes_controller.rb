class LikesController < ApplicationController
  before_action :set_tweet
  
    def like
      like = current_user.likes.new(tweet_id: @tweet.id)
      like.save
    end

    def unlike
      like = current_user.likes.find_by(tweet_id: @tweet.id)
      like.destroy
    end

  private

  def set_tweet
    @tweet = Tweet.find(params[:tweet_id])
    @id_name = "#like-link-#{@tweet.id}"
  end
  
end
