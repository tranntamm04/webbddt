-- MySQL dump 10.13  Distrib 8.0.43, for macos15 (x86_64)
--
-- Host: localhost    Database: sql
-- ------------------------------------------------------
-- Server version	9.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `user_name` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES ('1','2'),('admin','$2a$10$.9QIpsSiyycECaFV0HBy2O8Xu0CND5GNydt911vCXqrz1zAlmzaJu'),('duan','123456'),('duan123','$2a$10$Uj6TTkrchxoNsMYff.p.v.APMQbVGfQ.cj1qfsUlXM/2Fl0wLBXCe'),('duan1503','1'),('duannv','Duan1503@');
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `account_role`
--

DROP TABLE IF EXISTS `account_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account_role` (
  `role_id` int NOT NULL,
  `user_name` varchar(255) NOT NULL,
  PRIMARY KEY (`role_id`,`user_name`),
  KEY `FK6mib7vu4jbpkbiwhhc9x1hc5i` (`user_name`),
  CONSTRAINT `FK6mib7vu4jbpkbiwhhc9x1hc5i` FOREIGN KEY (`user_name`) REFERENCES `account` (`user_name`),
  CONSTRAINT `FKrs2s3m3039h0xt8d5yhwbuyam` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_role`
--

LOCK TABLES `account_role` WRITE;
/*!40000 ALTER TABLE `account_role` DISABLE KEYS */;
INSERT INTO `account_role` VALUES (3,'admin'),(1,'duan'),(2,'duan123'),(1,'duan1503'),(1,'duannv');
/*!40000 ALTER TABLE `account_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bill`
--

DROP TABLE IF EXISTS `bill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bill` (
  `id_bill` int NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `date_founded` varchar(255) DEFAULT NULL,
  `payment_methods` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `received` varchar(255) DEFAULT NULL,
  `status` int NOT NULL,
  `total_money` float NOT NULL,
  `id_customer` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_bill`),
  KEY `FKfhkxwb71lvn1t7d0l234hxywa` (`id_customer`),
  CONSTRAINT `FKfhkxwb71lvn1t7d0l234hxywa` FOREIGN KEY (`id_customer`) REFERENCES `customer` (`id_customer`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bill`
--

LOCK TABLES `bill` WRITE;
/*!40000 ALTER TABLE `bill` DISABLE KEYS */;
INSERT INTO `bill` VALUES (56,'hà nội','2025-09-27','Trực tiếp khi nhận hàng','0123456789','nguyễn duẩn',2,18790000,'KH-841'),(57,'hà nội','2025-09-27','Qua thẻ ngân hàng','0123456789','nguyễn duẩn',2,31980000,'KH-841'),(58,'hà nội','2025-09-27','Trực tiếp khi nhận hàng','0123456789','nguyễn duẩn',2,55980000,'KH-841'),(59,'hà nội','2025-09-28','Trực tiếp khi nhận hàng','0123456789','nguyễn duẩn',2,46990000,'KH-841'),(60,'hà nội','2025-09-28','','0123456789','nguyễn duẩn',2,39990000,'KH-841'),(61,'hà nội','2025-09-29','Trực tiếp khi nhận hàng','0123456789','nguyễn duẩn',2,39990000,'KH-841');
/*!40000 ALTER TABLE `bill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contract_detail`
--

DROP TABLE IF EXISTS `contract_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contract_detail` (
  `id_bill` int NOT NULL,
  `id_product` int NOT NULL,
  `price` float NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id_bill`,`id_product`),
  KEY `FKjhefq9wymasr86okkjk5bi2fo` (`id_product`),
  CONSTRAINT `FK5f9ixat3me0qoaaf4uialtlt7` FOREIGN KEY (`id_bill`) REFERENCES `bill` (`id_bill`),
  CONSTRAINT `FKjhefq9wymasr86okkjk5bi2fo` FOREIGN KEY (`id_product`) REFERENCES `product` (`id_product`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contract_detail`
--

LOCK TABLES `contract_detail` WRITE;
/*!40000 ALTER TABLE `contract_detail` DISABLE KEYS */;
INSERT INTO `contract_detail` VALUES (57,35,15990000,1),(57,36,15990000,1),(58,34,39990000,1),(58,35,15990000,1),(59,34,39990000,1),(59,41,7000000,1),(60,34,39990000,1),(61,34,39990000,1);
/*!40000 ALTER TABLE `contract_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `id_customer` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `status` int NOT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_customer`),
  KEY `FK9hhabijn4amjcahhjxbi5aumx` (`user_name`),
  CONSTRAINT `FK9hhabijn4amjcahhjxbi5aumx` FOREIGN KEY (`user_name`) REFERENCES `account` (`user_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES ('KH-841','hà nội','duan@gmail.com','1','duẩn','0123456789',1,'nguyễn','duan123');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `id_employee` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `avt_url` varchar(255) DEFAULT NULL,
  `date_of_birth` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `position_id` int DEFAULT NULL,
  PRIMARY KEY (`id_employee`),
  KEY `FK1pqc3aygf1dslbfmpwa14net3` (`user_name`),
  KEY `FKbc8rdko9o9n1ri9bpdyxv3x7i` (`position_id`),
  CONSTRAINT `FK1pqc3aygf1dslbfmpwa14net3` FOREIGN KEY (`user_name`) REFERENCES `account` (`user_name`),
  CONSTRAINT `FKbc8rdko9o9n1ri9bpdyxv3x7i` FOREIGN KEY (`position_id`) REFERENCES `position` (`position_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES ('NV-1234','hà nội','5huolhg7mseb1.png.webp','2025-09-12','duan@gmail.com','duan','0904459966','duan',2),('NV-1235','hà nội','Dun ? Tyn-3.png','2025-09-06','duan@gmail.com','duẩn','0901234567','duan1503',2),('NV-1236','thái bình','duan-6.png','2025-09-18','duann@gmail.com','duẩn','0903343233','duannv',2);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evaluate`
--

DROP TABLE IF EXISTS `evaluate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evaluate` (
  `id_evaluate` int NOT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `date_founded` varchar(255) DEFAULT NULL,
  `number_of_star` int NOT NULL,
  `id_product` int DEFAULT NULL,
  PRIMARY KEY (`id_evaluate`),
  KEY `FKan4q4h2gfgmsxb9jjusjiiahj` (`id_product`),
  CONSTRAINT `FKan4q4h2gfgmsxb9jjusjiiahj` FOREIGN KEY (`id_product`) REFERENCES `product` (`id_product`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evaluate`
--

LOCK TABLES `evaluate` WRITE;
/*!40000 ALTER TABLE `evaluate` DISABLE KEYS */;
/*!40000 ALTER TABLE `evaluate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evaluates`
--

DROP TABLE IF EXISTS `evaluates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evaluates` (
  `id_customer` varchar(255) NOT NULL,
  `id_product` int NOT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `date_founded` date DEFAULT NULL,
  `number_of_star` int NOT NULL,
  PRIMARY KEY (`id_customer`,`id_product`),
  KEY `FKkuny9p51h05uyvuqji9l5q3cd` (`id_product`),
  CONSTRAINT `FK9f1telx2xr0e0doi5dsdu3yh6` FOREIGN KEY (`id_customer`) REFERENCES `customer` (`id_customer`),
  CONSTRAINT `FKkuny9p51h05uyvuqji9l5q3cd` FOREIGN KEY (`id_product`) REFERENCES `product` (`id_product`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evaluates`
--

LOCK TABLES `evaluates` WRITE;
/*!40000 ALTER TABLE `evaluates` DISABLE KEYS */;
/*!40000 ALTER TABLE `evaluates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (62);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oder`
--

DROP TABLE IF EXISTS `oder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oder` (
  `ma_sp` int NOT NULL,
  `gia` int NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `makh` varchar(255) DEFAULT NULL,
  `so_luong` int NOT NULL,
  `ten_sp` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ma_sp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oder`
--

LOCK TABLES `oder` WRITE;
/*!40000 ALTER TABLE `oder` DISABLE KEYS */;
/*!40000 ALTER TABLE `oder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `position`
--

DROP TABLE IF EXISTS `position`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `position` (
  `position_id` int NOT NULL AUTO_INCREMENT,
  `position_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`position_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `position`
--

LOCK TABLES `position` WRITE;
/*!40000 ALTER TABLE `position` DISABLE KEYS */;
INSERT INTO `position` VALUES (1,'Quản Lý'),(2,'Nhân Viên');
/*!40000 ALTER TABLE `position` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id_product` int NOT NULL AUTO_INCREMENT,
  `avt` varchar(255) DEFAULT NULL,
  `camerat` varchar(255) DEFAULT NULL,
  `cpu` varchar(255) DEFAULT NULL,
  `hdh` varchar(255) DEFAULT NULL,
  `num_of_review` int NOT NULL,
  `num_of_star` int NOT NULL,
  `pin` varchar(255) DEFAULT NULL,
  `price` int NOT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `quantity` int NOT NULL,
  `ram` varchar(255) DEFAULT NULL,
  `rom` varchar(255) DEFAULT NULL,
  `screen` varchar(255) DEFAULT NULL,
  `sd_card` varchar(255) DEFAULT NULL,
  `status` int NOT NULL,
  `id_type` int DEFAULT NULL,
  `id_promotion` int DEFAULT NULL,
  PRIMARY KEY (`id_product`),
  KEY `FKjnavkoass3f8t4me1tvfavo3b` (`id_type`),
  KEY `FK5y91nfsk3v6ulgmlpr2wj2aa6` (`id_promotion`),
  CONSTRAINT `FK5y91nfsk3v6ulgmlpr2wj2aa6` FOREIGN KEY (`id_promotion`) REFERENCES `promotion` (`id_promotion`),
  CONSTRAINT `FKjnavkoass3f8t4me1tvfavo3b` FOREIGN KEY (`id_type`) REFERENCES `product_type` (`id_type`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (34,'600_iPhone_17_Pro_cam_1_1.jpg copy.webp','3 cam 48mpx','A19 pro','ios',0,4,'5000mAh',39990000,'Iphone 17 Promax',96,'8','512','retina 3k','...',1,4,2),(35,'41084_vostro_3405_black_h1.jpg','12mpx','i5 11300h','window',0,4,'56wh',15990000,'Dell Vostro 3450',98,'16gb','512gb','full Hd','gtx 1650',1,3,1),(36,'ipad_pro_m2_11_inch_wi-fi_silver_-3_dfeff9168ba7474c9bebe90174d974b5_master copy.jpg','24mpx','M1','ios',0,4,'8000mAh',15990000,'Ipad Pro M2',14,'12gb','256gb','11 inch retina','...',1,4,1),(37,'mac m2 copy.jpeg','12mpx','M2','MacOs',0,4,'78wh',16990000,'Macbook Pro M2',90,'16gb','512gb','13 inch 3k','tích hợp',1,4,1),(38,'vivobook copy.jpeg','12mpx','i5 12500h','window',0,4,'50wh',12990000,'Asus Vivobook 14',90,'16gb','512gb','full hd 16 inch','tích hợp',1,2,2),(39,'15prm copy.jpeg','48mpx','A18 pro','ios',0,4,'4000mAh',30990000,'Iphone 15 Promax',1000,'8gb','256gb','6,8 inch','...',1,4,3),(40,'idea copy.jpeg','10mpx','i5 13420h','window',0,4,'40wh',15990000,'lenovo ideapad slim 3',50,'16gb','512gb','15,4 inch','rtx 2050',1,5,2),(41,'msi.jpeg','10mpx','ryzen 5 5500u','window',0,4,'56wh',7000000,'MSI Modern 14',89,'8gb','512gb','14 inch','gtx 1650ti',1,6,1),(42,'envy copy.jpeg','10mpx','i5 1135g','window',0,4,'45wh',12990000,'HP Envy X360',15,'8gb','512gb','15 inch','tích hợp',1,1,1),(43,'Unknown copy.jpeg','12mpx','a15 bionic','ios',0,4,'3400mAh',15990000,'Iphone 14',50,'6gb','128gb','6,1 inch','...',1,4,3);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_type`
--

DROP TABLE IF EXISTS `product_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_type` (
  `id_type` int NOT NULL,
  `avt` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name_type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_type`
--

LOCK TABLES `product_type` WRITE;
/*!40000 ALTER TABLE `product_type` DISABLE KEYS */;
INSERT INTO `product_type` VALUES (1,'1','1','HP'),(2,'2','2','Asus'),(3,'3','3','Dell'),(4,'4','4','Apple'),(5,'5','5','Lenovo'),(6,'6','6','MSI');
/*!40000 ALTER TABLE `product_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `promotion`
--

DROP TABLE IF EXISTS `promotion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `promotion` (
  `id_promotion` int NOT NULL,
  `date_end` varchar(255) DEFAULT NULL,
  `date_start` varchar(255) DEFAULT NULL,
  `name_promotion` varchar(255) DEFAULT NULL,
  `promotional_value` float NOT NULL,
  `type_promotion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_promotion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promotion`
--

LOCK TABLES `promotion` WRITE;
/*!40000 ALTER TABLE `promotion` DISABLE KEYS */;
INSERT INTO `promotion` VALUES (1,'1','1','Giá rẻ online',1,'1'),(2,'2','2','Mới ra mắt',2,'2'),(3,'3','3','Trả góp 0%',3,'3');
/*!40000 ALTER TABLE `promotion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'ROLE_NV'),(2,'ROLE_USER'),(3,'ROLE_ADMIN');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-10-03 17:40:16
