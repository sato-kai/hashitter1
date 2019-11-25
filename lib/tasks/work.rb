class Work
  def self.work
    users = User.pluck(:id)
    users.each do |user|
      work = Work.new
      work.user_id = user
      work.run = 0
      work.save
    end
  end
end