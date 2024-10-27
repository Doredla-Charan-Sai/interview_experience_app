-- CREATE TABLE new_companies (
--     id INTEGER PRIMARY KEY AUTOINCREMENT, 
--     companyName TEXT,
--     role TEXT,
--     ctc NUMERIC,
--     shortlist TEXT,
--     round1 TEXT,
--     round1Info TEXT,
--     round2 TEXT,
--     round3 TEXT,
--     round4 TEXT,
--     round5 TEXT,
--     codingAsked NUMERIC,
--     codingTopics TEXT,
--     hr TEXT
-- );

-- INSERT INTO new_companies (id, companyName, role, ctc, shortlist, round1, round1Info, round2, round3, round4, round5, codingAsked, codingTopics, hr)
-- SELECT id, companyName, role, ctc, shortlist, round1, round1Info, round2, round3, round4, round5, codingAsked, codingTopics, hr FROM companies;

-- DROP TABLE companies;
-- ALTER TABLE new_companies RENAME TO companies;

-- DELETE FROM companies WHERE id NOT LIKE 1;

-- INSERT INTO companies (id, companyName, role, ctc, shortlist, round1, round1Info, round2, round3, round4, round5, codingAsked, codingTopics, hr) 
-- VALUES 
-- (2, 'Google', 'Software Engineer', 3200000, 'Resume & GPA/% of B.Tech/10/12', 'Exam/Test', 'Technical coding test on data structures and algorithms', 'Technical Interview', 'System Design Interview', 'Behavioral Interview', NULL, 1, 'Data Structures, Algorithms, System Design', 'Behavioral round on Googleyness and culture fit'),
-- (3, 'Amazon', 'SDE Intern', 2500000, 'Resume', 'Exam/Test', 'Online coding test focusing on algorithms', 'Technical Interview', 'System Design Interview', 'Leadership Principles Interview', NULL, 1, 'Algorithms, Problem Solving', 'Behavioral round based on Amazon’s Leadership Principles'),
-- (4, 'Microsoft', 'Software Developer', 2800000, 'Resume & GPA/% of B.Tech/10/12', 'Exam/Test', 'Technical coding test on algorithms', 'Coding Interview', 'System Design Interview', 'Behavioral Interview', NULL, 1, 'Data Structures, Algorithms, Object-Oriented Programming', 'Discussion on teamwork, collaboration, and adaptability'),
-- (5, 'Apple', 'Product Engineer', 3000000, 'GPA/% of B.Tech/10/12', 'Exam/Test', 'Coding round focused on product knowledge', 'Technical Interview', 'Design Interview', 'Behavioral Interview', NULL, 1, 'Product Design, Algorithms', 'Behavioral round discussing innovation and fit within Apple’s culture'),
-- (6, 'Meta', 'Data Scientist', 2700000, 'Resume', 'Exam/Test', 'Coding round on data manipulation', 'Technical Interview', 'System Design Interview', 'Behavioral Interview', NULL, 1, 'Data Analysis, Machine Learning', 'Fit within the company’s mission and values'),
-- (7, 'Tesla', 'Mechanical Engineer', 3500000, 'GPA/% of B.Tech/10/12', 'Assignment', 'Technical project focused on mechanical design', 'Technical Interview', 'Practical Test', 'Panel Interview', NULL, 0, NULL, 'Fit within the culture of innovation and fast-paced work environment'),
-- (8, 'Goldman Sachs', 'Analyst', 2200000, 'Resume & GPA/% of B.Tech/10/12', 'Exam/Test', 'Online assessment with financial questions', 'Behavioral Interview', 'Technical Interview', NULL, NULL, 0, NULL, 'Leadership potential and fit within the financial services industry'),
-- (9, 'IBM', 'Software Engineer', 2400000, 'Resume', 'Exam/Test', 'Technical assessment focused on coding', 'Coding Interview', 'System Design Interview', 'Behavioral Interview', NULL, 1, 'Data Structures, Algorithms', 'Discussion on adaptability, problem-solving skills'),
-- (10, 'Deloitte', 'Consultant', 2600000, 'GPA/% of B.Tech/10/12', 'Exam/Test', 'Case study assessment', 'Behavioral Interview', 'Technical Interview', 'Case Study Interview', NULL, 0, NULL, 'Communication skills and client handling experience'),
-- (11, 'Salesforce', 'Business Analyst', 2300000, 'Resume', 'Exam/Test', 'Business case study', 'Behavioral Interview', 'Technical Interview', 'Panel Interview', NULL, 0, NULL, 'Experience in business analysis and customer-centric solutions');

select * from companies;
