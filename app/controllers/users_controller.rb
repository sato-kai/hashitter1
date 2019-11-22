class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @new_tweet = Tweet.new
    @tweets = @user.tweets.order("created_at DESC").page(params[:page]).per(10)
    @tweet_ranking = Tweet.find(Like.group(:tweet_id).order('count(tweet_id) DESC').limit(3).pluck(:tweet_id))
  end
end
