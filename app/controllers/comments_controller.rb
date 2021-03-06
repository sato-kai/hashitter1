class CommentsController < ApplicationController
  def create
    if comment = Comment.create(text: comment_params[:text], tweet_id: params[:tweet_id], user_id: current_user.id)
      redirect_to tweet_path(comment.tweet.id)
      flash[:notice] = "tweetにコメントしました"
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:text, :tweet_id)
  end
end
