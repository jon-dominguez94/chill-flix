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


movie11 = Movie.new({ title: 'Adventure Time', description: 'A 12-year-old boy and his best friend, wise 28-year-old dog with magical powers, go on a series of surreal adventures with each other.' })
movie11.thumbnail.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/tn/at.png'), filename: 'at.png'})
movie11.video.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/vids/at2.mp4'), filename: 'at2.mp4'})
movie11.save!

movie12 = Movie.new({ title: 'Thor: Ragnarok', description: 'Thor is imprisoned on the planet Sakaar, and must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.' })
movie12.thumbnail.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/tn/av.png'), filename: 'av.png'})
movie12.video.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/vids/av.mp4'), filename: 'av.mp4'})
movie12.save!

movie4 = Movie.new({ title: 'Black Mirror', description: 'After failing to impress the judges on a singing competition show, a woman must either perform degrading acts or return to a slave-like existence.' })
movie4.thumbnail.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/tn/bm.png'), filename: 'bm.png'})
movie4.video.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/vids/bm.mp4'), filename: 'bm.mp4'})
movie4.save!

movie3 = Movie.new({ title: 'Eight Mile', description: 'A young rapper, struggling with every aspect of his life, wants to make it big but his friends and foes make this odyssey of rap harder than it may seem.' })
movie3.thumbnail.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/tn/em.png'), filename: 'em.png'})
movie3.video.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/vids/em.mp4'), filename: 'em.mp4'})
movie3.save!

movie5 = Movie.new({ title: 'Friends', description: 'Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.' })
movie5.thumbnail.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/tn/friends.png'), filename: 'friends.png'})
movie5.video.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/vids/friends.mp4'), filename: 'friends.mp4'})
movie5.save!

movie13 = Movie.new({ title: 'Grey\'s Anatomy', description: 'A drama centered on the personal and professional lives of five surgical interns and their supervisors.' })
movie13.thumbnail.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/tn/ga.png'), filename: 'ga.png'})
movie13.video.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/vids/ga.mp4'), filename: 'ga.mp4'})
movie13.save!

movie6 = Movie.new({ title: 'How the Grinch Stole Christmas', description: 'On the outskirts of Whoville, there lives a green, revenge-seeking Grinch who plans on ruining the Christmas holiday for all of the citizens of the town.' })
movie6.thumbnail.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/tn/grinch.png'), filename: 'grinch.png'})
movie6.video.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/vids/grinch.mp4'), filename: 'grinch.mp4'})
movie6.save!

movie7 = Movie.new({ title: 'The Haunting of Hill House', description: 'Flashing between past and present, a fractured family confronts haunting memories of their old home and the terrifying events that drove them from it.' })
movie7.thumbnail.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/tn/hh.png'), filename: 'hh.png'})
movie7.video.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/vids/hh.mp4'), filename: 'hh.mp4'})
movie7.save!

movie14 = Movie.new({ title: 'How I Met Your Mother', description: 'A father recounts to his children, through a series of flashbacks, the journey he and his four best friends took leading up to him meeting their mother.' })
movie14.thumbnail.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/tn/himym.png'), filename: 'himym.png'})
movie14.video.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/vids/himym.mp4'), filename: 'himym.mp4'})
movie14.save!

movie2 = Movie.new({ title: 'I Love You, Man', description: 'Friendless Peter Klaven goes on a series of man-dates to find a Best Man for his wedding. But, when his insta-bond with his new B.F.F. puts a strain on his relationship with his fiancée, can the trio learn to live happily ever after?' })
movie2.thumbnail.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/tn/ilym.png'), filename: 'ilym.png'})
movie2.video.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/vids/ilym.mp4'), filename: 'ilym.mp4'})
movie2.save!

movie15 = Movie.new({ title: 'Nacho Libre', description: 'Berated all his life by those around him, a monk follows his dream and dons a mask to moonlight as a Luchador (Mexican wrestler).' })
movie15.thumbnail.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/tn/nacho.png'), filename: 'nacho.png'})
movie15.video.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/vids/nacho.mp4'), filename: 'nacho.mp4'})
movie15.save!

movie8 = Movie.new({ title: 'The Office', description: 'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.' })
movie8.thumbnail.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/tn/office.png'), filename: 'office.png'})
movie8.video.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/vids/office.mp4'), filename: 'office.mp4'})
movie8.save!

movie1 = Movie.new({ title: 'The Comeback', description: 'Once powerhouses in showbiz, this elderly couple wants to get back in the game.' })
movie1.thumbnail.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/tn/old.png'), filename: 'old.png'})
movie1.video.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/vids/commercial.mp4'), filename: 'old.mp4'})
movie1.save!

movie16 = Movie.new({ title: 'Shrek', description: 'After his swamp is filled with magical creatures, Shrek agrees to rescue Princess Fiona for a villainous lord in order to get his land back.' })
movie16.thumbnail.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/tn/shrek.png'), filename: 'shrek.png'})
movie16.video.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/vids/shrek.mp4'), filename: 'shrek.mp4'})
movie16.save!

movie9 = Movie.new({ title: 'Scary Movie', description: 'A year after disposing of the body of a man they accidentally killed, a group of dumb teenagers are stalked by a bumbling serial killer.' })
movie9.thumbnail.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/tn/sm.png'), filename: 'sm.png'})
movie9.video.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/vids/sm.mp4'), filename: 'sm.mp4'})
movie9.save!

movie10 = Movie.new({ title: 'Stranger Things', description: 'When a young boy disappears, his mother, a police chief, and his friends must confront terrifying forces in order to get him back.' })
movie10.thumbnail.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/tn/st.png'), filename: 'st.png'})
movie10.video.attach({io: open('https://s3-us-west-1.amazonaws.com/chillflix-prod/vids/ss.mp4'), filename: 'ss.mp4'})
movie10.save!

# movie1.thumbnail.attach({io: EzDownload.open('https://s3-us-west-1.amazonaws.com/chillflix-dev/oldtn.png'), filename: 'oldtn.png'})
# movie1.video.attach({io: EzDownload.open('https://s3-us-west-1.amazonaws.com/chillflix-dev/commercial.mp4'), filename: 'old.mp4'})
# movie1.thumbnail.attach({io: File.open('/Users/jondominguez/Desktop/assets/oldtn.png'), filename: 'oldtn.png'})
# movie1.video.attach({io: File.open('/Users/jondominguez/Desktop/assets/com.mp4'), filename: 'old.mp4'})
