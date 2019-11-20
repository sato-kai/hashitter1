class TweetsController < ApplicationController

  def index
    @tweets = Tweet.includes(:user).order("created_at DESC")
    @new_tweet = Tweet.new
  end

  def create
    @new_tweet = Tweet.new(tweet_params)
    if @new_tweet.save
      redirect_to action: :index
      flash[:notice] = "tweetを投稿しました"
    else
      redirect_to action: :index
      flash[:notice] = "tweetを投稿できませんでした"
    end
  end

  def show
    @tweet = Tweet.find(params[:id])
    @new_tweet = Tweet.new
  end

  private

  def tweet_params
    params.require(:tweet).permit(:text, :image).merge(user_id: current_user.id)
  end
end
