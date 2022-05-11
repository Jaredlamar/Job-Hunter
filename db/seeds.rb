# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Job.destroy_all
User.destroy_all


puts 'seeding jobs'

Job.create!(company: 'Sony Music', location: "New York, NY", title:"Software Engineer Intern", salary:60000, description:"One-line Description Collaborate", logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Sony-Music-Logo.svg/1200px-Sony-Music-Logo.svg.png', link: "https://us.bebee.com/job/20220509-20d2a92b9123272e67df098dc38eea79?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic")
Job.create!(company: 'Nike', location: "New York, NY", title:"Manager, Software Engineering, Full Stack", salary:90000, description:"Nice benefits", logo: 'https://pbs.twimg.com/profile_images/1484586799921909764/A9yYenz3.png', link: "https://jobsearcher.com/j/manager-software-engineering-full-stack-at-capital-one-in-rahway-nj-m3jV3bM?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic")
Job.create!(company: 'CoinBase', location: "New York, NY", title:"Software Engineer", salary:120000, description:"Nice Job", logo: 'https://www.highsnobiety.com/static-assets/thumbor/RLahXWkVEh9UcaOZx8VafLikizM=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2012/08/06171644/replacement-logos-01.jpg', link: "https://www.linkedin.com/jobs/view/software-engineer-at-actalent-3069102167/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic")
Job.create!(company: 'New York Knicks', location: "New York, NY", title:"Software Development Intern", salary:75000, description:"Dope", logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/1200px-New_York_Knicks_logo.svg.png', link: "https://jobsearcher.com/j/software-development-intern-at-situsamc-in-boston-ma-4oQKLXE?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic")
Job.create!(company: 'Acer', location: "New York, NY", title:"Software Engineer Internship, Frontend", salary:50000, description:"Could be better", logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Acer_2011.svg/1280px-Acer_2011.svg.png', link: "https://us.bebee.com/job/20220509-64c88a02170cbddc649bf779b92ad55b?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic")


# User.create!(username: "Matt", password_digest: "#{User.digest('password')}" )

puts 'done seeding'