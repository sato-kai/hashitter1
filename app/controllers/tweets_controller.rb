class TweetsController < ApplicationController

  before_action :set_tweet, except: [:index, :create]

  def index
    @tweets = Tweet.includes(:user).order("created_at DESC").page(params[:page]).per(10)
    @new_tweet = Tweet.new
    @tweet_ranking = Tweet.find(Like.group(:tweet_id).order('count(tweet_id) DESC').limit(3).pluck(:tweet_id))
    @work_ranking = Avatar.order('weekly_average_mileage DESC').limit(3)
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
    @comment = Comment.new
    @comments = @tweet.comments.includes(:user)
    @tweet_ranking = Tweet.find(Like.group(:tweet_id).order('count(tweet_id) DESC').limit(3).pluck(:tweet_id))
    @work_ranking = Avatar.order('weekly_average_mileage DESC').limit(3)
  end

  def update
    if @tweet.user_id == current_user.id
      if @tweet.update(tweet_params)
        redirect_to root_path
        flash[:notice] = "tweetを編集しました"
      else
        render :show
        flash.now[:notice] = "tweetを編集できませんでした"
      end
    else
      redirect_to root_path
      flash[:notice] = "編集する権限がありません"
    end
  end

  def destroy
    if @tweet.user_id == current_user.id
      @tweet.destroy
      redirect_to root_path
      flash[:notice] = "tweetを削除しました"
    else
      redirect_to root_path
      flash[:notice] = "tweetを削除できませんでした"
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
