# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Movie.destroy_all
Profile.destroy_all


jon = User.new({ email: 'jon@yahoo.com', password: 'password' })
demo = User.new({ email: 'demo@gmail.com', password: 'password' })
# jon.photo.attach({io: EzDownload.open('https://s3-us-west-1.amazonaws.com/chillflix-dev/pp.png'), filename: 'ppic.png'})
# demo.photo.attach({io: EzDownload.open('https://s3-us-west-1.amazonaws.com/chillflix-dev/pp.png'), filename: 'ppic.png'})
jon.save!
demo.save!

profile1 = Profile.new({ username: 'demo', user_id: demo.id })
profile2 = Profile.new({ username: 'kids', user_id: demo.id})

profile1.save!
profile2.save!

profile3 = Profile.new({ username: 'jon', user_id: jon.id})

profile3.save!

movie1 = Movie.new({ title: 'Old people', description: 'make a commercial' })
# movie1.thumbnail.attach({io: EzDownload.open('https://s3-us-west-1.amazonaws.com/chillflix-dev/oldtn.png'), filename: 'oldtn.png'})
# movie1.video.attach({io: EzDownload.open('https://s3-us-west-1.amazonaws.com/chillflix-dev/commercial.mp4'), filename: 'old.mp4'})
movie1.thumbnail.attach({io: File.open('/Users/jondominguez/Desktop/oldtn.png'), filename: 'oldtn.png'})
movie1.video.attach({io: File.open('/Users/jondominguez/Desktop/com.mp4'), filename: 'old.mp4'})


movie1.save!
