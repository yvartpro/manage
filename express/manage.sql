/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19-11.8.0-MariaDB, for Android (aarch64)
--
-- Host: localhost    Database: manage_users
-- ------------------------------------------------------
-- Server version	11.8.0-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*M!100616 SET @OLD_NOTE_VERBOSITY=@@NOTE_VERBOSITY, NOTE_VERBOSITY=0 */;

--
-- Table structure for table `activity`
--

DROP TABLE IF EXISTS `activity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `activity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `create_date` date NOT NULL DEFAULT curdate(),
  `created_by` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `activity_created_by_user_id` (`created_by`),
  CONSTRAINT `activity_created_by_user_id` FOREIGN KEY (`created_by`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activity`
--

LOCK TABLES `activity` WRITE;
/*!40000 ALTER TABLE `activity` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `activity` VALUES
(29,'Vovota web site ','2025-05-14',6),
(30,'Training new class','2025-05-14',6),
(32,'Training new class','2025-05-14',6),
(35,'Designer ','2025-05-15',6),
(37,'December ','2025-05-15',6),
(39,'Task management ','2025-05-18',6),
(40,'New activity tumetenda','2025-05-18',6),
(41,'Classer les jouers','2025-05-18',6);
/*!40000 ALTER TABLE `activity` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `log`
--

DROP TABLE IF EXISTS `log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `task_id` int(11) NOT NULL,
  `action` text DEFAULT NULL,
  `date_log` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `log_user_id_user_id` (`user_id`),
  KEY `log_task_id_task_id` (`task_id`),
  CONSTRAINT `log_task_id_task_id` FOREIGN KEY (`task_id`) REFERENCES `task` (`id`),
  CONSTRAINT `log_user_id_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `log`
--

LOCK TABLES `log` WRITE;
/*!40000 ALTER TABLE `log` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `log` VALUES
(1,6,1,'Admin Admin created task \"Frontend for web\" under activity \"Vovota web site \"','2025-05-14 06:14:49'),
(2,6,2,'Admin Admin created task \"Frontend basica\" under activity \"Training new class\"','2025-05-14 07:08:12'),
(3,6,3,'Admin Admin created task \"Create API for money transfer\" under activity \"Vovota web site \"','2025-05-14 08:59:37'),
(4,6,4,'Admin Admin created task \"API integration \" under activity \"Vovota web site \"','2025-05-14 09:00:13'),
(5,6,5,'Admin Admin created task \"Organize CIM event\" under activity \"Training new class\"','2025-05-15 05:58:34'),
(6,5,2,'Lewis Irakoze was assigned to task \"Frontend basica\"','2025-05-15 06:06:40'),
(7,5,3,'Lewis Irakoze was assigned to task \"Create API for money transfer\"','2025-05-15 06:06:48'),
(8,4,3,'Nelson Burihabwa was assigned to task \"Create API for money transfer\"','2025-05-15 06:07:03'),
(9,6,6,'Admin Admin created task \"Creating new device in Android studio \" under activity \"Vovota web site \"','2025-05-15 10:38:15'),
(10,6,7,'Admin Admin created task \"Tusalimiane\" under activity \"Training new class\"','2025-05-15 14:06:24'),
(11,6,8,'Admin Admin created task \"Tusalimiane\" under activity \"Training new class\"','2025-05-15 14:06:38'),
(12,6,9,'Admin Admin created task \"Test creation\" under activity \"Training new class\"','2025-05-15 14:12:38'),
(13,6,10,'Admin Admin created task \"Test navigation\" under activity \"Training new class\"','2025-05-15 15:19:05'),
(14,6,11,'Admin Admin created task \"Yes it works\" under activity \"Training new class\"','2025-05-15 15:19:40'),
(15,6,12,'Admin Admin created task \"For sure it works\" under activity \"Training new class\"','2025-05-15 15:19:54'),
(16,6,13,'Admin Admin created task \"Rest of the day \" under activity \"Training new class\"','2025-05-15 15:20:48'),
(17,6,14,'Admin Admin created task \"Test it now \" under activity \"Vovota web site \"','2025-05-15 20:33:47'),
(18,6,15,'Admin Admin created task \"Vovota planning \" under activity \"Vovota web site \"','2025-05-15 20:34:17'),
(19,2,6,'Pascal Hakizimana was assigned to task \"Creating new device in Android studio \"','2025-05-18 06:44:43'),
(20,4,6,'Nelson Burihabwa was assigned to task \"Creating new device in Android studio \"','2025-05-18 06:45:10'),
(21,3,6,'Aimable Munezero was assigned to task \"Creating new device in Android studio \"','2025-05-18 06:45:38'),
(22,3,14,'Aimable Munezero was assigned to task \"Test it now \"','2025-05-18 07:25:50'),
(23,6,16,'Admin Admin created task \"Start learning \" under activity \"Task management \"','2025-05-18 07:27:25'),
(24,1,16,'Yves Nshemezimana was assigned to task \"Start learning \"','2025-05-18 07:27:46'),
(25,2,16,'Pascal Hakizimana was assigned to task \"Start learning \"','2025-05-18 07:27:48'),
(26,5,16,'Lewis Irakoze was assigned to task \"Start learning \"','2025-05-18 07:27:49'),
(27,4,16,'Nelson Burihabwa was assigned to task \"Start learning \"','2025-05-18 07:27:51'),
(28,3,13,'Aimable Munezero was assigned to task \"Rest of the day \"','2025-05-18 09:12:36'),
(29,1,13,'Yves Nshemezimana was assigned to task \"Rest of the day \"','2025-05-18 09:17:11'),
(30,6,13,'Admin Admin was assigned to task \"Rest of the day \"','2025-05-18 09:18:58'),
(31,5,13,'Lewis Irakoze was assigned to task \"Rest of the day \"','2025-05-18 10:12:20'),
(32,4,14,'Nelson Burihabwa was assigned to task \"Test it now \"','2025-05-18 12:32:46'),
(33,2,14,'Pascal Hakizimana was assigned to task \"Test it now \"','2025-05-18 12:33:02'),
(34,4,13,'Nelson Burihabwa was assigned to task \"Rest of the day \"','2025-05-28 20:37:02'),
(35,1,8,'Yves Nshemezimana was assigned to task \"Tusalimiane\"','2025-05-31 12:10:44'),
(36,5,8,'Lewis Irakoze was assigned to task \"Tusalimiane\"','2025-05-31 12:11:05'),
(37,4,8,'Nelson Burihabwa was assigned to task \"Tusalimiane\"','2025-05-31 12:13:56'),
(38,2,7,'Pascal Hakizimana was assigned to task \"Tusalimiane\"','2025-05-31 12:14:36'),
(39,6,17,'Admin Admin created task \"Commencer le mois\" under activity \"December \"','2025-05-31 12:15:27'),
(40,4,17,'Nelson Burihabwa was assigned to task \"Commencer le mois\"','2025-05-31 12:16:13'),
(41,3,17,'Aimable Munezero was assigned to task \"Commencer le mois\"','2025-05-31 12:16:17'),
(42,2,17,'Pascal Hakizimana was assigned to task \"Commencer le mois\"','2025-05-31 12:16:25'),
(43,5,17,'Lewis Irakoze was assigned to task \"Commencer le mois\"','2025-05-31 12:16:32'),
(44,6,17,'Admin Admin was assigned to task \"Commencer le mois\"','2025-05-31 12:16:36'),
(45,1,17,'Yves Nshemezimana was assigned to task \"Commencer le mois\"','2025-05-31 12:16:41');
/*!40000 ALTER TABLE `log` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `task`
--

DROP TABLE IF EXISTS `task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `task` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `details` text DEFAULT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `activity_id` int(11) NOT NULL,
  `status` enum('initial','ongoing','done') NOT NULL DEFAULT 'initial',
  PRIMARY KEY (`id`),
  KEY `task_activity_id_activity_id` (`activity_id`),
  CONSTRAINT `task_activity_id_activity_id` FOREIGN KEY (`activity_id`) REFERENCES `activity` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task`
--

LOCK TABLES `task` WRITE;
/*!40000 ALTER TABLE `task` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `task` VALUES
(1,'Frontend for web',NULL,'2025-05-20','2025-06-20',29,'initial'),
(2,'Frontend basica',NULL,'2025-06-10','2025-08-20',30,'initial'),
(3,'Create API for money transfer',NULL,'2025-06-10','2025-07-10',29,'initial'),
(4,'API integration ',NULL,'2025-07-10','2025-06-15',29,'initial'),
(5,'Organize CIM event',NULL,'2025-05-15','2025-05-31',30,'initial'),
(6,'Creating new device in Android studio ',NULL,'2025-05-16','2025-05-18',29,'initial'),
(7,'Tusalimiane',NULL,'2025-05-15','2025-06-15',32,'initial'),
(8,'Tusalimiane',NULL,'2025-05-15','2025-06-15',32,'initial'),
(9,'Test creation',NULL,'2025-06-18','2025-08-16',30,'initial'),
(10,'Test navigation',NULL,'2025-05-30','2025-06-30',30,'initial'),
(11,'Yes it works',NULL,'2025-05-15','2025-06-18',30,'initial'),
(12,'For sure it works',NULL,'2025-05-23','2025-06-26',30,'initial'),
(13,'Rest of the day ',NULL,'2025-05-10','2025-06-28',32,'initial'),
(14,'Test it now ',NULL,'2025-05-15','2025-05-19',29,'initial'),
(15,'Vovota planning ',NULL,'2025-06-18','2025-07-09',29,'initial'),
(16,'Start learning ',NULL,'2025-05-19','2025-05-19',39,'initial'),
(17,'Commencer le mois',NULL,'2025-05-07','2025-05-31',37,'initial');
/*!40000 ALTER TABLE `task` ENABLE KEYS */;
UNLOCK TABLES;
commit;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_uca1400_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`yvart`@`localhost`*/ /*!50003 TRIGGER trg_task_insert
AFTER INSERT ON task
FOR EACH ROW
BEGIN
  DECLARE task_title VARCHAR(100);
  DECLARE activity_title VARCHAR(100);
  DECLARE user_name VARCHAR(100);
  DECLARE creator_id INT;

  
  SELECT a.title, a.created_by, CONCAT(u.fname, ' ', u.lname)
  INTO activity_title, creator_id, user_name
  FROM activity a
  JOIN user u ON a.created_by = u.id
  WHERE a.id = NEW.activity_id;

  SET task_title = NEW.title;

  
  INSERT INTO log (user_id, task_id, action)
  VALUES (
    creator_id,
    NEW.id,
    CONCAT(user_name, ' created task "', task_title, '" under activity "', activity_title, '"')
  );
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `task_user`
--

DROP TABLE IF EXISTS `task_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `task_user` (
  `user_id` int(11) NOT NULL,
  `task_id` int(11) NOT NULL,
  `date_join` date NOT NULL DEFAULT curdate(),
  `status` enum('initial','progress','done') NOT NULL DEFAULT 'initial',
  `progress` tinyint(3) unsigned NOT NULL DEFAULT 0,
  `comment` text DEFAULT NULL,
  PRIMARY KEY (`user_id`,`task_id`),
  KEY `task_user_task_id_task_id` (`task_id`),
  CONSTRAINT `task_user_task_id_task_id` FOREIGN KEY (`task_id`) REFERENCES `task` (`id`),
  CONSTRAINT `task_user_user_id_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_user`
--

LOCK TABLES `task_user` WRITE;
/*!40000 ALTER TABLE `task_user` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `task_user` VALUES
(1,8,'2025-05-31','initial',0,NULL),
(1,13,'2025-05-18','initial',0,NULL),
(1,16,'2025-05-18','initial',0,NULL),
(1,17,'2025-05-31','initial',0,NULL),
(2,6,'2025-05-18','initial',0,NULL),
(2,7,'2025-05-31','initial',0,NULL),
(2,14,'2025-05-18','initial',0,NULL),
(2,16,'2025-05-18','initial',0,NULL),
(2,17,'2025-05-31','initial',0,NULL),
(3,6,'2025-05-18','initial',0,NULL),
(3,13,'2025-05-18','initial',0,NULL),
(3,14,'2025-05-18','initial',0,NULL),
(3,17,'2025-05-31','initial',0,NULL),
(4,3,'2025-05-15','initial',0,NULL),
(4,6,'2025-05-18','initial',0,NULL),
(4,8,'2025-05-31','initial',0,NULL),
(4,13,'2025-05-28','initial',0,NULL),
(4,14,'2025-05-18','initial',0,NULL),
(4,16,'2025-05-18','initial',0,NULL),
(4,17,'2025-05-31','initial',0,NULL),
(5,2,'2025-05-15','initial',0,NULL),
(5,3,'2025-05-15','initial',0,NULL),
(5,8,'2025-05-31','initial',0,NULL),
(5,13,'2025-05-18','initial',0,NULL),
(5,16,'2025-05-18','initial',0,NULL),
(5,17,'2025-05-31','initial',0,NULL),
(6,13,'2025-05-18','initial',0,NULL),
(6,17,'2025-05-31','initial',0,NULL);
/*!40000 ALTER TABLE `task_user` ENABLE KEYS */;
UNLOCK TABLES;
commit;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_uca1400_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`yvart`@`localhost`*/ /*!50003 TRIGGER trg_task_user_insert
AFTER INSERT ON task_user
FOR EACH ROW
BEGIN
  DECLARE user_name VARCHAR(100);
  DECLARE task_title VARCHAR(100);

  
  SELECT CONCAT(fname, ' ', lname) INTO user_name
  FROM user
  WHERE id = NEW.user_id;

  
  SELECT title INTO task_title
  FROM task
  WHERE id = NEW.task_id;

  
  INSERT INTO log (user_id, task_id, action)
  VALUES (NEW.user_id, NEW.task_id, CONCAT(user_name, ' was assigned to task "', task_title, '"'));
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_uca1400_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`yvart`@`localhost`*/ /*!50003 TRIGGER trg_task_user_update
AFTER UPDATE ON task_user
FOR EACH ROW
BEGIN
  DECLARE user_name VARCHAR(100);
  DECLARE task_title VARCHAR(100);
  DECLARE action_text TEXT;

  SELECT CONCAT(fname, ' ', lname) INTO user_name
  FROM user
  WHERE id = NEW.user_id;

  SELECT title INTO task_title
  FROM task
  WHERE id = NEW.task_id;

  SET action_text = CONCAT(user_name, ' updated task "', task_title, '"');

  IF OLD.status <> NEW.status THEN
    SET action_text = CONCAT(action_text, ' (status: ', OLD.status, ' → ', NEW.status, ')');
  END IF;

  IF OLD.progress <> NEW.progress THEN
    SET action_text = CONCAT(action_text, ' (progress: ', OLD.progress, '% → ', NEW.progress, '%)');
  END IF;

  IF OLD.comment <> NEW.comment THEN
    SET action_text = CONCAT(action_text, ' (comment updated)');
  END IF;

  INSERT INTO log (user_id, task_id, action)
  VALUES (NEW.user_id, NEW.task_id, action_text);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(40) NOT NULL,
  `lname` varchar(40) DEFAULT NULL,
  `domain` enum('F','B') NOT NULL,
  `date_add` date NOT NULL DEFAULT curdate(),
  `role` enum('admin','manager','developer') NOT NULL DEFAULT 'developer',
  `nickname` varchar(40) NOT NULL,
  `password` varchar(255) NOT NULL,
  `photo` varchar(255) DEFAULT 'avatar.phg',
  PRIMARY KEY (`id`),
  UNIQUE KEY `nickname` (`nickname`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `user` VALUES
(1,'Yves','Nshemezimana','F','2025-05-12','manager','yvesnhemez','$2y$12$rQJ0AS/dZMHZQW6s6IN7GewCuAHEK8GHiSU.IZwPVYJE35n2Aol8S','avatar.phg'),
(2,'Pascal','Hakizimana','F','2025-05-12','developer','pablo','$2y$12$Vru9lWKQvh.beIUAIS0RKeYfYIFm9nCMN.FLWI2cHVT42x3rUGrES','avatar.phg'),
(3,'Aimable','Munezero','F','2025-05-12','manager','aima','$2y$12$5TxA9c930YcS8ICjyvY6yeCYwIZzBkZz3I5j4TtsquzGDmImf4//a','avatar.phg'),
(4,'Nelson','Burihabwa','F','2025-05-12','developer','negos','$2y$12$PZ.G9Ogz.YsrjU2m/9zdVOL3WaUx5DZBLs6i8Qx6oS3OIm9/C5HqC','avatar.phg'),
(5,'Lewis','Irakoze','B','2025-05-12','manager','lewis','$2y$12$tOHwlvCxzKrqryAlUAc4AuoE5pzRzaRGjdWTldKpxRxq8FBD4O2Nu','avatar.phg'),
(6,'Admin','Admin','F','2025-05-13','admin','admin','$2y$12$TiVEaWobR8ieM.oEbH1Jv.S6B.PNSFc0yBaArc4VVKVNMG1AeEXya','avatar.phg'),
(7,'Evelyne','Mahoro ','B','2025-05-14','manager','mahoro','$2y$12$rUmxcns9nVB0M1FdkDAk6OFpjxqwcrT2QuRK6pvdwvf9QNbsMzBDG','avatar.phg'),
(11,'Yves','Nshemezimana ','F','2025-06-06','admin','yvart.pro','$2b$10$0F7fsqmtsrSbKot3RM6TRuu1UV/vvXOIZXRLdYnt4GyYgQf9TUSJ2','avatar.phg');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
commit;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2025-06-12  3:40:15
