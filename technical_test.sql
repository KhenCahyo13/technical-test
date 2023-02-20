-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 20, 2023 at 06:53 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `technical_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `atasan`
--

CREATE TABLE `atasan` (
  `id_atasan` int(11) NOT NULL,
  `id_kantor` int(11) NOT NULL,
  `nama_atasan` varchar(50) NOT NULL,
  `username_atasan` varchar(50) NOT NULL,
  `password_atasan` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `atasan`
--

INSERT INTO `atasan` (`id_atasan`, `id_kantor`, `nama_atasan`, `username_atasan`, `password_atasan`) VALUES
(1, 2, 'Rudi Santoso', 'Rudi', 'bfcd3eee9746714ca4fcba684344bbc0'),
(2, 1, 'Wahyu Adi', 'Wahyu', '8cbbdc3fff847eee79abadc7b693b60e'),
(3, 2, 'Putri Ayu', 'Putri', '82682943a05de360abb183236c632bd6'),
(4, 1, 'Melisa Maharani', 'Melisa', '7856b9b6c1f68bd2cdac0b7439621fd4'),
(5, 2, 'Joko', 'Joko', '278ea841c0d133059032b8a75320c3e0'),
(6, 1, 'Juli Hari', 'Juli', '70f5fb779be1312f0b2bcdcf922576c5');

-- --------------------------------------------------------

--
-- Table structure for table `driver`
--

CREATE TABLE `driver` (
  `id_driver` int(11) NOT NULL,
  `nama_driver` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `driver`
--

INSERT INTO `driver` (`id_driver`, `nama_driver`) VALUES
(1, 'Susanto'),
(2, 'Bayu'),
(3, 'Ilham'),
(4, 'Supri'),
(5, 'Yono'),
(6, 'Nugi');

-- --------------------------------------------------------

--
-- Table structure for table `kantor`
--

CREATE TABLE `kantor` (
  `id_kantor` int(11) NOT NULL,
  `nama_kantor` varchar(100) NOT NULL,
  `jenis_kantor` enum('Pusat','Cabang') NOT NULL,
  `lokasi_kantor` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kantor`
--

INSERT INTO `kantor` (`id_kantor`, `nama_kantor`, `jenis_kantor`, `lokasi_kantor`) VALUES
(1, 'Nikel Tambang Sentosa', 'Pusat', 'Jakarta'),
(2, 'Nikel Sentosa', 'Cabang', 'Malang');

-- --------------------------------------------------------

--
-- Table structure for table `kendaraan`
--

CREATE TABLE `kendaraan` (
  `id_kendaraan` int(11) NOT NULL,
  `nama_kendaraan` varchar(50) NOT NULL,
  `jenis_kendaraan` enum('Orang','Barang') NOT NULL,
  `pemilik_kendaraan` enum('Perusahaan','Sewa') NOT NULL,
  `jadwal_service` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kendaraan`
--

INSERT INTO `kendaraan` (`id_kendaraan`, `nama_kendaraan`, `jenis_kendaraan`, `pemilik_kendaraan`, `jadwal_service`) VALUES
(1, 'Truk T1', 'Barang', 'Perusahaan', '2023-02-23'),
(2, 'Bus B1', 'Orang', 'Perusahaan', '2023-02-21'),
(3, 'Truk T2', 'Barang', 'Sewa', '2023-02-24'),
(4, 'Mobil M1', 'Orang', 'Perusahaan', '2023-02-24'),
(5, 'Bus B2', 'Orang', 'Perusahaan', '2023-02-22'),
(6, 'Bus B3', 'Orang', 'Sewa', '2023-02-23');

-- --------------------------------------------------------

--
-- Table structure for table `pegawai`
--

CREATE TABLE `pegawai` (
  `id_pegawai` int(11) NOT NULL,
  `id_tambang` int(11) NOT NULL,
  `nama_pegawai` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pegawai`
--

INSERT INTO `pegawai` (`id_pegawai`, `id_tambang`, `nama_pegawai`) VALUES
(1, 1, 'Anton'),
(2, 2, 'Paula'),
(3, 4, 'Daniar'),
(4, 3, 'Lubis');

-- --------------------------------------------------------

--
-- Table structure for table `pengelola`
--

CREATE TABLE `pengelola` (
  `id_pengelola` int(11) NOT NULL,
  `username_pengelola` varchar(50) NOT NULL,
  `password_pengelola` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pengelola`
--

INSERT INTO `pengelola` (`id_pengelola`, `username_pengelola`, `password_pengelola`) VALUES
(1, 'Admin', '0192023a7bbd73250516f069df18b500');

-- --------------------------------------------------------

--
-- Table structure for table `persetujuan`
--

CREATE TABLE `persetujuan` (
  `id_persetujuan` int(11) NOT NULL,
  `id_request_pemakaian` int(11) NOT NULL,
  `id_atasan` int(11) NOT NULL,
  `persetujuan` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `persetujuan`
--

INSERT INTO `persetujuan` (`id_persetujuan`, `id_request_pemakaian`, `id_atasan`, `persetujuan`) VALUES
(1, 3, 5, 0),
(2, 3, 1, 0),
(3, 3, 4, 0),
(4, 2, 3, 1),
(5, 2, 2, 1),
(6, 1, 5, 1),
(7, 1, 3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `request_pemakaian`
--

CREATE TABLE `request_pemakaian` (
  `id_request_pemakaian` int(11) NOT NULL,
  `judul_request` varchar(100) DEFAULT NULL,
  `id_kendaraan` int(11) NOT NULL,
  `id_driver` int(11) NOT NULL,
  `total_bbm` varchar(20) NOT NULL,
  `status` enum('Disetujui','Menunggu') NOT NULL DEFAULT 'Menunggu'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `request_pemakaian`
--

INSERT INTO `request_pemakaian` (`id_request_pemakaian`, `judul_request`, `id_kendaraan`, `id_driver`, `total_bbm`, `status`) VALUES
(1, 'Peminjaman Bus B1', 2, 2, '27 Liter', 'Menunggu'),
(2, 'Pemakaian Truk T1', 1, 5, '14 Liter', 'Menunggu'),
(3, 'Peminjaman Mobil M1', 4, 1, '6 Liter', 'Menunggu');

-- --------------------------------------------------------

--
-- Table structure for table `tambang`
--

CREATE TABLE `tambang` (
  `id_tambang` int(11) NOT NULL,
  `nama_tambang` varchar(50) NOT NULL,
  `lokasi_tambang` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tambang`
--

INSERT INTO `tambang` (`id_tambang`, `nama_tambang`, `lokasi_tambang`) VALUES
(1, 'Tambang Jaktim', 'Jakarta Timur'),
(2, 'Tambang Malang', 'Malang'),
(3, 'Tambang Surabaya', 'Surabaya'),
(4, 'Tambang Mojokerto', 'Mojokerto');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `atasan`
--
ALTER TABLE `atasan`
  ADD PRIMARY KEY (`id_atasan`),
  ADD KEY `id_kantor` (`id_kantor`);

--
-- Indexes for table `driver`
--
ALTER TABLE `driver`
  ADD PRIMARY KEY (`id_driver`);

--
-- Indexes for table `kantor`
--
ALTER TABLE `kantor`
  ADD PRIMARY KEY (`id_kantor`);

--
-- Indexes for table `kendaraan`
--
ALTER TABLE `kendaraan`
  ADD PRIMARY KEY (`id_kendaraan`);

--
-- Indexes for table `pegawai`
--
ALTER TABLE `pegawai`
  ADD PRIMARY KEY (`id_pegawai`),
  ADD KEY `id_tambang` (`id_tambang`);

--
-- Indexes for table `pengelola`
--
ALTER TABLE `pengelola`
  ADD PRIMARY KEY (`id_pengelola`);

--
-- Indexes for table `persetujuan`
--
ALTER TABLE `persetujuan`
  ADD PRIMARY KEY (`id_persetujuan`),
  ADD KEY `id_request_pemakaian` (`id_request_pemakaian`),
  ADD KEY `id_atasan` (`id_atasan`);

--
-- Indexes for table `request_pemakaian`
--
ALTER TABLE `request_pemakaian`
  ADD PRIMARY KEY (`id_request_pemakaian`),
  ADD KEY `id_kendaraan` (`id_kendaraan`),
  ADD KEY `id_driver` (`id_driver`);

--
-- Indexes for table `tambang`
--
ALTER TABLE `tambang`
  ADD PRIMARY KEY (`id_tambang`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `atasan`
--
ALTER TABLE `atasan`
  MODIFY `id_atasan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `driver`
--
ALTER TABLE `driver`
  MODIFY `id_driver` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `kantor`
--
ALTER TABLE `kantor`
  MODIFY `id_kantor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `kendaraan`
--
ALTER TABLE `kendaraan`
  MODIFY `id_kendaraan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `pegawai`
--
ALTER TABLE `pegawai`
  MODIFY `id_pegawai` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `pengelola`
--
ALTER TABLE `pengelola`
  MODIFY `id_pengelola` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `persetujuan`
--
ALTER TABLE `persetujuan`
  MODIFY `id_persetujuan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `request_pemakaian`
--
ALTER TABLE `request_pemakaian`
  MODIFY `id_request_pemakaian` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tambang`
--
ALTER TABLE `tambang`
  MODIFY `id_tambang` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `atasan`
--
ALTER TABLE `atasan`
  ADD CONSTRAINT `atasan_ibfk_1` FOREIGN KEY (`id_kantor`) REFERENCES `kantor` (`id_kantor`);

--
-- Constraints for table `pegawai`
--
ALTER TABLE `pegawai`
  ADD CONSTRAINT `pegawai_ibfk_1` FOREIGN KEY (`id_tambang`) REFERENCES `tambang` (`id_tambang`);

--
-- Constraints for table `persetujuan`
--
ALTER TABLE `persetujuan`
  ADD CONSTRAINT `persetujuan_ibfk_1` FOREIGN KEY (`id_request_pemakaian`) REFERENCES `request_pemakaian` (`id_request_pemakaian`),
  ADD CONSTRAINT `persetujuan_ibfk_2` FOREIGN KEY (`id_atasan`) REFERENCES `atasan` (`id_atasan`);

--
-- Constraints for table `request_pemakaian`
--
ALTER TABLE `request_pemakaian`
  ADD CONSTRAINT `request_pemakaian_ibfk_1` FOREIGN KEY (`id_kendaraan`) REFERENCES `kendaraan` (`id_kendaraan`),
  ADD CONSTRAINT `request_pemakaian_ibfk_2` FOREIGN KEY (`id_driver`) REFERENCES `driver` (`id_driver`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
