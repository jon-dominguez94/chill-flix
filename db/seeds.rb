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
jon.save!
demo.save!



profile1 = Profile.new({ username: 'demo', user_id: demo.id })
profile2 = Profile.new({ username: 'kids', user_id: demo.id})
profile1.save!
profile2.save!
profile3 = Profile.new({ username: 'jon', user_id: jon.id})
profile3.save!



movie1 = Movie.new({ title: 'The Comeback', description: 'Once powerhouses in showbiz, this elderly couple wants to get back in the game.' })
movie1.thumbnail.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/tn/old.png'), filename: 'old.png'})
movie1.video.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/vids/old.mp4'), filename: 'old.mp4'})
movie1.save!

movie2 = Movie.new({ title: 'I Love You, Man', description: 'Successful real-estate man Peter Klaven has it all: a great job, a beautiful home and a loving wife-to-be. Unfortunately, due to his devotion to both his work and fiancée Zooey, Peter has failed to make any friends. With his wedding fast approaching, the pressure is on to find a best man and so Peter embarks on several desperate attempts to find a best buddy.' })
movie2.thumbnail.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/tn/ilym.png'), filename: 'ilym.png'})
movie2.video.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/vids/ilym.mp4'), filename: 'ilym.mp4'})
movie2.save!

movie3 = Movie.new({ title: 'Eight Mile', description: 'The people of Detroit know 8 Mile as the city limit, a border, a boundary. It is also a psychological dividing line that separates Jimmy Smith Jr. (Eminem) from where and who he wants to be. A provocative fictional examination of a critical week in Jimmy\'s life.' })
movie3.thumbnail.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/tn/em.png'), filename: 'em.png'})
movie3.video.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/vids/em.mp4'), filename: 'em.mp4'})
movie3.save!

# movie1.thumbnail.attach({io: EzDownload.open('https://s3-us-west-1.amazonaws.com/chillflix-dev/oldtn.png'), filename: 'oldtn.png'})
# movie1.video.attach({io: EzDownload.open('https://s3-us-west-1.amazonaws.com/chillflix-dev/commercial.mp4'), filename: 'old.mp4'})
# movie1.thumbnail.attach({io: File.open('/Users/jondominguez/Desktop/assets/oldtn.png'), filename: 'oldtn.png'})
# movie1.video.attach({io: File.open('/Users/jondominguez/Desktop/assets/com.mp4'), filename: 'old.mp4'})
