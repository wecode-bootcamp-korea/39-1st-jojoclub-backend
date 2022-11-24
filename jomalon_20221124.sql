-- MySQL dump 10.13  Distrib 8.0.31, for macos13.0 (arm64)
--
-- Host: localhost    Database: jomalon
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `jomalon`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `jomalon` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `jomalon`;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `product_option_id` int NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `carts_user_id_fkey` (`user_id`),
  KEY `carts_product_option_id_fkey` (`product_option_id`),
  CONSTRAINT `carts_product_option_id_fkey` FOREIGN KEY (`product_option_id`) REFERENCES `product_options` (`id`),
  CONSTRAINT `carts_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (1,1,1,1);
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genders`
--

DROP TABLE IF EXISTS `genders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genders`
--

LOCK TABLES `genders` WRITE;
/*!40000 ALTER TABLE `genders` DISABLE KEYS */;
INSERT INTO `genders` VALUES (1,'male'),(2,'female'),(3,'unisex');
/*!40000 ALTER TABLE `genders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `order_item_status_id` int NOT NULL,
  `product_option_id` int NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `order_items_order_id_fkey` (`order_id`),
  KEY `order_items_order_item_status_id_fkey` (`order_item_status_id`),
  KEY `order_items_product_option_id_fkey` (`product_option_id`),
  CONSTRAINT `order_items_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `order_items_order_item_status_id_fkey` FOREIGN KEY (`order_item_status_id`) REFERENCES `order_items_status` (`id`),
  CONSTRAINT `order_items_product_option_id_fkey` FOREIGN KEY (`product_option_id`) REFERENCES `product_options` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items_status`
--

DROP TABLE IF EXISTS `order_items_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items_status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items_status`
--

LOCK TABLES `order_items_status` WRITE;
/*!40000 ALTER TABLE `order_items_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_items_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_status`
--

DROP TABLE IF EXISTS `order_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_status`
--

LOCK TABLES `order_status` WRITE;
/*!40000 ALTER TABLE `order_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_status_id` int NOT NULL,
  `user_id` int NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `orders_order_status_id_fkey` (`order_status_id`),
  KEY `orders_user_id_fkey` (`user_id`),
  CONSTRAINT `orders_order_status_id_fkey` FOREIGN KEY (`order_status_id`) REFERENCES `order_status` (`id`),
  CONSTRAINT `orders_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments_history`
--

DROP TABLE IF EXISTS `payments_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments_history` (
  `id` int NOT NULL AUTO_INCREMENT,
  `total_price` decimal(8,2) DEFAULT NULL,
  `order_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `payments_history_order_id_fkey` (`order_id`),
  CONSTRAINT `payments_history_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments_history`
--

LOCK TABLES `payments_history` WRITE;
/*!40000 ALTER TABLE `payments_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `payments_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_options`
--

DROP TABLE IF EXISTS `product_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_options` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `size_id` int NOT NULL,
  `price` decimal(8,2) DEFAULT NULL,
  `image_url` varchar(2083) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_options_product_id_fkey` (`product_id`),
  KEY `product_options_size_id_fkey` (`size_id`),
  CONSTRAINT `product_options_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `product_options_size_id_fkey` FOREIGN KEY (`size_id`) REFERENCES `sizes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_options`
--

LOCK TABLES `product_options` WRITE;
/*!40000 ALTER TABLE `product_options` DISABLE KEYS */;
INSERT INTO `product_options` VALUES (1,1,1,1000.00,'https://i.ibb.co/DwnDK7Z/purfume-s50-06.png'),(2,1,2,500.00,'https://i.ibb.co/8rw5XF8/purfume-s50-07.png'),(3,1,3,750.00,'https://i.ibb.co/tpYfxTP/purfume-s100-01.png'),(4,3,1,800.00,'https://i.ibb.co/7Q4mDVd/purfume-s100-02.png'),(5,2,1,1800.00,'https://i.ibb.co/mzCmmcY/purfume-s100-03.png'),(6,5,1,430.00,'https://i.ibb.co/K5Ry5JX/purfume-s100-04.png'),(7,5,2,230.00,'https://i.ibb.co/pywCtSt/purfume-s100-05.png'),(8,6,1,1430.00,'https://i.ibb.co/hDz8KmP/purfume-s100-06.png'),(9,6,2,1230.00,'https://i.ibb.co/jzjw5LK/purfume-s100-07.png'),(10,7,1,630.00,'https://i.ibb.co/DwnDK7Z/purfume-s50-06.png'),(11,7,3,270.00,'https://i.ibb.co/2ZnYsY0/purfume-pack-02.png'),(12,4,1,870.00,'https://i.ibb.co/4PFZC6s/purfume-pack-01.png');
/*!40000 ALTER TABLE `product_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name_ko` varchar(100) NOT NULL,
  `name_en` varchar(100) NOT NULL,
  `content` text,
  `ingredient` text,
  `manual` text,
  `gender_id` int NOT NULL,
  `scent_id` int NOT NULL,
  `thumbnail_img_url` varchar(2083) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `products_gender_id_fkey` (`gender_id`),
  KEY `products_scent_id_fkey` (`scent_id`),
  CONSTRAINT `products_gender_id_fkey` FOREIGN KEY (`gender_id`) REFERENCES `genders` (`id`),
  CONSTRAINT `products_scent_id_fkey` FOREIGN KEY (`scent_id`) REFERENCES `scents` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'블랙베리','blackberry','내용 블랙베리','성분 블랙베리','사용방법 블랙베리',1,1,'https://i.ibb.co/tpYfxTP/purfume-s100-01.png','2022-11-18 03:24:08'),(2,'블랙베리2','blackberry2','내용 블랙베리2','성분 블랙베리2','사용방법 블랙베리2',2,1,'https://i.ibb.co/K5Ry5JX/purfume-s100-04.png','2022-11-18 03:25:00'),(3,'라임','lime','내용 라임','성분 라임','사용방법 라임',1,2,'https://i.ibb.co/SXvzF1s/purfume-s50-01.png','2022-11-18 03:25:00'),(4,'라임2','lime2','내용 라임2','성분 라임2','사용방법 라임2',2,2,'https://i.ibb.co/QrkJp0r/purfume-s50-02.png','2022-11-18 03:25:02'),(5,'화이스 모스 앤 스노우드롭 코롱','White Moss & Snowdrop Cologne','머스크와 앰버의 따뜻함에서 영감을 얻은 황홀하면서도 관능적인 향.','성분 화이스 모스','사용방법은 화이스 모스',2,1,'https://i.ibb.co/fHg99pw/purfume-s50-03.png','2022-11-22 13:19:17'),(6,'미드나이트 머스크 앤 앰버 코롱','Midnight Musk & Amber Cologne','스노우볼이 각인된 보틀에 담긴 산뜻한 우디 향.','성분 미드나이트','사용방법은 미드나이트',2,1,'https://i.ibb.co/dcqg1JH/purfume-s50-04.png','2022-11-22 13:25:24'),(7,'우드 세이지 앤 씨솔트 코롱','Wood Sage & Sea Salt Cologne','매력이 넘치는 칵테일에서 영감을 받은 인상적인 시트러스-우디 향.','성분 우드세이지','사용방법은 우드세이지',3,2,'https://i.ibb.co/yQC3Htg/purfume-s50-05.png','2022-11-22 13:27:57');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `scents`
--

DROP TABLE IF EXISTS `scents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scents` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scents`
--

LOCK TABLES `scents` WRITE;
/*!40000 ALTER TABLE `scents` DISABLE KEYS */;
INSERT INTO `scents` VALUES (1,'citrus'),(2,'fruity'),(3,'floral'),(4,'lightfloral'),(5,'spicy');
/*!40000 ALTER TABLE `scents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schema_migrations`
--

DROP TABLE IF EXISTS `schema_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `schema_migrations` (
  `version` varchar(255) COLLATE latin1_bin NOT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schema_migrations`
--

LOCK TABLES `schema_migrations` WRITE;
/*!40000 ALTER TABLE `schema_migrations` DISABLE KEYS */;
INSERT INTO `schema_migrations` VALUES ('20221115062709'),('20221115062716'),('20221115062718'),('20221115062725'),('20221115062726'),('20221115062738'),('20221115062832'),('20221115062859'),('20221115062944'),('20221115062953'),('20221115063008'),('20221115063049');
/*!40000 ALTER TABLE `schema_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizes`
--

DROP TABLE IF EXISTS `sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sizes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizes`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
INSERT INTO `sizes` VALUES (1,'100ml'),(2,'50ml'),(3,'30ml'),(4,'9ml*5');
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `address` varchar(200) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_ukey` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'내이름','emal@gmail.com','$2b$08$3M4eKrCQ8Ldj6AM1j0mRMeWziewcsx2M4E5PaFLG5ij50s8xJcmw2','01033334444','경기도 오산시','2022-11-18 05:01:49','2022-11-18 05:01:49'),(2,'송철진','cqwer123@gmail.com','$2b$08$K9iqCe5/vzkgDTfGl6TOpepFXYxk.K1xLY1MM8oBmlxxLOhpE.ij.','01022223333','경기도 직할시','2022-11-21 04:57:29','2022-11-21 04:57:29');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-24 12:14:43
