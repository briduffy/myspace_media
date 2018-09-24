200.times do
  name = Faker::FunnyName.two_word_name
  Friend.create(
    name: name,
    location: Faker::HarryPotter.location,
    age: Faker::Number.between(18, 65),
    gender: Faker::Gender.binary_type,
    occupation: Faker::Job.title,
    quote: Faker::Friends.quote
  )
 end
