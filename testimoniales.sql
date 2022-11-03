/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `testimoniales` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mensaje` text,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `testimoniales` (`id`, `nombre`, `email`, `mensaje`) VALUES
(1, 'Javier Pérez Ruiz', 'javiperez2010@yahoo.es', 'Las mejores vacaciones!');
INSERT INTO `testimoniales` (`id`, `nombre`, `email`, `mensaje`) VALUES
(3, 'Pepe', 'pepe@pepe.com', 'Muy buena agencia');
INSERT INTO `testimoniales` (`id`, `nombre`, `email`, `mensaje`) VALUES
(4, 'Juan', 'juan@juan.com', 'El mejor viaje');
INSERT INTO `testimoniales` (`id`, `nombre`, `email`, `mensaje`) VALUES
(5, 'Joaquin', 'guim@hotmail.com', 'Esplendidas vacaciones en familia');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;