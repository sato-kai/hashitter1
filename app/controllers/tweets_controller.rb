class TweetsController < ApplicationController

  before_action :set_tweet, only: [:show, :edit]

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
    @new_tweet = Tweet.new
  end

  def update
    tweet = Tweet.find(params[:id])
    if tweet.user_id == current_user.id
      tweet.update(tweet_params)
      redirect_to root_path
      flash[:notice] = "tweetを編集しました"
    else
      redirect_to root_path
      flash[:notice] = "tweetを編集できませんでした"
    end
  end

  private

  def tweet_params
    params.require(:tweet).permit(:text, :image).merge(user_id: current_user.id)
  end

  def set_tweet
    @tweet = Tweet.find(params[:id])
  end
end
