/*
Navicat MySQL Data Transfer

Source Server         : liu
Source Server Version : 50551
Source Host           : localhost:3306
Source Database       : epidemic

Target Server Type    : MYSQL
Target Server Version : 50551
File Encoding         : 65001

Date: 2020-07-04 16:19:15
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin_user
-- ----------------------------
DROP TABLE IF EXISTS `admin_user`;
CREATE TABLE `admin_user` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin_user
-- ----------------------------
INSERT INTO `admin_user` VALUES ('1', 'admin', '06f49ec4c17a4546e0a8f4028d42b105', 'admin', 'admin', 'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png');

-- ----------------------------
-- Table structure for confirm_person
-- ----------------------------
DROP TABLE IF EXISTS `confirm_person`;
CREATE TABLE `confirm_person` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `age` int(10) DEFAULT NULL,
  `confirmDate` datetime DEFAULT NULL,
  `confirmProvince` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `confirmCity` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of confirm_person
-- ----------------------------
INSERT INTO `confirm_person` VALUES ('1', '小明', '男', '4', '2020-07-03 00:27:24', '重庆', '', '巴南');
INSERT INTO `confirm_person` VALUES ('14', '小李', '男', '23', '2020-07-03 00:00:00', '重庆', null, '合川');
INSERT INTO `confirm_person` VALUES ('15', '小红', '女', '45', '2020-07-02 00:00:00', '重庆', null, '巴南');
INSERT INTO `confirm_person` VALUES ('16', '张三', '男', '45', '2020-07-01 00:00:00', '四川', null, '成都');
INSERT INTO `confirm_person` VALUES ('17', '李四', '男', '45', '2020-06-01 00:00:00', '四川', null, '绵阳');
INSERT INTO `confirm_person` VALUES ('18', '王麻子', '男', '24', '2020-05-01 00:00:00', '北京', null, '朝阳');
INSERT INTO `confirm_person` VALUES ('19', '小王', '男', '34', '2020-04-01 00:00:00', '浙江', 'null', '杭州');
INSERT INTO `confirm_person` VALUES ('20', '小刘', '男', '56', '2020-05-01 00:00:00', '浙江', 'null', '杭州');
INSERT INTO `confirm_person` VALUES ('21', '小黄', '女', '24', '2020-02-01 00:00:00', '上海', null, null);
INSERT INTO `confirm_person` VALUES ('22', '张张', '女', '23', '2020-05-01 00:00:00', '浙江', null, '杭州');
INSERT INTO `confirm_person` VALUES ('23', '小强', '男', '24', '2020-05-06 00:00:00', '广东', null, '广州');

-- ----------------------------
-- Table structure for suspect_person
-- ----------------------------
DROP TABLE IF EXISTS `suspect_person`;
CREATE TABLE `suspect_person` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `age` int(10) DEFAULT NULL,
  `suspectDate` datetime DEFAULT NULL,
  `suspectProvince` varchar(255) DEFAULT NULL,
  `suspectCity` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of suspect_person
-- ----------------------------
INSERT INTO `suspect_person` VALUES ('1', '王三', '男', '45', '2020-07-01 00:00:00', '重庆', '巴南', '');
