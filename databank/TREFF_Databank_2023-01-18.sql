-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 18, 2023 at 11:55 AM
-- Server version: 10.3.31-MariaDB-0+deb10u1
-- PHP Version: 7.0.33-57+0~20211119.61+debian10~1.gbp5d8ba5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `581695_1_1`
--

-- --------------------------------------------------------

--
-- Table structure for table `activity`
--

CREATE TABLE `activity` (
  `ID` int(11) NOT NULL,
  `titel` varchar(100) NOT NULL,
  `bild` varchar(100) NOT NULL,
  `adresse` varchar(200) NOT NULL,
  `stadt` int(11) NOT NULL,
  `beschreibung` text NOT NULL,
  `user` int(11) NOT NULL,
  `datum` date NOT NULL,
  `timestamp` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `activity`
--

INSERT INTO `activity` (`ID`, `titel`, `bild`, `adresse`, `stadt`, `beschreibung`, `user`, `datum`, `timestamp`) VALUES
(18, 'Kinoabend mit Studenten', '', 'Wird bekannt gegeben bei der Anmeldung', 1, 'Ich bin Nicole aus St.Gallen und würde gerne einen Kinoabend mit euch machen. Snacks und Getränke organisiere ich. Wir schauen gemeinsam den ersten Harry Potter Film. Vielleicht können wir ja daraus einen Filmarathon machen.', 2, '2023-02-18', '2023-01-16 14:11:03'),
(19, 'Töpfern bei mir im Keller', '', 'Wird bekannt gegeben bei der Anmeldung', 2, 'Ich bin Pablo aus Chur und habe bei uns im Keller Zuhause einen Brennofen. Mein Vater ist vom Beruf her Keramiker. Deshalb: Wer hat Bock auf einen Töpferkurs? Wir machen zusammen eine Tasse und eine Schüssel.', 3, '2023-02-28', '2023-01-16 14:12:31'),
(20, 'Malen mit Öl auf einer Leinwand', '', 'Pulvermühlestrasse 57, 7000 Chur', 2, 'Hallo ich bin Julia und habe den gestalterischen Vorkurs absolviert. Ich male sehr gerne mit Ölfarben auf Leinwänden. Gerne würde ich es euch auch beibringen. ', 26, '2023-03-30', '2023-01-16 14:17:27'),
(21, 'Malen mit Öl auf einer Leinwand', '', 'Pulvermühlestrasse 57, 7000 Chur', 2, 'Hallo ich bin Julia und habe den gestalterischen Vorkurs absolviert. Ich male sehr gerne mit Ölfarben auf Leinwänden. Gerne würde ich es euch auch beibringen. ', 26, '2023-03-30', '2023-01-16 14:17:30'),
(22, 'Sushi Night', '', 'Tafelstrasse 99, Chur', 2, 'Ich bin Maria und komme ursprünglich aus Japan. Deshalb habe ich schon früh von meiner Mutter gelernt, wie man Sushi macht. Beim Restaurant meiner Mutter.', 28, '2023-02-22', '2023-01-16 14:20:42'),
(23, 'Kaligrafie-Kurs', '', 'Pulvermühlestrasse 57, 7000 Chur', 2, 'Ich bin Marco und liebe es, schöne selbstgemachte Karten zu verschicken. Ich habe mir deshalb das Kaligrafie Schreiben selber beigebracht. Das möchte ich euch auch beibringen. ', 37, '2023-04-18', '2023-01-16 14:23:07'),
(24, 'Girly DIY-Nachmittag', '', 'Wird bekannt gegeben bei der Anmeldung', 1, 'Ich bin Aurelia und liebe es, eigenen Gesichtsmasken oder Badebomben zu machen.\r\nDeshalb würde ich gerne mit ein Paar Mädels bei uns Zuhause einen Girly DIY Nachmittag machen.\r\n\r\nBist du mit dabei?', 38, '2023-04-02', '2023-01-16 14:24:54'),
(25, 'American Football Night', '', 'Wird bekannt gegeben bei der Anmeldung', 3, 'Ich bin Tobias und liebe American Football. Aktuell laufen die Meisterschaften und ich dachte, dass wir dies gemeinsam schauen können.\r\nNatürlich mit einem Bucket und guten Getränken. ', 39, '2023-06-12', '2023-01-16 14:26:36'),
(26, 'Entdecke Chur (Abend)', '', 'Bahnhof Chur', 2, 'Ich bin Paul und bin in Chur aufgewachsen. Gerne möchte ich mit euch die besten Bars von Chur zeigen, welche ihr bestimmt nicht kennt. ', 40, '2023-08-12', '2023-01-16 14:33:21'),
(27, 'Bündner Dütsch lernen', '', 'Pulvermühlestrasse 57, 7000 Chur', 2, 'Ich bin Georg aus dem Engadin. Bündner-Dütsch ist also meine Muttersprache und diese möchte ich euch gerne an einem Samstagnachmittag ein bisschen näherbringen. Natürlich mit Kaffee und Kuchen. ', 41, '2023-03-02', '2023-01-16 14:45:14'),
(28, 'Wandern mit Studenten', '', 'Mittelstation Höhenweg ', 1, 'Ich studiere MMP im 4. Semester und komme aus Davos. Ich plane den Panoramaweg von Davos aus. Auf diesem Weg hat man traumhafte Aussichten! Komm mit!\r\n\r\nStartpunkt: Mittelstation Höhenweg oder Bergstation Gorschnagrat\r\nEndpunkt: Bergstation Gotschnagrat oder Mittelstation Höhenweg\r\nDauer: 2,5 Stunden', 42, '2023-01-20', '2023-01-13 10:57:20');

-- --------------------------------------------------------

--
-- Table structure for table `activity_has_hashtag`
--

CREATE TABLE `activity_has_hashtag` (
  `ID` int(11) NOT NULL,
  `activity_id` int(11) NOT NULL,
  `hashtag_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `activity_has_hashtag`
--

INSERT INTO `activity_has_hashtag` (`ID`, `activity_id`, `hashtag_id`) VALUES
(69, 0, 1),
(70, 0, 14),
(1, 9, 5),
(3, 9, 6),
(2, 9, 7),
(4, 14, 7),
(5, 14, 8),
(6, 14, 9),
(7, 15, 6),
(8, 15, 7),
(9, 15, 8),
(11, 18, 1),
(12, 18, 8),
(10, 18, 13),
(13, 19, 8),
(14, 19, 11),
(15, 19, 15),
(16, 20, 8),
(17, 20, 11),
(20, 21, 4),
(18, 21, 8),
(19, 21, 11),
(21, 22, 1),
(22, 22, 6),
(23, 23, 8),
(24, 23, 11),
(26, 24, 4),
(25, 24, 11),
(27, 24, 15),
(28, 25, 1),
(29, 25, 14),
(30, 25, 15),
(31, 26, 8),
(32, 26, 15),
(34, 27, 8),
(33, 27, 10),
(35, 28, 5),
(36, 29, 3),
(37, 29, 4),
(38, 29, 5),
(39, 30, 6),
(40, 30, 7),
(41, 30, 8);

-- --------------------------------------------------------

--
-- Table structure for table `hashtag`
--

CREATE TABLE `hashtag` (
  `ID` int(11) NOT NULL,
  `hashtag` varchar(42) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hashtag`
--

INSERT INTO `hashtag` (`ID`, `hashtag`) VALUES
(1, 'Trinken & Essen'),
(2, 'Rennen'),
(3, 'Wassersport'),
(4, 'Relax'),
(5, 'Co-working'),
(6, 'Party'),
(7, 'Wandern'),
(8, 'Kultur'),
(9, 'Yoga'),
(10, 'Sprachen lernen'),
(11, 'DIY'),
(12, 'Spieleabende'),
(13, 'Kino'),
(14, 'Sport'),
(15, 'Andere');

-- --------------------------------------------------------

--
-- Table structure for table `saved_activity`
--

CREATE TABLE `saved_activity` (
  `ID` int(11) NOT NULL,
  `activity_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `saved_activity`
--

INSERT INTO `saved_activity` (`ID`, `activity_id`, `user_id`) VALUES
(1, 1, 1),
(3, 2, 28),
(2, 4, 28),
(34, 22, 28),
(31, 27, 28),
(5, 1, 33),
(48, 25, 33),
(47, 26, 33),
(46, 27, 33),
(11, 1, 34),
(4, 10, 34),
(6, 12, 34),
(19, 18, 34),
(24, 25, 34),
(25, 26, 34),
(36, 27, 34),
(7, 1, 35),
(9, 12, 36),
(10, 13, 36),
(23, 23, 40),
(22, 24, 40),
(21, 25, 40),
(30, 25, 42),
(29, 26, 42),
(32, 27, 43);

-- --------------------------------------------------------

--
-- Table structure for table `session`
--

CREATE TABLE `session` (
  `ID` int(11) NOT NULL,
  `User_ID` int(11) NOT NULL,
  `Token` varchar(200) NOT NULL,
  `Timestamp` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `session`
--

INSERT INTO `session` (`ID`, `User_ID`, `Token`, `Timestamp`) VALUES
(107, 34, '4em2SwX32jG7nGiyjYgSbeuupUdXy6h1jcIcuGJbvk', '2023-01-18 10:04:35'),
(108, 34, 'dRxSPsnxnBYDWw4JawbW76Rev2qX6X53SMKAo0LEwA', '2023-01-18 10:49:21'),
(109, 34, '46XsAkUKl6QzNzDJHgK2seel4VhZ4xIvtWcyPoIUYA', '2023-01-18 10:49:27');

-- --------------------------------------------------------

--
-- Table structure for table `stadt`
--

CREATE TABLE `stadt` (
  `ID` int(11) NOT NULL,
  `stadt` varchar(42) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `stadt`
--

INSERT INTO `stadt` (`ID`, `stadt`) VALUES
(1, 'Bern'),
(2, 'Chur'),
(3, 'Zürich');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `ID` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`ID`, `name`, `email`, `password`) VALUES
(2, 'Musterman120', 'mustmusterman@mail.ch', '$2y$10$/lRM4kRKYK2E/VgVRqym5e2aDm//FZQmG2XZsX/mvyzdZeUMRUEJ2'),
(3, 'Pablo12', 'pablotheman@mail.ch', '$2y$10$eSG.a.RjXrJmkOtwuAkhIeb1LO2tjYdnAVjQc8zvXvcZJ/6P..RzC'),
(7, 'Franz Heinz', 'franz.heinz@gr.ch', '$2y$10$XTgwODYYBTdzhhdoLm3sWuny4EGnjx/zg5Ebw4zrCnq/JhII3BF9K'),
(26, 'JulesVern', '20undersea@mail.ch', '$2y$10$wLdll2CJmt2qIFLiot.f.OHQ2w1ITFGGyopaO6QLXGiry0g3Rnb5K'),
(28, 'Marandes', 'marandes@mail.ch', '$2y$10$65I95kjyTnvb2FnmqUVj3u6KvFOdJPmncnzR2Vb6X4RgXiPayly6y'),
(33, 'natanaele', 'natanaele@gmail.com', '$2y$10$Ke1pBlLlm5ZV7rhwzEBtz.WwCvHbWeBF.jnhSayrjJEMt4UW4Sd6m'),
(34, 'a', 'a', '$2y$10$fzQuKvVcD9uAl4jGkXeSouFA9Ajaf49Yzp14h6gE3TAoiLmSM/Z3G'),
(35, 'celina', 'c.streun@gmx.ch', '$2y$10$D6K4V/a3IxGSyVp1.9sCvOfAhgjrpdPV7XRX8ogO0yRJstRKZMtLq'),
(37, 'MarcoPolo', 'marcopolo@mail.ch', '$2y$10$hBSsZxJy7DkX0C5ju.EvZegaMouGTnRREUNWYcmxfRVraIsbJYPnW'),
(38, 'Aurelia Relie', 'relie.a@mail.ch', '$2y$10$r1Fot4cXbhVhQsmrsXgKqOsB7hx.jmCVBAVmdkmuqU.ksbrezRkl6'),
(39, 'Tobias Tub', 'tobthetub@mail.ch', '$2y$10$fyuOKA/77xqY2NY4F/diEursGJzpSPOhH3RGbmTxoF4gkTXYZEppa'),
(40, 'Paul ', 'paulloveschur@mail.ch', '$2y$10$SFdiJlPFRgNk4xmZwG6Cnu5v851HYoWScaLqBr3bMgLJqzv2QOq9q'),
(41, 'Georg Eng', 'georgie99@mail.ch', '$2y$10$UcxK3v0HlwKbmLhLrG6fk.LgVdq2XyEtAhUDqsu0nwdIjuwNKfTDC'),
(42, 'Yerik', 'yerik@yerik.com', '$2y$10$H.mrbNFeMVfhIZhSWVJZW.ex2Viem9JtSq1ZuSBebWDBQFEKaQwDm'),
(43, 'b', 'b', '$2y$10$iWcB36AoiVo6V67N7otE5.YnS3MhFIymgml1xr9oRbgxCkvwLiGk.'),
(44, 'cece', 'c.streun@gmx.ch', '$2y$10$oy4NR2.WJM2lwv7yOqomrubYLLLb3DUafAtUrUCXHTZaIVH1nkEQK'),
(45, '', '', '$2y$10$Kxu2my6KTfjmkppP/shQQ.tjp.mLyVJH13nB2NDXQS1ocTvfdV/SW'),
(46, 'streuncelina', '', '$2y$10$1JQOfmnPoQxXLOudSsBM/.Pyf/h8Jz2wuxd69R5DBk3SpJQrzCnP6'),
(47, 'streuncelina', 'celina.streun@gmx.ch', '$2y$10$4UvrL9XXeDs7xUJWXBXQ3eCbR5vgKPZR5wJpDw16c5s4HI4kugSA.'),
(50, 'celinastreun', 'celina.streun@gmx.ch', '$2y$10$06yvbmXm10xbRWzUaEUzrOTZ8sujCXpqAiZbHotGHEyA0XtqRyt6i'),
(55, 'b', 'b@b.com', '$2y$10$3QT6WcE4bKGdzGEJ4n1ureoz0SIelIuWdIzEbSuWihQ2Xc34lyXe.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity`
--
ALTER TABLE `activity`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `stadt` (`stadt`),
  ADD KEY `user` (`user`),
  ADD KEY `datum` (`datum`);

--
-- Indexes for table `activity_has_hashtag`
--
ALTER TABLE `activity_has_hashtag`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `activity_id` (`activity_id`,`hashtag_id`);

--
-- Indexes for table `hashtag`
--
ALTER TABLE `hashtag`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `saved_activity`
--
ALTER TABLE `saved_activity`
  ADD PRIMARY KEY (`ID`) USING BTREE,
  ADD UNIQUE KEY `NO DUPLICATES` (`user_id`,`activity_id`) USING BTREE;

--
-- Indexes for table `session`
--
ALTER TABLE `session`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `session_userid` (`User_ID`);

--
-- Indexes for table `stadt`
--
ALTER TABLE `stadt`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `NO DUPLICATES` (`name`,`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activity`
--
ALTER TABLE `activity`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- AUTO_INCREMENT for table `activity_has_hashtag`
--
ALTER TABLE `activity_has_hashtag`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;
--
-- AUTO_INCREMENT for table `hashtag`
--
ALTER TABLE `hashtag`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `saved_activity`
--
ALTER TABLE `saved_activity`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;
--
-- AUTO_INCREMENT for table `session`
--
ALTER TABLE `session`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=110;
--
-- AUTO_INCREMENT for table `stadt`
--
ALTER TABLE `stadt`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
