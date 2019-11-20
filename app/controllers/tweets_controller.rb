class TweetsController < ApplicationController

  def index
    @tweets = Tweet.includes(:user).order("created_at DESC")
    @tweet = Tweet.new
  end

  def new
    @tweet = Tweet.new
  end

  def create
    @tweet = Tweet.new(tweet_params)
    if @tweet.save
      redirect_to action: "index"
    else
      render :new
    end
  end

  private

  def tweet_params
    params.require(:tweet).permit(:text, :image).merge(user_id: current_user.id)
  end
end
