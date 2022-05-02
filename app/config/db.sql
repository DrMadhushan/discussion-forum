create database discussion_forum;
use discussion_forum;
drop table if exists users;
create table users (
  userId varchar(10) primary key,
  uKey varchar(128),
  uname varchar(40) not null,
  email varchar(40) not null,
  createdAt datetime default(current_timestamp)
);
drop table if exists questions;
create table questions (
  qid int AUTO_INCREMENT PRIMARY KEY,
  userId varchar(10) not null,
  question varchar(512) not null,
  answered tinyint not null,
  keywords json not null,
  postedAt datetime default(current_timestamp)
);
drop table if exists answers;
create table answers (
  aid int AUTO_INCREMENT PRIMARY KEY,
  qid int not null,
  userId varchar(10) not null,
  answer varchar(2048) not null,
  foreign key (qid) references questions(qid) on delete cascade,
  foreign key (userId) references users(userId) on delete cascade
);