namespace :admin do

  desc "Get User id for the provided email address"
  task :get_user_id, [:email] => :environment do |t, args|

    user = User.find_by(email: args.email)

    puts "User ID: #{user.id}" if user
    if user && user.player
      puts "Player ID: #{user.player.id}"
    else
      puts "There is no player for this user."
    end

  end

end