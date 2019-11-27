class UsersController < ApplicationController
  
  before_action :set_user
  before_action :move_to_sign_in, only: :edit

  def show
    @new_tweet = Tweet.new
    @tweets = @user.tweets.order("created_at DESC").page(params[:page]).per(10)
    @tweet_ranking = Tweet.find(Like.group(:tweet_id).order('count(tweet_id) DESC').limit(3).pluck(:tweet_id))
    @work_ranking = Avatar.order('weekly_average_mileage DESC').limit(3)
  end

  def edit
  end

  def update
    if @user.id == current_user.id
      @user.update(user_params)
      redirect_to action: :show
      flash[:notice] = "ユーザーを編集しました"
    else
      redirect_to root_path
      flash[:notice] = "編集する権限がありません"
    end
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:name, :email, :prefecture,
      :gender, :age, :profile, avatar_attributes: [
      :face, :hair, :hair_color, :tops, :tops_color, :inner, :inner_color,
      :bottoms, :bottoms_color, :spats, :spats_color,
      :shoes, :shoes_color, :weekly_average_mileage, :user_id
    ])
  end

  def move_to_sign_in
    redirect_to new_user_session_path unless user_signed_in?
  end

end
