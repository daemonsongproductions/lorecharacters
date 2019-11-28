namespace :admin do

  desc "Get User id for the provided email address"
  task :get_user_id, [:email] => :environment do |t, args|

    user = User.find_by(email: args.email)

    if user
      puts "User ID: #{user.id}"
      puts "Admin: #{user.admin?}"
    end

    if user && user.player
      puts "Player ID: #{user.player.id}"
    else
      puts "There is no player for this user."
    end

  end

  desc "Promote User to Admin"
  task :promote_user_to_admin, [:user_id] => :environment do |t, args|
    user = User.find(args.user_id)
    user.admin = true
    user.save!
    puts "User has been promoted to Admin."
  end

  desc "Demote User from Admin"
  task :demote_user_from_admin, [:user_id] => :environment do |t, args|
    user = User.find(args.user_id)
    user.admin = false
    user.save!
    puts "User has been demoted from Admin."
  end

end