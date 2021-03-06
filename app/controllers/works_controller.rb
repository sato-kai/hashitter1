class WorksController < ApplicationController
  
  before_action :move_to_sign_in, only: :index
  before_action :set_work, except: :change_body_style
  before_action :weekly_average, except: :change_body_style
  before_action :weekly_data, only: :index

  def index
    @new_tweet = Tweet.new
    @tweet_ranking = Tweet.find(Like.group(:tweet_id).order('count(tweet_id) DESC').limit(3).pluck(:tweet_id))
    @to_slim = 21 - @weekly_total
    @to_chubby = 14 - @weekly_total
    @work_ranking = Avatar.order('weekly_average_mileage DESC').limit(3)
  end


  def set_distance
    if @work.nil?
      work = Work.new(user_id: current_user.id, run: 0)
      if work.save
        redirect_to action: :index
      end
    end
  end

  def save_distance
    if @work.update(work_params)
      change_body_style
      redirect_to action: :index
    else
      redirect_to action: :index
      flash[:notice] = "保存に失敗"
    end
  end

  def change_body_style
    weekly_average
    current_user.avatar.update(weekly_average_mileage: @weekly_average)
    if @weekly_average >= 3
      current_user.avatar.update(face: "slim", tops: "slim", inner: "inner1", bottoms: "slim")
      flash[:notice] = "やったね理想の体型！"
    elsif @weekly_average < 3 && @weekly_average >= 2
      current_user.avatar.update(face: "chubby", tops: "chubby", bottoms: "chubby")
      flash[:notice] = "その調子！少し痩せたよ！"
    else
      current_user.avatar.update(face: "fat", tops: "fat", bottoms: "fat")
    end
  end

  private

  def set_work
    @work = current_user.works.where("DATE(created_at) = '#{Date.today}'")[0]
  end

  def work_params
    params.permit(:run, :user_id)
  end

  def weekly_average
    @user_work= Work.where(user_id: current_user.id)
    @total_distance = @user_work.sum(:run)
    today_end = Time.now.at_end_of_day
    week_start = (today_end - 6.day).at_beginning_of_day
    @week_data = @user_work.where(created_at: week_start...today_end)
    @weekly_total = @user_work.where(created_at: week_start...today_end).sum(:run)
    @weekly_average = (@weekly_total / 7).round(2)
  end

  def weekly_data
    weekly_data = @week_data.order('created_at ASC').pluck(:created_at, :run).map{|c, r| [Date.parse(c.to_s), r]}
    today = Date.today
    a_week_ago = today - 6
    week = []
    (a_week_ago..today).each do |date|
      week << [date, 0]
    end
    @chart_data = week.concat(weekly_data)
  end

  def move_to_sign_in
    redirect_to new_user_session_path unless user_signed_in?
  end

end
