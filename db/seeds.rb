# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Job.destroy_all


puts 'seeding jobs'

Job.create!(title:"Software Engineer Intern", salary:60000, description:"One-line Description Collaborate", link: "https://us.bebee.com/job/20220509-20d2a92b9123272e67df098dc38eea79?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic")
Job.create!(title:"Manager, Software Engineering, Full Stack", salary:90000, description:"Nice benefits", link: "https://jobsearcher.com/j/manager-software-engineering-full-stack-at-capital-one-in-rahway-nj-m3jV3bM?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic")
Job.create!(title:"Software Engineer", salary:120000, description:"Nice Job", link: "https://www.linkedin.com/jobs/view/software-engineer-at-actalent-3069102167/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic")
Job.create!(title:"Software Development Intern", salary:75000, description:"Dope", link: "https://jobsearcher.com/j/software-development-intern-at-situsamc-in-boston-ma-4oQKLXE?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic")
Job.create!(title:"Software Engineer Internship, Frontend", salary:50000, description:"Could be better", link: "https://us.bebee.com/job/20220509-64c88a02170cbddc649bf779b92ad55b?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic")




puts 'done seeding'