-- MySQL dump 10.13  Distrib 5.7.16, for Win64 (x86_64)
--
-- Host: localhost    Database: project1
-- ------------------------------------------------------
-- Server version	5.7.16-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `movieexec`
--

DROP TABLE IF EXISTS `movieexec`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movieexec` (
  `cert` int(11) NOT NULL,
  `name` varchar(32) NOT NULL,
  `networth` int(11) DEFAULT NULL,
  `address` varchar(96) DEFAULT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `cert` (`cert`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movieexec`
--

LOCK TABLES `movieexec` WRITE;
/*!40000 ALTER TABLE `movieexec` DISABLE KEYS */;
INSERT INTO `movieexec` VALUES (756382,'Dan Levine',8627128,'Hollywood, maybe?'),(9456267,'Daniel Magid',6700000,'221 Colgate Ave Kensington, CA 94708'),(5637238,'Marian Colti',72000000,'Somewhere in LA'),(2746573,'Rob Greenberg',90000000,'Set of HIMYM'),(6478282,'Sam Roditti',100293478,'Something, something Colusa Berkeley, CA 94707');
/*!40000 ALTER TABLE `movieexec` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies` (
  `movieTitle` varchar(64) NOT NULL,
  `movieYear` int(11) NOT NULL,
  `length` int(11) DEFAULT NULL,
  `producerC` int(11) DEFAULT NULL,
  `studioName` varchar(64) DEFAULT NULL,
  `genre` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`movieTitle`,`movieYear`),
  KEY `producer` (`producerC`),
  KEY `studioName` (`studioName`),
  CONSTRAINT `movies_ibfk_1` FOREIGN KEY (`producerC`) REFERENCES `movieexec` (`cert`),
  CONSTRAINT `movies_ibfk_2` FOREIGN KEY (`studioName`) REFERENCES `stud` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES ('Birthday',2002,140,9456267,'Magid Family Home Videos','Holiday'),('Family trip to Hollywood',2010,120,9456267,'Magid Family Home Videos','Vacation'),('HIMYM Better Ending',2014,60,2746573,'MGM','Comedy'),('HIMYM Finale',2014,90,2746573,'MGM','Comedy'),('Into The Woods',2014,1000,6478282,'Disney','Musical'),('The Devil Wears Prada',2006,109,5637238,'MGM','Dramedy');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `moviestar`
--

DROP TABLE IF EXISTS `moviestar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `moviestar` (
  `starName` varchar(64) NOT NULL,
  `address` varchar(96) DEFAULT NULL,
  `gender` enum('m','f') DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  PRIMARY KEY (`starName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `moviestar`
--

LOCK TABLES `moviestar` WRITE;
/*!40000 ALTER TABLE `moviestar` DISABLE KEYS */;
INSERT INTO `moviestar` VALUES ('Aaron Magid','221 Colgate Ave Kensington, CA 94708','m','1996-04-13'),('Alyson Hannigan','5678 Los Angeles something or other','f','1974-03-24'),('Anna Kendrick','I really don\'t care anymore','f','1983-08-20'),('Anne Hathaway','like... not at all','f','1976-02-21'),('Beth Magid','221 Colgate Ave Kensington, CA 94708','f','1994-03-05'),('Cobie Smulders','Canada','f','1982-04-03'),('Emily Blunt','Not even going to make something up.','f','1983-02-23'),('James Corden','...it\'s 3am...','m','1975-05-27'),('Jason Segel','Alaska, why not?','m','1980-01-18'),('Josh Radnor','1234 Some st. Los Angeles, CA','m','1974-07-29'),('Meryl Streep','7582 Famousperson Drive','f','1949-06-22'),('Neil Patrick Harris','Somewhere in LA','m','1973-06-15'),('Stanley Tucci','He\'s awesome.','m','1956-04-30');
/*!40000 ALTER TABLE `moviestar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stars`
--

DROP TABLE IF EXISTS `stars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stars` (
  `movieTitle` varchar(64) NOT NULL,
  `movieYear` int(11) NOT NULL,
  `starName` varchar(64) NOT NULL,
  PRIMARY KEY (`movieTitle`,`movieYear`,`starName`),
  KEY `starName` (`starName`),
  CONSTRAINT `stars_ibfk_1` FOREIGN KEY (`movieTitle`, `movieYear`) REFERENCES `movies` (`movieTitle`, `movieYear`),
  CONSTRAINT `stars_ibfk_2` FOREIGN KEY (`starName`) REFERENCES `moviestar` (`starName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stars`
--

LOCK TABLES `stars` WRITE;
/*!40000 ALTER TABLE `stars` DISABLE KEYS */;
INSERT INTO `stars` VALUES ('Birthday',2002,'Aaron Magid'),('Family Trip to Hollywood',2010,'Aaron Magid'),('HIMYM Better Ending',2014,'Alyson Hannigan'),('HIMYM Finale',2014,'Alyson Hannigan'),('Into The Woods',2014,'Anna Kendrick'),('The Devil Wears Prada',2006,'Anne Hathaway'),('Family Trip to Hollywood',2010,'Beth Magid'),('HIMYM Better Ending',2014,'Cobie Smulders'),('HIMYM Finale',2014,'Cobie Smulders'),('Into The Woods',2014,'Emily Blunt'),('The Devil Wears Prada',2006,'Emily Blunt'),('Into The Woods',2014,'James Corden'),('HIMYM Better Ending',2014,'Jason Segel'),('HIMYM Finale',2014,'Jason Segel'),('The Devil Wears Prada',2006,'Jason Segel'),('Family Trip to Hollywood',2010,'Josh Radnor'),('HIMYM Better Ending',2014,'Josh Radnor'),('HIMYM Finale',2014,'Josh Radnor'),('Into The Woods',2014,'Meryl Streep'),('The Devil Wears Prada',2006,'Meryl Streep'),('Family Trip to Hollywood',2010,'Neil Patrick Harris'),('HIMYM Better Ending',2014,'Neil Patrick Harris'),('HIMYM Finale',2014,'Neil Patrick Harris'),('The Devil Wears Prada',2006,'Stanley Tucci');
/*!40000 ALTER TABLE `stars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stud`
--

DROP TABLE IF EXISTS `stud`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stud` (
  `name` varchar(64) NOT NULL,
  `presC` int(11) DEFAULT NULL,
  `address` varchar(96) DEFAULT NULL,
  PRIMARY KEY (`name`),
  KEY `presC` (`presC`),
  CONSTRAINT `stud_ibfk_1` FOREIGN KEY (`presC`) REFERENCES `movieexec` (`cert`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stud`
--

LOCK TABLES `stud` WRITE;
/*!40000 ALTER TABLE `stud` DISABLE KEYS */;
INSERT INTO `stud` VALUES ('Disney',756382,'Alaska, why not?'),('Magid Family Home Videos',9456267,'221 Colgate Ave Kensington, CA 94708'),('MGM',5637238,'Somewhere in LA');
/*!40000 ALTER TABLE `stud` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-03-20  5:14:53
