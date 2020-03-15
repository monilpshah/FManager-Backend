-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 15, 2020 at 04:29 PM
-- Server version: 10.1.40-MariaDB
-- PHP Version: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fmanager`
--

-- --------------------------------------------------------

--
-- Table structure for table `expense_tbl`
--

CREATE TABLE `expense_tbl` (
  `eid` int(11) NOT NULL,
  `fkuserid` int(11) NOT NULL,
  `amount` double NOT NULL,
  `remarks` varchar(100) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `expense_tbl`
--

INSERT INTO `expense_tbl` (`eid`, `fkuserid`, `amount`, `remarks`, `date`) VALUES
(3, 1, 555, 'Expense added', '2019-10-08 18:52:56'),
(4, 1, 999, 'This is Demo.', '2019-10-08 20:37:10'),
(5, 2, 81, 'wdklqn', '2019-10-16 21:03:56');

-- --------------------------------------------------------

--
-- Table structure for table `income_tbl`
--

CREATE TABLE `income_tbl` (
  `iid` int(11) NOT NULL,
  `fkuserid` int(11) NOT NULL,
  `amount` double NOT NULL,
  `remarks` varchar(150) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `income_tbl`
--

INSERT INTO `income_tbl` (`iid`, `fkuserid`, `amount`, `remarks`, `date`) VALUES
(4, 2, 99, 'This is Demo.', '2019-10-02 14:11:55'),
(5, 1, 987, 'demo', '2019-10-06 17:02:59'),
(6, 1, 622, 'Added Income', '2019-10-08 13:20:37');

-- --------------------------------------------------------

--
-- Table structure for table `note_tbl`
--

CREATE TABLE `note_tbl` (
  `nid` int(11) NOT NULL,
  `fkuserid` int(11) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `title` text NOT NULL,
  `note` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `note_tbl`
--

INSERT INTO `note_tbl` (`nid`, `fkuserid`, `date`, `title`, `note`) VALUES
(1, 2, '2019-10-02 19:48:14', 'This is title. Maximum lenght is this. And how long is this. This is testing.', 'This section is for description. Put here your comments.'),
(2, 1, '2019-10-08 18:36:05', 'Title 1', 'This is demo.This is demo.This is demo.This is demo.This is demo.This is demo.This is demo.This is demo.This is demo.This is demo.This is demo.This is demo.This is demo.This is demo.This is demo.This is demo.This is demo.This is demo.This is demo.This is demo.This is demo.This is demo.'),
(3, 1, '2019-10-08 20:54:04', 'Hey There', 'Here is all good. Thanks for testing..\n'),
(4, 1, '2019-10-08 21:08:01', 'Hey Whats up?', 'This is note descriptio. Demo is here.\n');

-- --------------------------------------------------------

--
-- Table structure for table `user_tbl`
--

CREATE TABLE `user_tbl` (
  `userid` int(11) NOT NULL,
  `email` varchar(84) NOT NULL,
  `password` varchar(16) NOT NULL,
  `name` varchar(50) NOT NULL,
  `phone` double NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_tbl`
--

INSERT INTO `user_tbl` (`userid`, `email`, `password`, `name`, `phone`, `date`) VALUES
(1, 'abc@gmail.com', 'abc', 'abc', 1234567890, '2019-10-02 12:51:35'),
(4, 'mno@gmail.com', 'abc', 'abc', 9210231223, '2019-10-02 19:45:33'),
(5, 'monil31199@gmail.com', 'mps@31199', 'Monil Shah', 9173569994, '2019-10-08 23:25:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `expense_tbl`
--
ALTER TABLE `expense_tbl`
  ADD PRIMARY KEY (`eid`);

--
-- Indexes for table `income_tbl`
--
ALTER TABLE `income_tbl`
  ADD PRIMARY KEY (`iid`);

--
-- Indexes for table `note_tbl`
--
ALTER TABLE `note_tbl`
  ADD PRIMARY KEY (`nid`);

--
-- Indexes for table `user_tbl`
--
ALTER TABLE `user_tbl`
  ADD PRIMARY KEY (`userid`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `phone` (`phone`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `expense_tbl`
--
ALTER TABLE `expense_tbl`
  MODIFY `eid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `income_tbl`
--
ALTER TABLE `income_tbl`
  MODIFY `iid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `note_tbl`
--
ALTER TABLE `note_tbl`
  MODIFY `nid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user_tbl`
--
ALTER TABLE `user_tbl`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
